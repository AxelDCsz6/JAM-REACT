import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../styles/panel.css';
import '../styles/panel-overrides.css';

/* ---- Datos del catálogo ---- */
const CATALOGO = [
  { id: 'aceite',      icono: 'fa-solid fa-oil-can',          titulo: 'Cambio de Aceite',         desc: 'Cambio regular de aceite y filtro para mantener tu motor en óptimas condiciones.',   duracion: '45-60 min', costo: '$350'  },
  { id: 'frenos',      icono: 'fa-solid fa-compact-disc',      titulo: 'Reparación de Frenos',     desc: 'Inspección, mantenimiento y reparación de sistemas de frenado.',                    duracion: '60-90 min', costo: '$800'  },
  { id: 'alineacion',  icono: 'fa-solid fa-gear',              titulo: 'Alineación y Balanceo',    desc: 'Servicio de alineación de ruedas y balanceo para mejor estabilidad.',               duracion: '45-60 min', costo: '$450'  },
  { id: 'suspension',  icono: 'fa-solid fa-wrench',            titulo: 'Reparación de Suspensión', desc: 'Mantenimiento y reparación del sistema de suspensión.',                             duracion: '90-120 min',costo: '$1,200'},
  { id: 'diagnostico', icono: 'fa-brands fa-chromecast',       titulo: 'Diagnóstico Electrónico',  desc: 'Escaneo y diagnóstico avanzado de sistemas electrónicos del vehículo.',             duracion: '30-45 min', costo: '$500'  },
  { id: 'neumaticos',  icono: 'fa-regular fa-circle-dot',      titulo: 'Cambio de Neumáticos',     desc: 'Instalación y cambio de neumáticos con garantía de calidad.',                      duracion: '30-45 min', costo: '$600'  },
  { id: 'motor',       icono: 'fa-solid fa-hammer',            titulo: 'Reparación de Motor',      desc: 'Reparación y mantenimiento completo del motor.',                                    duracion: 'Variable',  costo: 'Cotizar'},
  { id: 'bateria',     icono: 'fa-solid fa-bolt-lightning',    titulo: 'Servicio de Batería',      desc: 'Prueba, mantenimiento y reemplazo de baterías.',                                   duracion: '20-30 min', costo: '$250'  },
];

/* ---- Reservas de ejemplo ---- */
const RESERVAS_EJEMPLO = [
  { servicio: 'Cambio de Aceite',        fecha: '15 Mar 2026', hora: '10:00 AM', auto: 'Toyota Corolla 2022', estado: 'confirmada', id: 'JAM-20260315-001', acciones: true  },
  { servicio: 'Diagnóstico Electrónico', fecha: '22 Mar 2026', hora: '02:30 PM', auto: 'Honda Civic 2020',    estado: 'pendiente',  id: 'JAM-20260322-002', acciones: true  },
  { servicio: 'Alineación y Balanceo',   fecha: '05 Mar 2026', hora: '11:00 AM', auto: 'Toyota Corolla 2022', estado: 'completada', id: 'JAM-20260305-003', acciones: false },
  { servicio: 'Reparación de Frenos',    fecha: '01 Mar 2026', hora: '09:00 AM', auto: 'Honda Civic 2020',    estado: 'cancelada',  id: 'JAM-20260301-004', acciones: false },
];

const BADGE_MAP = {
  confirmada: 'badge-confirmada',
  pendiente:  'badge-pendiente',
  cancelada:  'badge-cancelada',
  completada: 'badge-completada',
};

const LABEL_MAP = {
  confirmada: 'Confirmada',
  pendiente:  'Pendiente',
  cancelada:  'Cancelada',
  completada: 'Completada',
};

/* ---- Formulario de reserva vacío ---- */
const FORM_INICIAL = {
  servicio: '', fecha: '', hora: '',
  marca: '', modelo: '', anio: '', placas: '',
  telefono: '', notas: ''
};

