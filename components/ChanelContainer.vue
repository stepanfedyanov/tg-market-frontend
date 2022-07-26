<template>
    <div class="chanel-container">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .chanel-container {
        display: flex;
        gap: 20px;
        margin-top: 40px;
        flex-wrap: wrap;
        @media (max-width: 768px) {
            justify-content: center;
        }
    }
</style>
