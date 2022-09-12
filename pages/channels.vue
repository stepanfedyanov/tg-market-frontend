<script>
import Pagination from "../components/Pagination.vue";
  export default {
    data() {
        return {
            SERVER_URL: process.env.serverUrl,
            telegrams: [],
            pageCount: 0,
            domain: process.env.domain,
            error: null,
            headers: { "Content-Type": "application/json", "Authorization": process.env.auth },
            channelByCategoryId: [],
            categories: [],
            sortingPopularClass: 'sorting__popular',
            sortingCiClass: 'sorting__ci'
        };
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
                if (+a.attributes.stat_ci.all < +b.attributes.stat_ci.all) {
                    return 1
                } else if (+a.attributes.stat_ci.all > +b.attributes.stat_ci.all) {
                    return -1
                } else {
                    return 0
                }
            });
        },
        updateChannels: async function (paginationPage) {
            try {
                const responseChannels = await fetch(`${this.SERVER_URL}/api/telegrams?pagination[page]=${paginationPage}`, {
                    method: "GET",
                    headers: this.headers,
                }).then(this.checkStatus)
                    .then(this.parseJSON);
                this.telegrams.push(...responseChannels.data);
            }
            catch (error) {
                this.error = error;
            }
        }
    },
    async mounted() {
        try {
            const responseChannels = await fetch(`${this.SERVER_URL}/api/telegrams`, {
                method: "GET",
                headers: this.headers,
            }).then(this.checkStatus)
                .then(this.parseJSON),
            responseCategories = await fetch(`${this.SERVER_URL}/api/categories`, {
                method: 'GET',
                headers: this.headers,
            }).then(this.checkStatus)
              .then(this.parseJSON);
            this.telegrams = responseChannels.data;
            this.pageCount = responseChannels.meta.pagination.pageCount;
            this.categories = responseCategories.data;
        }
        catch (error) {
            this.error = error;
        }
    },
    components: { Pagination }
}
</script>

<template>
    <div key="channels" id="channels">
        <NavBar />

        <div class="breadcrumbs">
            <Crumbs title="Все каналы"/>
        </div>

        <section class="category">
        <div class="container">
            <Title titleBlack='true' num="01">Категории</Title>

            <div v-if="error">
            {{ error }}
            </div>

            <ChanelContainer v-else>
            <CategoryBtnMini v-for="category in categories" :key="category.id" :link="'/category/' + category.id">
                {{ category.attributes.Category }}
            </CategoryBtnMini>
            </ChanelContainer>

            

        </div>
        </section>

        <section class="popular">
        <div class="container">
            <Title titleBlack='true' num="02">Все каналы</Title>

            <div class="sorting">Сортировать по: <span @click="sortByPopular" :class="sortingPopularClass ">популярности</span> / <span @click="sortByCi" :class="sortingCiClass">цитируемости</span></div>

            <div v-if="error">
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
        </div>
        </section>

        <Pagination @updateChannels="updateChannels" :pages="pageCount"></Pagination>

    </div>
</template>

<style lang="scss">
  #channels {
    padding-top: 100px;
  }
  .breadcrumbs {
    display: flex;
    justify-content: center;
  }
  .sorting {
    span {
        cursor: pointer;
    }
    &_active {
        color: #2BA0D2;
    }
  }
</style>
