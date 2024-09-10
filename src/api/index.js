import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';
import store from '@/store';
import router from '@/router';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

let baseURL = import.meta.env.VITE_APP_API_URI;

const protocol = window.location.protocol;
const domain = window.location.hostname;
const port = window.location.port;
const fullDomain = port ? protocol + '//' + domain + ':' + port : protocol + '//' + domain;
if (import.meta.env.NODE_ENV === 'production') {
	baseURL = fullDomain;
}
const time = 90000;

function createInstance(url, paramData, params, contentType, loadingText, responseType) {
	let resType = responseType || 'json';
	const instance = axios.create({
		baseURL: `${baseURL}${url}`,
		params,
		responseType: resType,
		timeout: time,
	});

	// 인터셉터 설정
	return setInterceptors(instance, store, router, paramData, contentType, loadingText);
}

export { createInstance };
