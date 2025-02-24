import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/styles.css';
import i18n from './i18n'; // Import i18n
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

i18n.on('initialized', () => { // Wait for i18next to initialize
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});