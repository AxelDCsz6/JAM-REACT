import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AcercaDe() {
  return (
    <>
      <Navbar />
      <main>
        <div className="content-card">
          <h2>Misión</h2>
          <p>La misión de JAM es proporcionar una solución digital confiable, segura e intuitiva que permita a talleres mecánicos gestionar sus reservas de manera eficiente y a los clientes programar servicios de forma rápida, sencilla y accesible.</p>
          <p>JAM busca mejorar la organización operativa del taller, reducir tiempos de espera y aumentar la satisfacción del cliente mediante el uso de herramientas tecnológicas modernas, incluyendo disponibilidad en tiempo real, notificaciones automáticas y administración centralizada de servicios.</p>
          <h3>Objetivos de la aplicación JAM</h3>
          <ul>
            <li>Optimizar la programación de citas del taller.</li>
            <li>Reducir cancelaciones y ausencias mediante recordatorios automáticos.</li>
            <li>Mejorar la comunicación entre clientes y personal del taller.</li>
            <li>Proteger la información personal y técnica de los usuarios.</li>
            <li>Facilitar la toma de decisiones mediante información organizada del sistema.</li>
          </ul>
        </div>

        <div className="content-card">
          <h2>Visión</h2>
          <p>La visión de JAM es convertirse en una plataforma líder en soluciones digitales para la gestión de talleres mecánicos, reconocida por su confiabilidad, facilidad de uso y capacidad para mejorar la productividad del negocio y la experiencia del cliente.</p>
          <p>A mediano y largo plazo, JAM busca integrar tecnologías avanzadas como historial mecánico digital, recordatorios inteligentes basados en el uso del vehículo, integración con sistemas administrativos y herramientas de análisis para optimizar la operación del taller.</p>
          <h3>Metas a largo plazo de JAM</h3>
          <ul>
            <li>Expandir el uso del sistema en múltiples talleres.</li>
            <li>Integrar herramientas de análisis de demanda de servicios.</li>
            <li>Automatizar reportes administrativos y operativos.</li>
            <li>Desarrollar un ecosistema digital integral para talleres mecánicos.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AcercaDe;
