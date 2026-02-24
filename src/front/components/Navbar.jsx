import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { RegisterForm } from "./RegisterForm";
import { useEffect, useState } from "react";
import { LoginForm } from "./LoginForm";
import toast from 'react-hot-toast';
const backendUrl = import.meta.env.VITE_BACKEND_URL


export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate()
	const [view, setView] = useState("login")
	const [user, setUser] = useState(null)
	const [dropdownOpen, setDropdownOpen] = useState(false)

	useEffect(() => {
		const storedUserData = localStorage.getItem('user');
		if (storedUserData) {
			const userData = JSON.parse(storedUserData);
			setUser(userData)
		}
	}, [])
	console.log(user)


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
		const response = await fetch(backendUrl + "api/user/login", {
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
		console.log(data)
		//Guardamos el token en el localStorage que devuelve el backend

		localStorage.setItem("token", data.access_token)

		localStorage.setItem("user", JSON.stringify(data.user))
		location.reload()
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

							{
								user ? (
									<div className="user-dropdown">
										<button
											className="user-dropdown-btn"
											onClick={() => setDropdownOpen(!dropdownOpen)}
										>
											<div className="user-avatar">
												{user.first_name.charAt(0)}{user.last_name.charAt(0)}
											</div>
											<span>{user.first_name} {user.last_name}</span>
											<span className="arrow">{dropdownOpen ? "▴" : "▾"}</span>
										</button>

										{dropdownOpen && (
											<div className="user-dropdown-menu">
												<div className="user-dropdown-header">
													<p className="user-fullname">{user.first_name} {user.last_name}</p>
													<p className="user-email">{user.email}</p>
												</div>

												<div className="user-dropdown-divider" />

												<Link to="/profile" className="user-dropdown-item" onClick={() => setDropdownOpen(false)}>
													Mi perfil
												</Link>
												<Link to="/message" className="user-dropdown-item" onClick={() => setDropdownOpen(false)}>
													Mensajes
												</Link>

												<div className="user-dropdown-divider" />

												<button
													className="user-dropdown-item user-dropdown-logout"
													onClick={() => {
														localStorage.removeItem("user");
														localStorage.removeItem("token");
														setUser(null);
														setDropdownOpen(false);
													}}
												>
													Cerrar sesión
												</button>
											</div>
										)}
									</div>
								) : (
									<>
										<button type="button" class="navbtn1" data-bs-toggle="modal" data-bs-target="#exampleModal">
											Iniciar Sesion
										</button>
										<button className="navbtn1">Explorar</button>
										<button className="navbtn1" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
											Más información
										</button>
									</>
								)
							}

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