import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@bdd': path.resolve(__dirname, '../../../../back/data')
        },
    },
    plugins: [react(), tailwindcss(),],
})
