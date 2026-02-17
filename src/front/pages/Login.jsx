import { useNavigate } from "react-router-dom"
import {LoginForm} from "../components/LoginForm"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const LoginPage = () => {
        
        const { store, dispatch } = useGlobalReducer()

        const navigate = useNavigate()

        const handleLogin = async ({ email, password }) => {
                const response = await fetch ("https://super-bassoon-69xgxp7rwq6r3rp6p-3001.app.github.dev/api/user/login/", {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email, password })
                })
                const data = await response.json() 

                if (!response.ok){              // Si la respuesta no es exitosa, actualizamos el estado global con el mensaje de error
                        dispatch({
                                type: "LOGIN_ERROR",
                                payload: data.msg
                        })
                        return
                }

                localStorage.setItem("token", data.access_token) //Guardamos el token en el localStorage


                dispatch({                      // Actualizamos el estado global con la información del usuario
                        type: "LOGIN",
                        payload: { email }
                })


                navigate("/")

        }

        
        return (
                <>
                        <h1>Hello desde loginPage</h1>

                        <LoginForm
                                onSubmit={handleLogin}

                                error={store.error}
                        />

                </>
        )
}


