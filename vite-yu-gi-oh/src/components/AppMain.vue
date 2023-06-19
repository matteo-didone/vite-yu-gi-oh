<template>
    <main>
        <div class="outer-wrapper">
            <div class="dropdown-menu">

            </div>

            <div class="inner-wrapper">
                <div class="cards-wrapper">
                    <div class="found-bar">

                    </div>

                    <CardsList />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { store } from '../store.js'
import CardsList from './CardsList.vue';
import SingleCard from './SingleCard.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            store,

        }
    },

    components: {
        CardsList,
        SingleCard,
    },

    methods: {

    }
}
</script>


<style lang="scss">
main {
    .outer-wrapper {
        width: 100%;
        height: 100vh;
        background-color: #d48f38;
    }

    .inner-wrapper {}
}
</style>
