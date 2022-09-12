<script>
export default {
    props: ['link']
}
</script>

<template>
    <NuxtLink :to="link" class="category-card-mini">
        <slot></slot>
    </NuxtLink>
</template>

<style lang="scss">
    .category-card-mini {
        text-decoration: none;
        width: 130px;
        height: 20px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        margin-left: 5px;
        margin-right: 5px;
        border: none;
        border-radius: 23px;
        font-size: 14px;
        transition: 0.3s all;
        color: #141414;
    }
</style>