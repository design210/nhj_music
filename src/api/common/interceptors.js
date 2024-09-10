import axios from 'axios';
import { deleteCookie } from '@/utils/cookie';
import { isValidJSON } from '@/utils/common';

export function setInterceptors(instance, store, router, data, contentType, loadingText) {
	const counts = store.getters['common/getApiCount'];
	let type = '';
	contentType === 'json' ? (type = 'application/json; charset=utf-8') : (type = 'multipart/form-data');

	instance.interceptors.request.use(
		function (config) {
			store.commit('common/setApiCount', { callCount: 1 });
			store.commit('common/setLoading', { status: true, info: loadingText });
			config.headers['Content-Type'] = type;
			config.data = data;

			// 요청 취소 토큰 추가
			const source = axios.CancelToken.source();
			config.cancelToken = source.token;
			return config;
		},
		function (error) {
			store.commit('common/setLoading', { status: false, info: '' });
			return Promise.reject(error);
		},
	);

	instance.interceptors.response.use(
		async function (response) {
			setTimeout(() => {
				if (loadingText !== '로그인중' && loadingText !== '로그아웃중') {
					store.commit('common/setApiCount', { resCount: 1 });
				}
				if (counts.callCount === counts.resCount) {
					store.commit('common/setLoading', { status: false, info: '' });
				}
			}, 500);

			const isBlob = response.data instanceof Blob;
			if (response.data.code !== 200 && !isBlob) {
				if (response.data.code === 401) {
					deleteCookie('member');
					deleteCookie('isLogin');
					deleteCookie('alimtalkProvider');
					router.push('/Login');
				}
				if (response.data.code === 403) {
					const getRouter = store.getters['common/getRouter'];
					if (getRouter.to.name !== 'DashBoard' && getRouter.to.name !== 'Login') {
						router.push({ name: 'Login', params: { isError: true } });
					}
				}

				store.commit('common/setLoading', { status: false, info: '' });
				store.commit('common/setApiCount', { resCount: 0, callCount: 0 });
				if (response.data.code) store.commit('common/setAlert', { status: true, info: response.data.message });
				if (document.getElementById('modals-container')) document.getElementById('modals-container').innerHTML = '';
			}
			if (isBlob) {
				const text = await response.data.text();
				if (isValidJSON(text)) {
					const json = JSON.parse(text);
					response.data = json;
					store.commit('common/setAlert', { status: true, info: json.message });
				}
			}
			return response;
		},
		function (error) {
			store.commit('common/setLoading', { status: false, info: '' });
			if (error.response && error.response.data.message) {
				store.commit('common/setAlert', { status: true, info: error.response.data.message, alertConfirm: true });
			} else {
				store.commit('common/setAlert', { status: true, info: error.message, alertConfirm: true });
			}
			if (error.response && error.response.data) {
				return Promise.reject(error.response.data);
			}
			return Promise.reject(error.message);
		},
	);

	return instance;
}
