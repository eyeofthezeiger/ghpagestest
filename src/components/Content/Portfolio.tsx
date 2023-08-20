import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import React from 'react';
import skills from '../../assets/skills/skills';
import ExperienceCard from '../Card/ExperienceCard';
import InvertedExperienceCard from '../Card/InvertedExperienceCard';

const Portfolio: React.FC = () => {
  return (
    <div className="experience-container">
    <InvertedExperienceCard
      title='WNTR.Woo'
      desc='I created this project using Unreal Engine 5, using free assets to create a platforming game akin to Fall Guys or Super Mario 3D. You can follow this URL to download it for Windows.'
      company='Personal Project'
      date='April 2023'
      imgSrc='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318'
      skillIcons={[skills.react, skills.html, skills.css, skills.js, skills.java, skills.spring, skills.npm, skills.mysql, skills.aws, skills.docker, skills.figma]}
    />
    <ExperienceCard
      title='Team 4 Trivia Game'
      desc='I worked with a team at Liberty Mutual to create this Trivia App built using the MERN (MongoDB, Express, React and Node.JS) stack. '
      company='Liberty Mutual'
      date='November 2022'
      imgSrc='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318'
      skillIcons={[skills.react, skills.html, skills.css, skills.npm, skills.mongodb, skills.nodejs]}
    />
    <InvertedExperienceCard
      title='Third Person RPG Level'
      desc='I created this project using Unity, using free assets to create a bite size Third Person RPG. You can pick up different weapons, fire arrows and cast spells.'
      company='Personal Project'
      date='August 2020 - September 2020'
      imgSrc='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318'
      skillIcons={[skills.angular, skills.html, skills.css, skills.js, skills.java, skills.spring, skills.npm, skills.mysql, skills.sketch ]}
    />  
    <ExperienceCard
      title='Steam Punk Level Design'
      desc=''
      company='Personal Project'
      date='April 2023'
      imgSrc='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318'
      skillIcons={[skills.angular, skills.html, skills.css, skills.js, skills.java, skills.spring, skills.npm, skills.mysql, skills.sketch]}
    />
    <InvertedExperienceCard
      title='Medievil Level Design'
      desc=''
      company='Personal Project'
      date='September 2020'
      imgSrc='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318'
      skillIcons={[ skills.html, skills.css, skills.js, skills.java ]}
    />  
    <ExperienceCard
      title='Portfolio'
      desc='My portfolio comes to life through a harmonious blend of modern technologies and creative finesse. Constructed with React, powered by TypeScript, and enhanced by the smooth animations of Framer Motion, my portfolio showcases my expertise as a Software Engineer. With Vite as the foundation and MUI providing aesthetic appeal, this digital space elegantly reflects my journey, skills, and aspirations.'
      company='Personal Project'
      date='August 2023'
      imgSrc='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318'
      skillIcons={[skills.react, skills.html, skills.css, skills.typescript, skills.figma ]}
    />
  </div> 
    


    
  );
};

export default Portfolio;
