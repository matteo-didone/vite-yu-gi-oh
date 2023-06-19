<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      store,
    };
  },

};
</script>

<template>
  <h1> {{ store.searchText }} </h1>

  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
