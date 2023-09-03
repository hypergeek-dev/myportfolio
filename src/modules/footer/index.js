// Footer.js
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const modules = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/contact', name: 'Contact' },
  ];
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);

  useEffect(() => {
    const index = modules.findIndex(module => module.path === location.pathname);
    if (index !== -1) {
      setCurrentModuleIndex(index);
    }
  }, [location.pathname]);

  const handlePrev = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      navigate(modules[currentModuleIndex - 1].path);
    }
  };

  const handleNext = () => {
    if (currentModuleIndex < modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      navigate(modules[currentModuleIndex + 1].path);
    }
  };

  return (
    <footer className="footer d-flex justify-content-center align-items-center">
      <Button variant="secondary" onClick={handlePrev} disabled={currentModuleIndex === 0}>
        <i className="fas fa-arrow-left"></i> Prev
      </Button>
      <span className="mx-3">{modules[currentModuleIndex].name}</span>
      <Button variant="secondary" onClick={handleNext} disabled={currentModuleIndex === modules.length - 1}>
        Next <i className="fas fa-arrow-right"></i>
      </Button>
    </footer>
  );
};

export default Footer;
