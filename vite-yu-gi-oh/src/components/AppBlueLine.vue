<template>
    <div class="blue-line">
        <ul>
            <li v-for="buyItem in buyItems" :key="buyItem.text">
                <img :src="buyItem.src" :alt="buyItem.alt">
                <span> {{ buyItem.text }} </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AppBlueLine',
    data() {
        return {
            data() {
                return {
                    buyItems: [
                        { src: '../assets/img/buy-comics-digital-comics.png', alt: 'Digital-Comics', text: 'DIGITAL COMICS' },
                        { src: '../assets/img/buy-comics-merchandise.png', alt: 'DC-Merchandise', text: 'DC MERCHANDISE' },
                        { src: '../assets/img/buy-comics-subscriptions.png', alt: 'Subscription', text: 'SUBSCRIPTIONS' },
                        { src: '../assets/img/buy-comics-shop-locator.png', alt: 'Comic Shop Locator', text: 'COMIC SHOP LOCATOR' },
                        { src: '../assets/img/buy-dc-power-visa.svg', alt: 'DC Power Visa', text: 'DC POWER VISA' }
                    ]
                };
            }

        }
    },
}
</script>

<script setup>

</script>


<style lang="scss">
.blue-line {
    background-color: #0282f9;
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.blue-line ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;

    padding-left: 70px;
}

.blue-line ul li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
}

.blue-line ul li img {
    width: 50px;
    height: 55px;
    margin-right: 10px;
}
</style>