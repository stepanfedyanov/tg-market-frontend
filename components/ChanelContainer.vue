<template>
    <div class="chanel-container">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .chanel-container {
        display: flex;
        margin-top: 40px;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>