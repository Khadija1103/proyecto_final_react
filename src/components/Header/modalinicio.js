
import logo from "../../assets/images/educAccion3.png";

import './header.css';



function Modallogin() {
  return (
<div className="modal fade" id="login" tabindex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      
      <div className="modal-body">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">X</button>
       <form className="formulario">
  <div className="form-group">
    <label className="titulomodal" for="exampleInputEmail1">Inicio de Sesión</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="     Usuario"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1"></label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="     Contraseña"/>
  </div>

  <label class="custom-control custom-radio" id="radio">
            <input id="radio1" type="radio" required=""  name="button" className="custom-control-input" value="1"/>
            <span className="custom-control-label">Soy Alumno</span>
          </label>
          <label className="custom-control custom-radio">
            <input id="radio2" type="radio" required=""  name="button" className="custom-control-input" value="2"/>
            <span className="custom-control-label">Soy Profesor</span>
          </label>

  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Recordarme</label>
  </div>
  <button type="submit" className="boton3" onClick={()=>{alert("Bienvenido")}}>Ingresar</button>
  <a href="contrasena.html" className="olvide"><label>Olvidé mi contraseña</label></a> 

</form>
      </div>
    </div>
  </div>
</div>
  );
}


export default Modallogin;


