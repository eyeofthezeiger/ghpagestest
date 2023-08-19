// Header.tsx

import React from 'react';
import { motion } from 'framer-motion';
import './Header.css'; // Create this CSS file for styling

const Header: React.FC = () => {
  return (
    <motion.header className="header">
      <motion.div
        className="header-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Matthew Zeiger
      </motion.div>
    </motion.header>
  );
};

export default Header;
