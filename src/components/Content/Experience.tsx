import { Avatar, AvatarGroup } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import React from 'react';
import AppleLogo from '../../assets/applePixels.png';
import skills from '../../assets/skills/skills';




const Experience: React.FC = () => {
  return (
<div className="section-container">
                <div className="text-container">
                  <h2>WNTR.Woo</h2>
                  <p>
                  I created this project using Unreal Engine 5, using free assets to create a platforming game akin to Fall Guys or Super Mario 3D. You can follow this URL to download it for Windows.
                  </p>
                </div>
                <Card variant="soft" sx={{ width: 500, display: 'flex' }}>
                  <CardOverflow>
                    <AspectRatio ratio="2">
                      <img
                        src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                        srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                        loading="lazy"
                        alt=""
                      />
                    </AspectRatio>
                  </CardOverflow>
                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography level="title-md">Software Engineer</Typography>
                    <Typography level="body-sm">Liberty Mutual</Typography>
                  </CardContent>
                  <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                    <Divider inset="context" />
                    <CardContent orientation="horizontal">
                      <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                        2022 - Present
                      </Typography>
                      <Divider orientation="vertical" />


                      <div className="avatar-row">
                        <AvatarGroup >
                          <Avatar color="neutral" variant="solid" src={skills.react}/>
                          <Avatar color="neutral" variant="solid" src={skills.html}/>
                          <Avatar color="neutral" variant="solid" src={skills.css}/>
                          <Avatar color="neutral" variant="solid" src={skills.js}/>
                          <Avatar color="neutral" variant="solid" src={skills.java}/>
                          <Avatar color="neutral" variant="solid" src={skills.spring}/>
                          <Avatar color="neutral" variant="solid" src={skills.npm}/>
                          <Avatar color="neutral" variant="solid" src={skills.mysql}/>
                          <Avatar color="neutral" variant="solid" src={skills.aws}/>
                          <Avatar color="neutral" variant="solid" src={skills.docker}/>
                        </AvatarGroup>
                      </div>
                      
                    </CardContent>
                  </CardOverflow>
                </Card>
              </div>


  );
};

export default Experience;
