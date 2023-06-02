import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/store/modules/user";
import shopcat from "@/store/modules/shopcart";
Vue.use(Vuex)


export default new Vuex.Store ({
    modules:{
        user,
        shopcat
    }
})
