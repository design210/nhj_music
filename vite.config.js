import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
	base: process.env.VUE_CONTEXT_PATH,
	plugins: [
		vue(),
		vueDevTools(),
		vuetify({ autoImport: true }), // Vite에서 Vuetify 플러그인 사용
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
		hmr: {
			overlay: false,
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @import "@/styles/common.scss";
        `,
			},
		},
	},
});
