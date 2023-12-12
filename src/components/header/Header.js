import React from 'react';
import CTA from '../CTA';
import './header.css'
import Me from '../../assets/profile.jpg';
import Social from './Social';

const Header = () => {
  return (
    <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
         
          <h1 className='clr'>Abir Ahmmed Chowdhury</h1>
          <h5>React developer, exploring full-stack development. <br />Enthusiastic about <br /> creating seamless web experiences.</h5>
          <CTA/>
          <Social/>
          <div className='container-me'>
            <img src="https://i.ibb.co/dPRHX0D/me.jpg" alt="me" className='me'/>
          </div>
          <a href="#contact" className='scroll_down'>Scroll down</a>
        </div>
      
    </header>
  );
};


export default Header;