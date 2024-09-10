import common from '@/store/modules/common.js';

import createPersistedState from 'vuex-persistedstate';
import { createStore } from 'vuex';

export default createStore({
	modules: {
		common,
	},
	plugins: [
		createPersistedState({
			storage: window.sessionStorage,
			paths: ['settings.tcpType'], //session storage save : state path
		}),
	],
});
