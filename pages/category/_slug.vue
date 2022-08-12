<template>
    <div class="category">
        <NavBar />

        <div class="breadcrumbs">
            <Crumbs :title="categoryData.Category" />
        </div>

      <section class="content">
          <div class="container">
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
          </div>
        </section>

        <section class="more">
        <div class="container">
            <Title titleBlack="true" num="03">Часто-задаваемые вопросы</Title>

            <ChanelContainer>
            <More num="01" title="С помощью нашей биржи">Это бесплатный сервис для продвижения ваших Telegram каналов в интернете. С помощью нашей биржи вы всегда можете найти выгодные предложения по размещению рекламы или взаимному пиару С помощью нашей биржи вы всегда можете найти выгодные предложения по размещению рекламы или взаимному пиару</More>
            <More num="02" title="С помощью нашей биржи">Это бесплатный сервис для продвижения ваших Telegram каналов в интернете. С помощью нашей биржи вы всегда можете найти выгодные предложения по размещению рекламы или взаимному пиару С помощью нашей биржи вы всегда можете найти выгодные предложения по размещению рекламы или взаимному пиару</More>
            <More num="03" title="С помощью нашей биржи">Это бесплатный сервис для продвижения ваших Telegram каналов в интернете. С помощью нашей биржи вы всегда можете найти выгодные предложения по размещению рекламы или взаимному пиару С помощью нашей биржи вы всегда можете найти выгодные предложения по размещению рекламы или взаимному пиару</More>
            <More num="04" title="С помощью нашей биржи">Это бесплатный сервис для продвижения ваших Telegram каналов в интернете. С помощью нашей биржи вы всегда можете найти выгодные предложения по размещению рекламы или взаимному пиару С помощью нашей биржи вы всегда можете найти выгодные предложения по размещению рекламы или взаимному пиару</More>
            </ChanelContainer>
        </div>
        </section>

        <Footer />
    </div>
</template>

<style lang="scss">
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
  export default {
    data () {
      return {
        SERVER_URL: process.env.serverUrl,
        telegrams: [],
        name: '',
        isLoad: true,
        domain: process.env.domain,
        error: null,
        categoryData: [],
        headers: {'Content-Type': 'application/json', 'Authorization': process.env.auth},
        channelByCategoryId: []
      }
    },
    async asyncData({ params }) {
      const id = params.slug // When calling /abc the slug will be "abc"

      return { id }
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
    },
    async mounted () {
      try {
        const responseChannels = await fetch(`${this.SERVER_URL}/api/telegrams`, {
          method: 'GET',
          headers: this.headers,
        }).then(this.checkStatus)
          .then(this.parseJSON);

        const categoryData = await fetch(`${this.SERVER_URL}/api/categories/${this.id}`, {
          method: 'GET',
          headers: this.headers,
        }).then(this.checkStatus)
          .then(this.parseJSON);

        this.categoryData = categoryData.data.attributes;

        for (let i = 1; i <= responseChannels.meta.pagination.pageCount; i++) {
            const channels = await fetch(`${this.SERVER_URL}/api/telegrams?pagination[page]=${i}`, {
              method: 'GET',
              headers: this.headers,
            }).then(this.checkStatus)
              .then(this.parseJSON);

            const telegrams = channels.data.filter(i => i.attributes.category == this.categoryData.Category);

            this.telegrams = [...this.telegrams, ...telegrams];
            if (this.telegrams.length >= 1) {
              this.isLoad = false;
            }
            if (i === responseChannels.meta.pagination.pageCount && this.telegrams.length === 0) {
              this.error = 'К сожалению, ничего не найдено :(';
              this.isLoad = false;
            }
        }
      } catch (error) {
        this.error = error
      }
    }
  }
</script>

