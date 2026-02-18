
import { useNavigate } from "react-router-dom"
import {RegisterForm} from "../components/RegisterForm"
import useGlobalReducer from "../hooks/useGlobalReducer"



export const RegisterPage = () => {
    
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()

    const handleRegister = async (registerData) => {

        dispatch({
            type: "set_loading",
            payload: true
        })  

        try {   
                const response = await fetch ("https://super-bassoon-69xgxp7rwq6r3rp6p-3001.app.github.dev/api/user/sign-up", {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ 
                             first_name: registerData.firstName,
                             last_name: registerData.lastName,
                             email: registerData.email,
                             password: registerData.password
                        })
                })
                const data = await response.json()

                if (!response.ok) {
                    dispatch({
                        type: "REGISTER_ERROR",
                        payload: data.msg   
                    })
                    return
                }

                dispatch({
                    type: "set_loading",
                    payload: false
                })

                navigate("/login")

    }       catch ( error) {
                dispatch({
                    type: "REGISTER_ERROR",
                    payload:  "Error al registrar el usuario"
                })
             }
    }

    return (

        <>
        
        <RegisterForm
            onSubmit={handleRegister}
            error={store.error}         
            loading={store.loading}
        />

        </>

    )
}

