<template>
    <div class="category">
        <NavBar />

        <div class="breadcrumbs">
            <Crumbs :title="categoryData.Category" />
        </div>

      <section class="content">
        <Title titleBlack='true' num="01">{{ categoryData.Category }}</Title>
        


          <div class="container">
            <div class="sorting">Сортировать по: <span @click="sortByPopular" :class="sortingPopularClass ">популярности</span> / <span @click="sortByCi" :class="sortingCiClass">цитируемости</span></div>
            <div v-if="isLoad" class="loading">
              <img src="~/assets/img/spinner-2.gif" alt="Load">
            </div>


            <div class="loading" v-if="error">
              {{ error }}
            </div>


            <ChanelContainer v-else>
              <ChanelCard v-for="telegram in telegrams" :key="telegram.id"
              :name="telegram.attributes.name"
              :people="telegram.attributes.subs"
              :tag="telegram.attributes.tag"
              :subText="telegram.attributes.shortText"
              :link="`${domain}/channel/` + telegram.id"
              :avatarUrl="telegram.attributes.logoUrl"></ChanelCard>
            </ChanelContainer>

            <Pagination @updateChannels="updateChannels" :pages="pageCount"></Pagination>
          </div>
        </section>

        <Footer />
    </div>
</template>

<style lang="scss" scoped>
    .category {
        padding-top: 100px;
    }
    .breadcrumbs {
        display: flex;
        justify-content: center;
    }
    .loading {
      display: flex;
      justify-content: center;
    }
</style>

<script>
import Pagination from '../../components/Pagination.vue';
  export default {
    data() {
        return {
            SERVER_URL: process.env.serverUrl,
            allTelegrams: [],
            telegrams: [],
            name: "",
            pageCount: 0,
            isLoad: true,
            domain: process.env.domain,
            error: null,
            categoryData: [],
            sortingPopularClass: 'sorting__popular',
            sortingCiClass: 'sorting__ci',
            headers: { "Content-Type": "application/json", "Authorization": process.env.auth },
            channelByCategoryId: []
        };
    },
    async asyncData({ params }) {
        const id = params.slug; // When calling /abc the slug will be "abc"
        return { id };
    },
    methods: {
        parseJSON: function (resp) {
            return (resp.json ? resp.json() : resp);
        },
        checkStatus: function (resp) {
            if (resp.status >= 200 && resp.status < 300) {
                return resp;
            }
            return this.parseJSON(resp).then((resp) => {
                throw resp;
            });
        },
        sortByPopular: function () {
            this.sortingPopularClass = this.sortingPopularClass + ' sorting_active';
            this.sortingCiClass = 'sorting__ci';
            this.telegrams.sort((a, b) => {
                if (Number(a.attributes.subs.replaceAll(' ', '')) < Number(b.attributes.subs.replaceAll(' ', ''))) {
                    console.log(Number(a.attributes.subs.replaceAll(' ', '')), Number(b.attributes.subs.replaceAll(' ', '')));
                    return 1
                } else if (Number(a.attributes.subs.replaceAll(' ', '')) > Number(b.attributes.subs.replaceAll(' ', ''))) {
                    console.log(Number(a.attributes.subs.replaceAll(' ', '')), Number(b.attributes.subs.replaceAll(' ', '')));
                    console.log(-1);
                    return -1
                } else {
                    console.log(a.attributes.subs.replaceAll(' ', ''), b.attributes.subs.replaceAll(' ', ''));
                    console.log(0);
                    return 0
                }
            });
            console.log(this.telegrams);
        },
        sortByCi: function () {
            this.sortingCiClass = this.sortingPopularClass + ' sorting_active';
            this.sortingPopularClass = 'sorting__popular';
            this.telegrams.sort((a, b) => {
                if (a.attributes.stat_ci && b.attributes.stat_ci) {
                    if (+a.attributes.stat_ci.all < +b.attributes.stat_ci.all) {
                        return 1
                    } else if (+a.attributes.stat_ci.all > +b.attributes.stat_ci.all) {
                        return -1
                    } else {
                        return 0
                    }
                }
            });
        },
        updateChannels: async function (paginationPage, isUpdate) {
          if (isUpdate) {
            this.telegrams = [...this.telegrams, ...this.allTelegrams];
          }
          
        }
    },
    async mounted() {
        try {
            const responseChannels = await fetch(`${this.SERVER_URL}/api/telegrams`, {
                method: "GET",
                headers: this.headers,
            }).then(this.checkStatus)
                .then(this.parseJSON);
            const categoryData = await fetch(`${this.SERVER_URL}/api/categories/${this.id}`, {
                method: "GET",
                headers: this.headers,
            }).then(this.checkStatus)
                .then(this.parseJSON);
            this.categoryData = categoryData.data.attributes;
            this.pageCount = responseChannels.meta.pagination.pageCount
            for (let i = 1; i <= responseChannels.meta.pagination.pageCount; i++) {
                const channels = await fetch(`${this.SERVER_URL}/api/telegrams?pagination[page]=${i}`, {
                    method: "GET",
                    headers: this.headers,
                }).then(this.checkStatus)
                    .then(this.parseJSON);
                const telegrams = channels.data.filter(i => i.attributes.category == this.categoryData.Category);
                telegrams.forEach(item => {
                    if (this.telegrams.length < 25) {
                        this.telegrams.push(item);
                    }
                    else {
                        this.allTelegrams.push(item);
                    }
                });
                if (this.allTelegrams.length >= 1) {
                    this.isLoad = false;
                }
                if (i === responseChannels.meta.pagination.pageCount && this.allTelegrams.length === 0) {
                    this.error = "К сожалению, ничего не найдено :(";
                    this.isLoad = false;
                }
            }
        }
        catch (error) {
            this.error = error;
        }
    },
    components: { Pagination }
}
</script>

