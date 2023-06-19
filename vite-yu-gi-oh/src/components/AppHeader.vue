<template>
    <header>

        <h1> Header </h1>

        <div class="header-wrapper">
            <div class="logo">

            </div>

            <div class="title">

            </div>
        </div>

    </header>
</template>

<script>
    import {store} from '../store.js'

    export default {
        name: 'AppHeader',
        data() {
            
            return {
                store,
            }
        },

        methods: {

        }
    }
</script>


<style lang="scss" scoped>

</style>