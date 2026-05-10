# Práctica 14: Detectando Barreras de Accesibilidad
**Módulo DAW M09 — Diseño de Interfaces Web**
**Proyecto analizado: MOMENTUM — Asesoría Inmobiliaria**

---

## 1. Presentación del proyecto

MOMENTUM es una landing page para una asesoría inmobiliaria profesional. Su objetivo es generar confianza y convertir visitas en consultas, ofreciendo servicios de compra, venta e inversión inmobiliaria. El público al que va dirigida son profesionales y familias de entre 30 y 50 años con capacidad de decisión económica: personas que buscan acompañamiento experto, claridad en el proceso y seguridad en una de las decisiones más importantes de su vida.

El sitio está construido con HTML5, Bootstrap 5, jQuery, Anime.js y Chart.js. Incluye animaciones de partículas en el hero, un gráfico interactivo de mercado, un reproductor de audio ambiental, un formulario con datepicker y un sistema de traducción a tres idiomas (ES, CA, EN).

**¿He pensado hasta ahora en usuarios con discapacidad?** Siendo honesto, no de forma deliberada. El foco del desarrollo ha estado en la estética, las animaciones y la interactividad. Lo evidencia el propio código: hay líneas en el CSS que eliminan activamente el indicador de foco (`outline: none`) para que el diseño "quede más limpio", y las interacciones de tarjetas y testimonios dependen exclusivamente de eventos de ratón. No ha habido mala intención, pero sí una omisión sistemática: la accesibilidad no ha formado parte de ninguna decisión de diseño hasta este análisis.

---

## 2. Identificación de barreras

### Barrera Visual
El CSS del proyecto contiene dos declaraciones problemáticas. En la línea 158 de `style.css`, el botón del menú hamburguesa tiene `outline: none` en su estado `:focus`, y en la línea 890 se aplica el mismo supresión al reproductor de audio. Esto elimina por completo el indicador visual de foco para cualquier usuario que navegue con teclado o con tecnología asistiva. Además, ninguna de las dos páginas incluye un `<h1>`: la jerarquía de cabeceras comienza directamente en `<h2>`, lo que desestructura la página para los lectores de pantalla que usan los encabezados como mapa de navegación. Por último, el color dorado (#D4AF37) usado sobre fondo blanco en algunos badges decorativos presenta un ratio de contraste de aproximadamente 2,5:1, muy por debajo del mínimo AA (4,5:1) exigido por WCAG 2.1.

**Afecta a:** personas con baja visión, usuarios que navegan con teclado, usuarios de lectores de pantalla.

### Barrera Auditiva
El proyecto integra un vídeo corporativo y un audio ambiental de fondo, pero ninguno de los dos ofrece alternativa textual. El vídeo carece de subtítulos o transcripción, y el audio no tiene descripción de su contenido. Si la información transmitida en estos elementos fuera relevante (en el caso del audio principalmente es atmosférica, pero el vídeo podría no serlo), quedaría completamente inaccesible.

**Afecta a:** personas sordas o con hipoacusia.

### Barrera Física / Motora
Las interacciones más avanzadas del proyecto —el efecto hover en las tarjetas de servicio, los micro-efectos de las tarjetas de testimonios y los estados activos de los botones del gráfico— están implementadas exclusivamente con eventos de ratón (`mouseenter`, `mousedown`, `mouseup`, `mouseleave`). No existe ningún equivalente de teclado. Además, el navbar toggler no tiene el atributo `aria-expanded`, de modo que un usuario que navega con teclado no puede conocer el estado del menú (abierto o cerrado) sin verlo.

**Afecta a:** personas con movilidad reducida que usan teclado, interruptores de acceso o joysticks; usuarios de lectores de pantalla.

### Barrera Cognitiva
El contenido dinámico del sitio (la confirmación de envío del formulario, los testimonios añadidos o eliminados mediante jQuery) no notifica sus cambios a las tecnologías asistivas. No hay ningún atributo `aria-live` en las zonas que se actualizan. Esto significa que un usuario de lector de pantalla que añada una reseña o envíe el formulario no recibirá confirmación auditiva de que algo ha ocurrido. La experiencia queda rota en un punto crítico del flujo.

**Afecta a:** usuarios de lectores de pantalla, personas con dificultades de atención o procesamiento que dependen de confirmaciones claras.

### Barrera del Habla
No aplica: el sitio no incluye interfaces de reconocimiento de voz ni funciones que requieran input hablado.

---

## 3. Reconocimiento de buenas prácticas

**Estructura semántica consistente.** Ambas páginas usan correctamente las etiquetas HTML5 de sección: `<nav>`, `<main>`, `<section>` y `<footer>`. Aunque no haya sido una decisión explícitamente pensada para la accesibilidad, esta estructura permite a los lectores de pantalla orientarse por la página mediante los landmarks de ARIA implícitos que estas etiquetas generan.

**Formulario con etiquetas correctamente asociadas.** Todos los campos del formulario de contacto tienen su `<label>` vinculado mediante el atributo `for` al `id` del input correspondiente (nombre, apellido, email, fecha, mensaje). Esto garantiza que un usuario de lector de pantalla escuche el nombre del campo al enfocarlo, y que el área clicable del label active el input. Es una de las prácticas más importantes en formularios y está bien ejecutada.

**Complementos adicionales bien aplicados.** El canvas de partículas del hero tiene `aria-hidden="true"` (decoración invisible para lectores de pantalla), el iframe del mapa tiene `title="Mapa de ubicación de Momentum"`, la tabla de contacto usa `<caption>` y `scope` correctamente, y los iconos de redes sociales tienen `aria-label` en sus enlaces. Estos detalles demuestran que existe cierta sensibilidad hacia la accesibilidad, aunque no de forma sistemática.

---

## 4. Propuesta de mejora

**Mejora propuesta: recuperar el indicador de foco y extender la navegación por teclado a las interacciones críticas.**

El problema más grave que presenta MOMENTUM no es la falta de subtítulos ni el contraste del dorado: es que un usuario que no puede usar el ratón tiene una experiencia rota desde el primer elemento interactivo que intenta usar. La eliminación de `outline: none` es la causa raíz, pero el problema real es estructural: el proyecto asume que todos los usuarios usan puntero.

La mejora concreta consistiría en dos pasos complementarios. Primero, eliminar las declaraciones `outline: none` del CSS y sustituirlas por un estilo de foco personalizado que sea visualmente coherente con la paleta del proyecto (por ejemplo, un `outline` de 2px en el dorado `#D4AF37` con un pequeño `offset`). Segundo, añadir el evento `keydown` junto a los eventos de ratón existentes en las interacciones de tarjetas y botones, de modo que al presionar Enter o Espacio sobre un elemento enfocado se ejecute la misma acción que con el clic.

Esta mejora beneficia directamente a personas con movilidad reducida que dependen del teclado o de tecnologías de acceso alternativo, pero también a usuarios que por preferencia o contexto navegan sin ratón (usuarios avanzados, usuarios en dispositivos sin trackpad). El esfuerzo de implementación es bajo y el impacto en la experiencia del usuario con discapacidad física es inmediato y significativo: convierte una barrera infranqueable en una experiencia funcional.
