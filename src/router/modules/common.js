const common = [
	{
		path: '/',
		redirect: '/Main',
	},
	{
		path: '/Main',
		name: 'Main',
		component: () => import('@/views/Main.vue'),
		meta: { unauthorized: true },
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'error',
		component: () => import('@/views/error/Error.vue'),
		meta: { unauthorized: true },
	},
];

export default common;
