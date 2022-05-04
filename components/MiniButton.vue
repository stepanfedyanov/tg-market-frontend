<script>
export default {
    props: ['link']
}
</script>

<template>
    <a :href="link" class="button button_mini">
        <slot></slot>
    </a>
</template>

<style lang="scss">
    .button {
        width: 259px;
        height: 62px;
        background: #FFFFFF;
        border-radius: 10px;

        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        letter-spacing: 0.1em;
        text-transform: uppercase;

        color: #195168;

        padding: 19px 37px;
        text-decoration: none;
        @media (max-width: 425px) {
            padding: 19px 15px;
        }
        &_mini {
            width: 146px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #2BA0D2;
            padding: 15px 25px;
            transition: 0.3s all;
            border: 1px solid transparent;
            svg {
                margin-left: 10px;
            }
            &:hover {
                border: 1px solid #2BA0D2;
            }
        }
    }
</style>