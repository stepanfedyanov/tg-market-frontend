<script>
export default {
    props: ['titleBlack', 'num']
}
</script>

<template>  
    <h1 class="title" :class="{titleBlack}">
        <slot></slot>
        <span v-if="num" class="title__num">{{ num }}</span>
    </h1>
</template>

<style lang="scss">
    .title {
        font-style: normal;
        position: relative;
        font-weight: 700;
        font-size: 30px;
        line-height: 112.2%;
        color: #FFFFFF;
        @media (max-width: 1024px) {
            text-align: center;
        }
        &__num {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -4px;
            right: -20px;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #FFFFFF;
            width: 34px;
            height: 24px;

            background: #DF5349;
            border-radius: 36px;        
        }
    }

    .titleBlack {
        color: #141414;
        text-align: center;
        width: fit-content;
        display: block;
        margin: 0 auto;
    }
</style>

