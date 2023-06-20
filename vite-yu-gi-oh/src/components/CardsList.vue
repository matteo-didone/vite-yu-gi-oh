<template>
    <!-- Use a bootstrap container -->
    <div class="container">
        <!-- Use a bootstrap row, and p-5 adds padding to it -->
        <div class="row p-5">

            <!-- 
                Use v-for to loop through the cardsList array 
                Then, we bind the singleCardImage and singleCardName props to the SingleCard component

                We also use the index as the key, because each card is unique
                Then, we set the column classes for each SingleCard component:
                    -col-lg-2 -> column width for large screens
                    -col-md-3 -> column width medium screens 
                    -col-sm-4 -> column width for small screens
                    -col-6 -> column width for extra small screens
                mb-4 adds margin to the bottom of each card in the list
            -->
            <SingleCard v-for="(singleCard, index) in cardsList" :singleCardImage="singleCard.singleCardImage"
                :singleCardName="singleCard.singleCardName" :singleCardArchetype="singleCard.singleCardArchetype" :key="index" class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import SingleCard from './SingleCard.vue';

export default {
    name: 'CardsList',
    data() {
        return {
            cardsList: [],
        };
    },
    components: {
        SingleCard,
    },

    // Use the created() lifecycle hook to make an API call to the Yu-Gi-Oh! API
    created() {
        // Make an API call to the Yu-Gi-Oh! API
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            // If the API call is successful, we get a response
            .then((response) => {
                // If the response has data property and if it contains the desired card data
                if (response.data && response.data.data) {
                    // We store into a variable the card data from the response
                    const cards = response.data.data;
                    // We loop through the cards array
                    for (const card of cards) {
                        // We store into a variable the card image url
                        // ? operator to be used where the card doesn't have an image URL
                        const imageUrl = card.card_images[0]?.image_url;
                        // We store into a variable the card name

                        // We create an object, called cardData and we store the card image url, the card name and the card archetype properties into it
                        const cardData = {
                            singleCardImage: imageUrl,
                            singleCardName: card.name,
                            singleCardArchetype: card.archetype,
                        };
                        // Finally, we push the cardData object into the cardsList array
                        this.cardsList.push(cardData);
                    }
                }
            })
            // If the API call fails, we get an error
            .catch(function (error) {
                console.log(error);
            });
    },
};
</script>



<style lang="scss"></style>
