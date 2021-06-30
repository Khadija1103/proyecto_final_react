import React from 'react';
import Carpinteria from "../../../assets/images/carpenter-4015109_640.jpg";
import Peluqueria from "../../../assets/images/curso-peluqueria.jpg";
import './tarjetas.css';

function tarjetas() {
	
	return (
	  
        <div>
		<article className="cajapimag">
			<div className="card1">
					<img src={Carpinteria}  className="card-img-top" alt="..."/>
				<div className="card-body1">
						<h2 className="card-title1"><strong>Curso de carpinteria</strong> </h2><br></br>
						<p className="texto">El curso de carpintería tiene el propósito que el estudiante conozca y
								comprenda la naturaleza de la madera y sus derivados, con el fin de entender cómo se
								puede modificar su materia prima, para crear diferentes tipos de objetos esenciales al
								desarrollo humano.</p>
						<button className="boton1"><a href="carpinteria.html"><strong>Inicio</strong></a></button>
				</div>
		 	</div>
	 	</article>


		<article className="cajapimag">
			<div className="card1">
				<img src={Peluqueria}  className="card-img-top" alt="..."/>
					<div className="card-body1">
						<h2 className="card-title1"><strong>Curso de peluqueria</strong> </h2><br></br>
						<p className="texto">El curso de peluqueria tiene el propósito que el estudiante conozca y
							comprenda todos los conocimientos básicos sobre el cuidado, corte, estilismo,
							coloración, técnicas, materiales y utensilios necesarios para obtener los mejores
							resultados.</p>
						<button className="boton1"><a href="peluqueria.html"><strong>Inicio</strong></a></button>
					</div>
			</div>
		</article>
	  </div>
    );
    
  }
 

 
export default tarjetas;