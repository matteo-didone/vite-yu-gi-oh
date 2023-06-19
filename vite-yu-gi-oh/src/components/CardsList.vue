<template>
    <div class="cards-wrapper">
        <div class="found-bar">

        </div>

        <div class="single-card">
            <SingleCard />
        </div>  

    </div>
</template>

<script>
import { store } from '../store.js'
import { SingleCard } from './SingleCard.vue';

export default {
    name: 'CardsList',
    data() {
        return {
            store,
        }
    },

    components: {
        SingleCard,
    },

    methods: {

    }
}
</script>

<script setup>

</script>

<style lang="scss"></style>