export default function Panel() {
  const [searchParams] = useSearchParams();
  const [tab, setTab]   = useState('reservar');
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');
  const [form, setForm] = useState(FORM_INICIAL);

  /* Pre-seleccionar servicio si viene por URL ?servicio=xxx */
  useEffect(() => {
    const s = searchParams.get('servicio');
    if (s) {
      setServicioSeleccionado(s);
      setForm(prev => ({ ...prev, servicio: s }));
    }
  }, [searchParams]);

  const handleCardClick = (id) => {
    setServicioSeleccionado(id);
    setForm(prev => ({ ...prev, servicio: id }));
  };

  const handleFormChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleReservaSubmit = (e) => {
    e.preventDefault();
    alert('Reserva confirmada. Te contactaremos pronto.');
    setForm(FORM_INICIAL);
    setServicioSeleccionado('');
  };

  return (
    <>
      <div className="panel-layout">
        {/* ========= SIDEBAR ========= */}
        <aside className="panel-sidebar">
          <div className="panel-user">
            <div className="panel-user-avatar">JC</div>
            <div>
              <p className="panel-user-name">Juan Carlos García</p>
              <p className="panel-user-email">juan.garcia@ejemplo.com</p>
            </div>
          </div>

          <nav className="panel-nav">
            <button
              className={`panel-nav-item${tab === 'reservar' ? ' active' : ''}`}
              onClick={() => setTab('reservar')}
            >
              <i className="fa-solid fa-calendar-plus"></i> Reservar Servicio
            </button>
            <button
              className={`panel-nav-item${tab === 'reservas' ? ' active' : ''}`}
              onClick={() => setTab('reservas')}
            >
              <i className="fa-solid fa-calendar-check"></i> Mis Reservas
            </button>
            <button
              className={`panel-nav-item${tab === 'perfil' ? ' active' : ''}`}
              onClick={() => setTab('perfil')}
            >
              <i className="fa-solid fa-user"></i> Mi Perfil
            </button>

            <hr className="panel-nav-divider" />

            <Link to="/" className="panel-nav-item nav-logout">
              <i className="fa-solid fa-right-from-bracket"></i> Cerrar sesión
            </Link>
          </nav>
        </aside>

        {/* ========= CONTENIDO PRINCIPAL ========= */}
        <main className="panel-main">

          {/* --- TAB: RESERVAR SERVICIO --- */}
          {tab === 'reservar' && (
            <section className="panel-section" style={{ display: 'block' }}>
              <div className="panel-header">
                <h1>Reservar Servicio</h1>
                <p>Selecciona un servicio del catálogo y completa los datos para agendar tu cita.</p>
              </div>

              <p className="reservar-step-title">
                <span className="step-number">1</span> Selecciona un servicio
              </p>

              <div className="catalogo-grid">
                {CATALOGO.map((s) => (
                  <article
                    key={s.id}
                    className={`catalogo-card${servicioSeleccionado === s.id ? ' selected' : ''}`}
                    onClick={() => handleCardClick(s.id)}
                  >
                    <div className="catalogo-card-header">
                      <div className="catalogo-icon"><i className={s.icono}></i></div>
                      <h3>{s.titulo}</h3>
                    </div>
                    <p>{s.desc}</p>
                    <div className="catalogo-meta">
                      <span className="catalogo-duracion">
                        <i className="fa-regular fa-clock"></i> {s.duracion}
                      </span>
                      <span className="catalogo-costo">
                        <i className="fa-solid fa-tag"></i> {s.costo}
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              <hr className="reservar-divider" />

              <p className="reservar-step-title">
                <span className="step-number">2</span> Completa los datos de tu reserva
              </p>

              <div className="reserva-form-container">
                <form className="form-reserva" onSubmit={handleReservaSubmit} noValidate>
                  {/* Servicio */}
                  <div className="form-group">
                    <label htmlFor="reserva-servicio">Servicio seleccionado</label>
                    <select
                      id="reserva-servicio"
                      name="servicio"
                      required
                      value={form.servicio}
                      onChange={handleFormChange}
                    >
                      <option value="" disabled>Haz clic en un servicio del catálogo</option>
                      {CATALOGO.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.titulo} ({s.duracion})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Fecha y hora */}
                  <p className="form-section-label">Fecha y horario</p>
                  <div className="form-row-2col">
                    <div className="form-group">
                      <label htmlFor="reserva-fecha">Fecha</label>
                      <input type="date" id="reserva-fecha" name="fecha" required value={form.fecha} onChange={handleFormChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="reserva-hora">Hora</label>
                      <select id="reserva-hora" name="hora" required value={form.hora} onChange={handleFormChange}>
                        <option value="" disabled>Selecciona horario</option>
                        {['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30'].map(h => (
                          <option key={h} value={h}>{h}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Vehículo */}
                  <p className="form-section-label">Datos del vehículo</p>
                  <div className="form-row-2col">
                    <div className="form-group">
                      <label htmlFor="reserva-marca">Marca</label>
                      <input type="text" id="reserva-marca" name="marca" placeholder="Ej. Toyota" required value={form.marca} onChange={handleFormChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="reserva-modelo">Modelo</label>
                      <input type="text" id="reserva-modelo" name="modelo" placeholder="Ej. Corolla" required value={form.modelo} onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="form-row-2col">
                    <div className="form-group">
                      <label htmlFor="reserva-anio">Año</label>
                      <input type="number" id="reserva-anio" name="anio" placeholder="Ej. 2022" min="1990" max="2026" required value={form.anio} onChange={handleFormChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="reserva-placas">Placas</label>
                      <input type="text" id="reserva-placas" name="placas" placeholder="Ej. ABC-123" required value={form.placas} onChange={handleFormChange} />
                    </div>
                  </div>

                  {/* Contacto */}
                  <p className="form-section-label">Datos de contacto</p>
                  <div className="form-group">
                    <label htmlFor="reserva-telefono">Teléfono</label>
                    <input type="tel" id="reserva-telefono" name="telefono" placeholder="Ej. 443 123 4567" autoComplete="tel" required value={form.telefono} onChange={handleFormChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reserva-notas">Notas adicionales</label>
                    <textarea id="reserva-notas" name="notas" placeholder="Describe brevemente el problema o servicio que necesitas (opcional)" value={form.notas} onChange={handleFormChange}></textarea>
                  </div>

                  <button type="submit" className="btn-submit-reserva">Confirmar Reserva</button>
                </form>
              </div>
            </section>
          )}

          {/* --- TAB: MIS RESERVAS --- */}
          {tab === 'reservas' && (
            <section className="panel-section" style={{ display: 'block' }}>
              <div className="panel-header">
                <h1>Mis Reservas</h1>
                <p>Consulta, reprograma o cancela tus citas. Las cancelaciones deben hacerse con al menos 24 horas de anticipación.</p>
              </div>

              <div className="reservas-list">
                {RESERVAS_EJEMPLO.map((r) => (
                  <article className="reserva-item" key={r.id}>
                    <div className="reserva-info">
                      <h3>{r.servicio}</h3>
                      <div className="reserva-detalles">
                        <span className="reserva-detalle"><i className="fa-regular fa-calendar"></i> {r.fecha}</span>
                        <span className="reserva-detalle"><i className="fa-regular fa-clock"></i> {r.hora}</span>
                        <span className="reserva-detalle"><i className="fa-solid fa-car"></i> {r.auto}</span>
                      </div>
                      <span className={`badge ${BADGE_MAP[r.estado]}`}>{LABEL_MAP[r.estado]}</span>
                      <p className="reserva-id">ID: {r.id}</p>
                    </div>
                    <div className="reserva-acciones">
                      {r.acciones && (
                        <>
                          <button type="button" className="btn-accion btn-reprogramar">Reprogramar</button>
                          <button type="button" className="btn-accion btn-cancelar">Cancelar</button>
                        </>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* --- TAB: MI PERFIL --- */}
          {tab === 'perfil' && (
            <section className="panel-section" style={{ display: 'block' }}>
              <div className="panel-header">
                <h1>Mi Perfil</h1>
                <p>Consulta y gestiona tu información personal.</p>
              </div>

              <div className="perfil-container">
                <div className="perfil-card">
                  <div className="perfil-header">
                    <div className="perfil-avatar">JC</div>
                    <div className="perfil-nombre">
                      <h3>Juan Carlos García López</h3>
                      <p>Cliente desde Febrero 2026</p>
                    </div>
                  </div>

                  <div className="perfil-datos">
                    {[
                      { label: 'Nombre completo',    valor: 'Juan Carlos García López'   },
                      { label: 'Correo electrónico', valor: 'juan.garcia@ejemplo.com'     },
                      { label: 'Teléfono',           valor: '443 123 4567'               },
                    ].map((campo) => (
                      <div className="perfil-campo" key={campo.label}>
                        <span className="perfil-campo-label">{campo.label}</span>
                        <span className="perfil-campo-valor">{campo.valor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

        </main>
      </div>

      <footer className="panel-footer">
        <div className="footer-content">
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
    </>
  );
}
