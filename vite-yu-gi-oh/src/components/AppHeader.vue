<template>
    <header>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid d-flex align-items-center justify-content-start">
                <a class="navbar-brand" href="#">
                    <img src="../assets/img/yugioh.png" alt="yu-gi-oh-logo" width="120" height="60"
                        class="d-inline-block align-text-top">
                </a>
                <span class="title">Yu-Gi-Oh Api</span>
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


<style lang="scss" scoped>
.container-fluid {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 3rem;
}

</style>