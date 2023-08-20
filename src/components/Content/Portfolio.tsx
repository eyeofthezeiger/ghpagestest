import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <div>
            <div className="section-container">
                <div className="text-container">
                  <h2>WNTR.Woo</h2>
                  <p>
                  I created this project using Unreal Engine 5, using free assets to create a platforming game akin to Fall Guys or Super Mario 3D. You can follow this URL to download it for Windows.
                  </p>
                </div>
                <div className="rectangle"></div>
              </div>

              <div className="section-container">
                <div className="rectangle"></div>
                <div className="text-container">
                  <h2>Team 4 Trivia Game</h2>
                  <p>
                  I worked with a team at Liberty Mutual to create this Trivia App built using the MERN (MongoDB, Express, React and Node.JS) stack. 
                  </p>
                </div>
              </div>

              <div className="section-container">
                <div className="text-container">
                  <h2>Third Person RPG Level</h2>
                  <p>
                  I created this project using Unity, using free assets to create a bite size Third Person RPG. You can pick up different weapons, fire arrows and cast spells.            
                  </p>
                </div>
                <div className="rectangle"></div>
              </div>

              <div className="section-container">
                <div className="rectangle"></div>
                <div className="text-container">
                  <h2>tunedIN</h2>
                  <p>
                  I am currently leading a team of 5 developers to create a JackBox style party game that uses your Spotify listening and account information to create a game to play with your friends using the data from Spotify. Here is a sneak peak at some of our mock ups.             </p>
                </div>
              </div>

              <div className="section-container">
                <div className="text-container">
                  <h2>Level Designs</h2>
                  <p>
                  Here are two levels that I spent a lot of time with in Unreal Engine and Unity. These were ultimately scrapped but I love what I got out of it even though I didn’t get to use it.            
                  </p>
                </div>
                <div className="rectangle"></div>
              </div>

              <div className="section-container">
                <div className="rectangle"></div>
                <div className="text-container">
                  <h2>Portfolio</h2>
                  <p>
                  My portfolio comes to life through a harmonious blend of modern technologies and creative finesse. Constructed with React, powered by TypeScript, and enhanced by the smooth animations of Framer Motion, my portfolio showcases my expertise as a Software Engineer. With Vite as the foundation and MUI providing aesthetic appeal, this digital space elegantly reflects my journey, skills, and aspirations.
                  </p>
                </div>
              </div>
            </div>
          </Stack>
    </Box>
    


    
  );
};

export default Portfolio;
