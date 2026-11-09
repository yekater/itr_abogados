# iTR+ · Investigación digital para abogados

Sitio web del curso de investigación digital de iTR+ para profesionales del ámbito jurídico. Es una aplicación estática multilingüe con información del programa, preguntas frecuentes, orientación profesional y una demostración interactiva de investigación con datos simulados.

- **Sitio publicado:** https://yekater.github.io/itr_abogados/
- **Repositorio:** https://github.com/yekater/itr_abogados
- **Idiomas:** español (`/`), catalán (`/ca/`) e inglés (`/en/`). En GitHub Pages estas rutas están bajo `/itr_abogados/`.
- **Stack:** Astro, React, TypeScript, Tailwind CSS, GSAP, PDFKit y Playwright.

Astro genera las páginas como HTML estático; React se utiliza para componentes interactivos como el planificador, la selección de especialidad y el caso práctico. El registro, la contratación y el contacto se gestionan mediante enlaces externos a iTR+/Odoo.

## Requisitos

- Node.js **24** y npm. El flujo de GitHub Actions utiliza Node 24.
- Git para clonar el repositorio.
- Chromium instalado por Playwright para ejecutar las pruebas de navegador.

## Inicio rápido

```bash
git clone https://github.com/yekater/itr_abogados.git
cd itr_abogados
npm ci
npm run dev
```

Abre la URL que muestra Astro en la terminal, normalmente `http://localhost:4321/`. El servidor se detiene con `Ctrl+C`.

Para comprobar la versión compilada:

```bash
npm run check
npm run build
npm run preview
```

`npm run build` regenera el PDF del programa antes de compilar el sitio en `dist/`. La vista previa sirve ese directorio, por lo que hay que volver a compilar después de modificar el código.

## Comandos disponibles

| Comando | Función |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo de Astro. |
| `npm run check` | Comprueba archivos Astro y tipos TypeScript. |
| `npm run pdf` | Genera `public/downloads/programa-investigacion-digital-abogados.pdf`. |
| `npm run build` | Genera el PDF y compila el sitio estático en `dist/`. |
| `npm run preview` | Sirve localmente la última compilación. |
| `npm test` | Ejecuta las pruebas de Playwright contra la compilación. |
| `npm run audit` | Ejecuta Lighthouse y registra tamaños de archivos; requiere una vista previa activa en el puerto 4321 y Chromium en `/usr/bin/chromium` según `scripts/audit.mjs`. |
| `npm run export:html` | Ejecuta la compilación y el exportador de la vista HTML independiente. El exportador usa componentes heredados; comprueba su compatibilidad con la versión actual antes de utilizarlo. |

## Estructura del proyecto

```text
src/
  pages/             Páginas Astro, rutas legales, robots y sitemap
  components/        Secciones Astro, componentes React y hero
  layouts/           Plantillas compartidas, incluidas páginas legales
  data/              Textos, programa, traducciones y datos de fuentes
  lib/               Enlaces, consentimiento y lógica de interacción
  assets/            Imágenes procesadas por Astro
  styles/            Estilos globales y del hero
public/              Archivos públicos: imágenes, vídeo, iconos y PDF
scripts/             Generación del PDF, exportación y utilidades de despliegue
tests/               Pruebas Playwright
.github/workflows/   Publicación automática en GitHub Pages
docs/                Documentación y material de trabajo interno
```

`public/` se copia al resultado de compilación; `src/assets/` contiene imágenes que Astro puede optimizar. `dist/` es el directorio generado que debe publicarse. No es necesario desplegar `src/`, `docs/` ni `node_modules/`.

## Guía para modificar el sitio

### Textos y contenido

