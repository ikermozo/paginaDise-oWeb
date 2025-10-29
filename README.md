# Momentum - Asesoría Inmobiliaria

Landing page profesional para asesoría inmobiliaria especializada en compra, venta e inversión de propiedades.

## Demo en Vivo

**Versión publicada:** Bootstrap  
🔗 [Ver sitio web](https://TU-USUARIO.github.io/TU-REPOSITORIO)

## 📋 Descripción del Proyecto

Momentum es una landing page diseñada para generar confianza y conversión en clientes potenciales que buscan asesoramiento inmobiliario profesional. El sitio presenta servicios, proceso de trabajo transparente y testimonios reales.

### Público Objetivo
- Profesionales y familias de 30-50 años
- Personas que necesitan comprar, vender o invertir en propiedades
- Usuarios que buscan asesoramiento especializado y de confianza

### Objetivo Principal
Conseguir que el visitante solicite una **consulta gratuita** después de conocer los servicios y generar confianza a través de testimonios y transparencia en el proceso.

## 🎨 Diseño y Estilo

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

## 🛠️ Tecnologías Utilizadas

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

## 📱 Secciones de la Landing Page

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
- **URL:** https://TU-USUARIO.github.io/TU-REPOSITORIO

### Cómo se desplegó:
1. Se hizo merge de `version-bootstrap` → `main`
2. En GitHub: Settings → Pages → Source: `main` → Save
3. GitHub Pages genera automáticamente el sitio

## 💻 Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/TU-USUARIO/TU-REPOSITORIO.git

# Entrar al directorio
cd TU-REPOSITORIO

# Abrir con navegador
# Opción 1: Abrir index.html directamente
# Opción 2: Usar un servidor local
python -m http.server 8000
# o
npx serve
```

Luego visita: `http://localhost:8000`

## 📊 Comparación de Versiones

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

## 📝 Notas Técnicas

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

## 👨‍💻 Autor

**Iker  Mozo**  
Proyecto realizado para el módulo de Diseño de Interfaces Web  
Ilerna Online - 2025
