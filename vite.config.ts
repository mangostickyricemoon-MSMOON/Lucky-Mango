{/*
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(() => {
  return {
    plugins: [react()],
    base: process.env.VITE_BASE || '/',
  };
});
*/}



{/* import แบบเดิม github เป็น VITE_BASE=/TogetherWeMoon/ แบบใหม่เลือกเอา */}

import { defineConfig, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// ใช้ type ConfigEnv เพื่อให้ command ไม่เป็น any
export default defineConfig(({ command }: ConfigEnv) => {
  return {
    plugins: [react()],
    // dev ใช้ root '/', build ใช้ '/TogetherWeMoon/'
    base: command === 'build' ? '/TogetherWeMoon/' : '/',
  };
}); 
