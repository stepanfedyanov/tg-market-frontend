<script>
export default {
    data() {
        return {
            activePage: 1
        }
    },
    props: ['pages'],
    methods: {
        updateList() {
            if (this.activePage < this.pages) {
                this.activePage++;
                this.$emit('updateChannels', this.activePage)
            }
        }
    }
}
</script>

<template>
    <div class="container">
         <nav class="pagination">
            <Button updated="true" @update="updateList">Больше каналов</Button>
        </nav>
    </div>
</template>

<style lang="scss">
    .pagination {
        width: 100%;
        display: flex;
        justify-content: center;
        .button {
            background: linear-gradient(241.57deg, #37AEE2 2.93%, #1E96C8 103.57%);
            color: #fff;
            cursor: pointer;
            margin-bottom: 50px
        }
    }
</style>