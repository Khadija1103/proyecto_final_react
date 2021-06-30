
import logo from "../../assets/images/educAccion3.png";

import './header.css';
import Modallogin from'./modalinicio';


function Header() {
  return (

    <header className="row1 align  items-center text-center text-md-start">
    <div className="logo">
    <img className="img-fluid" src={logo} />   
    </div>

     <div id="botones" >
    <button className="boton1" type="submit" value="registro1"> Registrarse</button>
    <button type="submit" className="boton2" data-toggle="modal" data-target="#login"> Ingresar</button>
    </div>
    <Modallogin/> 
     </header>
 
  );
}


export default Header;

