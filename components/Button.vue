<script>
export default {
    props: ['link']
}
</script>

<template>
    <a :href="link" class="button">
        <slot></slot>
    </a>
</template>

<style lang="scss">
    .button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
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
    }
</style>
