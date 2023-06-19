<template>
    <main>
        <div class="outer-wrapper">

            <div class="dropdown">
                <button class="btn btn-secondary text-dark bg-white dropdown-toggle" type="button" id="dropdownMenuButton2"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Alien
                </button>

                <ul class="dropdown-menu bg-white text-dark" aria-labelledby="dropdownMenuButton2">
                    <li><a class="dropdown-item active" href="#">Alien</a></li>
                    <li><a class="dropdown-item" href="#">Human</a></li>
                    <li><a class="dropdown-item" href="#">Spell</a></li>
                    <li><a class="dropdown-item" href="#">Trap</a></li>
                </ul>
            </div>

            <div class="inner-wrapper">
                <div class="cards-wrapper">
                    <div class="found-bar">

                    </div>

                    <CardsList />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { store } from '../store.js'
import CardsList from './CardsList.vue';
import SingleCard from './SingleCard.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            store,

        }
    },

    components: {
        CardsList,
        SingleCard,
    },

    methods: {

    }
}
</script>


<style lang="scss">
main {

    display: flex;
    justify-content: center;
    align-items: center;

    .outer-wrapper {
        width: 100%;
        height: 100vh;

        padding-left: 150px;
        padding-right: 150px;

        background-color: #d48f38;
    }

    #dropdownMenuButton2{
        width: 150px;
        text-align: left;

        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 20px;
        padding-left: 20px;
    }


    .inner-wrapper {
        background-color: white;
        width: 100%;
        height: 100%;
    }
}
</style>
