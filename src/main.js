import "@/assets/css/resets.css";
import "@/assets/css/style.css";
import "@/assets/css/fonts.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vueform from "@vueform/vueform";
import vueformConfig from "./../vueform.config";

createApp(App).use(router).use(Vueform, vueformConfig).mount("#app");
