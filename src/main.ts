import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/store';
import AppLayout from './layouts/AppLayout.vue';

createApp(App)
  .use(router)
  .use(store)
  .component('AppLayout', AppLayout)
  .mount('#app');
