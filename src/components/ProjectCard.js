import React from 'react';
import downloadIcon from '../assets/icons/save.png'; 
import githubIcon from '../assets/icons/github.png'; 
import steamIcon from '../assets/icons/steam.png'; 
import itchioIcon from '../assets/icons/itchio.png'; 

function ProjectCard({ title, briefDescription, bulletPoints, engineLogo, languageLogo, video, downloadLink, githubLink, steamLink, itchioLink }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-info">
          <div className="title-and-logos">
            <h3>{title}</h3>
            <div className="logos">
              <img src={engineLogo} alt="Engine Logo" className="logo" />
              {languageLogo && (
                <img src={languageLogo} alt="Language Logo" className="logo" />
              )}
            </div>
          </div>
          <p className="brief-description">{briefDescription}</p>
          <ul className="bullet-points">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <div className="links">
            {downloadLink && (
              <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="icon-link" title="Download Game">
                <img src={downloadIcon} alt="Download" className="icon" />
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="icon-link" title="View on GitHub">
                <img src={githubIcon} alt="GitHub" className="icon" />
              </a>
            )}
            {steamLink && (
              <a href={steamLink} target="_blank" rel="noopener noreferrer" className="icon-link" title="View on Steam">
                <img src={steamIcon} alt="Steam" className="icon" />
              </a>
            )}
            {itchioLink && (
              <a href={itchioLink} target="_blank" rel="noopener noreferrer" className="icon-link" title="View on Itch.io">
                <img src={itchioIcon} alt="Itch.io" className="icon" />
              </a>
            )}
          </div>
        </div>
        {video && (
          <div className="video-container">
            <iframe 
              src={video} 
              width="320" 
              height="180" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              title={title}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;