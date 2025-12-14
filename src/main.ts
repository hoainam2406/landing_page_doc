import { createApp } from "vue";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";
import "./assets/styles/main.css";
import { vScrollAnimate } from "./directives/scrollAnimate";

const app = createApp(App);

// Register Element Plus icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// Register scroll animate directive
app.directive("scroll-animate", vScrollAnimate);

app.use(ElementPlus);
app.use(router);

app.mount("#app");
