import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Search } from 'lucide-react';
import { TextField, InputAdornment, Autocomplete } from '@mui/material';

import data from '../../data/data.json';

interface Project {
    id: string;
    title: string;
    company: string;
    date: string;
    description: string;
    details: string[];
    image: string;
    skills: string[];
    links?: Record<string, { link: string; icon: string } | undefined>;
}

interface Experience {
    id: string;
    title: string;
    company: string;
    date: string;
    description: string;
    projects: Project[];
}

const dummyData: Experience[] = data.experiences2;

const SearchBar: React.FC<{ searchQuery: string; setSearchQuery: (query: string) => void; selectedSkills: string[]; setSelectedSkills: (skills: string[]) => void }> = ({ searchQuery, setSearchQuery, selectedSkills, setSelectedSkills }) => (
    <div className="fixed top-16 left-0 right-0 z-10 w-full p-4" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))' }}>
        <div className="flex justify-center space-x-4" style={{ maxWidth: '40%', margin: 'auto' }}>
            <TextField
                className="w-full"
                variant="outlined"
                placeholder="Search experiences and projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search className="h-5 w-5" />
                        </InputAdornment>
                    )
                }}
            />
            <Autocomplete
                multiple
                id="tags-outlined"
                className="w-full"
                options={Array.from(new Set(dummyData.map(experience => experience.projects.map(project => project.skills).flat()).flat()))}
                getOptionLabel={(option) => option}
                filterSelectedOptions
                value={selectedSkills}
                onChange={(e, value) => setSelectedSkills(value)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="Filter by skills"
                        placeholder="Select skills"
                    />
                )}
            />
        </div>
    </div>
);

const ProjectList: React.FC<{
    experiences: Experience[],
    handleProjectClick: (project: Project) => void,
    isExperienceExpanded: boolean,
    toggleExperienceExpansion: () => void,
    selectedSkills: string[]
}> = ({ experiences, handleProjectClick, isExperienceExpanded, toggleExperienceExpansion, selectedSkills }) => (
    <div className="px-8">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        {experiences.map((experience) => (
            <div key={experience.id} className="mb-8">
                <div key={experience.id} className="mb-8">
                    <h3 className="text-xl font-semibold text-center">{experience.title}</h3>
                    <p className="subheader mt-2 text-center">{experience.company}</p>
                    <p className="subsubheader text-center">{experience.date}</p>
                    <p className="mt-2">{experience.description}</p>
                </div>
                {experience.projects.map((project) => (
                    <div
                        key={project.id}
                        className="card mb-4 cursor-pointer flex"
                        onClick={() => handleProjectClick(project)}
                    >
                        <div className="flex-1 inner">
                            <div className="flex items-center">

                                <div>
                                    <h4 className="font-semibold text-left">{project.title}</h4>
                                    <p className="subsubheader">{project.date}</p>
                                </div>

                            </div>
                            {
                                project.description.substring(0, 100) ? (
                                    <p className="subsubheader mt-2">{project.description.substring(0, 100) + ((project.description.substring(0, 100) == project.description) ? "" : "...")}</p>
                                ) : <></>
                            }
                        </div>
                        {project.image && <img
                            src={
                                project.image.startsWith('https://')
                                    ? project.image
                                    : `${process.env.PUBLIC_URL}/images/${project.image}`

                            }
                            alt={project.title}
                            className="size-36"
                        />}
                    </div>
                ))}
            </div>
        ))}
    </div>
);

