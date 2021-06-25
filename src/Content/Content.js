import React from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import './Content.scss';
import About from '../About/About.js';
import Downloads from '../Downloads/Downloads.js';
import Contact from '../Contact/Contact.js';
import Main from '../Main/Main.js';

const content = (props) => {
  return (
    <div>
      <About />
      <Downloads />
      <Contact />
  </div>
   );   
}

export default content;