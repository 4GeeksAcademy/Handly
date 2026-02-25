import { useState } from "react"
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import "./RegisterForm.css";

export const RegisterForm = ({ onSubmit, error, loading, setView }) => {
    const { store, dispatch } = useGlobalReducer()


    const [registerData, setRegisterData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
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

        onSubmit(registerData)

        // lógica para enviar al backend
    }

    return (
        <div className="register-wrapper">
            <div className="register-card">
                <h3 className="register-title">Registro</h3>

                {store.error && (
                    <div className="register-error">{store.error}</div>
                )}

                <form className="register-form" onSubmit={handleSubmit}>
                    <label className="register-label">Nombre</label>
                    <input
                        type="text"
                        className="register-input"
                        name="firstName"
                        value={registerData.firstName}
                        onChange={handleChange}
                        required
                        autoComplete="new-password"
                    />

                    <label className="register-label">Apellido</label>
                    <input
                        type="text"
                        className="register-input"
                        name="lastName"
                        value={registerData.lastName}
                        onChange={handleChange}
                        required
                        autoComplete="new-password"
                    />

                    <label className="register-label">Correo Electrónico</label>
                    <input
                        type="email"
                        className="register-input"
                        name="email"
                        value={registerData.email}
                        onChange={handleChange}
                        required
                        autoComplete="new-password"
                    />

                    <div className="register-row">
                        <div className="register-col">
                            <label className="register-label">Contraseña</label>
                            <input
                                type="password"
                                className="register-input"
                                name="password"
                                value={registerData.password}
                                onChange={handleChange}
                                required
                                minLength="8"
                                autoComplete="new-password"
                            />
                        </div>

                        <div className="register-col">
                            <label className="register-label">Confirmar Contraseña</label>
                            <input
                                type="password"
                                className="register-input"
                                name="confirmPassword"
                                value={registerData.confirmPassword}
                                onChange={handleChange}
                                required
                                minLength="8"
                                autoComplete="new-password"
                            />
                        </div>
                    </div>

                    <div className="register-checkbox">
                        <input
                            type="checkbox"
                            id="terms"
                            className="register-check"
                            required
                        />
                        <label htmlFor="terms" className="register-check-label">
                            Acepto los términos y condiciones
                        </label>
                    </div>

                    <button type="submit" className="register-btn">
                        Crear Cuenta
                    </button>
                </form>

                <div className="register-footer">
                    <small>
                        ¿Ya tienes cuenta?
                        <span onClick={() => setView("login")} className="login-link">
                            Iniciar Sesion!
                        </span>
                    </small>
                </div>
            </div>
        </div>
    )
}
