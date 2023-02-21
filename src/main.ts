import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//if you want use tailwindcss
import "@/assets/tailwind/base.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
