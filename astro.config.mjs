// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://resilient-torrone-8ae3d6.netlify.app/",
  integrations: [preact()],
});