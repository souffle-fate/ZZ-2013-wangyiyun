import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Uploader, Button, IndexBar, IndexAnchor, Grid, GridItem } from "vant";

Vue.use(Uploader, Button, IndexBar, IndexAnchor, Grid, GridItem);
Vue.use(ElementUI);
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
