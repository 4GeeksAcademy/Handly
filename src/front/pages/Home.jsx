import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="bordesbody">
		<div className="login-container">
			<header className="header">
				<img
					className="header-bg"
					src="https://img.freepik.com/foto-gratis/cliente-joven-vistiendo-ropa-amarilla-sosteniendo-telefono_23-2148674273.jpg?semt=ais_hybrid&w=740&q=80"
					alt="Médico atendiendo pacientes"
				/>
				<div className="header-content">

						<h1 className="logo1">Handly</h1>
					<p className="home-description">
						Compra y vende productos
					</p>
				</div>
			</header>
			<main className="main-content">
				<h1>Compra y vende cerca de ti</h1>
				<p>Gana dinero con lo que no usas. Encuentra oportunidades en tu ciudad.</p>

				<div className="info-box">
					<ul className="landing-list">
						<li>📸 Publica productos en segundos</li>
						<li>💬 Contacta directamente con compradores</li>
						<li>💸 Vende sin complicaciones</li>
					</ul>
				</div>

				<div className="buttons-container">

					<Link to="/register">
						<button>
							Empieza ahora
						</button>
					</Link>
					<Link to="/login">
						<button>
							Inicia sesión
						</button>
					</Link>
					
				</div>
			</main>
		</div>
		</div>
	);
};
