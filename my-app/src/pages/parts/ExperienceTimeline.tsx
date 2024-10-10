import { Card, CardContent, CardHeader } from "@mui/material"
import { Chip } from "@mui/material"

import {
    Container,
    Typography,
    Paper,
    Grid,
    List,
    ListItem,
    ListItemText,
    Divider
} from '@mui/material';
import { School, EmojiEvents, Grade } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

import data from "../../data/data.json";

const ExperienceTimeline: React.FC = () => {
    const [experiences, setExperiences] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            setExperiences(data.experiences);
        };

        fetchData();
    }, []);

    return (
        <div id="experience" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">My Experience Timeline</h1>
                <div className="relative">
                    {experiences.map((experience, index) => (
                        <div key={index} className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-1/8"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                            </div>
                            <Card className="order-1 w-5/6 px-6 py-4">
                                <CardHeader
                                    title={experience.title}
                                    subheader={experience.company}
                                    className="text-left"
                                    sx={{ paddingBottom: 0 }}
                                />
                                <CardContent>
                                    <p className="text-sm font-medium text-gray-500 mb-2">{experience.date}</p>
                                    <p className="text-gray-700 mb-4">{experience.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.skills.map((skill: string, skillIndex: number) => (
                                            <Chip key={skillIndex} label={skill} />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExperienceTimeline;