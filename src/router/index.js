import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import CHM from '@/views/CHM'
import HLH from '@/views/HLH'
import YG from '@/views/YG'
import ZYY from '@/views/ZYY'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
    children: [{
            path: '/yg',
            name: 'YG',
            component: YG
        },
        {
            path: '/chm',
            name: 'CHM',
            component: CHM
        },
        {
            path: '/hlh',
            name: 'HLH',
            component: HLH
        },
        {
            path: '/zyy',
            name: 'ZYY',
            component: ZYY
        }
    ]
}]

const router = new VueRouter({
    routes
})

export default router