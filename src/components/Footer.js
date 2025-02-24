import React from 'react';
import { useTranslation } from 'react-i18next';
import githubIcon from '../assets/icons/github.png'; // Adjust the path as necessary
import linkedinIcon from '../assets/icons/linkedin.png'; // Adjust the path as necessary

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <h3>{t('about.contact')}</h3>
            <p><span>EMAIL     -</span>  merinoxevi@gmail.com</p>
            <div className="footer-icons">
                <a href="https://github.com/XavierMerino01" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="footer-icon" />
                </a>
                <a href="https://linkedin.com/in/xaviermerino" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;