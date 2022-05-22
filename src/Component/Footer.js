import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import PaymentIcon from '@mui/icons-material/Payment';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {FaFacebookF} from 'react-icons/fa'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <div className='footerMain'>
    <div className="container">
    <div className="footerBox">
    <div className="row">
        <div className="col-md-3 col-lg-3 col-xl-3 col-12">
            <div className="footerDepInner" data-aos="fade-right" data-aos-duration="400">
                <h3 >ABOUT MyHuse</h3>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis quia repudiandae ipsum libero, illum laborum excepturi molestias doloremque soluta nisi delectus sunt fugit provident debitis odio temporibus fuga rem.</p>
            </div>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 col-12">
            <div className="footerDepInner" data-aos="fade-up" data-aos-duration="500">
                <h3>MY ACCOUNT</h3>
                <ul>
                    <li ><PaymentIcon /> Log In/SignUp</li>
                    <li ><ShoppingCartIcon /> Viewcart/ Checkout</li>
                </ul>
            </div>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 col-12">
            <div className="footerDepInner" data-aos="fade-up" data-aos-duration="600">
                <h3 >CUSTOMER SERVICE</h3>
                <ul>
                    <li ><LocalShippingIcon /> Shipping & Return</li>
                    <li > Packaging & Delivery Policy</li>
                    <li ><QuestionMarkIcon /> FAQ's For Artists</li>
                    <li ><QuestionMarkIcon /> FAQ's For Buyers</li>
                    <li > Terms & Conditions</li>
                    <li ><PaymentIcon /> Purchasing & Payments</li>
                </ul>
            </div>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 col-12">
            <div className="footerDepInner" data-aos="fade-left" data-aos-duration="400">
            <h3 >QUICK CONTACT</h3>
            <h5>Address:</h5>
            <address>
                <p ><LocationOnIcon /> 61-B, Pocket 6/2, Nasirpur Sector 1A
                    Dwarka, New Delhi 110045 (INDIA)</p>
                <p ><PhoneIcon /> Contact: +91-0000 000 000</p>
                <p ><AccessTimeIcon /> (Monday - Saturday) from 10:00 to 18:00 hrs - IST)</p>
                <p ><EmailIcon /> info@abc.com</p>
            </address>
          </div>
        </div>
        </div>
    </div>
    <div className="socialLinks">
        <p className="copyRight">copyright ©2022 All Right Reserved By MyHuse</p>
        <div className="socialLinksRef">
        <a href="#"><FaFacebookF  /></a>
        <a href="#"><TwitterIcon  /></a>
        <a href="#"><InstagramIcon /></a>
        <a href="#"><YouTubeIcon /></a>
    </div>
    </div>
    </div>


<div id="scrollTop">
    <i className="fas fa-chevron-up"></i>
</div>
</div>
  )
}
