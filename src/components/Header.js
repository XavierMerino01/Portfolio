import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import unitedKingdom from '../assets/icons/united-kingdom.png';
import spain from '../assets/icons/spain.png';
import catalonia from '../assets/icons/catalonia.png';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <div className="header-container"> {/* Added container */}
        <div className="header-info">
          <h1>Xavier Merino Seuma</h1>
          <h3>Gameplay Programmer</h3>
          <nav>
            <ul>
              <li><Link to="/">{t('header.about')}</Link></li>
              <li><Link to="/projects">{t('header.projects')}</Link></li>
            </ul>
          </nav>
        </div>
        <LanguageSwitcher />
      </div> {/* Close container */}
    </header>
  );
};

export default Header; // Export Header directly