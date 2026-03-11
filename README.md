# JAM - Just a Mechanic (React)

Migración del proyecto original HTML/CSS a React con React Router.

## Estructura del proyecto

```
src/
  App.jsx                     → Router principal
  index.js                    → Entry point
  
  components/
    Navbar.jsx                → Barra de navegación (reutilizable)
    Footer.jsx                → Pie de página (reutilizable, acepta prop showPrivacy)
  
  pages/
    Home.jsx                  → Página principal (index.html)
    AcercaDe.jsx              → Acerca de nosotros
    Servicios.jsx             → Catálogo de servicios
    Contacto.jsx              → Información de contacto
    FormularioContacto.jsx    → Formulario de mensaje
    Login.jsx                 → Iniciar sesión
    Registro.jsx              → Crear cuenta
    Panel.jsx                 → Panel del cliente (tabs con useState)
  
  styles/
    variables.css             → Design tokens (colores, tipografía, espaciado)
    styles.css                → Estilos globales
    panel.css                 → Estilos del panel de cliente
    panel-overrides.css       → Overrides React: .panel-nav-item.active
    index.css                 → Importa todos los CSS
  
  assets/
    logosinfondo.png
    logo.png
```

## Rutas

| Ruta                    | Página                  |
|-------------------------|-------------------------|
| `/`                     | Home                    |
| `/acerca-de`            | Acerca de nosotros      |
| `/servicios`            | Servicios               |
| `/contacto`             | Contacto                |
| `/formulario-contacto`  | Formulario de contacto  |
| `/login`                | Login                   |
| `/registro`             | Registro                |
| `/panel`                | Panel del cliente       |
| `/panel?servicio=aceite`| Panel pre-seleccionando servicio |

## Cómo ejecutar

```bash
npm install
npm start
```

## Cambios principales respecto al HTML original

- **Navbar y Footer**: De copiar/pegar en cada página → componentes reutilizables
- **Navegación**: De `href` con rutas relativas → `<Link>` de React Router
- **Panel (tabs)**: De CSS-only con `input[type=radio]` → `useState` de React
- **Formularios**: De `action="#"` → `onSubmit` con `preventDefault()` y estado controlado
- **Catálogo de servicios**: De HTML estático → array de datos mapeado con `.map()`
- **Login redirect**: De `window.location.href` → `useNavigate()` de React Router
