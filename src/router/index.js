import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes"
import before from './before'

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

before(router);

export default router