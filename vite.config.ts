import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const normalizeBase = (base: string) => {
  const withLeadingSlash = base.startsWith("/") ? base : `/${base}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
};

// https://vitejs.dev/config/
export default defineConfig(() => {
  // Prefer explicit BASE_URL from CI (set in your GitHub Actions workflow)
  // Example: /my-repo/
  const envBase = process.env.BASE_URL;
  const base = envBase
    ? normalizeBase(envBase)
    : process.env.GITHUB_ACTIONS
      ? "/potfoliosouhirbaazaoui/"
      : "/";

  return {
    base,
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
