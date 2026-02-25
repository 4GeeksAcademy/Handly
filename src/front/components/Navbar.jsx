import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { RegisterForm } from "./RegisterForm";
import { useState } from "react";
import { LoginForm } from "./LoginForm";
import toast from 'react-hot-toast';
const backendUrl = import.meta.env.VITE_BACKEND_URL


export const Navbar = () => {


	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate()
	const [view, setView] = useState("login")
	const handleRegister = async (registerData) => {

		dispatch({
			type: "set_loading",
			payload: true
		})

		try {
			const response = await fetch(backendUrl + "api/user/sign-up", {
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
			toast("Registro exitoso")
			setView("login")

		} catch (error) {
			dispatch({
				type: "REGISTER_ERROR",
				payload: "Error al registrar el usuario"
			})
		}
	}

	const handleLogin = async ({ email, password }) => {
		const response = await fetch(backendUrl + "api/user/login/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ email, password })
		})
		const data = await response.json()


		if (!response.ok) {              // Si la respuesta no es exitosa, actualizamos el estado global con el mensaje de error
			dispatch({
				type: "LOGIN_ERROR",
				payload: data.msg
			})
			return
		}

		localStorage.setItem("token", data.access_token) //Guardamos el token en el localStorage que devuelve el backend


		dispatch({                      // Actualizamos el estado global con la información del usuario
			type: "LOGIN",
			payload: { email }
		})
		navigate("/")
	}

	return (
		<>
			<nav className="navbar">
				<div className="container">
					<Link rel="stylesheet" href="" />
					<Link to="/" className="logo">
						<p className="logo">Handly</p>
					</Link>

					<div className="barra-botones">
						<div className="nav-buttons">
							<div className="dropdown">
								<button className="dropbtn">Categorías ▾</button>
								<div className="dropdown-content">
									<Link to="/category/informatica" className="dropdown-item">Informática</Link>
									<Link to="/category/deportes" className="dropdown-item">Deportes</Link>
									<Link to="/category/cine" className="dropdown-item">Cine</Link>
									<Link to="/category/libros" className="dropdown-item">Libros</Link>
									<Link to="/category/coleccionismo" className="dropdown-item">Coleccionismo</Link>
									<Link to="/category/hogar" className="dropdown-item">Hogar</Link>
									<Link to="/category/moda" className="dropdown-item">Accesorios y moda</Link>
								</div>

							</div>
							<button type="button" class="navbtn1" data-bs-toggle="modal" data-bs-target="#exampleModal">
								Iniciar Sesion
							</button>
							<button className="navbtn1">Explorar</button>
							<button className="navbtn1" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
								Más información
							</button>
						</div>


					</div>
				</div>
			</nav>
			<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

				<div class="modal-dialog">
					<div class="modal-content">
						{
							view === "login" ? (
								<LoginForm
									onSubmit={handleLogin}
									setView={setView}
									error={store.error}
								/>
							) : (
								<RegisterForm
									onSubmit={handleRegister}
									setView={setView}
									error={store.error}
									loading={store.loading}
								/>
							)
						}

					</div>
				</div>


			</div>

		</>

	);
};