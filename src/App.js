import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const { t } = useTranslation();

  return (
    <Suspense fallback="Loading...">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;