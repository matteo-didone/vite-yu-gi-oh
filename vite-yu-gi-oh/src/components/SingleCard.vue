<template>
    <!-- 
        Card class is used to style the card 
        mb-4 -> margin-bottom
        me-3 -> margin-end 
        col-3 -> specifies the column width of the card for extra small screens
    -->
    <div class="card mb-4 me-3 col-3">
        <div class="card-body">
            <!-- 
                card-img-top -> class used to style the card image
                :src -> used to bind the card image url to the "singleCardImage" property from the props object
                :alt -> used to bind the card name to the "singleCardName" property from the props object
            -->
            <img :src="singleCardImage" class="card-img-top" :alt="singleCardName">
            <h5 class="card-title">{{ singleCardName }}</h5>
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

        },
        singleCardName: {
            type: String,

        },
    },
    methods: {

    },
}
</script>

<style lang="scss"></style>
