import React from 'react';
import classNames from 'classnames/bind';
import './About.scss';
import scrollDirection from '../App.js';

const styles = {
  success: 'imagen-about',
  error: 'imagen',
  warning: 'container-fluid',
  scroll: 'scroll'
};

let cx = classNames.bind(styles);

let className = cx({
  success: true, 
  error: true,
  warning: true,
  scroll: false
});




const about = (props) => {
  return (
    <React.Fragment>
   <div  className={
    
      className
      
    
  }></div>
  <div className="container about"> 
          <div className="row">
            <div className="texto col-sm-12">
                <p>Sinécdoque nace como un delta, formado por los sedimentos
                que el río trae. Delta que se divide en múltiples brazos, que
                se unen y separan, para volver a unirse en un cúmulo de canales
                activos y canales estancos.</p>
                <p>El propósito de la revista es convocar a autorxs contemporánexs
                en la publicación de sus producciones.</p>
                <p>Sinécdoque reune artículos originales, dossiers, avances de
                investigación, producciones literarias, narrativa breve, poesía, fotografías,
                reseñas bibliográficas y proyectos de contenido audiovisual
                entre otros. Lxs autorxs tendrán la libertad de compartir sus
                intereses actuales sin limitaciones de extensión o contenido.</p>
                <p>La organización de Sinécdoque es horizontal. Su ética de
                trabajo es colectiva. Y la convocatoria, federal. Cada autor escribe
                a nombre propio.</p>
            </div>
         </div>
         </div>
         </React.Fragment>
      
  )   
         
}


export default about;