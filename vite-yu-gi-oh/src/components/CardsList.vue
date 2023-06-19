<template>
    <SingleCard />
</template>

<script>
import { store } from '../store.js'
import SingleCard from './SingleCard.vue';

export default {
    name: 'AppMain',
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


<style lang="scss">

</style>
