import React from 'react';
import ProfilePic from '../assets/icons/ProfileWA.jpg'; 
import unityLogo from '../assets/icons/unity.png'; // Adjust the path as necessary
import unrealLogo from '../assets/icons/unreal.png'; // Adjust the path as necessary
import csharpLogo from '../assets/icons/csharp.png'; // Adjust the path as necessary
import cppLogo from '../assets/icons/cpp.png'; // Adjust the path as necessary
import githubLogo from '../assets/icons/github.png'; // Adjust the path as necessary
import maxLogo from '../assets/icons/3dsmax.png'; // Adjust the path as necessary
import htmlLogo from '../assets/icons/html.png'; // Adjust the path as necessary
import cssLogo from '../assets/icons/css.png'; // Adjust the path as necessary
import jsLogo from '../assets/icons/javascript.png';

const About = () => {
    return (
        <div className="about">
            <div className="hero">
                <p>
                    Gameplay programmer with a solid foundation in programming and game design. This, along with my understanding of game engines and software, allows me to prototype ideas and work from a multidisciplinary standpoint.
                </p>
                <img src={ProfilePic} alt="Profile" className="profile-pic" />
            </div>
            <div className="skill-nav">
                <div className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Proficient in Object-Oriented Programming with <span>C#</span> and <span>C++</span></li>
                    <li>Extensive experience with game engines such as <span>Unity</span> and <span>Unreal Engine</span> (C++ and Blueprints)</li>
                    <li>Strong understanding of game mechanics, physics, and AI programming</li>
                    <li>Basic web development skills (HTML, CSS, JavaScript)</li>
                    <li>Experience with 3D modeling and texturing tools</li>
                    <li>Skilled in using version control systems like Git</li>
                    <li>Experience working in agile environments using <span>Scrum</span> methodologies</li>
                </ul>
                </div>
                <div className="software">
                    <h2>Software</h2>
                    <div className="software-icons">
                    <img src={unityLogo} alt="Unity" className="software-icon" title="Unity" />
                        <img src={unrealLogo} alt="Unreal Engine" className="software-icon" title="Unreal Engine" />
                        <img src={csharpLogo} alt="C#" className="software-icon" title="C#" />
                        <img src={cppLogo} alt="C++" className="software-icon" title="C++" />
                        <img src={githubLogo} alt="GitHub" className="software-icon" title="GitHub" />
                        <img src={maxLogo} alt="3ds Max" className="software-icon" title="3ds Max" />
                        <img src={htmlLogo} alt="HTML" className="software-icon" title="HTML" />
                        <img src={cssLogo} alt="CSS" className="software-icon" title="CSS" />
                        <img src={jsLogo} alt="JavaScript" className="software-icon" title="JavaScript" />
                    </div>
                </div>
            </div>
            
            <div className="experience">
                <h2>Experience</h2>
                <div className="experience-list">
                    <div className="role">
                        <h3>Unity Programmer</h3>
                        <h3>Unreal Engine Consultant Intern</h3>
                    </div>
                    <div className = "company">
                        <h3>Two Weeks At Home</h3>
                        <ul>
                            <li>Main programmer for the studio projects, responsible for prototyping game mechanics and implementing all gameplay programming.</li>
                            <li>Responsible of sound and art integration into the gameplay.</li>
                            <li>Sole game programmer for "Figure It Out", the studio's first published game on Steam.</li>
                        </ul>
                        <h3>Toyota ME - Brussels</h3>
                        <ul>
                            <li>Conducted tests and developed VR blueprint based projects for visual examination of different design versions.</li>
                            <li>Explored and demonstrated possibilities for vehicle gamification using Unreal Engine.</li>
                            <li>Examined Unreal Engine vehicle evaluation possibilities for Body Design.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="experience">
                <h2>Education</h2>
                <p><span>EMAV Barcelona </span>| Higher Technician in 3D Animation and Video Game Development </p>
            </div>
        </div>
    );
};

export default About;