import App from "@/App.vue";
import "@/scss/lib.scss";
import "@/scss/style.scss";
import { createRouter } from "@/router";
import { createApp } from "vue";

createApp(App).use(createRouter("history")).mount("#app");
