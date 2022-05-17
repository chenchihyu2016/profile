import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import { createI18n } from 'vue-i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './plugins/fontawesome';
import { i18nConfig, srcDirective } from '@/assets/config/mainConfig.js';

const app = createApp(App);
const i18n = createI18n(i18nConfig);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(store, key);
app.use(i18n);
app.directive('src', srcDirective);
app.mount('#app');
