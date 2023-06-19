<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <SingleCard />
            </div>
        </div>
    </div>
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


<style lang="scss"></style>
