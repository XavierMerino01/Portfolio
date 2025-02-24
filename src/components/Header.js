import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitch from './LanguageSwitcher';

function Header() {
  const { t } = useTranslation();

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
        <LanguageSwitch />
      </div> {/* Close container */}
    </header>
  );
}

export default Header;