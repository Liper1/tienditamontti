# Tiendita Montti

Tienda de joyas de acero inoxidable - Landing page desarrollada con Vite + React.

## 🌟 Características

- Landing page moderna y responsive
- Diseño minimalista y limpio
- 6 productos de muestra
- Botón flotante de WhatsApp
- Enlaces a redes sociales (WhatsApp e Instagram)
- Componentes funcionales de React
- CSS personalizado sin frameworks

## 🚀 Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/Liper1/tienditamontti.git
cd tienditamontti
npm install
```

## 💻 Desarrollo

Para ejecutar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🏗️ Construcción

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos optimizados se generarán en el directorio `dist/`

## 👀 Vista Previa

Para previsualizar la construcción de producción:

```bash
npm run preview
```

## 📦 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse en GitHub Pages con la base `/tienditamontti/`.

1. Construye el proyecto:
```bash
npm run build
```

2. Despliega el contenido del directorio `dist/` a la rama `gh-pages`

## 🛠️ Tecnologías

- **Vite** - Build tool y dev server
- **React 19** - Biblioteca de UI
- **CSS3** - Estilos personalizados
- **JavaScript ES6+** - Lenguaje de programación

## 📂 Estructura del Proyecto

```
tienditamontti/
├── public/           # Archivos estáticos
├── src/
│   ├── components/   # Componentes de React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.jsx       # Componente principal
│   ├── App.css       # Estilos de componentes
│   ├── index.css     # Estilos globales
│   └── main.jsx      # Punto de entrada
├── index.html        # HTML principal
├── vite.config.js    # Configuración de Vite
└── package.json      # Dependencias y scripts
```

## 📱 Secciones

- **Navbar** - Navegación principal
- **Hero** - Sección de bienvenida
- **Products** - Catálogo de 6 productos
- **About** - Información sobre la tienda
- **Contact** - Formulario y datos de contacto
- **Footer** - Pie de página con enlaces sociales

## 🎨 Personalización

Para personalizar los productos, edita el archivo `src/components/Products.jsx` y modifica el array `products`.

Para cambiar el número de WhatsApp, busca y reemplaza `1234567890` en los archivos:
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`
- `src/components/WhatsAppButton.jsx`

## 📄 Licencia

Este proyecto es de código abierto.
