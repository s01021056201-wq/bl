import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For a project repository, change "/" to "/YOUR-REPO-NAME/".
// For a user/org site (username.github.io), keep "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});