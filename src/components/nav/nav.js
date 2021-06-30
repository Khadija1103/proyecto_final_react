


import './nav.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link, NavLink, Redirect} from "react-router-dom";

function Nav() {
  return (
  
     <nav className="menu">
  <ul>

      <li><NavLink to="/home" activeClassName="active" ><i className="fa fa-home"/> Inicio</NavLink></li>
      

   <li><NavLink to="/cursos" activeClassName="active" ><i className="fa fa-puzzle-piece"/>  Cursos</NavLink>
   <ul className="submenu">
      <li><Link to="Carpintería"> Carpintería</Link></li>
      <li><Link to="Peluquería"> Peluquería</Link></li>
    </ul>
  </li>


<li><NavLink to="/nosotros" activeClassName="active" ><i className="fa fa-suitcase"/> Nosotros</NavLink></li>

  
  <li><NavLink to="/contactenos" activeClassName="active"><i className="fa fa-envelope-o"/>  Contáctenos</NavLink></li>
</ul>

</nav>
  );
}


export default Nav;