| Cambio | Archivo o ubicación principal |
| --- | --- |
| Programa, módulos y lecciones | `src/data/curriculum.ts` |
| Duración, preguntas frecuentes y enlaces principales | `src/data/site.ts` |
| Modalidad, materiales, soporte y acceso | `src/data/course-format.ts` |
| Traducciones y contenido localizado | `src/data/locales.ts` y los componentes que reciben `locale` |
| Estadísticas y enlaces a fuentes | `src/data/employment-evidence.ts` |
| Imágenes y presentación de salidas laborales | `src/components/SalidasLaborales.astro` y `src/assets/careers/` |
| Hero y sus textos por idioma | `src/components/hero/HeroSection.astro` |
| Tarjetas de competencias | `src/components/CompetencyCards.astro` |
| Caso práctico y datos simulados | `src/components/investigation-demo/`, `src/data/demo-case.ts` y `src/lib/demo-engine.ts` |
| Destinos de contacto y curso | `src/lib/links.ts` y `src/data/site.ts` |
| Datos del titular y páginas legales | `src/data/legal.ts`, `src/data/privacy-policy.ts` y `src/pages/` |

Las páginas principales están en `src/pages/index.astro` y `src/pages/[locale]/index.astro`. Algunas secciones utilizan datos compartidos y otras mantienen textos por idioma dentro del propio componente: al modificar una sección, revisa las tres versiones y la salida generada.

El PDF se genera a partir de `src/data/curriculum.ts`, `src/data/site.ts` y `src/data/course-format.ts`. Ejecuta `npm run pdf` o `npm run build` después de cambiar estos datos y revisa el documento generado; no edites el PDF como fuente principal.

### Estilos y recursos

Los estilos generales están en `src/styles/global.css` y los del vídeo del hero en `src/styles/hero-investigation.css`. Los recursos estáticos se encuentran en `public/` y las imágenes importadas por componentes en `src/assets/`. Al sustituir una imagen importada, comprueba que sus proporciones y el recorte siguen funcionando en escritorio y móvil.

El hero utiliza `public/videos/hero-investigation-silent.mp4` y una imagen de portada en `public/images/`. Los componentes interactivos se hidratan en el navegador; comprueba también su comportamiento con movimiento reducido cuando modifiques animaciones.

## Variables de entorno

El archivo `.env.example` recoge valores de ejemplo. Las variables `PUBLIC_*` forman parte de la configuración pública del sitio: **no incluyas secretos en ellas**. Para configurar la compilación de forma inequívoca, exporta las variables en el entorno del proceso antes de ejecutar el comando.

| Variable | Uso |
| --- | --- |
| `PUBLIC_SITE_URL` | Origen HTTPS utilizado para las URL canónicas, el sitemap y otros metadatos. Por defecto es `https://preview.itr.invalid`. En producción se rechazan localhost y dominios reservados. |
| `PUBLIC_DEPLOY_ENV` | Con `production`, las páginas principales permiten indexación; con otros valores usan `noindex,follow`. |
| `PUBLIC_BASE_PATH` | Subruta de Astro. En GitHub Pages se usa `/itr_abogados`; para un dominio en la raíz se usa `/` o se deja sin definir. |
| `PUBLIC_OWNER`, `PUBLIC_NIF`, `PUBLIC_ADDRESS`, `PUBLIC_EMAIL`, `PUBLIC_REGISTRATION` | Sobrescriben los datos legales de `src/data/legal.ts`. Si están vacíos, se utilizan los valores definidos en ese archivo. |
| `PLAYWRIGHT_EXECUTABLE_PATH` | Opcional: ruta a un Chromium existente para las pruebas. |

Ejemplo de compilación para un dominio propio en la raíz:

```bash
PUBLIC_SITE_URL=https://ejemplo.com PUBLIC_DEPLOY_ENV=production npm run build
```

En PowerShell:

```powershell
$env:PUBLIC_SITE_URL = 'https://ejemplo.com'
$env:PUBLIC_DEPLOY_ENV = 'production'
Remove-Item Env:PUBLIC_BASE_PATH -ErrorAction SilentlyContinue
npm run build
```

Revisa los valores legales y la configuración del entorno de destino antes de publicar. En particular, el flujo actual de GitHub Pages solo define las tres variables de sitio y utiliza los valores legales predeterminados del código.

## Pruebas

