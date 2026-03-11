import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Inicio() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            <span>Just</span>
            <span>a</span>
            <span>Mechanic</span>
          </h1>
          <div className="hero-buttons">
            <Link to="/login" className="btn btn-glass-accent">Reserva</Link>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-media-placeholder">
            <p>Video o animación</p>
          </div>
        </div>
      </section>

      <main>
        <div className="content-card">
          <h2>¿Qué es JAM?</h2>
          <p>JAM es una aplicación web diseñada para optimizar la gestión de citas en talleres mecánicos mediante un sistema moderno de reservas en línea. La plataforma permite a los clientes agendar servicios de forma rápida, consultar disponibilidad en tiempo real y recibir confirmaciones automáticas por correo electrónico.</p>
          <p>Al mismo tiempo, JAM proporciona al taller herramientas administrativas que facilitan la organización de horarios, control de servicios, gestión de costos y visualización del calendario de trabajo desde un solo sistema.</p>
          <p>JAM nace con el objetivo de modernizar la experiencia de mantenimiento vehicular, reduciendo tiempos de espera, mejorando la organización operativa del taller y ofreciendo mayor comodidad al cliente.</p>
        </div>

        <div className="content-card">
          <h2>¿Qué puede hacer JAM?</h2>
          <ul>
            <li>Consultar disponibilidad de servicios en tiempo real</li>
            <li>Reservar servicios mecánicos en línea desde cualquier lugar y dispositivo</li>
            <li>Recibir confirmaciones y recordatorios automáticos</li>
            <li>Solicitar cambios o cancelaciones de citas</li>
            <li>Mantener un historial de servicios realizados</li>
          </ul>
        </div>

        <div className="content-card">
          <h2>Beneficios del sistema</h2>
          <p>JAM permite mejorar la eficiencia operativa del taller y brinda a los clientes una experiencia rápida, organizada y confiable. El sistema ayuda a reducir tiempos muertos, optimizar el uso del personal técnico y mejorar la comunicación entre el cliente y el taller.</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Inicio;
