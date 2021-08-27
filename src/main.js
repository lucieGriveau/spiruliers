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
import Map from './components/Map.vue'

// Map Leaflet
import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet";
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.config.productionTip = false;


// Correctif probleme icones
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

// Framework CSS
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Buefy);

const routes = [
  { path: '/', component: Home, name:'home' }, //routes pour l'accueil qui affiche le composant Home
  { path: '/suppliers', component: SuppliersList }, //routes pour suppliers qui affiche le composant SuppliersList
  { path: '/resellers', component: ResellersList }, //routes pour resellers qui affiche le composant ResellersList
  { path: '/customers', component: CustomersList }, //routes pour customers qui affiche le composant CustomersList
  { path: '/supplier/:id', component: Supplier, name: 'Supplier', props: true }, //routes pour supplier qui affiche le composant Supplier
  { path: '/reseller', component: Reseller }, //routes pour reseller qui affiche le composant Reseller
  { path: '/customer', component: Customer }, //routes pour customer qui affiche le composant Customer
  { path: '/map', component: Map, props:true, name: 'map'}, //route qui affiche la map
  { path: '/customer/:id', component: Customer, name: 'Customer', props: true }, //routes pour customer qui affiche le composant Customer
]

const router = new VueRouter({ //instancier la VueRouter (from 'vue-router')
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
