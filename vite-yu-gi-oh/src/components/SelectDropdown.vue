<template>
    <div class="dropdown">
        <button class="btn btn-secondary text-dark bg-white dropdown-toggle" type="button" id="dropdownMenuButton2"
            data-bs-toggle="dropdown" aria-expanded="false">
            {{ }}
        </button>

        <ul class="dropdown-menu bg-white text-dark" aria-labelledby="dropdownMenuButton2">
            <li>
                <a class="dropdown-item active" href="#">
                    {{ }}
                </a>
            </li>
        </ul>
    </div>
</template>


<script>
import { store } from '../store.js'
import axios from 'axios';

export default {
    name: 'SingleCard',

    data() {
        return {
            store,
            cardArchetypesList: [],
        }
    },

    props: {
        singleCardArchetype: {
            type: String,
        },
    },

    methods: {

    },

    // Use the created() lifecycle hook to make an API call to the Yu-Gi-Oh! API
    created() {
        // Make an API call to the Yu-Gi-Oh! API
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            // If the API call is successful, we get a response
            .then((response) => {
                // If the response has data property and if it contains the desired card data
                if (response.data && response.data.data) {
                    // We store into a variable the card data from the response
                    const cards = response.data.data;
                    // We loop through the cards array
                    for (const card of cards) {
                        // We create an object, called cardData and we store the card image url, the card name and the card archetype properties into it
                        const cardArchetype = {
                            singleCardArchetype: card.archetype,
                        };
                        // Finally, we push the cardData object into the cardsList array
                        this.cardArchetypesList.push(card);
                    }
                }
            })
            // If the API call fails, we get an error
            .catch(function (error) {
                console.log(error);
            });
    },
}
</script>

<style lang="scss"></style>

