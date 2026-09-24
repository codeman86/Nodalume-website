import { defineConfig } from 'astro/config';

// Intended production host is https://hyprcore.com once DNS points here.
// `site` stays unset until then so the build does not advertise that URL early.
export default defineConfig({
  compressHTML: true,
});
