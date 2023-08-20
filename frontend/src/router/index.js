import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import ProductPage from '../views/ProductPage.vue'
import AddProduct from '../views/AddProductForm.vue'
import OrderListPage from '../views/OrderListPage.vue'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/products',
      name: 'products',
      component: ProductPage
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: OrderListPage
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: AddProduct
    },
  ]
})

export default router
