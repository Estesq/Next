import React from 'react'
import './ScrollTopWidget.scss'

const ScrollTopWidget = props => {
  return (
    <a
      className='scroll-top-arrow'
      style={{
        opacity: props.position ? 1 : 0,
        transition: 'opacity 400ms ease-in'
      }}
      onClick={props.handleScroll}
    >
      <i className='ti-arrow-up'></i>
    </a>
  )
}

export default ScrollTopWidget
