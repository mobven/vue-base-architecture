import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

const path = require("path");

export default defineConfig({
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
