
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoSearch, GiRoundStar } from "oh-vue-icons/icons";

import 'shuimo-ui/dist/style.css';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/global.css';
import router from './router';

addIcons(CoSearch, GiRoundStar);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(router);

app.mount('#app');