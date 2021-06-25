import React from 'react';
import './Variables.scss';
import './App.scss';
import Header from './Header/Header.js';
import Content from './Content/Content.js';
import Footer from './Footer/Footer.js';
import className from './About/About.js';
import cx from './About/About.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import useScrollDirection from './useScrollDirection.js';
const fawes = document.createElement("script");
fawes.src = "https://kit.fontawesome.com/0fe20c6fd1.js";
document.head.appendChild(fawes);


window.onload = () => {
     
let burguer = document.getElementsByClassName("burguer")[0];
let menuMobile =  document.getElementsByClassName("menu-mobile")[0];
let iconoBurguer = burguer.getElementsByTagName("i")[0];
let linkBurguer = document.getElementsByClassName("burguer")[0].firstElementChild;
burguer.onclick = () => {
  if (menuMobile.style.display != 'block') {
    menuMobile.style.display = "block";
    linkBurguer.classList.add("open");
  } else {
    menuMobile.style.display = "none";
    linkBurguer.classList.remove("open");
  }
}
  

}

 

function App() {
  const scrollDirection = useScrollDirection();

  
  return (
    <div className="App">
      <Header />
      <div id="content">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById('root');
export default App;


