import Vue from "vue"
import VueRouter from "vue-router"

const Customers = () => import("@/components/Customers.vue")
const About = () => import("@/components/About.vue")
const Add = () => import("@/components/Add.vue")
const Detail = () => import("@/components/Detail.vue")
const Edit = () => import("@/components/Edit.vue")

Vue.use(VueRouter)

const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Customers
  },
  {
    path:"/about",
    component:About
  },
  {
    path:"/add",
    component:Add
  },
  {
    path:"/detail/:id",
    component:Detail
  },
  {
    path:"/edit/:id",
    component:Edit
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
