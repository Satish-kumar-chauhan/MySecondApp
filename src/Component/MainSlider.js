import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import allPaintings from '../allPanting.json'

export default function MainSlider() {
  return (
    <div className='MainSlider'>
    <div className='container-fluid'>
    <Carousel>
      {allPaintings.map((p,index)=>{
        return <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={`${p.imgSrc}?text=First slide&bg=373940`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      })}
  
</Carousel>
</div>
</div>
  )
}
