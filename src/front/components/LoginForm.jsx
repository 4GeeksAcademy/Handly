import { useState } from "react"


export const LoginForm = ({ onSubmit, loading = false, error = null }) => {
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
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card shadow-sm border-0" style={{ width: "100%", maxWidth: "420px" }}>
                <div className="card-body p-4">
                    <h2 className="text-center text-primary mb-3">
                        Health Support
                    </h2>
                    <p className="text-center text-muted mb-4">
                        Inicia sesión en tu cuenta
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                        {/* EMAIL */}
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                placeholder="usuario@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                            />
                            {errors.email && (
                                <div className="invalid-feedback">{errors.email}</div>
                            )}
                        </div>

                        {/* PASSWORD */}
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                            />
                            {errors.password && (
                                <div className="invalid-feedback">{errors.password}</div>
                            )}
                        </div>

                        {/* ERROR BACKEND */}
                        {error && (
                            <div className="alert alert-danger py-2 text-center">
                                {error}
                            </div>
                        )}

                        {/* BUTTON */}
                        <div className="d-grid mt-4">
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                        Entrando...
                                    </>
                                ) : (
                                    "Iniciar sesión"
                                )}
                            </button>
                        </div>
                    </form>

                    {/* FOOTER */}
                    <div className="text-center mt-4">
                        <small className="text-muted">
                            ¿No tienes cuenta?{" "}
                            <a href="/register" className="text-primary fw-semibold">
                                Regístrate
                            </a>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoginForm