import React from 'react';
import { Card, CardContent, CardCover, Typography } from '@mui/joy';

// https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318

interface AboutMeCardProps {
    desc: string;
  }

const AboutMeCard: React.FC<AboutMeCardProps> = ({desc}) => {
  return (
    <div className="section-container">
      <div className="text-container">
        <p>{desc}</p>
      </div>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMeCard;
