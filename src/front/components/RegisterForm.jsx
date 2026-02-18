import { useState } from "react"
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import "./RegisterForm.css";

export const RegisterForm = () => {
    const { store, dispatch } = useGlobalReducer()

    const [registerData, setRegisterData] = useState({
        fullName: "",
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
                    <label className="register-label">Nombre Completo</label>
                    <input
                        type="text"
                        className="register-input"
                        name="fullName"
                        value={registerData.fullName}
                        onChange={handleChange}
                        required
                    />

                    <label className="register-label">Correo Electrónico</label>
                    <input
                        type="email"
                        className="register-input"
                        name="email"
                        value={registerData.email}
                        onChange={handleChange}
                        required
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
                        {store.loading ? "Registrando..." : "Crear Cuenta"}
                    </button>
                </form>

                <div className="register-footer">
                    <small>
                        ¿Ya tienes cuenta? <Link to={"/single/"} className="register-link">Inicia sesión</Link>
                    </small>
                </div>
            </div>
        </div>
    )
}
