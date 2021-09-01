<template>
<div class="contact">
  <h2>Tu veux nous contacter bg ?</h2>
  <form class="formulaire" @submit="checkForm" action="/contact" method="get">

    <div class="errors" v-if="errors.length">
      <p>Veuillez corriger les erreurs suivantes:</p>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </div>

    <b-field label="Ton Prénom sale fou">
      <b-input v-model="first_name" type="text" name="first_name" required></b-input>
    </b-field>

    <b-field label="Ton Nom mon gâté">
      <b-input v-model="last_name" required></b-input>
    </b-field>

    <b-field label="Email (pas les dents hein...)">
      <b-input v-model="email" type="email" required value="on-va-vous-la-mettre-bien-profond@donne-nous-toute-ta-thune.biff">
      </b-input>
    </b-field>

    <b-field label="Ton Dring Dring ma belle">
      <b-input v-model.number="phone" type="number" maxlength="10" required>
      </b-input>
    </b-field>

    <b-field label="Message">
      <b-input v-model="message" maxlength="400" type="textarea" value="Pas trop long non plus j'ai pas ton temps j'ai rien à faire" required></b-input>
    </b-field>

    <b-button type="is-success is-light" name="button">Envoyer</b-button>
  </form>
  <br>
</div>
</template>

    <script>

    export default {
      name: 'Contact',
      components: {
      },
      data() {
        return{
          errors: [],
          first_name: null,
          last_name: null,
          email: null,
          phone: null,
          message: null

        }
      },

      methods:{
        checkForm: function (e) {
          if (this.first_name && this.last_name && this.email && this.phone && this.message) {
            return true;
          }

          this.errors = [];

          if (!this.first_name) {
            this.errors.push('Veuillez renseigner votre prénom');
          }
          if (!this.last_name) {
            this.errors.push('Veuillez renseigner votre nom');
          }
          if (!this.email) {
            this.errors.push('Veuillez renseigner votre e-mail');
          }
          if (!this.phone || this.phone != Number) {
            this.errors.push('Veuillez renseigner votre n° de téléphone');
          }
          if (!this.message) {
            this.errors.push('Veuillez remplir ce champ');
          }

          e.preventDefault();
        }
      }
    }
    </script>
