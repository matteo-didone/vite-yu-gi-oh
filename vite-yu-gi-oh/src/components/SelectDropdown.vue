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


export default {
    name: 'SingleCard',
    data() {
        return {
            store,
        }
    },

    props: {
        singleCardArchetype: {
            type: String,
        },
    },

    methods: {

    },
}
</script>

<style lang="scss"></style>

