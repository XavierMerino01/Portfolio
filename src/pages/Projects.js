import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: 'Ludovico Grim',
            description: 'This is a description of Ludovico Grim. This is a description of Ludovico Grim. This is a description of Ludovico Grim. This is a description of Ludovico Grim.',
            video: 'https://www.youtube.com/embed/pSEOFhqdPss', // Replace with your YouTube video link
            downloadLink: 'https://drive.google.com/file/d/1y2JhTtUNj6iT9ugleKUlAN5QX8dgFVzz/view?usp=drive_link' // Replace with your Google Drive file link
        },
        {
            title: 'MiX Trivia Game',
            description: 'This is a description of project two. This is a description of project two. This is a description of project two. This is a description of project two.',
            video: 'https://www.youtube.com/embed/6ibHl-QthoY', // Replace with your YouTube video link
            downloadLink: 'https://github.com/XavierMerino01/MiX-TriviaGame/releases/download/v1.0/MiXBuild.rar', // Replace with your Google Drive file link
            githubLink: 'https://github.com/XavierMerino01/MiX-TriviaGame' // Replace with your GitHub repository link
        },
        {
            title: 'Project Three',
            description: 'This is a description of project three. This is a description of project three. This is a description of project three. This is a description of project three.',
            video: 'https://www.youtube.com/embed/yet-another-video-id', // Replace with your YouTube video link
            downloadLink: 'https://drive.google.com/uc?export=download&id=your-file-id' // Replace with your Google Drive file link
        }
    ];

    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        video={project.video}
                        downloadLink={project.downloadLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;