// Header.tsx

import React from 'react';
// import { motion } from 'framer-motion';
import './Header.css'; // Create this CSS file for styling
import 'animate.css';

const Header: React.FC = () => {
  return (
    // <motion.header className="header">
    //   <motion.div
    //     className="header-content"
    //     initial={{ opacity: 0, y: -20 }}
    //     animate={{ opacity: 2, y: 0 }}
    //     transition={{ duration: 1, delay: 0.2 }}
    //   >
    //     Matthew Zeiger
    //   </motion.div>
    // </motion.header>
    <header className='header'><h1 className="animate__animated animate__slideInLeft header-content">MATTHEW ZEIGER</h1></header>
    
  );
};

export default Header;
