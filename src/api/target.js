import { createInstance } from './index';
function sample(payload) {
	const result = createInstance('/target/member/list', payload, {}, 'json').post();
	return result.then(res => res.data).catch(err => console.log(err));
}
export { sample };
