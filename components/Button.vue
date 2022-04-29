<template>
    <a href="" class="button">
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
    }
</style>