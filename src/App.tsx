import React, { useState } from 'react';
import SnakeGame from './components/Snake/Snake'; // Adjust the path accordingly
import Portfolio from './components/Content/Portfolio'; // Adjust the path accordingly
import Experience from './components/Content/Experience'; // Adjust the path accordingly
import About from './components/Content/About'; // Adjust the path accordingly
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';



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


      <section className="snake-game">
        <SnakeGame />
      </section>

      <Navbar handleSectionChange={handleSectionChange} activeSection={activeSection} />

      <section className="selected-section">{sectionToRender}</section>
    </div>
  );
};

export default App;
