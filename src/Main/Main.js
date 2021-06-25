import React from 'react';
import './Main.scss';
import {
  NavLink
} from "react-router-dom";



const main = (props) => {
  return <div className="container main">
          <div className="row">
          <NavLink to="/pyramids">
          
          <div className="hero-text">
            <h1>Exo and the<br />Pyramids of Chaos</h1>
            <p>Exo travels to a strange place call Earth to find the artifacts that can save his planet from extinction.</p>
          </div>
          </NavLink>  
         </div>
         </div>
         
}


export default main;