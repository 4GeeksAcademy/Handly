import { useState } from "react"
import styles from "./RecoverPassword.module.css"
 
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
 
export const RecoverPassword = () => {
 
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
 
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")
 
        try {
            const response = await fetch(`${BACKEND_URL}api/user/forgot-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            })
 
            const data = await response.json()
            setMessage(data.msg)
        } catch (error) {
            console.log(error)
            setMessage("Error con la solicitud")
        }
 
        setLoading(false)
    }
 
    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h2 className={styles.title}>Recuperar contraseña</h2>
                <p className={styles.subtitle}>Te enviaremos un link a tu correo</p>
 
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        className={styles.input}
                        type="email"
                        placeholder="Tu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
 
                    <button className={styles.button} type="submit" disabled={loading}>
                        {loading ? "Enviando..." : "Enviar"}
                    </button>
                </form>
 
                {message && <p className={styles.message}>{message}</p>}
            </div>
        </div>
    )
}