import React from 'react';
import skills from '../../assets/skills/skills';
import ExperienceCard from '../Card/ExperienceCard';
import InvertedExperienceCard from '../Card/InvertedExperienceCard';

const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <ExperienceCard
        title='Software Engineer'
        desc=''
        company='Liberty Mutual'
        date='March 2022 - Present'
        imgSrc='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318'
        skillIcons={[skills.react, skills.html, skills.css, skills.js, skills.java, skills.spring, skills.npm, skills.mysql, skills.aws, skills.docker, skills.figma]}
      />
      <InvertedExperienceCard
        title='Configuration Engineer'
        desc=''
        company='Liberty Mutual'
        date='January 2020 - March 2022'
        imgSrc='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318'
        skillIcons={[skills.react, skills.html, skills.css, skills.js, skills.java, skills.spring, skills.npm, skills.mysql, skills.aws, skills.docker]}
      />  
      <ExperienceCard
        title='Talent Aquisition Associate'
        desc=''
        company='Percy (Startup)'
        date='June 2019 - January 2020'
        imgSrc='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318'
        skillIcons={[skills.ruby, skills.html, skills.css, skills.npm, skills.mysql]}
      />
      <InvertedExperienceCard
        title='Associate Software Developer'
        desc=''
        company='Liberty Mutual'
        date='January 2017 - June 2019'
        imgSrc='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318'
        skillIcons={[skills.angular, skills.html, skills.css, skills.js, skills.java, skills.spring, skills.npm, skills.mysql, skills.sketch ]}
      />  
      <ExperienceCard
        title='Technology Associate'
        desc=''
        company='Liberty Mutual'
        date='March 2022 - Present'
        imgSrc='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318'
        skillIcons={[skills.angular, skills.html, skills.css, skills.js, skills.java, skills.spring, skills.npm, skills.mysql, skills.sketch]}
      />
      <InvertedExperienceCard
        title='Information Sciences and Technology'
        desc=''
        company='Pennsylvania State University'
        date='August 2012 - December 2016'
        imgSrc='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318'
        skillIcons={[ skills.html, skills.css, skills.js, skills.java ]}
      />  
    </div> 
  );
};

export default Experience;
