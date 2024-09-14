import { createMUI } from 'shuimo-ui';
import 'shuimo-ui/dist/style.css';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/global.css';

const app = createApp(App);

app.use(createMUI());

app.mount('#app');