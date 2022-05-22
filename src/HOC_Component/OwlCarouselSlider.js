import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from 'react-bootstrap/Card';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function OwlCarouselSlider({itemData,viewItem}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <OwlCarousel className='owl-theme' items={matches?1:viewItem} autoplay={true} loop margin={10} dots={matches?true:false}>
        {itemData.map((item,i)=>{
            return <div className='item' key={i}>
               <Card data-aos="fade-up" data-aos-duration="500">
                    <Card.Img variant="top" src={`${item.imgSrc}`} />
                    {/* <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body> */}
                    </Card>
            </div>
        })}
</OwlCarousel>
  )
}
