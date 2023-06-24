import { Divider, List, Typography } from '@mui/material'
// import {Divider} from '@mui/material/joy/Divider'
import React from 'react'

export default function ContentPage() {
  return (
    <div>
      <div>
      <Typography > Tekum Desmond Teko</Typography>
      <Typography>Software Developer</Typography>
       <Divider
       sx={{width:200}}
       />
      </div>
      <div >
      <Typography
      marginTop={5}
      fontSize={30}
      bgcolor={'#f5f0EA'}
      ><span class="e896 md-light md-lg"></span> ABOUT ME</Typography>
      <Typography
      marginTop={3}
      >
      I am a software engineer with 2 years of experience in the industry. I am passionate about building innovative and user-friendly software that solves real-world problems. I have a strong understanding of the software development process, from requirements gathering to testing and deployment. I am also proficient in a variety of programming languages and technologies, including Python, React, and Node.js.
      </Typography>
      </div>
      <div >
      <Typography
      marginTop={5}
      fontSize={30}
      bgcolor={'#f5f0EA'}
      ><span class="e896 md-light md-lg"></span> EXPERIENCE</Typography>
      <Typography
      marginTop={3}
      >
           <Typography fontSize={14} color={'whitesmoke'} bgcolor={'#1b033E'} width={170}>May 2022 - Present</Typography>
            <Typography>
            In my current roles, I'm working on a variety of projects, including: <br />
               <Typography marginLeft={3}>
                 •Developing a new e-commerce platform for a major retailer. <br />
                 •Building a mobile app for a financial services company. <br />
                 •Creating a web-based application for a government agency
                </Typography>

            </Typography>
      </Typography>
      </div>
      <div >
      <Typography
      marginTop={5}
      fontSize={30}
      bgcolor={'#f5f0EA'}
      ><span class="e896 md-light md-lg"></span>LANGUAGE</Typography>
      <Typography
      marginTop={3}
      >
        <span>
        <Typography>English</Typography>
        <Typography fontSize={12} color={'gray'}>Native</Typography></span>
      
      </Typography>
      </div>
      <div >
      <Typography
      marginTop={5}
      fontSize={30}
      bgcolor={'#f5f0EA'}
      ><span class="e896 md-light md-lg"></span> ABOUT ME</Typography>
      <Typography
      marginTop={3}
      >
      I am a software engineer with 2 years of experience in the industry. I am passionate about building innovative and user-friendly software that solves real-world problems. I have a strong understanding of the software development process, from requirements gathering to testing and deployment. I am also proficient in a variety of programming languages and technologies, including Python, React, and Node.js.
      </Typography>
      </div>
    </div>
  )
}
