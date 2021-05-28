import React from 'react'
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <h2>melva11616@gmail.com</h2>
        <section class='social-media'>
       
        <div class='social-media-wrap'>
        
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            Mel Cleaning Services <i className="fas fa-hand-sparkles"></i>
            </Link>
          </div>
          <small class='website-rights'>Mel Cleaning Services © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
                <a href="https://facebook.com"><i class='fab fa-facebook-f' /></a>
             
              
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
            <a href='www.facebook.com' />
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
            <a href="https://google.com"><i  class='fab fa-youtube'/></a>
            
              
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
      </div>
    )
}

export default Footer
