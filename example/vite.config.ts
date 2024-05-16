import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-pdf-highlighter-extended/example-app/",
  build: {
    target: "esnext",
    outDir: "example-app",
  },
  plugins: [reactRefresh()],
  server: {
    port: 3000,
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext",
    },
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  publicDir: 'assets'
});
