import { createInstance } from '../index';
import { deleteCookie } from '@/utils/cookie';
import router from '@/router';
function login(payload) {
	const paramData = {
		username: payload.username,
		password: payload.password,
	};
	const result = createInstance('/login', paramData, {}, 'json', '로그인중').post();
	return result
		.then(res => res.data)
		.catch(err => {
			return err;
		});
}
function logout() {
	const result = createInstance('/logout', {}, {}, 'json', '로그아웃중').post();
	result
		.then(() => {
			deleteCookie('member');
			deleteCookie('isLogin');
			deleteCookie('alimtalkProvider');
			router.push('/Login');
		})
		.catch(err => console.log(err));
}
function getMenu() {
	const result = createInstance('/setting/menu/all', {}, {}, 'json').post();
	return result.then(res => res.data).catch(err => console.log(err));
}

export { login, getMenu, logout };
