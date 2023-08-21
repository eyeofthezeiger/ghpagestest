import React from 'react';
import Experience from '../Content/Experience';
import Portfolio from '../Content/Portfolio';
import About from '../Content/About';

interface NavbarProps {
  handleSectionChange: (section: React.ReactNode) => void;
  activeSection: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ handleSectionChange, activeSection }) => {
  return (
    <nav className="navbar">
      <button
        onClick={() => handleSectionChange(<Experience />)}
        className={activeSection === <Experience /> ? 'active' : ''}
      >
        Experience
      </button>
      <button
        onClick={() => handleSectionChange(<Portfolio />)}
        className={activeSection === <Portfolio /> ? 'active' : ''}
      >
        Portfolio
      </button>
      <button
        onClick={() => handleSectionChange(<About />)}
        className={activeSection === <About /> ? 'active' : ''}
      >
        About Me
      </button>
    </nav>
  );
};

export default Navbar;
