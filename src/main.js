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
import AddCustomer from './components/AddCustomer.vue'
import addReseller from './components/addReseller.vue'
import ResellerUpdate from './components/ResellerUpdate.vue'
import UpdateCustomer from './components/UpdateCustomer.vue'
import EditSupplier from "./components/EditSupplier.vue";
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
import Buefy from 'buefy'; //after from is what the name of the folder stocked at nodes folder
import 'buefy/dist/buefy.css';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Buefy);

// import VueFilterDateParse from '@vuejs-community/vue-filter-date-parse';
//
// Vue.use(VueFilterDateParse);

import moment from 'moment';

Vue.use(moment);


const routes = [
  { path: '/', component: Home, name:'home' }, //route pour l'accueil qui affiche le composant Home
  { path: '/suppliers', component: SuppliersList, name: 'Suppliers', props: true }, //route pour suppliers qui affiche le composant SuppliersList
  { path: '/resellers', component: ResellersList, name: 'Resellers', props: true }, //route pour resellers qui affiche le composant ResellersList
  { path: '/customers', component: CustomersList, name: 'Customers', props: true }, //route pour customers qui affiche le composant CustomersList
  { path: '/map', component: Map, name: 'map', props: true, }, //route qui affiche la map
  { path: '/contact', component:Contact, name: 'Contact', props: true }, //route pour le formulaire de contact

    // CRUD Customer
  { path: '/customer/:id', component: Customer, name: 'Customer', props: true }, // Read
  { path: '/customer/add', component: AddCustomer, name: 'AddCustomer', props: true }, // Create
  { path: '/customer/update/:id', component: UpdateCustomer, name: 'UpdateCustomer', props: true }, // Update

    // CRUD Reseller
  { path: '/reseller/:id', component: Reseller, name: 'Reseller', props: true }, //routes pour reseller qui affiche le composant Reseller
  { path: '/reseller/add', component: addReseller, name: 'addReseller', props: true }, //route pour le composant d'edition des fiches "reseller".
  { path: '/reseller/update/:id', component: ResellerUpdate, name: 'ResellerUpdate', props: true }, //route pour le composant d'edition des fiches "reseller".

  // CRUD Supplier
  { path: '/supplier/:id', component: Supplier, name: 'Supplier', props: true }, //routes pour supplier qui affiche le composant Supplier
  { path: '/supplier/edit', component: EditSupplier, name: 'EditSupplier', props: true }, //route pour le composant d'edition des fiches "supplier".


]

const router = new VueRouter({ //instancier la VueRouter (from 'vue-router')
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
