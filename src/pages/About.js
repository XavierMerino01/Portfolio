import React, { useEffect, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import ProfilePic from '../assets/icons/ProfileWA.jpg';
import unityLogo from '../assets/icons/unity.png';
import unrealLogo from '../assets/icons/unreal.png';
import csharpLogo from '../assets/icons/csharp.png';
import cppLogo from '../assets/icons/cpp.png';
import githubLogo from '../assets/icons/github.png';
import maxLogo from '../assets/icons/3dsmax.png';
import htmlLogo from '../assets/icons/html.png';
import cssLogo from '../assets/icons/css.png';
import jsLogo from '../assets/icons/javascript.png';
import linkedinLogo from '../assets/icons/linkedin.png';

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll to top on mount
  }, []);

  return (
    <div className="about">
      <div className="hero">
        <div className="hero-text">
          <p>{t('about.heroText')}</p>
          <div className="contact-info">
            <p>{t('about.contactInfo')}</p>
            <a href="https://www.linkedin.com/in/xaviermerino/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="linkedin-icon" title="LinkedIn" />
            </a>
          </div>
        </div>
        <img src={ProfilePic} alt="Profile" className="profile-pic" />
      </div>
      <div className="skill-nav">
        <div className="skills">
          <h2>{t('about.skillsTitle')}</h2>
          <ul>
            {t('about.skillsList', { returnObjects: true }).map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="software">
          <h2>{t('about.softwareTitle')}</h2>
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
        <h2>{t('about.experienceTitle')}</h2>
        <div className="experience-list">
          <div className="role">
            <h3>{t('about.experience.unityProgrammer')}</h3>
            <h3>{t('about.experience.unrealConsultant')}</h3>
          </div>
          <div className="company">
            <h3>{t('about.experience.twoWeeksAtHome')}</h3>
            <ul>
              {t('about.experience.twoWeeksAtHome.description', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>{t('about.experience.toyotaME')}</h3>
            <ul>
              {t('about.experience.toyotaME.description', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="experience">
        <h2>{t('about.educationTitle')}</h2>
        <p>
          <span>{t('about.education.emav.name')} </span>| {t('about.education.emav.description')}
        </p>
        <p>
          <span>{t('about.education.pedralbes.name')} </span>| {t('about.education.pedralbes.description')}
        </p>
        <h2>{t('about.otherTitle')}</h2>
        <p>
          <span>{t('about.other.udemy.name')} </span>| {t('about.other.udemy.description')}
        </p>
        <p>
          <span>{t('about.other.odin.name')} </span>| {t('about.other.odin.description')}
        </p>
      </div>
    </div>
  );
};

const WrappedAbout = () => (
  <Suspense fallback="Loading About...">
    <About />
  </Suspense>
);

export default WrappedAbout;