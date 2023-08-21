import React, { useState } from 'react';
import SnakeGame from './components/Snake/Snake';
import Portfolio from './components/Content/Portfolio';
import Experience from './components/Content/Experience';
import About from './components/Content/About';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<React.ReactNode>(<Portfolio />);

  // Function to handle section selection
  const handleSectionChange = (section: React.ReactNode) => {
    setActiveSection(section);
  };

  return (
    <div className="app">
      <Header />

      <section className="snake-game">
        <SnakeGame setActiveSection={handleSectionChange} />
      </section>

      <Navbar handleSectionChange={handleSectionChange} activeSection={activeSection} />

      <section className="selected-section">{activeSection}</section>
    </div>
  );
};

export default App;
