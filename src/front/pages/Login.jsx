import { useNavigate } from "react-router-dom"
import { LoginForm } from "../components/LoginForm"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const LoginPage = () => {

        const { store, dispatch } = useGlobalReducer()

        const navigate = useNavigate()

        const handleLogin = ({ email, password }) => {
                dispatch({
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


