<template>
    <div class="loader">
        The items are loading...
    </div>
</template>

<script>
import { store } from '../store.js'


export default {
    name: 'AppLoader',
    data() {
        return {
            store,
        }
    },

    props: {

    },
    methods: {

    },
}
</script>

<style lang="scss">
.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}
</style>