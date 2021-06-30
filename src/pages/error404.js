import React from 'react';
import ReactDOM from 'react-dom';

import Header from "../components/Header/header";
import Nav from "../components/nav/nav";
import Error404 from "../components/error404/error404";
import Footer from "../components/footer/footer";



function Cajaerror404() {
  return (
    <div>
     <Header />
     <Nav />
     <Error404 />
     <Footer />

     </div>
  );
}

export default Cajaerror404;

