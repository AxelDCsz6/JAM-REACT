import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login simulado — redirige al panel como en el original
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

            <h2>Iniciar sesión</h2>
            <p className="auth-subtitle">Ingresa tus datos para acceder a tu cuenta.</p>

            <form className="form-contacto" onSubmit={handleSubmit} noValidate>
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
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Tu contraseña"
                  autoComplete="current-password"
                  required
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-submit btn-full">Iniciar sesión</button>
            </form>

            <p className="auth-switch">
              ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Login;
