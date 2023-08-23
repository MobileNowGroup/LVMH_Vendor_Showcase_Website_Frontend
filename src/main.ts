import "./assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import imgPlugin from "./directive";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(imgPlugin);

app.mount("#app");
