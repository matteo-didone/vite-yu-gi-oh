<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
// Do we have to import these components here? No, they're not needed!
// import CardsList from './components/CardsList.vue';
// import SingleCard from './components/Card.vue';

import { store } from './store.js';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppMain,

    // CardsList,
    // SingleCard,
  },

  data() {
    return {
      store,
    };
  },

};
</script>

<template>
  <AppHeader />
  <AppMain />
  <!-- 
  Not needed:
  <CardsList />
  <SingleCard /> 
  -->
</template>

<style lang="scss">
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
@import "./styles/general.scss";
</style> 
