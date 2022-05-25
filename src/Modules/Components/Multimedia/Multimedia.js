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
      <h5>Corre per l'espai</h5>
      <p>Curses ràpides molt emocionants</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"Images/Thumbnail_One.png"}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Escolleix entre diverses naus</h5>
      <p>Escolleix la nau que més t'agradi.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"Images/Thumbnail_Three.png"}
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
	
  </>
  )
}
