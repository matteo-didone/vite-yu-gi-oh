<template>
    <main>

        <h1> Main </h1>

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
import { CardsList } from './CardsList.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            store,

        }
    },

    components: {
        CardsList,
    },

    methods: {

    }
}
</script>

<script setup>

</script>

<style lang="scss"></style>
