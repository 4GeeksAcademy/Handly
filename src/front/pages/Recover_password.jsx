import { Link } from "react-router-dom"

export function Recover_password() {

    return (
        <div className="container d-flex justify-content-center flex-column mt-4">
            <div className="d-flex justify-content-center ">
                <img className=" rounded " src={logo} alt="logo" style={{ width: "50px" }} />
            </div>
            <h1 className="text-center">Health Support</h1>
            <p className="text-center">Sistema de Gestión Médica</p>
            <div className="border container rounded-4 py-4 shadow" style={{ width: "450px" }}>
                <h2 className="text-center">Cambiar Contraseña</h2>
                <p className="text-center">Actualiza tu contraseña para mantener tu cuenta segura</p>
                <form>
                    <div className="mb-3">
                        <label for="currentPassword" className="form-label">Contraseña Actual</label>
                        <input type="password" className="form-control" id="currentPassword" aria-describedby="emailHelp" placeholder="Ingresa tu contraseña actual" />
                    </div>
                    <div className="mb-3">
                        <label for="newPassword" className="form-label">Nueva Contreseña</label>
                        <input type="password" className="form-control" id="newPassword" placeholder="Ingresa tu nueva contraseña" />
                    </div>
                    <div className="mb-3">
                        <label for="confirmPassword" className="form-label">Confirmar Nueva Contreseña</label>
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirmar tu nueva contraseña" />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mb-4">Confirmar Contraseña</button>
                    <Link className="text-center text-secondary text-decoration-none" href="/ " ><p>Cancelar</p></Link>
                </form>
            </div>

        </div>
    )
}