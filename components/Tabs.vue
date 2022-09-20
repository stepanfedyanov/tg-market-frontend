<script>
export default {
    methods: {
        changeWindow(event) {
            const tabs = document.querySelectorAll('.tabs__tab');
            const windows = document.querySelectorAll('.tabs__window');

            tabs.forEach((item, n) => {
                item.classList.remove('tabs__tab_active');

                if (event.target === item) {
                    item.classList.add('tabs__tab_active');

                    windows.forEach(window => {
                        window.classList.remove('tabs__window_active');
                    });

                    windows[n].classList.add('tabs__window_active');
                }
            });
        }
    }
}
</script>

<template>
    <div class="tabs">
        <div class="tabs__header">
            <h5 class="tabs__title"></h5>

            <ul class="tabs__tabs">
                <li @click="(event) => changeWindow(event)" class="tabs__tab tabs__tab_active">Общая аналитика</li>
                <li @click="(event) => changeWindow(event)" class="tabs__tab">Количество подписчиков</li>
                <li @click="(event) => changeWindow(event)" class="tabs__tab">Индекс цитирования</li>
            </ul>
        </div>

        <div class="tabs__content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
    .tabs {
        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            @media (max-width: 715px) {
              flex-direction: column-reverse;

            }
        }
        &__tabs {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            @media (max-width: 715px) {
              padding: 0;
              justify-content: center;
            }
        }
        &__window {
            display: none;
            &_active {
                display: block
            }
        }
        &__tab {
            cursor: pointer;
            padding: 0 15px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            &_active {
                background: #2FA6DA;
                border-radius: 71px;
                color: white;
            }
        }
        &__title {
            font-weight: 700;
            font-size: 16px;
            line-height: 152.7%;
            color: #141414;
        }
    }
</style>
