import React from 'react';
import { Avatar, AvatarGroup, AvatarProps, Card, CardContent, CardOverflow, Divider, Typography } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';

interface ExperienceCardProps {
    title: string;
    desc: string;
    company: string;
    date: string;
    imgSrc: string; 
    skillIcons: AvatarProps['src'][];
  }
const InvertedExperienceCard: React.FC<ExperienceCardProps> = ({ title, desc, company, date, imgSrc, skillIcons }) => {
  return (
    <div className="section-container">
      <Card variant="soft" sx={{ width: 500, display: 'flex', bgcolor: 'background.level3' }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src={imgSrc}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', bgcolor: 'background.level3', marginRight: '13px'}}>
          <Typography level="title-md">{title}</Typography>
          <Typography level="body-sm">{company}</Typography>
        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography level="body-xs" fontWeight="md" textColor="text.secondary" sx={{ marginRight: '15px' }}>
                {date}
              </Typography>
              <Divider orientation="vertical" />
              <div className="avatar-row" style={{ marginLeft: '23px' }}>
                <AvatarGroup>
                  {skillIcons.map((iconSrc, index) => (
                    <Avatar key={index} color="neutral" variant="plain" sx={{ boxShadow: 'none', height: 'var(--Avatar-size, 3.5rem)' }} src={iconSrc}/>
                  ))}
                </AvatarGroup>
              </div>
            </div>
          </CardContent>
        </CardOverflow>
      </Card>
      <div className="text-container">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default InvertedExperienceCard;
