import { useState } from "react";
import toast from "react-hot-toast";
import "./ContactMe.css"; 

export const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    toast.success("Mensaje enviado con éxito");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h1>Contacta con nosotros</h1>
      <div className="contact-container">

        
        <div className="contact-info">
          <h2>Información</h2>
          <p><strong>Correo:</strong> contacto@handly.com</p>
          <p><strong>Teléfono:</strong> +34 123 456 789</p>
          <p><strong>Dirección:</strong> Calle Ejemplo 123, Madrid, España</p>
          <div className="social-media">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>

        
        <div className="contact-form-container">
          <h2>Envíanos un mensaje</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>

      </div>
    </div>
  );
};