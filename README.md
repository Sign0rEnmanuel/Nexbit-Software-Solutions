# NEXBITSS — Software Solutions

> Sitio web oficial de **NexBitSS Software Solutions**, desarrollado con React + Vite con estética pixel/arcade retro.

---

## Sobre el proyecto

NexBitSS nació con una misión clara: **ayudar a negocios locales a crecer en el mundo digital** sin gastar una fortuna ni perderse en tecnicismos.

Ofrecemos soluciones digitales a medida — desde sitios web atractivos hasta aplicaciones personalizadas — con foco en resultados reales para negocios reales.

### Páginas

| Ruta        | Descripción                                   |
| ----------- | --------------------------------------------- |
| `/`         | Inicio — hero section con animación PixelSnow |
| `/projects` | Proyectos — portafolio con fondo PixelBlast   |
| `/aboutus`  | Nosotros — historia y equipo                  |

### Secciones en Inicio

- **SeccionInicial** — Hero con NSS logo dimensional y PixelSnow
- **SeccionServicios** — 6 servicios en grid con fondo PixelBlast
- **SeccionProceso** — 4 pasos del proceso con fondo PixelSnow
- **Footer** — logo watermark + gif animado

---

## Stack técnico

| Tecnología     | Uso                                       |
| -------------- | ----------------------------------------- |
| React 19       | UI framework                              |
| Vite 8         | Bundler                                   |
| React Router 7 | Navegación                                |
| Three.js       | Animaciones WebGL (PixelSnow, PixelBlast) |
| postprocessing | Efectos de post-procesado (PixelBlast)    |
| CSS puro       | Estilos globales, sin CSS-in-JS           |

### Fuentes (Google Fonts)

| Variable              | Fuente         | Uso                                   |
| --------------------- | -------------- | ------------------------------------- |
| `--font-pixel-first`  | Press Start 2P | Botones, números, títulos principales |
| `--font-pixel-second` | Pixelify Sans  | Subtítulos, labels                    |
| `--font-pixel-third`  | VT323          | Párrafos, descripciones               |

### Paleta de colores

| Variable                    | Valor     | Uso                              |
| --------------------------- | --------- | -------------------------------- |
| `--color-primary`           | `#1a6fff` | Color principal, bordes, sombras |
| `--color-secondary`         | `#7c3aed` | Acento secundario, logo NSS      |
| `--color-tertiary`          | `#f59e0b` | Acento terciario                 |
| `--color-accent`            | `#00d4aa` | Labels, highlights, cursor       |
| `--color-neutral-primary`   | `#ffffff` | Texto principal                  |
| `--color-neutral-secondary` | `#9aa0a8` | Texto secundario                 |
| `--color-neutral-tertiary`  | `#0d1117` | Fondo principal                  |

---

## Estructura del proyecto

```
src/
├── animations/
│   ├── PixelSnow/       # Animación de nieve pixel (Three.js + GLSL)
│   └── PixelBlast/      # Animación de partículas pixel (Three.js + GLSL)
├── assets/
│   ├── nexbit-logo-pixel-dark.svg
│   └── donghastling.gif
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── SeccionServicios.jsx
│   └── SeccionProceso.jsx
├── page/
│   ├── Inicio.jsx
│   ├── Proyectos.jsx
│   └── Nosotros.jsx
├── styles/
│   ├── components/
│   └── pages/
├── App.jsx
├── main.jsx
└── main.css
```

---

## Equipo

### DonGhastling — Enmanuel Marzal — Fundador & Desarrollador Principal

### Ramzoc — Osmar Ramirez — Desarrollador

Desarrollador apasionado por la tecnología pixel y los proyectos con identidad visual fuerte. Combina creatividad con tecnología de punta para construir soluciones digitales que destacan.

- GitHub: [@Sign0rEnmanuel](https://github.com/Sign0rEnmanuel)
- Correo: ghastling01@gmail.com

---

## Instalación y desarrollo

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm dev

# Build para producción
pnpm build
```

---

## Animaciones WebGL

Las animaciones de fondo están descargadas desde [reactbits.dev](https://reactbits.dev) y adaptadas al proyecto:

- **PixelSnow** — Nieve 3D volumétrica renderizada con shader GLSL custom via Three.js
- **PixelBlast** — Patrón de píxeles animado con noise FBM, ripples por click y efecto líquido opcional

---

_© 2026 NEXBITSS SOFTWARE SOLUTIONS. Todos los derechos reservados._
