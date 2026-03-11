import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDe';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import FormularioContacto from './pages/FormularioContacto';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Panel from './pages/Panel';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                    element={<Home />} />
        <Route path="/acerca-de"           element={<AcercaDe />} />
        <Route path="/servicios"           element={<Servicios />} />
        <Route path="/contacto"            element={<Contacto />} />
        <Route path="/formulario-contacto" element={<FormularioContacto />} />
        <Route path="/login"               element={<Login />} />
        <Route path="/registro"            element={<Registro />} />
        <Route path="/panel"               element={<Panel />} />
      </Routes>
    </BrowserRouter>
  );
}
