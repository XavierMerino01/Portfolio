import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className="uk"
        onClick={() => changeLanguage('en')}
        title="English"
      ></button>
      <button
        className="cat"
        onClick={() => changeLanguage('cat')}
        title="Català"
      ></button>
      <button
        className="es"
        onClick={() => changeLanguage('es')}
        title="Español"
      ></button>
    </div>
  );
};

export default LanguageSwitcher;