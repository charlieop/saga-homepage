import "@/assets/css/resets.css";
import "@/assets/css/style.css";
import "@/assets/css/fonts.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
