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
import ResellerEdit from './components/ResellerEdit.vue'
import ResellerUpdate from './components/ResellerUpdate.vue'
import CustomerEdit from './components/CustomerEdit.vue'
import EditSupplier from "./components/EditSupplier.vue";
import CustomerUpdate from './components/CustomerUpdate.vue'
import Contact from './components/Contact.vue'

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
  { path: '/suppliers', component: SuppliersList, name: 'Suppliers', props: true }, //routes pour suppliers qui affiche le composant SuppliersList
  { path: '/resellers', component: ResellersList, name: 'Resellerd', props: true }, //routes pour resellers qui affiche le composant ResellersList
  { path: '/customers', component: CustomersList, name: 'Customers', props: true }, //routes pour customers qui affiche le composant CustomersList
  { path: '/map', component: Map, name: 'map', props: true, }, //route qui affiche la map

    // CRUD Customer
  { path: '/customer/:id', component: Customer, name: 'Customer', props: true }, // Read
  { path: '/customer/edit', component: CustomerEdit, name: 'CustomerEdit', props: true }, // Create
  { path: '/customer/update/:id', component: CustomerUpdate, name: 'CustomerUpdate', props: true }, // Update
  { path: '/customer/:id', component: Customer, name: 'Customer', props: true }, // Delete

    // CRUD Reseller
  { path: '/reseller/:id', component: Reseller, name: 'Reseller', props: true }, //routes pour reseller qui affiche le composant Reseller
  { path: '/reseller/edit', component: ResellerEdit, name: 'ResellerEdit', props: true }, //route pour le composant d'edition des fiches "reseller".
  { path: '/reseller/update/:id', component: ResellerUpdate, name: 'ResellerUpdate', props: true }, //route pour le composant d'edition des fiches "reseller".
  { path: '/reseller/:id', component: Reseller, name: 'Reseller', props: true }, //route pour le composant d'edition des fiches "reseller".


  // CRUD Supplier
  { path: '/supplier/:id', component: Supplier, name: 'Supplier', props: true }, //routes pour supplier qui affiche le composant Supplier
  { path: '/supplier/edit', component: EditSupplier, name: 'EditSupplier', props: true }, //route pour le composant d'edition des fiches "supplier".

  { path: '/customer/edit', component: CustomerEdit, name: 'CustomerEdit', props: true }, //routes pour customer qui affiche le composant CustomerEdit avec formulaire pour ajouter un Customer
  { path: '/customer/update/:id', component: CustomerUpdate, name: 'CustomerUpdate', props: true }, //routes pour customer qui affiche le composant CustomerUpdate avec formulaire pour modifier un Customer
  { path: '/contact', component:Contact, name: 'Contact', props: true }, //routes pour customer qui affiche le composant CustomerUpdate avec formulaire pour modifier un Customer
]

const router = new VueRouter({ //instancier la VueRouter (from 'vue-router')
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
