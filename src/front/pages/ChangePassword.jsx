import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const ChangePassword = () => {

    const { token } = useParams()
    console.log(token)
    const navigate = useNavigate()

    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password.length < 8) {
            setMessage("La contraseña debe de tener al menos 8 caracteres")
            return
        }
        setLoading(true)
        setMessage("")

        try {
            const response = await fetch(`${BACKEND_URL}api/user/reset-password`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    token,
                    new_password: password
                })
            })
            const data = await response.json()

            if (response.ok){
                setPassword("")
                setMessage("Contraseña actualizada correctamente")
                setTimeout(() => navigate("/login"), 2000)
            } else {
                setMessage(data.msg)
            }
        } catch (error) {
            setMessage("Error al cambiar contraseña")
        }

        setLoading(false)

    }




    return(
      <div>
      <h2>Nueva contraseña</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Nueva contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Actualizando..." : "Cambiar contraseña"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
    )
}