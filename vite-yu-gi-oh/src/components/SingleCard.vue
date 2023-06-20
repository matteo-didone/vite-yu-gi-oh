<template>
    <article class="card mb-3 col-3">
        <img src="" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">
                Card Title
            </h5>

            <p class="card-text">
                Nome Cognome
            </p>

            <p class="card-text">
                <small class="text-muted"> Last updated 3 mins ago </small>
            </p>

            <p class="card-text">
                <small class="text-muted"> Last updated 3 mins ago </small>
            </p>
        </div>
    </article>
</template>

<script>
import { store } from '../store.js'

export default {
    
    name: 'SingleCard',
    data() {
        return {
            store,
        }
    },

    methods: {

    }
}
</script>


<style lang="scss"></style>
