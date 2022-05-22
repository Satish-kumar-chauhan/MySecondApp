import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
export default function Artist({pHead}) {
  return (
    <div className='PageBody Artist'>
      <div className='container'>
      {pHead}
      <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
  <Grid item xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} data-aos="fade-up" data-aos-duration="400">
      {/* <Item>4</Item> */}
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} data-aos="fade-up" data-aos-duration="400">
      <Item className='ArtistImg'><img src='./images/userProfile.jpg' className='h-100 w-100'/></Item>
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} data-aos="fade-up" data-aos-duration="400">
      {/* <Item>4</Item> */}
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} data-aos="fade-up" data-aos-duration="400">
      <Item><p>
        <FormatQuoteIcon />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ab deserunt voluptatibus illum
         repellendus! Numquam, molestiae tempore vitae, voluptatem repellendus corrupti dolor nisi aperiam est itaque,
          veniam doloremque atque tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ab deserunt 
          voluptatibus illum repellendus! Numquam, molestiae tempore vitae, voluptatem repellendus corrupti dolor nisi 
          aperiam est itaque, veniam doloremque atque tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Debitis ab deserunt voluptatibus illum repellendus! Numquam, molestiae tempore vitae, voluptatem repellendus 
          corrupti dolor nisi aperiam est itaque, veniam doloremque atque tenetur! Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Debitis ab deserunt voluptatibus illum repellendus! Numquam, molestiae tempore vitae, voluptatem 
          repellendus corrupti dolor nisi aperiam est itaque, veniam doloremque atque tenetur! Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Debitis ab deserunt voluptatibus illum repellendus! Numquam, molestiae tempore vitae, 
          voluptatem repellendus corrupti dolor nisi aperiam est itaque, veniam doloremque atque tenetur! Lorem ipsum dolor 
          sit amet consectetur adipisicing elit. Debitis ab deserunt voluptatibus illum repellendus! Numquam, molestiae tempore 
          vitae, voluptatem repellendus corrupti dolor nisi aperiam est itaque, veniam doloremque atque tenetur! Lorem ipsum 
          dolor sit amet consectetur adipisicing elit. Debitis ab deserunt voluptatibus illum repellendus! Numquam, molestiae 
          tempore vitae, voluptatem repellendus corrupti dolor nisi aperiam est itaque, veniam doloremque atque tenetur! Lorem 
          ipsum dolor sit amet consectetur adipisicing elit. Debitis ab deserunt voluptatibus illum repellendus! Numquam, 
          molestiae tempore vitae, voluptatem repellendus corrupti dolor nisi aperiam est itaque, veniam doloremque atque tenetur!
          <FormatQuoteIcon />
          </p>
          <h4 data-aos="fade-right" data-aos-duration="400">Artist Name</h4>
          <h6 data-aos="fade-up" data-aos-duration="400">User Signature</h6>
          </Item>
    </Grid>
  </Grid>
</Box>
</div>
      </div>
  )
}
