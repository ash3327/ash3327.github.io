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

const AboutmeTimeline: React.FC = () => {
    const [aboutmes, setAboutmes] = useState<any>(data.aboutmes);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div id="aboutme" className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Experience</h1>

                {aboutmes.work.map((entry: any, index: number) => (
                    <Paper key={index} elevation={3} sx={{ p: 5, mb: 5}}>
                        <Typography variant="h5" className="text-left" gutterBottom>
                            <School sx={{ mr: 1, verticalAlign: 'middle' }} />
                            {entry.degree}
                        </Typography>
                        <p className="text-gray-700 mb-4">{entry.institution}</p>
                        <p className="text-sm font-medium text-gray-500 mb-2">{entry.date}</p>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6} my={2} mt={2.5}>
                                {entry.description.map((key: any) => (
                                    <Typography variant="body1" mb={1} style={{ color: key.startsWith("~") ? "grey" : "black", fontSize:  key.startsWith("~") ? '0.9rem' : '1rem', fontFamily: 'Arial, sans-serif' }}>
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
                                                secondary={award.year} 
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </div>
            <div id="education" className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Education</h1>

                {aboutmes.education.map((entry: any, index: number) => (
                    <Paper key={index} elevation={3} sx={{ p: 5, mb: 5}}>
                        <Typography variant="h5" className="text-left" gutterBottom>
                            <School sx={{ mr: 1, verticalAlign: 'middle' }} />
                            {entry.institution}
                        </Typography>
                        <p className="text-gray-700 mb-4">{entry.degree}</p>
                        <p className="text-sm font-medium text-gray-500 mb-2">{entry.date}</p>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6} my={2} mt={2.5}>
                                {entry.description.map((key: any) => (
                                    <Typography variant="body1" mb={1} style={{ color: key.startsWith("~") ? "grey" : "black", fontSize:  key.startsWith("~") ? '0.9rem' : '1rem', fontFamily: 'Arial, sans-serif' }}>
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
                                                secondary={award.year} 
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </div>
        </div>
    )
}

export default AboutmeTimeline;