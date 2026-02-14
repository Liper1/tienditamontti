# 💎 Tiendita Montti - Joyería Premium de Acero Inoxidable

![Tiendita Montti](https://img.shields.io/badge/Joyería-Premium-d4af37?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3-646cff?style=for-the-badge&logo=vite)

Sitio web premium para Tiendita Montti, especializada en joyería de acero inoxidable de alta calidad. Diseño oscuro elegante con detalles dorados, animaciones suaves y catálogo organizado por categorías.

## ✨ Características

### 🎨 Diseño Premium
- **Tema oscuro** con paleta de colores negro/oro
- **Animaciones suaves** y transiciones profesionales
- **Efectos parallax** en hero section
- **Scroll reveal animations** para contenido
- **Hover effects** sofisticados en productos
- **Responsive design** optimizado para todos los dispositivos

### 📱 Integración WhatsApp Business
- Botón flotante animado con efecto glow
- Mensajes pre-llenados por producto
- Consultas directas a **+56 9 8767 0078**
- Enlaces personalizados por categoría

### 🛍️ Catálogo Organizado
El catálogo está dividido en 5 categorías principales:

- ⌚ **Relojes** - Relojes elegantes y modernos (4 productos)
- 💍 **Aros** - Aretes y argollas de diseño (5 productos)
- ⛓️ **Pulseras** - Pulseras y brazaletes (5 productos)
- 📿 **Collares** - Collares y cadenas (5 productos)
- 💎 **Conjuntos** - Sets completos de joyería (4 productos)

### 🚀 Optimizaciones
- Lazy loading de imágenes
- Smooth scroll behavior
- Custom hooks reutilizables
- Código modular y mantenible
- Build optimizado para producción
- Compatible con GitHub Pages

## 🛠️ Tecnologías Utilizadas

```json
{
  "framework": "React 19.2",
  "build-tool": "Vite 7.3",
  "styling": "CSS3 avanzado",
  "animations": "CSS Keyframes + Intersection Observer",
  "icons": "SVG inline",
  "deployment": "GitHub Pages"
}
```

## 📦 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/Liper1/tienditamontti.git
cd tienditamontti

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del Proyecto

```
tienditamontti/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Navbar.jsx       # Navbar con scroll effect
│   │   ├── Hero.jsx         # Hero con parallax
│   │   ├── Products.jsx     # Grid de productos
│   │   ├── ProductCard.jsx  # Tarjeta de producto
│   │   ├── CategoryFilter.jsx # Filtro de categorías
│   │   ├── About.jsx        # Sección nosotros
│   │   ├── Contact.jsx      # Sección contacto
│   │   ├── Footer.jsx       # Footer premium
│   │   └── WhatsAppButton.jsx # Botón flotante
│   │
│   ├── data/                # Datos de productos
│   │   └── products.js      # Catálogo completo (23 productos)
│   │
│   ├── hooks/               # Custom hooks
│   │   ├── useScrollAnimation.js # Animaciones scroll
│   │   └── useWhatsApp.js   # Integración WhatsApp
│   │
│   ├── styles/              # Estilos
│   │   └── animations.css   # Keyframes y animaciones
│   │
│   ├── App.css              # Estilos principales
│   ├── App.jsx              # Componente principal
│   ├── index.css            # Variables CSS y reset
│   └── main.jsx             # Entry point
│
├── public/                  # Archivos estáticos
├── dist/                    # Build de producción
├── index.html               # HTML principal
├── vite.config.js           # Configuración Vite
└── package.json             # Dependencias
```

## 🎨 Paleta de Colores

```css
/* Oscuros */
--black: #0a0a0a          /* Fondo principal */
--dark-bg: #121212        /* Fondo alternativo */
--dark-surface: #1a1a1a   /* Superficies */
--dark-elevated: #242424  /* Elementos elevados */

/* Dorados */
--gold: #d4af37           /* Dorado principal */
--gold-light: #f4d03f     /* Dorado claro */
--gold-dark: #b8930f      /* Dorado oscuro */

/* Textos */
--white: #ffffff          /* Blanco puro */
--off-white: #f8f8f8      /* Blanco suave */
--text-muted: #a0a0a0     /* Texto secundario */
```

## 📱 WhatsApp Integration

El sitio integra WhatsApp Business de múltiples formas:

### Mensajes Pre-configurados

```javascript
// Consulta general
"¡Hola! Me gustaría consultar sobre sus productos de joyería."

// Consulta por producto
"¡Hola! Me interesa el producto: [NOMBRE] ([PRECIO]). 
¿Está disponible? ¿Me puedes dar más información?"

// Consulta por categoría
"¡Hola! Estoy interesado/a en sus [CATEGORÍA]. 
¿Qué modelos tienen disponibles?"
```

### Número de Contacto
**+56 9 8767 0078** (WhatsApp Business)

## 🚀 Despliegue en GitHub Pages

El proyecto está pre-configurado para GitHub Pages:

```bash
# Build
npm run build

# Desplegar (manual o con GitHub Actions)
# Los archivos de dist/ se despliegan en gh-pages branch
```

La configuración en `vite.config.js` ya incluye el base path correcto.

## ✅ Características de Accesibilidad

- ✅ Textos alt en imágenes
- ✅ ARIA labels en botones
- ✅ Navegación por teclado
- ✅ Contraste de colores accesible
- ✅ Smooth scroll para mejor UX
- ✅ Loading lazy de imágenes

## 🎯 Performance

- ⚡ **Bundle size**: ~70KB gzipped
- 🖼️ **Imágenes optimizadas** con Unsplash CDN
- ⚛️ **React 19** con optimizaciones modernas
- 🔥 **Vite** para builds ultra-rápidos

## 📝 Personalización

### Actualizar Productos

Edita `/src/data/products.js` para modificar el catálogo:

```javascript
{
  id: 1,
  name: 'Nombre del Producto',
  category: 'categoria', // relojes, aros, pulseras, collares, conjuntos
  price: '$XX.XXX',
  image: 'URL de la imagen',
  description: 'Descripción del producto',
  featured: true // Mostrar como destacado
}
```

### Cambiar Número de WhatsApp

El número está centralizado en `/src/hooks/useWhatsApp.js`:
```javascript
const WHATSAPP_NUMBER = '56987670078';
```

## 👥 Contacto

**Tiendita Montti**
- 📱 WhatsApp: [+56 9 8767 0078](https://wa.me/56987670078)
- 📍 Chile - Envíos a todo el país

---

## 📄 Licencia

© 2024 Tiendita Montti. Todos los derechos reservados.

---

**Hecho con ❤️ y ☕ usando React + Vite**

💎 *Elegancia que perdura, estilo que te define* ✨
