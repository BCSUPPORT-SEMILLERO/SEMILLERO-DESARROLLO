ENTREGABLE COMPLETO

# 🥖 Landing Page - Panadería Doña Pepa BCS

## 📖 Descripción del Proyecto

Este proyecto consiste en el desarrollo de una Landing Page para una panadería ficticia llamada **Panadería Doña Pepa BCS**, construida como parte de los retos de aprendizaje de Desarrollo Web.

La página fue desarrollada aplicando buenas prácticas de HTML5, CSS3, Responsive Design, Accesibilidad Web y control de versiones con Git y GitHub.

---

# 📌 Tema 1 - Wireframe

## Objetivo

Diseñar la estructura inicial de la Landing Page antes de comenzar el desarrollo.

## Caso de negocio

**Panadería Doña Pepa BCS**

## Persona objetivo

Personas interesadas en comprar productos de panadería artesanal y realizar pedidos de forma rápida.

## Problema que resuelve

Permite a los clientes conocer los productos, beneficios y formas de contacto de la panadería desde cualquier dispositivo.

## Secciones definidas

- Header
- Hero
- Beneficios
- Llamado a la acción (CTA)
- Formulario de contacto
- Footer

## Acción principal

Contactar a la panadería para solicitar información o realizar pedidos.

## Heurísticas de Nielsen aplicadas

1. Consistencia y estándares.
2. Diseño estético y minimalista.
3. Reconocimiento antes que recuerdo.

## Evidencias

Ubicadas en:

```text
docs/notas-wireframe.txt
```

---

# 🏗️ Tema 2 - Estructura HTML Semántica

## Características implementadas

- HTML5 semántico.
- Uso de etiquetas:
  - `header`
  - `nav`
  - `main`
  - `section`
  - `article`
  - `form`
  - `footer`
- Un único `h1`.
- Navegación estructurada.
- Formulario accesible mediante labels.
- Imágenes con atributo `alt`.
- Validación W3C sin errores.

## Archivo principal

```text
index.html
```

---

# 🎨 Tema 3 - Estilos CSS

## Paleta institucional

| Variable | Color |
|-----------|---------|
| Primary | #C22945 |
| Secondary | #004960 |
| Light | #F5F7FA |
| White | #FFFFFF |
| Dark | #1F2937 |

## Tipografía

- Google Fonts
- Poppins

## Componentes estilizados

- Header
- Hero
- Botones
- Tarjetas
- Formulario
- Footer

## Interacciones

- Hover en botones y enlaces.
- Focus visible para accesibilidad.

## Archivo principal

```text
styles.css
```

---

# 📱 Tema 4 - Diseño Responsive

## Estrategia utilizada

**Mobile First**

## Tecnologías aplicadas

### CSS Grid

Utilizado para:

- Distribución de tarjetas.
- Organización adaptable del contenido.

### Flexbox

Utilizado para:

- Header.
- Navegación.
- Componentes internos.

## Breakpoints

### 📱 Móvil

Menor a 768px.

- Diseño en una sola columna.
- Menú adaptado.

### 📲 Tablet

Desde 768px.

- Tarjetas en dos columnas.

### 💻 Escritorio

Desde 1024px.

- Tarjetas en tres columnas.
- Contenido centrado.

## Características adicionales

- Imágenes fluidas.
- Menú desplegable para dispositivos móviles.
- Adaptación a diferentes tamaños de pantalla.

---

# ♿ Tema 5 - Consistencia y Accesibilidad

## Design Tokens

### Colores

```css
--primary: #C22945;
--secondary: #004960;
--light: #f5f7fa;
--white: #ffffff;
--dark: #1f2937;
```

### Tipografía

```css
font-family: 'Poppins', sans-serif;
```

## Componentes reutilizables

- `.btn`
- `.card`
- `button`
- `input`
- `textarea`

## Accesibilidad implementada

- HTML semántico.
- Labels asociados a campos.
- Navegación mediante teclado.
- Focus visible.
- Contraste adecuado.
- Uso correcto de encabezados.
- Imágenes con texto alternativo.

## Lighthouse

| Métrica | Resultado |
|----------|------------|
| Accessibility | Pendiente |

> Actualizar con la puntuación obtenida después de ejecutar Lighthouse.

---

# 🔧 Control de Versiones

## Inicialización del proyecto

```bash
git init
```

## Agregar archivos

```bash
git add .
```

## Crear commit

```bash
git commit -m "feat: landing page completa"
```

## Renombrar rama principal

```bash
git branch -M main
```

## Conectar repositorio remoto

```bash
git remote add origin URL_REPOSITORIO
```

## Subir proyecto

```bash
git push -u origin main
```

---

# 🚀 Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Visual Studio Code

---

# 👨‍💻 Autor

**José Urrego Usuga**

Proyecto desarrollado como evidencia de aprendizaje para los retos de Desarrollo Web.
