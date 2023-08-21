import React from 'react';
import SnakeGame from './SnakeGame'; // Make sure to adjust the path accordingly
import './Snake.css';

interface SnakeProps {
  setActiveSection: (section: React.ReactNode) => void;
}

const Snake: React.FC<SnakeProps> = ({ setActiveSection }) => {
  return (
    <div className="section-container">
      <div className="text-container">
        <h2>Welcome!</h2>
        <p>
          Thank you for checking out my portfolio. My name is Matt and I'm a Software Engineer looking to break into the video game industry.
        </p>
        <p>
          Before you get to the juicy part of my portfolio, feel free to play one of my favorite games as a kid, Snake. Just try to beat my high score — I bet you can't.
        </p>
        <p>
          You can also navigate to certain sections of my portfolio by running the snake into the left, right, and bottom of the play area.
        </p>
      </div>
      <div className="rectangle">
        <SnakeGame setActiveSection={setActiveSection} />
      </div>
    </div>
  );
};

export default Snake;
