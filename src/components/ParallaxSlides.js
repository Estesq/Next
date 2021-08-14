import React from 'react'

const ParallaxSlides = props => {
  return (
    <section
      className='p-0 parallax sm-background-image-center cover-background'
      data-stellar-background-ratio='0.5'
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className='container-fluid one-third-screen position-relative lg-height-600px md-height-700px sm-height-450px'>
        <div className='slider-typography'>
          <div className='slider-text-middle-main'>
            <div className='slider-text-bottom text-left padding-70px-left sm-padding-15px-all'>
              <span className='alt-font text-uppercase font-weight-600 text-extra-small opacity6 text-extra-dark-gray letter-spacing-1 margin-25px-bottom sm-no-margin-bottom d-table d-md-block md-opacity10 parallax-category-text'>
                Branding + Identity + Brochure
              </span>
              <a
                href='single-project-page-05.html'
                className='text-extra-large alt-font text-extra-dark-gray bg-white parallax-title mb-0'
              >
                {props.text}
              </a>
              <div className='clear-both'></div>
              <a
                href='single-project-page-05.html'
                className='btn btn-black btn-very-small margin-70px-bottom sm-no-margin-bottom'
              >
                Launch Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ParallaxSlides
