import "./assets/main.scss";
import "tailwindcss/tailwind.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import Axios from "./api/ajax";
import App from "./App.vue";
import router from "./router";

// import imgPlugin from "./directive";
document.title = import.meta.env.VITE_APP_TITLE

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);
app.provide('$http', Axios)
app.use(pinia);
app.use(router);
// app.use(imgPlugin);
app.mount("#app");
