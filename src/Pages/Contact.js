import React from 'react'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ContactsIcon from '@mui/icons-material/Contacts';
import CreateIcon from '@mui/icons-material/Create';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Contact({pHead}) {
  return (
    <div className='PageBody Contact'>
      {pHead}
      <div className='container'>
        <div className='ContactSub'>
          <h4 data-aos="fade-down" data-aos-duration="400">Get In Touch</h4>
          <h4 data-aos="fade-up" data-aos-duration="400"><p>We're here to help and answer any question you might</p>
              <p>have. We look forward to hearing from you <SentimentSatisfiedAltIcon /></p>
          </h4>
        </div>
        <div className='ContactSubInner'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
                <Item data-aos="fade-up" data-aos-duration="400">
                <div className="contactDetails" >
                            <h3>Contact <ContactsIcon /></h3>
                            <address>
                                <h4>MyHuse</h4>
                                    <span><LocationOnIcon /> Address:</span>
                                    <p>Jubilee Tower B-35 & 36, Sector – 1 Noida (U.P.) – 201301 </p> 
                                    <span><PhoneIcon />  Phone No. :</span>
                                    <p>+91-7015462667</p>
                                    <span><EmailIcon /> Email :</span>
                                    <p>abc@gail.co.in</p>
                            </address>
                        </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={12} md={1} lg={1} xl={1} xxl={1}>
                {/* <Item></Item> */}
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Item data-aos="fade-up" data-aos-duration="400">
                <div className="writeToUs contactDetails">
                            <h3>Write To Us <CreateIcon /></h3>
                            <form action="">
                                <input type="text" name="" id="" placeholder="Enter Your Name" />
                                <input type="text" name="" id="" placeholder="Enter Your Mail"/>
                                <input type="text" name="" id="" placeholder="Enter Your Contact"/>
                                <input type="text" name="" id="" placeholder="Enter Your Message"/>
                                <button type="submit"><ChatBubbleIcon /> <label> Send Message</label></button>
                            </form>
                        </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
          </div>
      </div>
    </div>
  )
}
