<template>
    <footer>

        <div class="footer-top">

            <div class="footer-top-left">

                <div class="first-column">

                    <div class="dc-comics">
                        <h2>DC COMICS</h2>

                        <ul>

                            <li>
                                <a href="#">Characters</a>
                            </li>

                            <li>
                                <a href="#">Comics</a>
                            </li>

                            <li>
                                <a href="#">Movies</a>
                            </li>

                            <li>
                                <a href="#">TV</a>
                            </li>

                            <li>
                                <a href="#">Games</a>
                            </li>

                            <li>
                                <a href="#">Videos</a>
                            </li>

                            <li>
                                <a href="#">News</a>
                            </li>

                        </ul>
                    </div>

                    <div class="shop">
                        <h2>SHOP</h2>

                        <ul>

                            <li>
                                <a href="#">Shop DC</a>
                            </li>

                            <li>
                                <a href="#">Shop DC Collectibles</a>
                            </li>

                        </ul>
                    </div>

                </div>

                <div class="second-column dc">
                    <h2>DC</h2>

                    <ul>

                        <li>
                            <a href="#">Terms Of Use</a>
                        </li>

                        <li>
                            <a href="#">Privacy Policy (New)</a>
                        </li>

                        <li>
                            <a href="#">Ad Choices</a>
                        </li>

                        <li>
                            <a href="#">Advertising</a>
                        </li>

                        <li>
                            <a href="#">Jobs</a>
                        </li>

                        <li>
                            <a href="#">Subscriptions</a>
                        </li>

                        <li>
                            <a href="#">Talent Workshops</a>
                        </li>

                        <li>
                            <a href="#">CPSC Certificates</a>
                        </li>

                        <li>
                            <a href="#">Ratings</a>
                        </li>

                        <li>
                            <a href="#">Shop Help</a>
                        </li>

                        <li>
                            <a href="#">Contact Us</a>
                        </li>

                    </ul>
                </div>

                <div class="third-column sites">
                    <h2>SITES</h2>

                    <ul>

                        <li>
                            <a href="#">DC</a>
                        </li>

                        <li>
                            <a href="#">MAD Magazine</a>
                        </li>

                        <li>
                            <a href="#">DC Kids</a>
                        </li>

                        <li>
                            <a href="#">DC Universe</a>
                        </li>

                        <li>
                            <a href="#">DC Power Visa</a>
                        </li>

                    </ul>

                </div>

            </div>

            <div class="footer-top-right">
            </div>

        </div>

        <div class="footer-bottom">
            <div class="footer-bottom-left">
                <h2>SIGN-UP NOW!</h2>
            </div>

            <div class="footer-bottom-right">

                <h3> FOLLOW US </h3>

                <ul>
                    <li>
                        <div class="social-link">
                            <img src="../assets/img/footer-facebook.png" alt="Facebook Logo">
                        </div>
                    </li>

                    <li>
                        <div class="social-link">
                            <img src="../assets/img/footer-twitter.png" alt="Twitter Logo">
                        </div>
                    </li>

                    <li>
                        <div class="social-link">
                            <img src="../assets/img/footer-youtube.png" alt="YouTube Logo">
                        </div>
                    </li>

                    <li>
                        <div class="social-link">
                            <img src="../assets/img/footer-pinterest.png" alt="Pinterest Logo">
                        </div>
                    </li>

                    <li>
                        <div class="social-link">
                            <img src="../assets/img/footer-periscope.png" alt="Periscope Logo">
                        </div>
                    </li>

                </ul>
            </div>
        </div>

    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {

        }
    },
}
</script>

<script setup>

</script>

<style lang="scss">
footer {
    height: 100%;

    display: flex;
    flex-direction: column;

    .footer-top {
        background-color: #212121;
        height: 370px;
        background-image: url("/Users/matteodidone/VS Code Projects/vite-comics/vite-comics/src/assets/img/footer-bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .footer-top-left {
            display: flex;
            flex: 1;

            padding-left: 340px;
        }

        .first-column,
        .third-column {
            padding: 20px;

            h2 {
                color: #fff;
                font-size: 25px;
                margin-bottom: 10px;
            }

            ul {
                list-style: none;
                padding: 0;

                li {
                    margin-bottom: 2px;

                    a {
                        color: #666665;
                        font-size: 15px;
                        text-decoration: none;
                    }
                }
            }
        }

        .second-column {
            padding: 20px;


            h2 {
                color: #fff;
                font-size: 25px;
                margin-bottom: 10px;
            }

            li {
                a {
                    color: #666665;
                    font-size: 15px;
                    text-decoration: none;
                }
            }
        }

        .footer-top-right {
            height: 370px;
            width: 550px;

            background-image: url('../assets/img/dc-logo-bg.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            margin-right: 300px;
        }
    }
}

.footer-bottom {
    background-color: #303030;
    height: 100px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .footer-bottom-left {
        padding-left: 355px;

        h2 {
            color: #fff;
            font-size: 25px;
            display: flex;
            align-items: center;
            justify-content: center;

            padding: 10px;

            border: 3px solid #0a73d4;
        }
    }

    .footer-bottom-right {
        padding-right: 300px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        h3 {
            color: #0a73d4;
            font-size: 25px;
            margin-right: 20px;
        }

        ul {
            list-style: none;
            padding: 0;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            li {
                margin-right: 10px;
                .social-link {
                    img {
                        width: 30px;
                        height: 30px;
                    }
                }
            }
        }
    }
}
</style>