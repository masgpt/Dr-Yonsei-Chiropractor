import { reactRouter } from "@react-router/dev/vite";
import { defineConfig, loadEnv } from "vite";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const envPort = Number(env.PORT || process.env.PORT);
  const port = Number.isFinite(envPort) && envPort > 0 ? envPort : 3000;

  return {
    server: {
      port,
      strictPort: false,
    },
    preview: {
      port,
      strictPort: false,
    },
    plugins: [reactRouter()],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./app"),
      },
    },
  };
});
