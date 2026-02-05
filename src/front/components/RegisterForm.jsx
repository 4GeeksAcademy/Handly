import { useState } from "react"
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const RegisterForm = () => {

    const { store, dispatch } = useGlobalReducer()
    
    const [registerData, setRegisterData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "doctor",
    })

    const handleChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (registerData.password !== registerData.confirmPassword) {
            alert("Las contraseñas no coinciden")
            return  
        } 

        dispatch({
            type: "set_loading",
            payload: true
        })  
        // aqui va la lógica para enviar al back
    }

    return (

        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow">
                            <div className="card-body">
                                <div class="text-center mb-3">
                                    <div class="d-inline-block text-primary fw-bold fs-4">
                                        ♥
                                    </div>
                                </div>
                                <h3 className="text-center mb-4">Registro de Profesionales</h3>

                                {store.error ? (
                                    <div className="alert alert-danger">
                                        {store.error}
                                      </div>
                                ) : null}

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Nombre Completo</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="fullName"
                                            value={registerData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Correo Electrónico</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={registerData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Rol</label>
                                            <select
                                                className="form-select"
                                                name="role"
                                                value={registerData.role}
                                                onChange={handleChange}
                                            >
                                                <option value="doctor">Médico</option>
                                                <option value="nurse">Enfermero/a</option>
                                                <option value="specialist">Especialista</option>
                                                <option value="admin">Administrador</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Contraseña</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                value={registerData.password}
                                                onChange={handleChange}
                                                required
                                                minLength="8"
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Confirmar Contraseña</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="confirmPassword"
                                                value={registerData.confirmPassword}
                                                onChange={handleChange}
                                                required
                                                minLength="8"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-check mb-3">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="terms"
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="terms">
                                            Acepto los términos y condiciones
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100">
                                             {store.loading ? "Registrando..." : "Crear Cuenta"}
                                    </button>
                                </form>

                                <div className="text-center mt-3">
                                    <small>
                                        ¿Ya tienes cuenta?  <Link to={"/single/"}>Inicia sesión</Link>
                                    </small>
                                </div>
                            </div>
                        </div>

                        <p className="text-center mt-3 text-muted">
                            Registro exclusivo para profesionales de la salud autorizados
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

