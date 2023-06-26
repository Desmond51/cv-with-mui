import { Box, Divider, Grid, List, Typography } from '@mui/material'
// import {Divider} from '@mui/material/joy/Divider'
import React from 'react'

export default function ContentPage() {
  return (
    <container>
      <Typography  marginY={3} bgcolor={'#1b033E'} paddingLeft={2} width={570}>..</Typography>
      <div>
      <Typography fontSize={30} align='left' > Tekum Desmond Teko</Typography>
      <Typography fontSize={16} align='left' marginBottom={3}>Software Developer</Typography>
       <Divider
       sx={{width:'100%'}}
       />
      </div>
      <div >
      <Typography
        paddingLeft={2}
        width={570}
        marginTop={5}
        fontSize={25}
        bgcolor={'#f5f0EA'}
      ><span class="e896 md-light md-lg"></span> ABOUT ME</Typography>
      <Typography
         fontSize={13}
         width={370}
         marginTop={3}
      >
      I am a software engineer with 2 years of experience in the industry. I am passionate about building innovative and user-friendly software that solves real-world problems. I have a strong understanding of the software development process, from requirements gathering to testing and deployment. I am also proficient in a variety of programming languages and technologies, including Python, React, and Node.js.
      </Typography>
      </div>
      <div >
      <Typography
        paddingLeft={2}
        width={570}
        marginTop={5}
        fontSize={25}
        bgcolor={'#f5f0EA'}
      ><span class="e896 md-light md-lg"></span> EXPERIENCE</Typography>
      <Typography
      marginTop={3}
      >
           <Typography fontSize={13} color={'whitesmoke'} marginBottom={1} bgcolor={'#1b033E'} width={170}>May 2022 - Present</Typography>
            <Typography width={370} fontSize={13}>
            In my current roles, I'm working on a variety of projects, including: <br />
               <Typography marginLeft={3} fontSize={13}>
                 •Developing a new e-commerce platform for a major retailer. <br />
                 •Building a mobile app for a financial services company. <br />
                 •Creating a web-based application for a government agency
                </Typography>

            </Typography>
      </Typography>
      </div>
      <Grid container  sx={{ flexGrow: 1 }}>
      <Grid sx={{marginRight:4}} >
      <Typography
         paddingLeft={2}
         width={230}
         marginTop={5}
         fontSize={25}
         bgcolor={'#f5f0EA'}
      ><span class="e896 md-light md-lg"></span>LANGUAGE</Typography>
      <Typography
         marginTop={3}
      >
        <Typography fontSize={14}>English</Typography>
        <Typography fontSize={13} color={'gray'}>Native</Typography>
      
      </Typography>
      </Grid>
      <Grid >
      <Typography
         paddingLeft={2}
         width={230}
         marginTop={5}
         fontSize={25}
         bgcolor={'#f5f0EA'}
      ><span class="e896 md-light md-lg"></span> REFERENCE</Typography>
      <Typography
         marginTop={3}
      >
        <Typography fontSize={14}>General manager of Iknite space</Typography>
        <Typography fontSize={13} color={'gray'}>+23768699673</Typography>
      </Typography>
      </Grid>
      </Grid>
      <Typography marginTop={4} paddingLeft={2} width={570} bgcolor={'#1b033E'} >..</Typography>
    </container>
  )
}
