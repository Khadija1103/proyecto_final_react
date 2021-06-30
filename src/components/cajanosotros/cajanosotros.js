import React from 'react';
import ReactDOM from 'react-dom';

import './cajanosotros.css';

function Cajanosotros(props) {
  return (

    
    <div className="card">

    

    <div className="card-body">
    <h2 className="card-title">{props.titulo}</h2><br/>
     
        <p className="card-text">{props.desc}</p><br/>
         <img src={props.imgsserv} className= "img-fluid" alt="..."/>
      </div>
    </div>

   
  );
}

export default Cajanosotros;