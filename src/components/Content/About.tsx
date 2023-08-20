import React from 'react';
import AboutMeCard from '../Card/AboutMeCard';

const About: React.FC = () => {
  return (

    <div className="experience-container">
      <AboutMeCard 
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare ipsum id diam blandit, quis porttitor mauris mattis. Sed a lectus facilisis mi commodo blandit. In lectus risus, rhoncus in purus et, sagittis dapibus massa. Pellentesque lobortis, ipsum eu varius imperdiet, augue risus dictum neque, nec feugiat purus risus et nunc.'
      />
      </div>
  );
};

export default About;
