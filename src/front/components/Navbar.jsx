import { Link } from "react-router-dom";
import "./Navbar.css";



export const Navbar = () => {

	return (
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
						<button className="navbtn1">Empieza ahora</button>
						<button className="navbtn1">Explorar</button>
						<button className="navbtn1" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
							Más información
						</button>
					</div>


				</div>
			</div>
		</nav>
	);
};