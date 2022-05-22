import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  textAlign:'justify'
}));

export default function About({pHead}) {
  return (
    <div className='PageBody About'>
      <div className='container'>
      {pHead}
      <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} data-aos="fade-right" data-aos-duration="400">
      <Item className='ArtistImg'><img src='./images/userProfile.jpg' className='h-100 w-100'/></Item>
    </Grid>
    <Grid item xs={12} sm={12} md={8} lg={8} xl={8} xxl={8} data-aos="fade-left" data-aos-duration="400">
      <Item>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ab deserunt voluptatibus illum
         repellendus! Numquam, molestiae tempore vitae, voluptatem repellendus corrupti dolor nisi aperiam est itaque,
          veniam doloremque atque tenetur! 
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ab deserunt 
          voluptatibus illum repellendus! Numquam, molestiae tempore vitae, voluptatem repellendus corrupti dolor nisi 
          aperiam est itaque, veniam doloremque atque tenetur! 
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ab deserunt 
          voluptatibus illum repellendus! Numquam, molestiae tempore vitae, voluptatem repellendus corrupti dolor nisi 
          aperiam est itaque, veniam doloremque atque tenetur! 
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ab deserunt 
          voluptatibus illum repellendus! Numquam, molestiae tempore vitae, voluptatem repellendus corrupti dolor nisi 
          aperiam est itaque, veniam doloremque atque tenetur! 
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ab deserunt 
          voluptatibus illum repellendus! Numquam, molestiae tempore vitae, voluptatem repellendus corrupti dolor nisi 
          aperiam est itaque, veniam doloremque atque tenetur! 
          </p>
          </Item>
    </Grid>
  </Grid>
</Box>
</div>
      </div>
  )
}
