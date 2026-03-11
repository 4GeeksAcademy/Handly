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

        {/* LADO IZQUIERDO */}
        <div className="left-side">

          <div className="contact-box">
            <div className="contact-item">
              <strong>Correo</strong>
              <p>contacto@handly.com</p>
            </div>

            <div className="contact-item">
              <strong>Teléfono</strong>
              <p>+34 123 456 789</p>
            </div>

            <div className="contact-item">
              <strong>Dirección</strong>
              <p>Calle Ejemplo 123, Madrid, España</p>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=Calle+Ejemplo+123+Madrid+España&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>


        {/* FORMULARIO */}
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