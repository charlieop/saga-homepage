// vueform.config.(js|ts)

import zh_CN from "@vueform/vueform/locales/zh_CN";
import en from "@vueform/vueform/locales/en";
import vueform from "@vueform/vueform/dist/vueform";
import { defineConfig } from "@vueform/vueform";

// You might place these anywhere else in your project
import "@vueform/vueform/dist/vueform.css";
zh_CN.vueform.steps.previous = "返回";
zh_CN.vueform.steps.next = "继续";
zh_CN.vueform.steps.finish = "提交申请";


export default defineConfig({
  theme: vueform,
  locales: { zh_CN, en },
  locale: "zh_CN",
});