```bash
npx playwright install chromium
npm run build
npm test
```

Playwright inicia `npm run preview -- --port 4322` automáticamente y usa `http://127.0.0.1:4322`. Para las pruebas existentes, compila con la configuración local de raíz (`PUBLIC_BASE_PATH` sin definir). Los resultados JSON se escriben en `docs/qa-results.json`. Para ejecutar un archivo concreto:

```bash
npx playwright test tests/landing.spec.ts
```

Si se utiliza un navegador propio, define `PLAYWRIGHT_EXECUTABLE_PATH` con su ruta antes de ejecutar las pruebas. En Linux, si faltan bibliotecas del sistema, consulta las indicaciones de instalación de Playwright.

## Despliegue en GitHub Pages

La publicación actual utiliza **GitHub Actions** y el workflow `.github/workflows/pages.yml`:

1. Cada push a `main` inicia el workflow; también se puede ejecutar manualmente desde **Actions → Deploy GitHub Pages → Run workflow**.
2. El workflow instala dependencias con `npm ci` y compila con Node 24.
3. Configura `PUBLIC_SITE_URL=https://yekater.github.io`, `PUBLIC_BASE_PATH=/itr_abogados` y `PUBLIC_DEPLOY_ENV=production`.
4. Ejecuta `scripts/github-pages-paths.mjs`, que adapta rutas públicas y enlaces del HTML/CSS generado a la subruta del repositorio.
5. Sube `dist/` como artefacto y lo publica con GitHub Pages.

Para desplegar una copia en otro repositorio:

1. En **Settings → Pages**, selecciona **GitHub Actions** como origen de publicación.
2. En el workflow, actualiza el origen `PUBLIC_SITE_URL` y la subruta `PUBLIC_BASE_PATH` en **ambos pasos** que las definen. Para un repositorio de proyecto, la URL habitual es `https://<usuario>.github.io/<repositorio>/`.
3. Comprueba que la rama configurada en el disparador coincida con la rama de publicación y sube los cambios.
4. Revisa la ejecución en **Actions** y comprueba el sitio publicado, sus idiomas, enlaces legales, imágenes y descarga del PDF.

Para reproducir localmente la compilación de este repositorio en PowerShell:

```powershell
$env:PUBLIC_SITE_URL = 'https://yekater.github.io'
$env:PUBLIC_BASE_PATH = '/itr_abogados'
$env:PUBLIC_DEPLOY_ENV = 'production'
npm run build
node scripts/github-pages-paths.mjs
npm run preview
```

Abre la URL de preview con `/itr_abogados/`. El script de adaptación se aplica al resultado generado y debe ejecutarse **una vez después de cada compilación** para este despliegue en subruta. No lo ejecutes para una publicación en la raíz sin adaptarlo.

## Otros alojamientos

Para un servidor estático o proveedor compatible, configura `PUBLIC_SITE_URL` con el origen definitivo, `PUBLIC_DEPLOY_ENV=production` y compila. Publica el contenido de `dist/` en la raíz del dominio. Si se publica bajo una subruta, además de configurar `PUBLIC_BASE_PATH`, adapta las rutas públicas y enlaces absolutos a esa subruta; el script de GitHub Pages es la implementación utilizada por este proyecto.

El alojamiento es responsable de HTTPS, redirecciones, caché y cabeceras HTTP. `docs/despliegue.md` contiene notas adicionales de infraestructura; algunas referencias históricas de esa documentación pueden no reflejar el despliegue actual.

## Lista de comprobación para cambios

1. Modifica las fuentes de contenido o el componente correspondiente y revisa español, catalán e inglés cuando proceda.
2. Ejecuta `npm run check`, `npm run build` y las pruebas relevantes.
3. Revisa el PDF si has modificado programa, duración o condiciones del curso.
4. Comprueba la página en escritorio y móvil, los enlaces de contacto, el cambio de idioma y las páginas legales.
5. Tras publicar, revisa el resultado del workflow y verifica los recursos y enlaces en la URL desplegada.
