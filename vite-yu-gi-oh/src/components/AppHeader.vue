<template>
    <header>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="../assets/img/yugioh.png" alt="yu-gi-oh-logo" width="80" height="40" class="d-inline-block align-text-top">
                    Yu-Gi-Oh Api
                </a>
            </div>
        </nav>
    </header>
</template>

<script>
import { store } from '../store.js'

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


<style lang="scss" scoped></style>