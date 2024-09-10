import { createRouter, createWebHistory } from 'vue-router';
import common from './modules/common';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [...common],
});

export default router;
