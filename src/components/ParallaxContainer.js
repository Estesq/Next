import React, { useState } from 'react'
import './ParallaxContainer.scss'
import ParallaxSlides from './ParallaxSlides'

const ParallaxContainer = () => {
  const [state, setstate] = useState([
    {
      image: '/images/slider/portfolio-item57.jpg',
      text: "Lisa's Schweizer Branding"
    },
    {
      image: '/images/slider/portfolio-item58.jpg',
      text: 'Osteopathie Corporate'
    },
    {
      image: '/images/slider/portfolio-item59.jpg',
      text: 'Focus Business Illustrationen'
    },
    {
      image: '/images/slider/portfolio-item60.jpg',
      text: 'The Swearing Collection'
    },
    {
      image: '/images/slider/portfolio-item61.jpg',
      text: 'Complexity Made Simple'
    },
    {
      image: '/images/slider/portfolio-item62.jpg',
      text: 'Lapin Blanc Absinthe'
    }
  ])
  return state.map((el, index) => (
    <ParallaxSlides key={index} image={el.image} text={el.text} />
  ))
}

export default ParallaxContainer
