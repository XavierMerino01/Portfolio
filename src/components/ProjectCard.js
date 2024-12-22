import React from 'react';
import downloadIcon from '../assets/icons/save.png'; // Adjust the path as necessary
import githubIcon from '../assets/icons/github.png'; // Adjust the path as necessary

function ProjectCard({ title, description, video, downloadLink, githubLink }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-info">
          <h3>{title}</h3>
          <p className="description">{description}</p>
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