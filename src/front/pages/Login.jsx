import { useNavigate } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import  useGlobalReducer  from "../hooks/useGlobalReducer"


export const LoginPage = () => {

    const { store, actions } = useGlobalReducer()

    const navigate = useNavigate()

    const handleLogin = async ({email, password}) => {
        const success = await actions.login(email, password)
        console.log("actions:", actions)

        if (success) {
            navigate("/")
        }
    }
 
    return (
        <>
            <h1>Hello desde loginPage</h1> 

                <LoginForm
                onSubmit={handleLogin}
                loading={store.loading}
                error={store.error} 
                />

        </>
    )
}

export default LoginPage