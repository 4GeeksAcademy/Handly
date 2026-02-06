import React from "react";
import "./Dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Bienvenido/a, Dr/a</h1>

      
      <div className="search-bar">
        <input type="text" placeholder="Buscar paciente..." />
      </div>

      
      <div className="cards-container">
        
        <div className="card small-card">
          <div className="card-header">Casos clínicos</div>
          <div className="accordion-item">
            <input type="checkbox" id="caso1" className="accordion-checkbox" />
            <label htmlFor="caso1" className="accordion-title">Dolor de cabeza</label>
            <div className="accordion-content">
              Paciente con cefalea recurrente.
            </div>
          </div>
          <div className="accordion-item">
            <input type="checkbox" id="caso2" className="accordion-checkbox" />
            <label htmlFor="caso2" className="accordion-title">Dolor de garganta</label>
            <div className="accordion-content">
              Inflamación y dolor al tragar.
            </div>
          </div>
        </div>

        
        <div className="card small-card">
          <div className="card-header">Pacientes</div>
          <div className="accordion-item">
            <input type="checkbox" id="paciente2" className="accordion-checkbox" />
            <label htmlFor="paciente2" className="accordion-title">María Isabel León Trujillo</label>
            <div className="accordion-content">
              59 años, cefalea.
            </div>
          </div>
          <div className="accordion-item">
            <input type="checkbox" id="paciente1" className="accordion-checkbox" />
            <label htmlFor="paciente1" className="accordion-title">Pedro García Jaén</label>
            <div className="accordion-content">
              45 años, hipertensión.
            </div>
          </div>
          <div className="accordion-item">
            <input type="checkbox" id="paciente2" className="accordion-checkbox" />
            <label htmlFor="paciente2" className="accordion-title">María López Vega</label>
            <div className="accordion-content">
              30 años, asma leve.
            </div>
          </div>
          
        </div>
      </div>

      
      <div className="metrics-container">
        <div className="metric-card">
          <div className="metric-title">Casos activos</div>
          <div className="metric-value">5</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Casos cerrados</div>
          <div className="metric-value">12</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Pacientes</div>
          <div className="metric-value">30</div>
        </div>
      </div>
    </div>
  );
};
