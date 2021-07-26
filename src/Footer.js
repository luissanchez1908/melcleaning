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
                <a href="https://www.facebook.com/people/Mel-Cleaning/100068896783682/"><i class='fab fa-facebook-f' /></a>
             
              
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <a href="https://www.instagram.com/melcleaning365/"><i class='fab fa-instagram' /></a>
           
            </Link>
           
            <Link
              class='social-icon-link gmail'
              to='/'
              target='_blank'
              aria-label='Gmail'
            >
              <a href="https://www.gmail.com"><i class='fas fa-mail-bulk' /></a>
              
            </Link>
            <Link
              class='social-icon-link phone'
              to='/'
              target='_blank'
              aria-label='Phone'
            >
              <a href="tel:9087648409"><i class='fas fa-phone-square' /></a>
              
            </Link>
          </div>
        </div>
      </section>
      </div>
    )
}

export default Footer
