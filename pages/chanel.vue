<script>
import NavBar from "../components/NavBar.vue";
import Crumbs from "../components/Crumbs.vue";
export default {
    components: { NavBar, Crumbs }
}
</script>

<template>
    <div class="chanel">
        <NavBar />

        <div class="breadcrumbs">
            <Crumbs />
        </div>

        <Footer />
    </div>
</template>

<style lang="scss">
    .chanel {
        padding-top: 100px;
    }
    .breadcrumbs {
        display: flex;
        justify-content: center;
    }
</style>
