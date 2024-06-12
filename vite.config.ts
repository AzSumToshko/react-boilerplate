import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import MillionLint from "@million/lint";

// Define plugins array with correct type
const plugins: PluginOption[] = [MillionLint.vite(), react()];

// Export Vite configuration
export default defineConfig({
  plugins,
});
