import { createMUI } from 'shuimo-ui';
import 'shuimo-ui/dist/style.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(createMUI());

app.mount('#app');