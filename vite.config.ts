import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import jsxDirective from "@vue-macros/jsx-directive/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [{ ...jsxDirective(), enforce: "pre" }, preact()],
});
