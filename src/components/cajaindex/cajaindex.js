import Video from './video/videos'; 
import Carrucel from './carrucel/carrucel'; 
import Redes from './redes/redes'; 
import Tarjetas from './tarjetas/tarjetas'; 
import './cajaindex.css';


function Cajaindex() {
  return (
  
  <div className="cajaindex">

 <Video/>
 <Carrucel/>
 <Tarjetas/>
 <Redes/>
</div>
  );
}


export default Cajaindex;

