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
            channelByCategoryId: []
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
                .then(this.parseJSON);
            this.telegrams = responseChannels.data;
            this.pageCount = responseChannels.meta.pagination.pageCount
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

        <section class="popular">
        <div class="container">
            <Title titleBlack='true' num="01">Все каналы</Title>

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
</style>
