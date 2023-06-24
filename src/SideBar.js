import { AddBox, Person } from '@mui/icons-material';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import * as React from 'react';


export default function SideBar() {

  return (
     <Container>
      <div>
      <Avatar sx={{ bgcolor: deepOrange[500], padding:6, marginLeft:5 }}
  alt="Remy Sharp" />
      <Typography
      marginTop={2}
        fontSize={18}
        align='center'
        color={''}
      >TEKUM DESMOND TEKO</Typography>
      </div>

      <div>
      <Typography 
      fontSize={23}
      marginTop={10}
      marginLeft={9}
      >
        Details
      </Typography>
       
        {/* <Typography  startDecorator={<Person />}>
            Hello World
          </Typography> */}
       
      </div>

     </Container>
  );
}