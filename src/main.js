import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Overlay, ActionSheet, Field, Uploader, Button, IndexBar, IndexAnchor, Grid, GridItem, Skeleton } from "vant";

Vue.use(Overlay, ActionSheet, Uploader, Button, IndexBar, IndexAnchor, Grid, GridItem, Skeleton, Field);
Vue.use(ElementUI);
Vue.use(Vant);


Vue.config.productionTip = false;

new Vue({
  el: '#app',

  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
