import Footer from 'components/Footer'
import Header from 'components/Header'
import ParallaxContainer from 'components/ParallaxContainer'
import ScrollTopWidget from 'components/ScrollTopWidget'
import React, { useRef, useState } from 'react'

export default function index () {
  const [sticky, setSticky] = useState(true)
  const [state, setstate] = useState({ topValue: 0 })
  const topRef = useRef()

  // useScrollPosition(
  //   ({ prevPos, currPos }) => {
  //     const isShow = currPos.y > -120
  //     //if (isShow !== sticky) setSticky(isShow)
  //   },
  //   [sticky]
  // )

  const handleScrollTop = () => {
    topRef.current.scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <>
      <div ref={topRef}></div>
      <Header />
      <ParallaxContainer />
      <Footer />
      <ScrollTopWidget handleScroll={handleScrollTop} position={sticky} />

      <div className='buy-theme alt-font md-display-none'>
        <a target='_blank'>
          <i className='ti-shopping-cart'></i>
          <span>Buy Theme</span>
        </a>
      </div>
      <div className='all-demo alt-font md-display-none'>
        <a>
          <i className='ti-email'></i>
          <span>Quick Question?</span>
        </a>
      </div>
    </>
  )
}
