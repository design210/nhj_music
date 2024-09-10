import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Vuetify 스타일 가져오기
import '@mdi/font/css/materialdesignicons.css'; // (옵션) Vuetify 아이콘 추가
import { createVfm } from 'vue-final-modal';
import 'vue-final-modal/style.css';
const vuetify = createVuetify(); // Vuetify 인스턴스 생성
const app = createApp(App);
const vfm = createVfm();
app.use(router).use(vuetify).use(store).use(vfm).mount('#app');
