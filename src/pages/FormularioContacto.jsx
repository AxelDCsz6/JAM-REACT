import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function FormularioContacto() {
  const [form, setForm] = useState({ nombres: '', email: '', telefono: '', mensaje: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío al backend
    alert('Mensaje enviado correctamente.');
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="contacto">
          <h2>Envíanos un mensaje</h2>

          <section className="formulario-contacto">
            <form className="form-contacto" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="nombres">Nombre completo</label>
                <input
                  type="text"
                  id="nombres"
                  name="nombres"
                  placeholder="Ej. Juan García López"
                  autoComplete="name"
                  required
                  value={form.nombres}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="correo@ejemplo.com"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Ej. 443 123 4567"
                  autoComplete="tel"
                  value={form.telefono}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  placeholder="Escribe aquí tu duda, comentario o solicitud..."
                  required
                  value={form.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-submit">Enviar mensaje</button>
            </form>
          </section>
        </section>
      </main>
      <Footer showPrivacidad={true} />
    </>
  );
}

export default FormularioContacto;
