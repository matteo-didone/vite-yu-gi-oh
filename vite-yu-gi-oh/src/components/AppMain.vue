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

                    <div class="cards">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import {store} from '../store.js'

    export default {
        name: 'AppMain',
        data() {
            return {
                store, 
            }
        },

        methods: {
            
        }
    }
</script>

<script setup>

</script>

<style lang="scss">
</style>