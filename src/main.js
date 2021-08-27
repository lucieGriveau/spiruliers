import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import SuppliersList from './components/SuppliersList.vue'
import ResellersList from './components/ResellersList.vue'
import CustomersList from './components/CustomersList.vue'
import Supplier from './components/Supplier.vue'
import Reseller from './components/Reseller.vue'
import Customer from './components/Customer.vue'

// Framework CSS
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Buefy);

const routes = [
  { path: '/', component: Home }, //routes pour l'accueil qui affiche le composant Home
  { path: '/suppliers', component: SuppliersList }, //routes pour suppliers qui affiche le composant SuppliersList
  { path: '/resellers', component: ResellersList }, //routes pour resellers qui affiche le composant ResellersList
  { path: '/customers', component: CustomersList }, //routes pour customers qui affiche le composant CustomersList
  { path: '/supplier', component: Supplier }, //routes pour supplier qui affiche le composant Supplier
  { path: '/reseller', component: Reseller }, //routes pour reseller qui affiche le composant Reseller
  { path: '/customer/:id', component: Customer }, //routes pour customer qui affiche le composant Customer
]

const router = new VueRouter({ //instancier la VueRouter (from 'vue-router')
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')