import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const servicios = [
  { icon: 'fa-solid fa-oil-can', titulo: 'Cambio de Aceite', desc: 'Cambio regular de aceite y filtro para mantener tu motor en óptimas condiciones.' },
  { icon: 'fa-solid fa-compact-disc', titulo: 'Reparación de Frenos', desc: 'Inspección, mantenimiento y reparación de sistemas de frenado.' },
  { icon: 'fa-solid fa-gear', titulo: 'Alineación y Balanceo', desc: 'Servicio de alineación de ruedas y balanceo para mejor estabilidad.' },
  { icon: 'fa-solid fa-wrench', titulo: 'Reparación de Suspensión', desc: 'Mantenimiento y reparación del sistema de suspensión.' },
  { icon: 'fa-brands fa-chromecast', titulo: 'Diagnóstico Electrónico', desc: 'Escaneo y diagnóstico avanzado de sistemas electrónicos del vehículo.' },
  { icon: 'fa-regular fa-circle-dot', titulo: 'Cambio de Neumáticos', desc: 'Instalación y cambio de neumáticos con garantía de calidad.' },
  { icon: 'fa-solid fa-hammer', titulo: 'Reparación de Motor', desc: 'Reparación y mantenimiento completo del motor.' },
  { icon: 'fa-solid fa-bolt-lightning', titulo: 'Servicio de Batería', desc: 'Prueba, mantenimiento y reemplazo de baterías.' },
];

function Servicios() {
  return (
    <>
      <Navbar />
      <main>
        <section className="servicios-section">
          <h2>Lo que ofrecemos</h2>
          <p>Contamos con una amplia variedad de servicios para tu vehículo</p>

          <div className="servicios-galeria">
            {servicios.map((servicio, index) => (
              <div className="servicio-card" key={index}>
                <div className="servicio-icon">
                  <i className={servicio.icon}></i>
                </div>
                <h3>{servicio.titulo}</h3>
                <p>{servicio.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Servicios;
