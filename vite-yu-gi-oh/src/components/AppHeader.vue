<template>
    <header>
        <div class="logo">
            <img src="../assets/img/dc-logo.png" alt="dc-comics-logo">
        </div>

        <nav class="navbar">
            <ul>

                <li v-for="navbarItem in navbarItems" :key="navbarItem.text">
                    <a :href="navbarItem.href" :class="navbarItem.class"> {{ navbarItem.text }} </a>
                </li>

            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            navbarItems: [
                { text: 'Characters', href: "#" },
                { text: 'Comics', class: 'dc-blue', href: "#" },
                { text: 'Movies', href: "#" },
                { text: 'TV', href: "#" },
                { text: 'Games', href: "#" },
                { text: 'Collectibles', href: "#" },
                { text: 'Videos', href: "#" },
                { text: 'Fans', href: "#" },
                { text: 'News', href: "#" },
                { text: 'Shop', href: "#" }
            ]
        }
    },
}
</script>

<script setup>

</script>

<style lang="scss" scoped>
// Scoped styles
@use '/Users/matteodidone/VS Code Projects/vite-comics/vite-comics/src/styles/partials/_mixins.scss' as *;
@use '/Users/matteodidone/VS Code Projects/vite-comics/vite-comics/src/styles/partials/_variables.scss' as *;

header {

    height: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div.logo {
        padding-left: 320px;
        ;
    }

    div.logo img {
        width: 100px;
        height: 100px;
    }

    nav.navbar ul {
        @include flex();
        font-size: x-large;
        padding-right: 200px;
        font-weight: 550;
    }

    nav.navbar ul li {
        list-style: none;
        margin: 0 20px;
        text-transform: uppercase;
    }

    nav.navbar ul li .dc-blue {
        padding-bottom: 50px;
        border-bottom: 5px solid $dc-blue;
    }
}
</style>