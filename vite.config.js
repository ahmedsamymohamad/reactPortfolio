import path from "path";

// eslint-disable-next-line import/no-extraneous-dependencies
import react from "@vitejs/plugin-react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
      alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});