import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Joel from './components/Joel.vue'
import Joel2 from './components/Joel2.vue'

const history=createWebHashHistory()
const router=createRouter({
  history: history,
  routes: [
    {path: '/',component: Joel},
    {path: '/2',component:Joel2}
  ]
})

const app=createApp(App)
app.use(router)
app.mount('#app')
