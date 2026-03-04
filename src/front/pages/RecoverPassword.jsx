import { useState } from "react";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const RecoverPassword = () => {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    console.log(email)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")

        try {

            const response = await fetch(`${BACKEND_URL}/api/user/forgot-password`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    email: email
                })
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
        <div className="container d-flex justify-content-center flex-column mt-4">


            <div className="border container rounded-4 py-4 shadow" style={{ width: "450px" }}>
                <h2 className="text-center">Recuperar Contraseña</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="introduce tu email"
                        value={email}
                        onChange={(e) => (setEmail(e.target.value))}
                        required
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? "Enviando..." : "Enviar"}
                    </button>
                </form>

                {message && <p>{message}</p>}
            </div>

        </div>
    )
}