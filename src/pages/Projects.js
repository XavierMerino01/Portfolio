import React from 'react';
import ProjectCard from '../components/ProjectCard';
import unityLogo from '../assets/icons/unity.png'; // Adjust the path as necessary
import csharpLogo from '../assets/icons/csharp.png'; // Adjust the path as necessary
import unrealLogo from '../assets/icons/unreal.png'; // Adjust the path as necessary
import cppLogo from '../assets/icons/cpp.png'; // Adjust the path as necessary

const Projects = () => {
    const projects = [
        {
            title: 'Ludovico Grim',
            briefDescription: 'Action based 2D auto-runner where you play as Ludovico, a Grim trainee looking to become the best soul reaper.',
            bulletPoints: [
                'Programmer for the colaborative project at Two Weeks At Home.',
                'Prototyped and developed gameplay mechanics.',
                'Integrated sound and art assets.',
                'Conducted playtesting and gathered feedback.'
            ],
            engineLogo: unityLogo,
            languageLogo: csharpLogo,
            video: 'https://www.youtube.com/embed/pSEOFhqdPss', // Replace with your YouTube video link
            downloadLink: 'https://drive.google.com/file/d/1y2JhTtUNj6iT9ugleKUlAN5QX8dgFVzz/view?usp=drive_link' // Replace with your Google Drive file link
        },
        {
            title: 'Figure It Out!',
            briefDescription: 'Minimalist puzzle game that puts everything on the players deductive skills, where observation is key to uncover each of the 56 levels solution.',
            bulletPoints: [
                'Programmer for the colaborative project at Two Weeks At Home.',
                'Solid game architecture and codebase.',
                'Steam release preparation (Steamworks SDK, achievements, etc.)',
                '6 months of development.',
            ],
            engineLogo: unityLogo,
            languageLogo: csharpLogo,
            video: 'https://www.youtube.com/embed/--Tixdd0MYU', 
            steamLink: 'https://store.steampowered.com/app/3450480/Figure_it_Out/'
        },
        {
            title: 'Catenae',
            briefDescription: 'Entry for the one week Level Up Game Jame 2024. The player must press keyboard buttons in the correct order to complete screens and progress through levels.',
            bulletPoints: [
                'Quickly prototyped and developed gameplay mechanics.',
                'Designed challenging button patterns.',
                'Itch.io playable site',
            ],
            engineLogo: unityLogo,
            languageLogo: csharpLogo,
            video: 'https://www.youtube.com/embed/cEPUZ8oxkCM', 
            itchioLink: 'https://twoweeksathome.itch.io/catenae'
        },
        {
            title: 'MiX Trivia Game',
            briefDescription: 'Project originated as a present, using the opportunity to practice my game development skills. Created over the course of two weeks.',
            bulletPoints: [
                'Created a cohesive and efficient codebase to support the implementation of various gameplay features.',
                'Designed gameplay and user experience.',
                'Implemented third party assets and sound effects.',
            ],
            engineLogo: unityLogo,
            languageLogo: csharpLogo,
            video: 'https://www.youtube.com/embed/6ibHl-QthoY', // Replace with your YouTube video link
            downloadLink: 'https://github.com/XavierMerino01/MiX-TriviaGame/releases/download/v1.0/MiXBuild.rar', // Replace with your Google Drive file link
            githubLink: 'https://github.com/XavierMerino01/MiX-TriviaGame' // Replace with your GitHub repository link
        },
        {
            title: 'Lumina',
            briefDescription: 'Short 3D puzzle videogame for PC, developed in Unreal Engine 4 as a game development course project. ',
            bulletPoints: [
                'Developed game features using UE Blueprints.',
                'Designed game puzzles and mechanics.',
                'Inclusion of narrative elements such as cinematics.',
            ],
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