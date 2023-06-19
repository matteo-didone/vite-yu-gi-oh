<template>
    <main>
        <div class="jumbotron">
        </div>

        <div class="main-bottom">
            <div class="current-series">
                <h2>CURRENT SERIES</h2>
            </div>

            <div class="thumbnail-container">

            </div>

            <div class="load-more">
                <h3>LOAD MORE</h3>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'AppMain',
    data() {
        return {

        }
    },
}
</script>

<script setup>

</script>

<style lang="scss">
main {
    background-color: #1c1c1c;
    height: 1075px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    .jumbotron {
        width: 100%;
        height: 400px;
        
        background-image: url('../assets/img/jumbotron.jpg');
        background-repeat: no-repeat;
        background-size: cover;

    }
}
</style>