const ProjectDetails: React.FC<{ project: Project; handleClose: () => void }> = ({ project, handleClose }) => (
    <div className="panel black-scrollbar thin-scrollbar" style={{ maxWidth: 'calc(37.5% - 16px)', right: 'calc(12.5% + 8px)' }}>
        <button
            onClick={handleClose}
            className="absolute top-4 right-4"
        >
            <ChevronRight className="h-6 w-6" />
        </button>
        <div>
            <h2 className="text-2xl font-bold mb-4 text-left">{project.title}</h2>
            <p className="subheader mb-2">{project.company}</p>
            <p className="subsubheader mb-4">{project.date}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {project.links && Object.entries(project.links).map(([key, link]): JSX.Element | null => {
                    const linkWithIcon = link as { link: string; icon: string };
                    return linkWithIcon.link ? (
                        <span
                            key={key}
                            className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                        >
                            <i className={`${linkWithIcon.icon} mr-2`}></i>
                            <a
                                href={
                                    linkWithIcon.link.startsWith('https://')
                                        ? linkWithIcon.link
                                        : `${process.env.PUBLIC_URL}${linkWithIcon.link}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white"
                            >
                                {key}
                            </a>
                        </span>
                    ) : null;
                })}
                {project.skills.map((skill, index) => (
                    <span
                        key={index}
                        className="token"
                    >
                        {skill}
                    </span>
                ))}
            </div>
            <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
            <ul className="list-disc pl-5 mb-6">
                {project.details.map((detail, index) => (
                    <li key={index} className="mb-2 text-left" dangerouslySetInnerHTML={{ __html: detail }}></li>
                ))}
            </ul>
            {
                project.image != "" ?
                    <img
                        src={
                            project.image.startsWith('https://')
                                ? project.image
                                : `${process.env.PUBLIC_URL}/images/${project.image}`
                        }
                        alt={project.title}
                        className="w-full object-cover rounded-lg"
                    /> :
                    <></>
            }
            <div className="mt-6">
                {/* Links are now part of the skills section */}
            </div>
        </div>
    </div>
);

// Main component
const ExperienceSection: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isExperienceExpanded, setIsExperienceExpanded] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const filteredData = useMemo(() => {
        const query = searchQuery.toLowerCase();
        return dummyData.map(experience => ({
            ...experience,
            projects: experience.projects.filter(project =>
                (
                    project.title.toLowerCase().includes(query) ||
                    project.description.toLowerCase().includes(query) ||
                    project.skills.some(skill => skill.toLowerCase().includes(query)) ||
                    experience.title.toLowerCase().includes(query) ||
                    experience.company.toLowerCase().includes(query) ||
                    experience.description.toLowerCase().includes(query)
                ) &&
                (
                    selectedSkills.length === 0 ||
                    selectedSkills.some(skill => project.skills.includes(skill))
                )
            )
        })).filter(experience => experience.projects.length > 0);
    }, [searchQuery, selectedSkills]);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setIsExperienceExpanded(false);
    };

    const handleClose = () => {
        setIsExperienceExpanded(!isExperienceExpanded);
        setSelectedProject(null);
    };

    const toggleExperienceExpansion = () => {
        setIsExperienceExpanded(!isExperienceExpanded);
        if (selectedProject) {
            setSelectedProject(null);
        }
    };

    return (
        <div>
            <div className="flex min-h-screen relative" style={{ maxWidth: '1200px', width: '90%', margin: 'auto' }}>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} />
                <div className="flex mt-16 w-full">
                    <motion.div
                        className="mt-4 overflow-y-auto"
                        animate={{
                            width: isExperienceExpanded ? '25%' : '0%',
                            padding: isExperienceExpanded ? 30 : 0,
                            opacity: isExperienceExpanded ? 1 : 0,
                            transition: { duration: 0.3 }
                        }}
                    >
                        {/* <ExperienceList experiences={filteredData} /> */}
                    </motion.div>

                    <motion.div
                        className="p-8 mt-4 overflow-y-auto"
                        animate={{
                            width: selectedProject ? '50%' : (isExperienceExpanded ? '50%' : '100%'),
                            transition: { duration: 0.3 }
                        }}
                    >
                        <ProjectList
                            experiences={filteredData}
                            handleProjectClick={handleProjectClick}
                            isExperienceExpanded={isExperienceExpanded}
                            toggleExperienceExpansion={toggleExperienceExpansion}
                            selectedSkills={selectedSkills}
                        />
                    </motion.div>

                    <AnimatePresence>
                        {selectedProject && (
                            <ProjectDetails project={selectedProject} handleClose={handleClose} />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>

    );
}
export default ExperienceSection;