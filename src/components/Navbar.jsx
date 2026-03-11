import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src="/logosinfondo.png" alt="JAM" />
          </Link>
          <ul className="nav-menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/acerca-de">Acerca de nosotros</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li>
              <Link to="/login" className="nav-auth-icon">
                <i className="fa-regular fa-circle-user"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
