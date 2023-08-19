import React, { useState } from 'react';
import SnakeGame from './components/Snake'; // Adjust the path accordingly
import Portfolio from './components/Portfolio'; // Adjust the path accordingly
import Experience from './components/Experience'; // Adjust the path accordingly
import About from './components/About'; // Adjust the path accordingly
import './App.css';
import Header from './components/Header';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('portfolio');

  // Function to handle section selection
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  // Determine which section to render based on activeSection
  let sectionToRender: React.ReactNode;
  if (activeSection === 'experience') {
    sectionToRender = <Experience />;
  } else if (activeSection === 'about') {
    sectionToRender = <About />;
  } else {
    // Default: Portfolio section
    sectionToRender = <Portfolio />;
  }

  return (
    <div className="app">
      {/* Header */}
        <Header />

      {/* Snake Game */}
      <section className="snake-game">
        <SnakeGame />
      </section>

      {/* Navbar */}
      <nav className="navbar">
        <button onClick={() => handleSectionChange('experience')}>
          Experience
        </button>
        <button onClick={() => handleSectionChange('portfolio')}>
          Portfolio
        </button>
        <button onClick={() => handleSectionChange('about')}>About Me</button>
      </nav>

      {/* Selected Section */}
      <section className="selected-section">{sectionToRender}</section>
    </div>
  );
};

export default App;
