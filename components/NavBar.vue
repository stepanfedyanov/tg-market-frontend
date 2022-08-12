<script>
export default {
    methods: {
        openMobileMenu() {
            const mobileMenu = document.querySelector('.nav__burger-menu');
            const mobileBurger = document.querySelector('.nav__burger');

            mobileMenu.classList.toggle('nav__burger-menu_active');
            mobileBurger.classList.toggle('nav__burger_active');
        }
    }
}
</script>

<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__container">
                <div @click="openMobileMenu()" class="nav__burger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div class="nav__burger-menu">
                    <NuxtLink to="/webogram" class="nav__link">Webogram</NuxtLink>
                    <NuxtLink to="/blog" class="nav__link">Блог</NuxtLink>
                    <NuxtLink to="/stickers" class="nav__link">Стикеры</NuxtLink>
                    <NuxtLink to="/chanels" class="nav__link">Каналы</NuxtLink>
                    <NuxtLink to="/faq" class="nav__link">FAQ</NuxtLink>
                    <NuxtLink to="/chanels" class="nav__link">Каталог</NuxtLink>
                </div>

                <NuxtLink to="/webogram" class="nav__link">Webogram</NuxtLink>
                <NuxtLink to="/blog" class="nav__link">Блог</NuxtLink>
                <NuxtLink to="/stickers" class="nav__link">Стикеры</NuxtLink>

                <NuxtLink to="/" class="nav__brand">
                    <svg width="82" height="22" viewBox="0 0 82 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.28 21V1.2H4.33V17.34H13V21H0.28ZM14.433 11.1C14.393 8.28 15.413 5.85 17.493 3.81C19.593 1.77 22.073 0.779999 24.933 0.839998C27.793 0.779999 30.273 1.77 32.373 3.81C34.493 5.85 35.533 8.28 35.493 11.1C35.533 13.92 34.493 16.35 32.373 18.39C30.273 20.43 27.793 21.42 24.933 21.36C22.073 21.42 19.593 20.43 17.493 18.39C15.413 16.35 14.393 13.92 14.433 11.1ZM31.323 11.1C31.323 9.22 30.713 7.67 29.493 6.45C28.293 5.21 26.783 4.59 24.963 4.59C23.123 4.59 21.603 5.2 20.403 6.42C19.203 7.64 18.603 9.2 18.603 11.1C18.603 13 19.203 14.56 20.403 15.78C21.603 17 23.123 17.61 24.963 17.61C26.783 17.61 28.293 17 29.493 15.78C30.713 14.56 31.323 13 31.323 11.1ZM37.7826 11.1C37.7226 8.26 38.7326 5.83 40.8126 3.81C42.9126 1.79 45.4326 0.799999 48.3726 0.839998C51.9126 0.839998 54.6926 2.27 56.7126 5.13L53.8326 7.5C52.4326 5.56 50.5926 4.59 48.3126 4.59C46.4326 4.59 44.9026 5.2 43.7226 6.42C42.5426 7.64 41.9526 9.2 41.9526 11.1C41.9526 13.04 42.5626 14.63 43.7826 15.87C45.0026 17.11 46.5926 17.73 48.5526 17.73C50.8526 17.73 52.5926 16.91 53.7726 15.27V13.65H48.3126V10.14H57.8226V15.99C56.9026 17.61 55.6126 18.91 53.9526 19.89C52.3126 20.87 50.4526 21.36 48.3726 21.36C45.4726 21.42 42.9726 20.44 40.8726 18.42C38.7726 16.38 37.7426 13.94 37.7826 11.1ZM60.1947 11.1C60.1547 8.28 61.1747 5.85 63.2547 3.81C65.3547 1.77 67.8347 0.779999 70.6947 0.839998C73.5547 0.779999 76.0347 1.77 78.1347 3.81C80.2547 5.85 81.2947 8.28 81.2547 11.1C81.2947 13.92 80.2547 16.35 78.1347 18.39C76.0347 20.43 73.5547 21.42 70.6947 21.36C67.8347 21.42 65.3547 20.43 63.2547 18.39C61.1747 16.35 60.1547 13.92 60.1947 11.1ZM77.0847 11.1C77.0847 9.22 76.4747 7.67 75.2547 6.45C74.0547 5.21 72.5447 4.59 70.7247 4.59C68.8847 4.59 67.3647 5.2 66.1647 6.42C64.9647 7.64 64.3647 9.2 64.3647 11.1C64.3647 13 64.9647 14.56 66.1647 15.78C67.3647 17 68.8847 17.61 70.7247 17.61C72.5447 17.61 74.0547 17 75.2547 15.78C76.4747 14.56 77.0847 13 77.0847 11.1Z" fill="white"/>
                    </svg>
                </NuxtLink>

                <NuxtLink to="/chanels" class="nav__link">Каналы</NuxtLink>
                <NuxtLink to="/faq" class="nav__link">FAQ</NuxtLink>
                <NuxtLink to="/catalog" class="nav__link">Каталог</NuxtLink>
            </div>
        </div>
    </nav>
</template>



<style lang="scss">
    .nav {
        position: fixed;
        z-index: 10;
        width: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(261.48deg, #37AEE2 2.51%, #1E96C8 135.98%);
        padding-top: 15px;
        padding-bottom: 15px;
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 100px;
        @media (max-width: 768px) {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
        &__container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media (max-width: 768px) {
                justify-content: flex-start;
                padding-left: 30px;
            }
        }
        &__link {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #FFFFFF;
            text-decoration: none;
            @media (max-width: 768px) {
                display: none
            }
        }
        &__brand {
            @media (max-width: 768px) {
                margin-left: 20px;
            }
        }
        &__burger {
            display: none;
            @media (max-width: 768px) {
                display: flex;
                flex-direction: column;
                div {
                    margin-top: 5px;
                    margin-bottom: 5px;
                    width: 30px;
                    height: 1px;
                    background-color: #FFFFFF;
                    border-radius: 5px;
                }
            }
            &_active {
                position: relative;
                z-index: 7;
                bottom: -5px;
                div {
                    &:first-of-type {
                        transform: rotate(-45deg);
                        background-color: #000;
                    }
                    &:nth-of-type(2) {
                        transform: rotate(45deg);
                        position: relative;
                        top: -11px;
                        background-color: #000;
                    }
                    &:last-of-type {
                        display: none;
                    }
                }
            }
            &-menu {
                display: none;
                @media (max-width: 768px) {
                    &_active {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        position: fixed;
                        z-index: 6;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        background-color: #ffffff9f;
                        & .nav__link {
                            display: block;
                            color: #000;
                            font-size: 28px;
                            margin-bottom: 10px;
                            margin-top: 10px;
                        }
                    }
                }
            }
        }
    }
</style>