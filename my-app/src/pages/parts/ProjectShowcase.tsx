import { Card, CardContent, CardHeader, CardMedia, CardActions } from "@mui/material"
import BlackButton from "../../components/BlackButton";

import React, { useEffect, useState } from 'react';
import data from "../../data/data.json";

const ProjectShowcase: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setProjects(data.projects);
    };

    fetchData();
  }, []);

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2>Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ maxWidth: '80%', margin: 'auto' }}>
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden pb-3">
              <CardMedia
                component="img"
                height="194"
                image={`${process.env.PUBLIC_URL}/images/${project.image}`}
                alt={project.name}
                style={{ aspectRatio: 1.5 }} // Adjusted to maintain 1.5:1 aspect ratio
              />
              <CardContent>
                <CardHeader title={project.name} />
                <p className="px-5">{project.description}</p>
              </CardContent>
              <CardActions className="justify-center">
                <BlackButton>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </BlackButton>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;