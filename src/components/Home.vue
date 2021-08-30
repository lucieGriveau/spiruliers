<template>
  <div class="home">
    <h1>💊 Welcome to Spiruliars 💊</h1>
    <h2>Tu veux nous contacter bg ?</h2>
    
    <div class="contact">

      <b-field label="Ton Prénom sale fou">
          <b-input v-model="first_name"></b-input>
      </b-field>

      <b-field label="Ton Nom mon gâté">
          <b-input v-model="last_name"></b-input>
      </b-field>

      <b-field label="Email (pas les dents hein...)">
          <b-input type="email"
              value="on-va-vous-la-mettre-bien-profond@donne-nous-toute-ta-thune.biff"
              maxlength="30">
          </b-input>
      </b-field>

      <b-field label="Ton Dring Dring ma belle">
          <b-input type="phone">
          </b-input>
      </b-field>

      <b-field label="Message">
          <b-input maxlength="200" type="textarea" value="Pas trop long non plus j'ai pas ton temps j'ai rien à faire"></b-input>
      </b-field>

    </div>
    <!--<ResellersList />
    <CustomersList />
    <SuppliersList />-->
  </div>
</template>

<script>
// import CustomersList from './CustomersList.vue'
// import ResellersList from './ResellersList.vue'
// import SuppliersList from './SuppliersList.vue'

export default {
  name: 'Home',
  // props: {
  //   msg: String
  // },
  components: {
    // CustomersList,
    // ResellersList,
    // SuppliersList,
  }
}
</script>
