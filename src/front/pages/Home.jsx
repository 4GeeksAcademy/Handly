import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="login-container">
			<div className="titulos">
				<h1 className="titulo-proyecto">HealthSupport</h1>
				<br />
				<div className="home-description">
					HealthSupport ayuda a los profesionales sanitarios a organizar <span className="highlight">casos clínicos</span>,
					visualizar <span className="highlight">pacientes</span> y llevar un registro seguro de la <span className="highlight">información médica</span>.
				</div>


				<div className="features">
					<div className="feature-card">
						<i className="fas fa-user-injured fa-2x"></i>
						<p>Gestión de pacientes</p>
						<div className="feature-info">
							Permite agregar, editar y visualizar la información de los pacientes de forma rápida y segura.
						</div>
					</div>

					<div className="feature-card">
						<i className="fas fa-notes-medical fa-2x"></i>
						<p>Registro de casos clínicos</p>
						<div className="feature-info">
							Lleva un seguimiento detallado de cada caso clínico, incluyendo síntomas, diagnósticos y evolución.
						</div>
					</div>

					<div className="feature-card">
						<i className="fas fa-chart-bar fa-2x"></i>
						<p>Métricas y estadísticas</p>
						<div className="feature-info">
							Visualiza datos clave de los pacientes y casos para mejorar la toma de decisiones.
						</div>
					</div>
				</div>




				<div className="cta-buttons">
					<button
						className="btn btn-primary">Ingresar</button>
					<br />
					<br />
					<button
						className="btn btn-primary">Crear Usuario</button>
					<br />
					<br />

					<button
						className="btn btn-primary"
						onClick={() => navigate("/dashboard")}>Dashboard</button>
				</div>

			</div>





		</div>
	);


}; 