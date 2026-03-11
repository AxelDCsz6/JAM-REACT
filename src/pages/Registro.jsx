import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

function Registro() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombres: '', apellidos: '', telefono: '', email: '', password: '', passwordConfirm: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registro simulado
    navigate('/panel');
  };

  return (
    <>
      <main>
        <section className="auth-page">
          <div className="auth-card">
            <Link to="/" className="auth-logo">
              <img src="/logosinfondo.png" alt="JAM" />
            </Link>

            <h2>Crear cuenta</h2>
            <p className="auth-subtitle">Completa los siguientes datos para registrarte.</p>

            <form className="form-contacto" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombres">Nombre(s)</label>
                  <input
                    type="text" id="nombres" name="nombres"
                    placeholder="Ej. Juan Carlos" autoComplete="given-name"
                    required value={form.nombres} onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apellidos">Apellidos</label>
                  <input
                    type="text" id="apellidos" name="apellidos"
                    placeholder="Ej. García López" autoComplete="family-name"
                    required value={form.apellidos} onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Número de teléfono</label>
                <input
                  type="tel" id="telefono" name="telefono"
                  placeholder="Ej. 443 123 4567" autoComplete="tel"
                  required value={form.telefono} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email" id="email" name="email"
                  placeholder="correo@ejemplo.com" autoComplete="email"
                  required value={form.email} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password" id="password" name="password"
                  placeholder="Mínimo 8 caracteres" autoComplete="new-password"
                  required value={form.password} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordConfirm">Confirmar contraseña</label>
                <input
                  type="password" id="passwordConfirm" name="passwordConfirm"
                  placeholder="Repite tu contraseña" autoComplete="new-password"
                  required value={form.passwordConfirm} onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-submit btn-full">Crear cuenta</button>
            </form>

            <p className="auth-switch">
              ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Registro;
