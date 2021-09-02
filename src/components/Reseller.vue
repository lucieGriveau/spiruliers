<template>
<div class="one">
  <h2>{{ reseller.name }}</h2>
  <p>{{ reseller.description }}</p>
  <p>Latitude : {{ reseller.latitude }}°</p>
  <p>Longitude : {{ reseller.longitude }}°</p>
  <div class="texts">
    <div class="box">
      <p>Crée le : </p>
      <p>{{ reseller.created_at }}</p>
    </div>
    <div class="box">
      <p>Mis à jour le : </p>
      <p>{{ reseller.updated_at }}</p>
    </div>
  </div>
  <div class="fournisseur">
    <h3>Fournisseurs associés</h3>
    <ul>
      <li>Nom: {{reseller.supplier.name}}</li>
      <li>Vérifié le: {{reseller.supplier.checkedAt}}</li>
      <li>Latitude: {{reseller.supplier.latitude}}</li>
      <li>Longitude: {{reseller.supplier.longitude}}</li>
      <li>Créé le: {{reseller.supplier.created_at}}</li>
      <li>Mis à jour: {{reseller.supplier.updated_at}}</li>
    </ul>
  </div>

  <div class="client">

    <h3>Clients associés</h3>
    <b-table :data="resellerData.customers">
      <b-table-column field="id" label="ID" sortable numeric centered v-slot="props">
        {{ props.row.id }}
      </b-table-column>

      <b-table-column field="first_name" label="Prénom" sortable centered v-slot="props">
        {{ props.row.firstName }}
      </b-table-column>

      <b-table-column field="last_name" label="Nom" sortable centered v-slot="props">
        {{ props.row.lastName }}
      </b-table-column>

      <b-table-column field="email" label="Email" sortable centered v-slot="props">
        {{ props.row.email }}
      </b-table-column>

      <b-table-column field="codePostal" label="CP" sortable centered v-slot="props">
        {{ props.row.codePostal }}
      </b-table-column>

      <b-table-column field="city" label="Ville" sortable centered v-slot="props">
        {{ props.row.city }}
      </b-table-column>

      <b-table-column field="address" label="Adresse" sortable centered v-slot="props">
        {{ props.row.address }}
      </b-table-column>

      <b-table-column field="phoneNumber" label="N°" sortable centered v-slot="props">
        {{ props.row.phoneNumber }}
      </b-table-column>
    </b-table>
  </div>
</div>
</template>

<script>
import axios from "axios"

export default {
  name: "Reseller",
  props: {
    reseller: Object,
  },
  data() {
    return {
      resellerData: {}
    }
  },
  methods: {
    getData() {
      this.loading = true
      axios
        .get('https://heroku-campus-suppliers.herokuapp.com/api/resellers/' + this.$route.params.id)
        .then(response => {
          this.resellerData = response.data;
          // console.log(response.data);
        })
        .catch(error => {
          // console.log(error)
          this.error = error
        })
        .finally(() => {
          this.loading = false;
        })
    }
  },
  mounted() {
    if (this.reseller === undefined) {
      //console.log(this.$route.params.id);
      this.getData()
    } else {
      this.resellerData = this.reseller
    }
  }
}
</script>
