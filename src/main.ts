import { addIcons } from 'oh-vue-icons';
import { BiStarFill } from "oh-vue-icons/icons";
import { createMUI } from 'shuimo-ui';
import 'shuimo-ui/dist/style.css';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/global.css';
import router from './router';

addIcons(BiStarFill);

const app = createApp(App);

app.use(createMUI());
app.use(router);

app.mount('#app');