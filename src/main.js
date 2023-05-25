import Vue from 'vue'
import App from './App.vue'
import router from "./router.js";
import store from "@/store/store";
import axios from "@/axios";
import auth from "@/auth";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false;

Vue.use(auth);
Vue.use(MintUI);
Vue.use(axios);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
