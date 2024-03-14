import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/global.css"; //to do global css or maybe let's go for tailwindcss

createApp(App).use(router).mount("#app");
