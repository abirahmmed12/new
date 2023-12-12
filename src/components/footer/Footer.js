import React from 'react';
import './footer.css'
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Abir Ahmmed Chowdhury</a>

      <ul className='permalinks'>
        <li><a href="#" >Home</a></li>
        <li><a href="#about" >About</a></li>
        <li><a href="#experience" >Experience</a></li>
        <li><a href="#services" >Services</a></li>
        <li><a href="#portfolio" >Portfolio</a></li>
        <li><a href="#testimonials" >Testimonials</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href=""><FaFacebookF/></a>
        <a href=""><AiFillLinkedin/></a>
        <a href=""><FaTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Abir Ahmed Chowdhury. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;