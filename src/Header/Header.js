import React from 'react';
import {
  HashRouter,
  Route 
} from "react-router-dom";

import './Header.scss';
import image from '../images/logo.png';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const header = (props) => {
  
  return (
  
  <header>
    <div className="container">
      <div className="row">
        <div className="logo col-lg-2 col-10">
          <Link to="/"><img src={image} /></Link> 
        </div>
      <div className="burguer col-lg-2 col-2">
       <a href="#"><i className="fas fa-bars"></i><i className="fas fa-times"></i></a>
       <ul className="menu-mobile">
          <li><Link activeclass="active" to="about" smooth={true} duration={500}>Nosotros</Link></li>
          <li><Link activeclass="active" to="downloads" smooth={true} duration={700}>La Revista</Link></li>
          <li><Link activeclass="active" to="contact" smooth={true} duration={1000}>Contacto</Link></li>
        </ul>
      </div>
      <nav className="col-lg-10">
             <ul>
               <li><Link activeclass="active" to="about" smooth={true} duration={500}>Nosotros</Link></li>
               <li><Link activeclass="active" to="downloads" smooth={true} duration={700}>La Revista</Link>
               </li>
               <li><Link activeclass="active" to="contact"  smooth={true} duration={1000}>Contacto</Link></li>
             </ul>
           </nav> 
      </div>
      </div>
      </header>
   
  )        
}

export default header;


