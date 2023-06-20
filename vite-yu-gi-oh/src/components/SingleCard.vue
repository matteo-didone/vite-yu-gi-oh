<template>
    <div class="card mb-4 col-3 me-3">
        <div class="card-body">

            <img :src="singleCardImage" class="card-img-top" alt="">

            <h5 class="card-title">
                {{ singleCardName }}
            </h5>
        </div>
    </div>
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

    props: {
        singleCardImage: {
            type: String,
            required: true
        },
        singleCardName: {
            type: String,
            required: true
        }
    },

    methods: {

    },
}
</script>


<style lang="scss"></style>
