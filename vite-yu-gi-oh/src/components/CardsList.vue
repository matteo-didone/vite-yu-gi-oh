<template>
    <div class="container">
        <div class="row p-5 justify-content-evenly">
            <SingleCard v-for="singleCard in cardsList"/>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js'
import SingleCard from './SingleCard.vue';
import axios from 'axios';

export default {
    name: 'CardsList',
    data() {
        return {
            store,
            cardsList: [],
        }
    },

    components: {
        SingleCard,
    },

    created() {
        // Make a request for a user with a given link
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')

            .then((response) => {
                // handle success
                // in the console, we can see the data we get back from the API 
                console.log(response.data.results); // Should I add .results? 
            })
            .catch(function (error) {
                // handle error
                // in the console, we can see the error message we get back from the API 
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    },

    methods: {

    }
}
</script>


<style lang="scss"></style>
