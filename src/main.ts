import { createApp } from "vue";
import App from "./App.vue";

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import router from "./presentation/router";
import store from "./presentation/store";

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");