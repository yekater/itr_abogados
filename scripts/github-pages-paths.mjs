// Adapt root-relative public assets and links in the static output to the
// GitHub Pages project subdirectory. Astro handles its own generated assets.
import {readdir, readFile, writeFile} from 'node:fs/promises';
import {join} from 'node:path';

const base = (process.env.PUBLIC_BASE_PATH || '/').replace(/\/$/, '');
const origin = new URL(process.env.PUBLIC_SITE_URL || 'https://preview.itr.invalid').origin;
if (!base || !base.startsWith('/')) throw new Error('PUBLIC_BASE_PATH must be a project subdirectory');

const prefix = (path) => path === base || path.startsWith(`${base}/`) ? path : `${base}${path}`;
async function visit(directory) {
  for (const entry of await readdir(directory, {withFileTypes: true})) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) await visit(file);
    else if (/\.(?:html|css|xml|txt)$/.test(entry.name)) {
      let text = await readFile(file, 'utf8');
      text = text.replace(/\b(href|src|poster)="(\/(?!\/)[^"]*)"/g, (_, attr, path) => `${attr}="${prefix(path)}"`);
      text = text.replace(/url\((['"]?)(\/(?!\/)[^)'"\s]+)\1\)/g, (_, quote, path) => `url(${quote}${prefix(path)}${quote})`);
      text = text.replaceAll(`${origin}/`, `${origin}${base}/`.replace(`${base}${base}/`, `${base}/`));
      // Avoid duplicating the base on URLs Astro already generated.
      text = text.replaceAll(`${origin}${base}${base}/`, `${origin}${base}/`);
      await writeFile(file, text);
    }
  }
}
await visit('dist');
