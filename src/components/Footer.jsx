import { Link } from 'react-router-dom';

function Footer({ showPrivacidad = false }) {
  return (
    <footer>
      <div className="footer-content">
        {showPrivacidad && (
          <section className="privacidad">
            <h3>Uso de Datos y Privacidad</h3>
            <p>La información proporcionada por los usuarios será utilizada exclusivamente para fines relacionados con la gestión de citas, contacto con el cliente y prestación del servicio solicitado.</p>
            <p>JAM no comparte información personal con terceros sin autorización del usuario, excepto cuando sea requerido por disposiciones legales aplicables.</p>
            <p>El sistema implementa medidas básicas de seguridad para proteger la información almacenada.</p>
          </section>
        )}
        {showPrivacidad && <hr className="footer-divider" />}
        <div className="footer-bottom">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/acerca-de">Acerca de nosotros</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
          <p>&copy; 2026 JAM - Just a Mechanic. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
