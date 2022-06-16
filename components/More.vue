<script>
export default {
    props: ["title", "num"],
    methods: {
        openPanel(num) {
            const panels = document.querySelectorAll('.more-panel');

            panels.forEach(element => {
                if (element.getAttribute('data-id') === num) {
                    element.lastChild.classList.toggle('more-panel__panel_active');
                    element.getElementsByClassName('more-panel__panel-close')[0].classList.toggle('more-panel__panel-close_active');
                }
            });

        }
    }
}
</script>

<template>
    <div class="more-panel" :data-id="num" @click="openPanel(num)">
        <button class="more-panel__accordion">
            <div class="more-panel__num">{{ num }}</div>
            {{ title }}

            <div class="more-panel__panel-close">
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L10 10L19 1" stroke="#202020" stroke-width="2"/>
                </svg>
            </div>
        </button>
        <div class="more-panel__panel">
            <p><slot></slot></p>
        </div>
    </div>
</template>

<style lang="scss">
    .more-panel {
        background: #FFFFFF;
        min-height: 64px;
        box-shadow: 0px 2px 98px rgba(227, 232, 238, 0.38);
        border-radius: 12px;
        padding-left: 22px;
        width: 100%;
        margin-bottom: 18px;
        transition: 0.3s all;
        &__accordion {
            width: 100%;
            position: relative;
            background: transparent;
            height: 64px;
            border: none;
            display: flex;
            align-items: center;
        }
        &__num {
            width: 34px;
            height: 34px;
            border-radius: 100%;
            font-size: 16px;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 25px;
            background: linear-gradient(203.2deg, #37AEE2 21.67%, #1E96C8 70%);
        }
        &__panel {
            display: none;
            height: 0;
            &_active {
                display: block;
                height: fit-content;
            }
        }
        &__panel-close {
            position: absolute;
            top: 28px;
            right: 53px;
            &_active {
                transform: rotate(270deg);
            }
        }
    }
</style>