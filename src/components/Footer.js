import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer-strip padding-50px-tb sm-padding-30px-tb'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-3 text-center text-lg-left sm-margin-20px-bottom'>
            <a href='index.html'>
              <img
                className='footer-logo'
                src='/images/logo.png'
                data-rjs='/images/logo@2x.png'
                alt='Pofo'
              />
            </a>
          </div>
          <div className='col-md-6 text-center text-small alt-font sm-margin-10px-bottom'>
            &copy; 2019 POFO is Proudly Powered by{' '}
            <a href='http://www.themezaa.com' target='_blank' title='ThemeZaa'>
              ThemeZaa
            </a>
            .
          </div>
          <div className='col-md-3 text-center text-lg-right'>
            <div className='social-icon-style-8 d-inline-block vertical-align-middle'>
              <ul className='small-icon mb-0'>
                <li>
                  <a
                    className='facebook'
                    href='https://www.facebook.com/'
                    target='_blank'
                  >
                    <i className='fab fa-facebook-f' aria-hidden='true'></i>
                  </a>
                </li>
                <li>
                  <a
                    className='twitter'
                    href='https://twitter.com/'
                    target='_blank'
                  >
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a
                    className='google'
                    href='https://plus.google.com'
                    target='_blank'
                  >
                    <i className='fab fa-google-plus-g'></i>
                  </a>
                </li>
                <li>
                  <a
                    className='dribbble'
                    href='https://dribbble.com/'
                    target='_blank'
                  >
                    <i className='fab fa-dribbble mr-0' aria-hidden='true'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
