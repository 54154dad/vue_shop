import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from './components/HelloWorld'
var router = new VueRouter({
    router:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home,name:'home'}
    ]
})

export default router
