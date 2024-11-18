import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

import App from '@/App.vue';
import { createApp } from 'vue';
import router from '@/router';

const app = createApp(App);
app.use(router);
app.mount('#app');
