import React from 'react';
import ProjectCard from '../components/ProjectCard';
import unityLogo from '../assets/icons/unity.png'; // Adjust the path as necessary
import csharpLogo from '../assets/icons/csharp.png'; // Adjust the path as necessary
import unrealLogo from '../assets/icons/unreal.png'; // Adjust the path as necessary
import cppLogo from '../assets/icons/cpp.png'; // Adjust the path as necessary
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: "Ludovico Grim",
            briefDescription: t('projects.ludovicoGrim.briefDescription'),
            bulletPoints: t('projects.ludovicoGrim.bulletPoints', { returnObjects: true }),
            engineLogo: unityLogo,
            languageLogo: csharpLogo,
            video: 'https://www.youtube.com/embed/pSEOFhqdPss', // Replace with your YouTube video link
            downloadLink: 'https://drive.google.com/file/d/1y2JhTtUNj6iT9ugleKUlAN5QX8dgFVzz/view?usp=drive_link' // Replace with your Google Drive file link
        },
        {
            title: "Figure It Out!",
            briefDescription: t('projects.figureItOut.briefDescription'),
            bulletPoints: t('projects.figureItOut.bulletPoints', { returnObjects: true }),
            engineLogo: unityLogo,
            languageLogo: csharpLogo,
            video: 'https://www.youtube.com/embed/--Tixdd0MYU', 
            steamLink: 'https://store.steampowered.com/app/3450480/Figure_it_Out/'
        },
        {
            title: "Catenae",
            briefDescription: t('projects.catenae.briefDescription'),
            bulletPoints: t('projects.catenae.bulletPoints', { returnObjects: true }),
            engineLogo: unityLogo,
            languageLogo: csharpLogo,
            video: 'https://www.youtube.com/embed/cEPUZ8oxkCM', 
            itchioLink: 'https://twoweeksathome.itch.io/catenae'
        },
        {
            title: "MiX Trivia Game",
            briefDescription: t('projects.mixTriviaGame.briefDescription'),
            bulletPoints: t('projects.mixTriviaGame.bulletPoints', { returnObjects: true }),
            engineLogo: unityLogo,
            languageLogo: csharpLogo,
            video: 'https://www.youtube.com/embed/6ibHl-QthoY', // Replace with your YouTube video link
            downloadLink: 'https://github.com/XavierMerino01/MiX-TriviaGame/releases/download/v1.0/MiXBuild.rar', // Replace with your Google Drive file link
            githubLink: 'https://github.com/XavierMerino01/MiX-TriviaGame' // Replace with your GitHub repository link
        },
        {
            title: "Lumina",
            briefDescription: t('projects.lumina.briefDescription'),
            bulletPoints: t('projects.lumina.bulletPoints', { returnObjects: true }),
            engineLogo: unrealLogo,
            video: 'https://www.youtube.com/embed/mxfK6mRZsg0', 
            itchioLink: 'https://helenamb.itch.io/lumina'
        }
    ];

    return (
        <div className="projects">
            <div className="project-list">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        briefDescription={project.briefDescription} 
                        bulletPoints={project.bulletPoints} 
                        engineLogo={project.engineLogo} 
                        languageLogo={project.languageLogo} 
                        video={project.video}
                        downloadLink={project.downloadLink}
                        githubLink={project.githubLink}
                        steamLink={project.steamLink}
                        itchioLink={project.itchioLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;