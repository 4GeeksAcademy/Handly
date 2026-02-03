import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"


export function Change_password(){



    return(
       <div className="container d-flex justify-content-center flex-column mt-4">
                   <div className="d-flex justify-content-center ">
                       <img className=" rounded " src={logo} alt="logo" style={{ width: "50px" }} />
                   </div>
                   <h1 className="text-center">MediCare App</h1>
                   <p className="text-center">Sistema de Gestión Médica</p>
                   <div className="border container rounded-4 py-4 shadow" style={{ width: "450px" }}>
                       <h2 className="text-center">Recuperar Contraseña</h2>
                       <p className="text-center">Ingresa tu correo electronico y te enviaremos un enlace para restablecer tu contraseña</p>
                       <form>
                           <div className="mb-3">
                               <label for="email" className="form-label">Correo Electronico</label>
                               <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="doctor@ejemplo.com"/>
                           </div>
                           
                           
                           <button type="submit" className="btn btn-primary w-100 mb-4">Enviar</button>
                           <Link className="text-center text-secondary text-decoration-none" href="/ " ><p>Volver</p></Link>
                       </form>
                   </div>
       
               </div>
    )
}