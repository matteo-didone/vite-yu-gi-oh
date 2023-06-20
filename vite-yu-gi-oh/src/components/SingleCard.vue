<template>
    <!-- 
        Card class is used to style the card 
        mb-4 -> margin-bottom
        me-3 -> margin-end 
        col-3 -> specifies the column width of the card for extra small screens
    -->
    <div class="card mb-4 me-3 col-3">
        <div class="card-body">

            <div class="card-content">
                <!-- 
                card-img-top -> class used to style the card image
                :src -> used to bind the card image url to the "singleCardImage" property from the props object
                :alt -> used to bind the card name to the "singleCardName" property from the props object
            -->
                <img :src="singleCardImage" class="card-img-top" :alt="singleCardName">
                <!-- 
                Another div called "card details" is used to style the card title and the card archetype
            -->
                <div class="card-details">
                    <h5 class="card-title">{{ singleCardName }}</h5>
                    <div class="card-archetype">{{ singleCardArchetype }}</div>
                </div>
            </div>
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
        singleCardArchetype: {
            type: String,
        },
    },
    methods: {

    },
}
</script>

<style lang="scss">
.card {
    border: none;
}

.card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card-img {
    width: 280px;
    height: 380px;
    object-fit: cover;
}

.card-details {
    background-color: #d48f38;
    padding: 10px;
    color: white;
    text-align: center;
}

.card-title {
    text-transform: uppercase;
    margin-bottom: 5px;
}

.card-archetype {
    color: black;
}
</style>

