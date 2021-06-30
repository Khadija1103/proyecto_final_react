import React from 'react';
import Facebook from "../../../assets/images/facebook.png";
import Gorjeo from "../../../assets/images/gorjeo.png";
import Instagram from "../../../assets/images/instagram.png";
import whatsapp from "../../../assets/images/whatsapp.png";
import Targ from "../../../assets/images/targ.png";

import './redes.css';

function redes() {
	
	return (
	  
     
     <div className="cajaredes">   
    
	 
	 <div className="redes">
   				<h3>NUESTRAS REDES: </h3>
				<div>
				<table>
						<tr>
						<td><a href="https://www.facebook.com/">
						<figure className="redes"><img src={Facebook} alt="..."/></figure>
						</a></td>
						<td><a href="https://twitter.com/">
						<figure className="redes"><img src={Gorjeo}  alt="..."/></figure>
						</a></td>
						<td><a href="https://instagram.com/">
						<figure className="redes"><img src={Instagram}  alt="..."/></figure>
						</a></td>
						<td><a href="https://whatsapp.com/">
						<figure className="redes"><img src={whatsapp}  alt="..."/></figure>
						</a></td>
						</tr>
				</table>
			</div>
		</div>
		<div className="sistpago">
			<h3>SISTEMAS  DE PAGO:</h3>
			
			<a href="https://colombia.payu.com/"><img src={Targ}  alt="350"/></a>
			
			</div>
			
			
			<div className="polpago">  
			
			<h3>POLITICAS DE PAGO:</h3>
			<p>Todos los derechos del sitio están reservados por el IRB y la reproducción, distribución o
			transmisión de todo, o parte del sitio, ya sea mediante fotocopia o almacenamiento en cualquier
			medio por medios electrónicos u otros (excepto cuando sea para su propio uso no comercial y en
			cumplimiento de las condiciones aplicables al mismo detalladas y establecidas más adelante), sin
			el permiso escrito del International Rugby Board, están prohibidas. </p>
			
			</div>
     
      
        </div>
    );
    
  }
 

 
export default redes;