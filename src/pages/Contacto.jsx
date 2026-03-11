import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contacto() {
  return (
    <>
      <Navbar />
      <main>
        <section className="contacto">
          <h2>Contacto</h2>

          <section className="atencion-cliente">
            <h3>Atención al Cliente</h3>
            <p>Si tienes dudas sobre los servicios, deseas agendar una cita o necesitas información adicional, puedes comunicarte con nosotros mediante:</p>
            <div className="info-contacto">
              <p><strong>Correo electrónico:</strong> <a href="mailto:JustAmechanic@gmail.com">JustAmechanic@gmail.com</a></p>
              <p><strong>Número de teléfono:</strong> <a href="tel:+524434865823">443 486 5823</a></p>
            </div>
            <p>Nuestro equipo está comprometido a brindar atención profesional, clara y oportuna para ayudarte a mantener tu vehículo en las mejores condiciones.</p>
          </section>

          <section className="horario">
            <h3>Horario de Atención</h3>
            <ul>
              <li>Lunes a viernes: 9:00 AM - 6:00 PM</li>
              <li>Sábados: 9:00 AM - 2:00 PM</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </section>

          <div className="modulo-reserva">
            <p>¿Listo para reservar?</p>
            <Link to="/contacto/formulario">Presiona aquí</Link>
          </div>

          <section className="politica-respuesta">
            <h3>Política de Respuesta</h3>
            <p>Las solicitudes enviadas a través del sistema son atendidas en un plazo aproximado de 6 a 12 horas hábiles. Para atención urgente o servicios el mismo día, se recomienda realizar contacto telefónico directo.</p>
          </section>
        </section>
      </main>
      <Footer showPrivacidad={true} />
    </>
  );
}

export default Contacto;
