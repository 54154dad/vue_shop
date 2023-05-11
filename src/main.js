import Vue from 'vue'
import App from './App.vue'
import router from "./router.js";
import axios from "@/axios";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(axios)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
