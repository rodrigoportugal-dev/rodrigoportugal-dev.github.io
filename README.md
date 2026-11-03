# Rodrigo Portugal · Portfolio

Web personal bilingüe (español / inglés) publicada con GitHub Pages.

## Cómo editar el contenido

Todo el texto está en **`data.js`**:

- `PROFILE`: nombre, titular, "Sobre mí" y enlaces (LinkedIn, GitHub, email).
- `EDUCATION`, `EXPERIENCE`, `SKILLS`, `COURSES`: formación, experiencia, aptitudes y asignaturas.
- `PROJECTS`: los proyectos. Para añadir uno, copia un bloque `{ ... }` y cambia sus datos.
  - `status`: `"done"` (terminado), `"wip"` (en curso) o `"planned"` (próximamente).
  - Las capturas van en la carpeta `img/`, por ejemplo `image: "img/mi-proyecto.png"`.

Cada texto tiene una versión en español (`es`) y otra en inglés (`en`).

## Archivos

- `index.html`: estructura de la página.
- `styles.css`: diseño (modo claro y oscuro).
- `script.js`: idioma, tema y filtros de proyectos.
- `data.js`: contenido.
