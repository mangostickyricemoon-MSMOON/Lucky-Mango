import { defineConfig, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// ใช้ type ConfigEnv เพื่อให้ command ไม่เป็น any
export default defineConfig(({ command }: ConfigEnv) => {
  return {
    plugins: [react()],
    // dev ใช้ root '/', build ใช้ '/Lucky-Mango/'
    base: command === 'build' ? '/Lucky-Mango/' : '/',
  };
});
