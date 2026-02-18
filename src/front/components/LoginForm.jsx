import { useState } from "react"
import { Link } from "react-router-dom"
import "./LoginForm.css";


export const LoginForm = ({ onSubmit, error = null }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})

    const validate = () => {
        const newErrors = {}  // contante que recibe objeto con posibles errores
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/   // regla simple de validacion de emails

        if (!email) {
            newErrors.email = "Email obligatorio"
        } else if (!emailRegex.test(email)) {  // si email no está vacio pero no cumple formato
            newErrors.email = "Introduce email válido"
        }

        if (!password) {
            newErrors.password = "Contraseña obligatoria"
        }
        return newErrors  // retorna errores encontrados. Si no hay errores obj vacio {}

    }

    const handleSubmit = e => {
        e.preventDefault()


        const validationErrors = validate()

        if (Object.keys(validationErrors).length > 0) {  // hay errores
            setErrors(validationErrors)
            return
        }

        setErrors({})
        onSubmit({ email, password })


    }
    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h3 className="login-title">Inicia sesión</h3>

                <form className="login-form" onSubmit={handleSubmit} noValidate>
                    <label className="login-label">Email</label>
                    <input
                        type="email"
                        className={`login-input ${errors.email ? "invalid" : ""}`}
                        placeholder="usuario@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <div className="login-error">{errors.email}</div>}

                    <label className="login-label">Contraseña</label>
                    <input
                        type="password"
                        className={`login-input ${errors.password ? "invalid" : ""}`}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <div className="login-error">{errors.password}</div>}

                    <button type="submit" className="login-btn">
                        Iniciar sesión
                    </button>
                </form>

                <div className="login-footer">
                    <small>
                        ¿No tienes cuenta?{" "}
                        <Link to="/register" className="login-link">
                            Únete!
                        </Link>
                    </small>
                </div>
            </div>
        </div>

    )
}


