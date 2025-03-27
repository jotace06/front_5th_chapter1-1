import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "/front_5th_chapter1-1/", // GitHub repository 이름
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        hash: "index.hash.html",
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    exclude: ["**/e2e/**", "**/*.e2e.spec.js", "**/node_modules/**"],
  },
});
