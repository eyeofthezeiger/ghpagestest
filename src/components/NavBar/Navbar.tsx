import React from 'react';

interface NavbarProps {
  handleSectionChange: (section: string) => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ handleSectionChange, activeSection }) => {
  return (
    <nav className="navbar">
      <button onClick={() => handleSectionChange('experience')} className={activeSection === 'experience' ? 'active' : ''}>
        Experience
      </button>
      <button onClick={() => handleSectionChange('portfolio')} className={activeSection === 'portfolio' ? 'active' : ''}>
        Portfolio
      </button>
      <button onClick={() => handleSectionChange('about')} className={activeSection === 'about' ? 'active' : ''}>
        About Me
      </button>
    </nav>
  );
};

export default Navbar;
