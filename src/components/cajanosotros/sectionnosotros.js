import quienes from "../../assets/images/estudio.webp";
import mision from "../../assets/images/images1.jpg";
import vision from "../../assets/images/estudio2.webp";
import Cajanosotros from "../../components/cajanosotros/cajanosotros";

const nosotros=[
{
id:1,
title:'QUIENES SOMOS: ',
imgs:quienes,
description:'Somos una plataforma de educación virtual donde personas de diferentes áreas comparten sus conocimientos a través de una gran variedad de cursos virtuales, todas las personas que quieran aprender acerca de algún tema tienen la oportunidad de tomar cursos virtuales de gran calidad a bajos precios en una plataforma completamente dinámica y a su propio ritmo.',
},

{
id:2,
title:'MISIÓN:',
imgs:mision,
description:'Servir de canal de comunicación entre estudiantes (quienes buscan adquirir nuevos conocimientos) y profesores (quienes buscan compartir sus conocimientos) donde todos se beneficiarán de la plataforma teniendo acceso a una educación virtual de manera dinámica y didáctica.',
},

{
id:3,
title:'VISIÓN:',
imgs:vision,
description:'Consolidarnos como una de las plataformas de educación virtual con mayor reconocimiento en el mercado Latinoamericano para el año 2025 garantizando una siempre una educación asequible y de calidad para todos nuestros estudiantes, así como también una buena opción de ingresos adicionales para nuestros profesores colaboradores.',
}
]


function Sectionnosotros() {
  return (
  
  <section id="nosotros" className="overflow-hidden">

 <h1 className="titulo">EDUCACCIÓN<br/>Educación Activa y Dinámica</h1>

   
    <div className="row">
{
  nosotros.map(serv=>(
      
    <div className="col-12 col-md-4" key={serv.id}>

    < Cajanosotros imgsserv={serv.imgs} titulo={serv.title} desc={serv.description}/>
    </div>

    ))
   
}
   
   </div>
   </section>
  );
}

export default Sectionnosotros;