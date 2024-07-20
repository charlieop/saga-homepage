import "@/assets/css/resets.css";
import "@/assets/css/style.css";
import "@/assets/css/fonts.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vueform from "@vueform/vueform";
import vueformConfig from "./../vueform.config";

const app = createApp(App);
// app.provide("ApiUrl", "http://127.0.0.1:8000/api/v1/");
// app.provide("ApiUrl", "http://www.saga-xingguang.com/api/v1/");
app.provide("ApiUrl", "/api/v1/");


app.provide("message", "hello");

app.use(router);
app.use(Vueform, vueformConfig);
app.mount("#app");
