import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// SPA with clean URLs. Dev + preview servers fall back to index.html automatically.
export default defineConfig({
  plugins: [react()],
  build: { sourcemap: false, target: "es2020" },
});
