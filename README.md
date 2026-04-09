# Momentum - Asesoría Inmobiliaria

Landing page profesional para asesoría inmobiliaria especializada en compra, venta e inversión de propiedades.

## Demo en Vivo

**Versión publicada:** Bootstrap  
🔗 [Ver sitio web]( https://ikermozo.github.io/paginaDisenoWeb/)

## Descripción del Proyecto

Momentum es una landing page diseñada para generar confianza y conversión en clientes potenciales que buscan asesoramiento inmobiliario profesional. El sitio presenta servicios, proceso de trabajo transparente y testimonios reales.

### Público Objetivo
- Profesionales y familias de 30-50 años
- Personas que necesitan comprar, vender o invertir en propiedades
- Usuarios que buscan asesoramiento especializado y de confianza

### Objetivo Principal
Conseguir que el visitante solicite una **consulta gratuita** después de conocer los servicios y generar confianza a través de testimonios y transparencia en el proceso.

## Diseño y Estilo

### Paleta de Colores
- **Principal:** #003366 (Azul oscuro) - Confianza y profesionalidad
- **Apoyo 1:** #5A6C7D (Gris) - Elegancia
- **Dorado:** #D4AF37 (Uso moderado <10%) - Detalles premium
- **Fondo:** #F5F7F9 (Gris claro) - Limpieza visual
- **Texto:** #2C3E50 (Gris oscuro) - Legibilidad

### Tipografía
- **Títulos:** Montserrat (Bold/SemiBold)
- **Cuerpo:** Open Sans (Regular/Light)

### Emociones que Transmite
✓ Seguridad  
✓ Confianza  
✓ Profesionalidad  
✓ Transparencia  
✓ Cercanía  

## Tecnologías Utilizadas

### Versión Publicada: Bootstrap 5.3.2
- **HTML5** semántico
- **CSS3** personalizado sobre Bootstrap
- **Bootstrap 5.3.2** (framework CSS)
- Google Fonts (Montserrat + Open Sans)
- Diseño 100% responsive

## Estructura del Proyecto

```
momentum/
├── index.html              # Página principal (versión Bootstrap)
├── contacto.html           # Formulario de contacto
├── style.css               # Estilos base compartidos
├── jquery.js               # Práctica jQuery (Unidad 4)
└── README.md               # Este archivo

```

## Ramas del Repositorio

Este proyecto contiene **3 implementaciones diferentes** de la misma landing page:

|        Rama        |  Tecnología  |                        Descripción                       |
|--------------------|--------------|----------------------------------------------------------|
|   `version-flex`   | Flexbox puro | Layout con `display: flex`, ideal para alineación 1D     |
|   `version-grid`   |   CSS Grid   | Layout con `display: grid`, perfecto para estructuras 2D |
| `version-bootstrap`|  Bootstrap 5 | Framework completo con componentes y utilidades          |

### Cambiar entre versiones
```bash
git checkout version-flex      # Ver versión Flexbox
git checkout version-grid      # Ver versión Grid
git checkout version-bootstrap # Ver versión Bootstrap
git checkout main              # Volver a la rama principal
```

## Secciones de la Landing Page

1. **Header/Navegación**
   - Logo MOMENTUM
   - Menú responsive (Inicio, Servicios, Proceso, Contacto)

2. **Hero Section**
   - Mensaje principal: "Tu Futuro Empieza con la Decisión Correcta"
   - Subtítulo explicativo
   - CTA principal: "Solicita tu Consulta Gratuita"
   - Imagen de fondo: Propiedad moderna

3. **Servicios**
   - Asesoría en Compra
   - Asesoría en Venta
   - Asesoría de Inversión
   - Grid responsive 3 → 2 → 1 columnas

4. **Proceso de Trabajo**
   - 5 pasos claramente definidos
   - Transparencia en la metodología

5. **Testimonios**
   - 3 testimonios de clientes reales
   - Generación de confianza social

6. **CTA Final**
   - Refuerzo de la llamada a la acción
   - Datos de respaldo (500+ familias)

7. **Footer**
   - Enlaces rápidos
   - Información de contacto
   - Redes sociales
   - Copyright

## Despliegue con GitHub Pages

### Configuración actual:
- **Rama publicada:** `main`
- **Versión mostrada:** Bootstrap
- **URL:**  https://ikermozo.github.io/paginaDisenoWeb/

### Cómo se desplegó:
1. Se hizo merge de `version-bootstrap` → `main`
2. En GitHub: Settings → Pages → Source: `main` → Save
3. GitHub Pages genera automáticamente el sitio

## Instalación Local

```bash
# Clonar el repositorio
git clone  https://ikermozo.github.io/paginaDisenoWeb/

# Abrir con navegador
# Opción 1: Abrir index.html directamente
# Opción 2: Usar un servidor local
python -m http.server 8000
# o
npx serve
```

Luego visita: `http://localhost:8000`

## Comparación de Versiones

### ¿Por qué Bootstrap?

| Criterio | Flexbox | Grid | Bootstrap |
|----------|---------|------|-------------|
| Curva de aprendizaje | Media | Media | Baja |
| Responsive | Manual | Manual | Automático |
| Componentes | DIY | DIY | Incluidos |
| Tamaño archivo | Pequeño | Pequeño | Grande |
| Mantenibilidad | Media | Media | **Alta** |
| Velocidad desarrollo | Media | Media | **Rápida** |
| Compatibilidad | Muy buena | Buena | **Excelente** |

**Ventajas de Bootstrap:**
- Sistema de grid probado en millones de sitios
- Navbar responsive lista para usar
- Utilidades predefinidas (spacing, display, etc.)
- Documentación extensa
- Comunidad gigante

**Desventajas:**
- Peso adicional (~150KB minificado)
- Menos control granular
- Código más "verboso" con muchas clases

## Aprendizajes del Proyecto

### Paso 1: Diseño
- Definición de público objetivo
- Elección de paleta de colores profesional
- Selección tipográfica para legibilidad

### Paso 2: Maquetación
- Estructura semántica HTML5
- Diseño de secciones clave (hero, servicios, testimonios)
- Adaptabilidad responsive

### Paso 3: Implementaciones
- **Flexbox:** Dominio de alineación 1D
- **Grid:** Layouts complejos 2D
- **Bootstrap:** Frameworks y componentes

### Paso 4: Control de Versiones
- Trabajo con múltiples ramas Git
- Pull Requests y documentación
- Despliegue con GitHub Pages

## Notas Técnicas

### Responsive Breakpoints
```css
/* Bootstrap breakpoints usados */
- xs: <576px  (móviles)
- sm: ≥576px  (móviles grandes)
- md: ≥768px  (tablets)
- lg: ≥992px  (laptops)
- xl: ≥1200px (desktops)
```

### Optimizaciones
- Fuentes cargadas vía Google Fonts con `preconnect`
- Imágenes externas optimizadas (Unsplash)
- CSS crítico inline en algunas secciones
- Minificación de Bootstrap vía CDN

# Práctica 5 – Media Queries y Diseño Responsive

## Estrategia de Diseño: Mobile-First

Para este proyecto he adoptado la estrategia de diseño **Mobile-First**

### Justificación de la elección

1. **Mejor Rendimiento en Dispositivos Móviles**
   - Los dispositivos móviles cargan primero el CSS esencial y más ligero, optimizado para pantallas pequeñas.
   - El CSS adicional para pantallas más grandes se carga solo cuando es necesario, reduciendo el tiempo de carga inicial.
   - Esto resulta en una experiencia de usuario más rápida y fluida en smartphones, que representan la mayoría del tráfico web actual.

2. **Priorización del Contenido**
   - Diseñar para la pantalla más pequeña primero nos obliga a identificar y priorizar el contenido más importante.
   - Garantiza que la información esencial sea accesible en todos los dispositivos.
   - Promueve un diseño más limpio y centrado en el usuario.

3. **Código Más Limpio y Mantenible**
   - La metodología Mobile-First se basa en la "mejora progresiva" (*progressive enhancement*).
   - Se parte de una base simple y se añade complejidad de forma gradual.
   - Evita la necesidad de sobrescribir múltiples estilos, reduciendo conflictos y redundancia en el código CSS.

4. **Alineación con las Mejores Prácticas**
   - Mobile-First es el estándar de la industria y la práctica recomendada por organizaciones como W3C y Google.
   - Mejora el posicionamiento SEO, ya que Google utiliza indexación mobile-first.
   - Prepara el proyecto para futuras actualizaciones y nuevas resoluciones de pantalla.

---

## Breakpoints Implementados

| Dispositivo | Rango de Resolución | Media Query |
|-------------|---------------------|-------------|
| ** Móviles** | 0px - 480px | Estilos base (sin media query) |
| ** Tablets** | 481px - 768px | `@media (min-width: 481px)` |
| ** Escritorio** | 769px en adelante | `@media (min-width: 769px)` |

### Navegación Hamburguesa

Se ha implementado un menú hamburguesa responsive usando el componente navbar de Bootstrap:

- **Breakpoint**: 992px (lg)
- **Comportamiento móvil**: El menú se colapsa y aparece un icono ☰
- **Interacción**: Al hacer clic en ☰, el menú se despliega verticalmente
- **Accesibilidad**: Usa atributos ARIA y es navegable por teclado

**Componentes Bootstrap usados:**
- `navbar-toggler`: Botón hamburguesa
- `collapse`: Sistema de colapso/despliegue
- `navbar-expand-lg`: Control de breakpoint

### Lógica de Implementación

```css
/* Estilos base para móvil (0px - 480px) */
.elemento {
    font-size: 1rem;
    padding: 1rem;
}

/* Tablets (481px+) */
@media (min-width: 481px) {
    .elemento {
        font-size: 1.1rem;
        padding: 1.25rem;
    }
}

/* Escritorio (769px+) */
@media (min-width: 769px) {
    .elemento {
        font-size: 1.2rem;
        padding: 1.5rem;
    }
}
```
# Práctica 6 – Multimedia Adaptativo

## Ejercicio 6.1: Regla CSS Global

Se ha implementado una regla CSS global que controla el comportamiento de todas las imágenes y vídeos:
```css
img, video {
    max-width: 100%;
    height: auto;
    display: block;
}
```

**Beneficios:**
-  Todas las imágenes son responsive automáticamente
-  Mantienen su aspect ratio original
-  No sobresalen de sus contenedores
-  No requiere código adicional por imagen

---

## Ejercicio 6.2: Background-image con `cover`

Se ha convertido el hero section en imagen de fondo CSS:

**Opción elegida:** `background-size: cover`

**Justificación:**
- **Cover** garantiza que la imagen cubre TODO el contenedor
- Mantiene el aspect ratio (no deforma)
- Es la opción profesional estándar para hero sections
- Se recorta inteligentemente si es necesario

**Comparación con otras opciones:**
- `contain`: Dejaría espacios en blanco 
- `100% 100%`: Deformaría la imagen estirándola 

**Implementación adaptativa:**
- Móvil: Imagen 800x600px (~150KB)
- Tablet: Imagen 1200x800px (~350KB)
- Desktop: Imagen 1920x1080px (~700KB)

---

## Ejercicio 6.3: Imágenes Adaptativas con `<picture>`

**Opción elegida:** Etiqueta `<picture>`

**Justificación:**
1. **Mejor rendimiento:** Ahorro del 70% de datos en móvil
2. **Control total:** Diferentes imágenes por dispositivo
3. **Estándar W3C:** No necesita JavaScript
4. **Descarga inteligente:** Solo descarga la imagen necesaria

**vs Media Queries en CSS:**
-  Más semántico y accesible
-  El navegador elige automáticamente
-  No descarga imágenes innecesarias
-  Soporte nativo en todos los navegadores modernos

**Implementación:**
```html
<picture>
    <source media="(max-width: 480px)" srcset="imagen-800x600.jpg">
    <source media="(max-width: 768px)" srcset="imagen-1200x800.jpg">
    <source media="(min-width: 769px)" srcset="imagen-1920x1080.jpg">
    <img src="imagen-fallback.jpg" alt="...">
</picture>
```

---

## Ejercicio 6.4: Verificación Responsive

### ¿He definido media queries correctamente?
 **SÍ** - Tres breakpoints bien definidos:
- Móvil: 0-480px
- Tablet: 481-768px
- Desktop: 769px+

### ¿Las imágenes se deforman?
 **NO** - Gracias a:
- `height: auto` mantiene aspect ratio
- `background-size: cover` en hero
- `<picture>` con imágenes optimizadas

### ¿Las imágenes sobresalen del contenedor?
 **NO** - Gracias a:
- `max-width: 100%` en regla global
- Contenedores Bootstrap con grid responsive

### ¿Las imágenes tienen buena calidad?
 **SÍ** - Cada dispositivo carga:
- Resolución óptima para su pantalla
- Peso optimizado para su conexión
- Calidad visual perfecta sin pixelación

### Pruebas realizadas:
-  iPhone SE (375px)
-  iPhone 12 Pro (390px)
-  iPad (768px)
-  iPad Pro (1024px)
-  Desktop 1920px
-  Desktop 4K (3840px)

---

# Práctica 11 – jQuery Integration Sprint

## Archivos añadidos/modificados

- `jquery.js` — archivo nuevo con todo el código jQuery
- `index.html` — añadidos CDN de jQuery, jQuery UI y `<script src="jquery.js">`
- `contacto.html` — añadidos los mismos CDN más el campo `#fecha-consulta` para el datepicker

## CDN incluidos (en `<head>`)

```html
<link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
```

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
<script src="jquery.js"></script>
```

---

## Misión 1 – Selección de Elementos

**Dónde:** `jquery.js`, bloque Misión 1. Se ejecuta al cargar la página (`$(document).ready`).

**Qué se hace y por qué:**

- `$("h2")` — letter-spacing a todos los títulos de sección. Refuerza la tipografía Montserrat sin tocar el CSS.
- `$(".tarjeta")` — badge "✓ Verificado" en cada tarjeta de servicio. Añade credibilidad visual de forma dinámica.
- `$("#hero-titulo")` — primera letra en dorado. Pequeño detalle premium que refuerza la identidad de marca.
- `$(".testimonio:first")` — selector avanzado `:first` para marcar el testimonio más destacado con un badge.
- `$("head").append("<style>...")` — selector avanzado que inyecta una regla CSS en el `<head>` para hacer el navbar `sticky` mediante jQuery, de forma que permanezca visible durante todo el scroll.

---

## Misión 2 – Adición y Supresión del DOM

**Dónde:** `index.html`, sección de testimonios. Código en `jquery.js`, bloque Misión 2.

**Qué se hace y por qué:**

Una asesoría inmobiliaria se nutre de la confianza social. Permitir que el usuario publique su propia reseña y elimine las que no le sean relevantes simula una funcionalidad real de gestión de contenido.

- **`.append()`** — se inyecta un formulario de nueva reseña al final de `.testimonios`. Al pulsar "Publicar", se crea una nueva tarjeta de testimonio y se añade al grid con `.append()` + `.fadeIn()`.
- **`.remove()`** — cada testimonio tiene un botón ✕. Al pulsarlo, la tarjeta hace `.fadeOut()` y luego se elimina del DOM.

**Punto Bonus — evento delegado:**

El listener de eliminar está en el contenedor padre `.testimonios`, no en cada botón. Esto es necesario porque los testimonios creados dinámicamente no existían cuando se cargó la página y no tendrían listener si se registrara directamente sobre ellos.

```js
$(".testimonios").on("click", ".btn-eliminar-testimonio", function () {
    $(this).closest(".testimonio").fadeOut(300, function () {
        $(this).closest(".col-lg-4, .col-md-6, .nueva-resena").remove();
    });
});
```

---

## Misión 3 – Gestión de Eventos

**Dónde:** `jquery.js`, bloque Misión 3. Los tres eventos actúan sobre elementos de `index.html` y `contacto.html`.

**Qué se hace y por qué:**

- **Evento de ratón — `click` en `.tarjeta`:** Al hacer clic en una tarjeta de servicio, aparece un panel desplegable con un enlace directo a la consulta gratuita para ese servicio concreto. Se usa `$(this)` para leer el `h3` de la tarjeta clickada y personalizar el mensaje. Tiene sentido porque el usuario que explora un servicio es el que más probabilidad tiene de contactar.

- **Evento de teclado — `keyup` en `#mensaje`:** Muestra un contador de caracteres en tiempo real bajo el textarea del formulario de contacto. El contador cambia a rojo al superar los 450 caracteres. Es feedback inmediato y útil para el usuario.

- **Tercer evento — `scroll` en `window`:** Detecta qué sección está visible y marca el nav-link correspondiente como activo resaltándolo en dorado. El navbar es sticky (fijado arriba mediante jQuery) para que sea visible en todo momento mientras se hace scroll. El evento también se ejecuta al cargar la página para que "Inicio" aparezca activo desde el primer momento.

---

## Misión 4 – Animaciones y Transiciones

**Dónde:** `jquery.js`, bloque Misión 4. Afecta a `index.html`.

**Qué se hace y por qué:**

- **`.fadeIn()` escalonado en `.testimonio`:** Los tres testimonios aparecen con un retardo incremental de 200ms entre ellos. Crea un efecto de entrada progresivo que llama la atención sin ser intrusivo.

- **`.slideDown()` / `.slideUp()` en pasos del proceso:** Cada `<li>` del proceso es clicable y despliega/colapsa el texto descriptivo del paso. Encaja porque convierte una lista estática en un acordeón interactivo que invita a explorar cada fase.

- **`.animate()` en `.hero-subtitle`:** El subtítulo del hero arranca con `opacity: 0` y `marginTop: 30px` y anima hasta su posición natural. Usa dos propiedades CSS personalizadas (`opacity` y `marginTop`), cumpliendo el requisito de la misión. El efecto de entrada suaviza el impacto visual del hero.

---

## Misión 5 – Plugin jQuery UI: Datepicker

**Dónde:** `contacto.html`, campo `#fecha-consulta`. Inicializado en `jquery.js`, bloque Misión 5.

**Qué se hace y por qué:**

Se añade un campo de fecha al formulario de contacto para que el usuario pueda indicar cuándo prefiere recibir la consulta. Para una asesoría inmobiliaria, gestionar la disponibilidad del cliente desde el primer contacto es clave para optimizar la agenda del equipo.

El datepicker está configurado con:
- Idioma en español (días y meses)
- Fecha mínima: hoy (no se pueden seleccionar fechas pasadas)
- Fecha máxima: 3 meses vista (marco realista de agenda)
- Animación de entrada `slideDown`
- Estilos CSS adaptados a la paleta de Momentum (azul oscuro y dorado)

---

# Práctica 13 — Integración de Contenidos Interactivos
**Módulo:** DAW M09 · Unidad 4  
**Alumno:** —  
**Web:** [GitHub Pages URL]

---

## Selectores HTML utilizados para anclar los componentes

| Componente | Selector / ID de anclaje | Descripción |
|---|---|---|
| Canvas partículas | `section#inicio.hero` | El `<canvas id="p13-hero-canvas">` se inserta dentro del hero como fondo |
| Gráfico Chart.js | `<section id="p13-estadisticas">` | Sección nueva insertada entre `#proceso` y `#sobre-nosotros` |
| Staggering tarjetas | `#servicios .tarjeta` | Las 3 tarjetas de servicios aparecen escalonadas al entrar en viewport |
| Staggering testimonios | `.testimonios .testimonio` | Los 3 testimonios aparecen escalonados al entrar en viewport |
| Micro-interacciones | `.tarjeta`, `.testimonio`, `.btn-cta`, `#p13-btn-toggle-chart` | Animaciones de feedback ante mouseenter / mousedown |

---

## Librerías externas (CDN)

| Librería | Versión | URL CDN | Uso |
|---|---|---|---|
| **Chart.js** | 4.4.2 | `https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js` | Bloque A — gráfico barras/líneas |
| **Anime.js** | 3.2.1 | `https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js` | Bloque B — staggering + micro-interacciones |
| **Canvas API** | nativa | — | Bloque C — partículas con `requestAnimationFrame` |

> Bootstrap 5.3, jQuery 3.7.1 y Font Awesome 6.5.1 ya estaban en el proyecto base.

---

## Estructura de archivos añadidos

```
/
├── index.html                          ← modificado (canvas, sección p13, CDNs)
├── css/
│   └── interactividad_practica13.css   ← estilos nuevos (prefijo .p13-)
└── js/
    └── interactividad_practica13.js    ← todo el JS nuevo (IIFE encapsulado)
```

---

## Decisiones de diseño

- **Theming coherente:** colores `#D4AF37` (dorado), `#011f3e` (azul marino) y `#5A6C7D` (apoyo) extraídos de las variables CSS del proyecto base.
- **Canvas:** `pointer-events: none` para que no bloquee la interacción con el hero. El canvas ocupa exactamente el bounding box del hero y se redimensiona con `resize`.
- **Staggering con IntersectionObserver:** las animaciones de entrada solo se lanzan cuando los elementos son visibles en el viewport, evitando que se disparen antes de que el usuario baje.
- **Encapsulamiento:** todo el código JS está dentro de un IIFE `(function(){ 'use strict'; ... })()` sin ninguna variable en el scope global.
- **Prefijo CSS:** todos los selectores nuevos usan el prefijo `.p13-` o el id `#p13-*` para garantizar que no colisionen con los estilos existentes.

## Autor

**Iker Mozo**  
Proyecto realizado para el módulo de Diseño de Interfaces Web  
Ilerna Online - 2025