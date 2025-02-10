import {
    Typography,
    Paper,
    Grid,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import { School } from '@mui/icons-material';
import React, { useState } from 'react';

import data from "../../data/data.json";

const ExperienceCard = (entry: any) => {
    return (
        <div className="card padcard">
            <Typography variant="h5" className="text-left font-thin" gutterBottom>
                <School sx={{ mr: 1, verticalAlign: 'middle' }} />
                {entry.degree}
            </Typography>
            <p className="subheader mb-4 font-thin">{entry.institution}</p>
            <p className="subsubheader font-thin">{entry.date}</p>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6} my={2} mt={2.5}>
                    {entry.description.map((key: any) => (
                        <Typography variant="body1" mb={1} className="font-thin" style={{ color: key.startsWith("~") ? "lightgrey" : "white", fontSize: key.startsWith("~") ? '0.9rem' : '1rem', fontFamily: 'Arial, sans-serif' }}>
                            {key.startsWith("~") ? key.substr(1) : key}
                        </Typography>
                    ))}
                </Grid>
                <Grid item xs={12} md={6}>
                    <List>
                        {entry.awards.map((award: any, awardIndex: number) => (
                            <ListItem key={awardIndex}>
                                <ListItemText
                                    primary={award.link ? (
                                        <a className="card-link" href={award.link} target="_blank" rel="noopener noreferrer">
                                            {award.name}
                                        </a>
                                    ) : award.name}
                                    secondary={<span className="subsubheader">{award.year}</span>}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </div>
    );
}

const AboutmeTimeline: React.FC = () => {
    const [aboutmes, setAboutmes] = useState<any>(data.aboutmes);

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-3xl mx-auto space-y-8">
                <h2>Experience</h2>

                {aboutmes.work.map((entry: any, index: number) => (
                    <ExperienceCard key={index} {...entry} />
                ))}
            </div>
            <div id="education" className="max-w-3xl mx-auto space-y-8">
                <h2>Education</h2>

                {aboutmes.education.map((entry: any, index: number) => (
                    <ExperienceCard key={index} {...entry} />
                ))}
            </div>
        </div>
    )
}

export default AboutmeTimeline;