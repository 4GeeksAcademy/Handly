import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
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
	const [categoryOpen, setCategoryOpen] = useState(false)

	useEffect(() => {
		const storedUserData = localStorage.getItem('user');
		if (storedUserData) {
			const userData = JSON.parse(storedUserData);
			setUser(userData)
		}
	}, [])

	const handleRegister = async (registerData) => {
		dispatch({ type: "set_loading", payload: true })

		try {
			const response = await fetch(backendUrl + "api/user/sign-up", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					first_name: registerData.firstName,
					last_name: registerData.lastName,
					email: registerData.email,
					password: registerData.password
				})
			})
			const data = await response.json()

			if (!response.ok) {
				dispatch({ type: "REGISTER_ERROR", payload: data.msg })
				return
			}

			dispatch({ type: "set_loading", payload: false })
			toast("Registro exitoso")
			setView("login")

		} catch (error) {
			dispatch({ type: "REGISTER_ERROR", payload: "Error al registrar el usuario" })
		}
	}

	const handleLogin = async ({ email, password }) => {
		const response = await fetch(backendUrl + "api/user/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password })
		})
		const data = await response.json()

		if (!response.ok) {
			dispatch({ type: "LOGIN_ERROR", payload: data.msg })
			return
		}

		localStorage.setItem("token", data.access_token)
		localStorage.setItem("user_id", data.user.id)
		localStorage.setItem("user", JSON.stringify(data.user))
		location.reload()
		navigate("/")
	}

	return (
		<>
			<nav className={styles.navbar}>
				<div className={styles.container}>

					<Link to="/" className={styles.logo}>
						Handly
					</Link>

					<div className={styles["barra-botones"]}>
						<div className={styles["nav-buttons"]}>

							<div className={styles.dropdown}>
								<button
									className={styles.dropbtn}
									onClick={() => setCategoryOpen(!categoryOpen)}
									aria-expanded={categoryOpen}
								>
									Categorías {categoryOpen ? "▴" : "▾"}
								</button>
								{categoryOpen && (
									<div className={styles["dropdown-content"]}>
										<Link to="/category/electronica" className={styles["dropdown-item"]} onClick={() => setCategoryOpen(false)}>Electrónica</Link>
										<Link to="/category/deportes" className={styles["dropdown-item"]} onClick={() => setCategoryOpen(false)}>Deportes</Link>
										<Link to="/category/cine" className={styles["dropdown-item"]} onClick={() => setCategoryOpen(false)}>Cine</Link>
										<Link to="/category/libros" className={styles["dropdown-item"]} onClick={() => setCategoryOpen(false)}>Libros</Link>
										<Link to="/category/coleccionismo" className={styles["dropdown-item"]} onClick={() => setCategoryOpen(false)}>Coleccionismo</Link>
										<Link to="/category/hogar" className={styles["dropdown-item"]} onClick={() => setCategoryOpen(false)}>Hogar</Link>
										<Link to="/category/moda" className={styles["dropdown-item"]} onClick={() => setCategoryOpen(false)}>Accesorios y moda</Link>
									</div>
								)}
							</div>

							{user ? (
								<div className={styles["user-dropdown"]}>
									<button
										className={styles["user-dropdown-btn"]}
										onClick={() => setDropdownOpen(!dropdownOpen)}
										aria-expanded={dropdownOpen}
									>
										<div className={styles["user-avatar"]}>
											{user.first_name.charAt(0)}{user.last_name.charAt(0)}
										</div>
										<span>{user.first_name} {user.last_name}</span>
										<span className={styles.arrow}>{dropdownOpen ? "▴" : "▾"}</span>
									</button>

									{dropdownOpen && (
										<div className={styles["user-dropdown-menu"]}>
											<div className={styles["user-dropdown-header"]}>
												<p className={styles["user-fullname"]}>{user.first_name} {user.last_name}</p>
												<p className={styles["user-email"]}>{user.email}</p>
											</div>

											<div className={styles["user-dropdown-divider"]} />

											<Link to="/profile" className={styles["user-dropdown-item"]} onClick={() => setDropdownOpen(false)}>
												Mi perfil
											</Link>
											<Link to="/message" className={styles["user-dropdown-item"]} onClick={() => setDropdownOpen(false)}>
												Mensajes
											</Link>

											<div className={styles["user-dropdown-divider"]} />

											<button
												className={`${styles["user-dropdown-item"]} ${styles["user-dropdown-logout"]}`}
												onClick={() => {
													localStorage.removeItem("user")
													localStorage.removeItem("token")
													setUser(null)
													setDropdownOpen(false)
												}}
											>
												Cerrar sesión
											</button>
										</div>
									)}
								</div>
							) : (
								<>
									<button
										type="button"
										className={styles.navbtn1}
										data-bs-toggle="modal"
										data-bs-target="#exampleModal"
									>
										Iniciar sesión
									</button>
									<button className={styles.navbtn1}>Explorar</button>
									<button
										className={styles.navbtn1}
										onClick={() => window.scrollTo(0, document.body.scrollHeight)}
									>
										Más información
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			</nav>

			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						{view === "login" ? (
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
						)}
					</div>
				</div>
			</div>
		</>
	)
}