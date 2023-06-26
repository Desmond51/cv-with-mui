import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';


export default function SideBar() {

  return (
     <Container >
      <div>
      <Avatar sx={{ bgcolor: '#f8f0EA', padding:6, marginLeft:5 }}
       alt="Desmond Teko" src="./public/me.jpeg" />
  
      </div>
      <div>
      <Grid >
      <Typography
         paddingLeft={2}
         width={230}
         marginTop={7}
         fontSize={25}
         bgcolor={'#f5f0EA'}
      ><span class="e896 md-light md-lg"></span> CONTACT</Typography>
      <Typography
         marginTop={3}
      >
        <Typography fontSize={13}><EmailOutlinedIcon fontSize='30' marginTop={4} />desmondtekum9@gmail.com</Typography>
        <Typography fontSize={13} ><CallOutlinedIcon fontSize='30' />+23768699673</Typography>
        <Typography fontSize={13} ><RoomOutlinedIcon  fontSize='30' />Molyko, Buea, Cameroon</Typography>
      </Typography>
      </Grid>

      <Typography bgcolor={'#f5f0EA'} paddingLeft={2}>
 
      <Typography >
      <Typography
         width={230}
         marginTop={7}
         fontSize={25}
         bgcolor={'#f5f0EA'}
      ><span class="e896 md-light md-lg"></span> Education</Typography>
      <Typography
         marginTop={3}
      >
      <Typography
         marginTop={3}
      >
        <Typography fontSize={14}>Advanced Level</Typography>
        <Typography fontSize={13} color={'gray'}>Baptist High School Buea</Typography>
      </Typography>
      <Typography
         marginTop={1}
      >
        <Typography fontSize={14}>Barchelor's Degree</Typography>
        <Typography fontSize={13} color={'gray'}>Saint Monica University Higher Institute of Buea</Typography>
      </Typography>

      </Typography>
      </Typography>

      <Typography >
      <Typography
         width={230}
         marginTop={7}
         fontSize={25}
         bgcolor={'#f5f0EA'}
      ><span class="e896 md-light md-lg"></span> SKILLS</Typography>
      <Typography
         marginTop={3}
      >
        <Typography fontSize={13}><RemoveFromQueueIcon fontSize='30' marginTop={4} />JavaScript</Typography>
        <Typography fontSize={13} ><RemoveFromQueueIcon fontSize='30' />TypeScript</Typography>
        <Typography fontSize={13} ><RemoveFromQueueIcon fontSize='30' />React</Typography>
        <Typography fontSize={13}><RemoveFromQueueIcon fontSize='30' marginTop={4} />MongoDB</Typography>
        <Typography fontSize={13} ><RemoveFromQueueIcon fontSize='30' />Node.js</Typography>
        <Typography fontSize={13} ><RemoveFromQueueIcon fontSize='30' />Express</Typography>
        <Typography fontSize={13}><RemoveFromQueueIcon fontSize='30' marginTop={4} />Next.js</Typography>
        <Typography fontSize={13} ><RemoveFromQueueIcon fontSize='30' />Tailwind</Typography>
        <Typography fontSize={13} ><RemoveFromQueueIcon fontSize='30' />Bootstrap</Typography>
        <Typography fontSize={13} ><RemoveFromQueueIcon fontSize='30' />Material UI</Typography>
      </Typography>
      </Typography>
       
      </Typography>
       
      </div>

     </Container>
  );
}