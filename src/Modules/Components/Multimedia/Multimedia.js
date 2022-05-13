import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'


export default function Multimedia() {

  const generate = () => {
    const num = parseInt(Math.random()*1000);
    return num;
  }

  return (
	  <>
	


    
  <Carousel variant="light">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"Images/Thumbnail_two.png"}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"Images/Thumbnail_One.png"}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"Images/Thumbnail_Three.png"}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
	
  </>
  )
}
