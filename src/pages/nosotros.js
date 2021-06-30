import React from 'react';
import ReactDOM from 'react-dom';

import Header from "../components/Header/header";
import Nav from "../components/nav/nav";
import Cajanosotros from "../components/cajanosotros/sectionnosotros";
import Footer from "../components/footer/footer";



function Nosotros() {
  return (
    <div>
     <Header />
     <Nav />
     <Cajanosotros />
     <Footer />

     </div>
  );
}

export default Nosotros;

