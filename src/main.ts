import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";

FloatingVue.options.themes.tooltip.disabled = window.innerWidth <= 768 ? true : false;

createApp(App).use(router).use(FloatingVue).mount("#app");
