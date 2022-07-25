<script>
  export default {
    data () {
      return {
        SERVER_URL: process.evn.SERVER_URL,
        telegrams: [],
        error: null,
        headers: {'Content-Type': 'application/json', 'Authorization': process.evn.AUTH},
        channelByCategoryId: []
      }
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

        this.telegrams = responseChannels.data;
      } catch (error) {
        this.error = error
      }
    }
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
            people="545 943"
            :tag="telegram.attributes.tag"
            :subText="telegram.attributes.shortText"
            :link="`${process.env.DOMAIN}/channel/` + telegram.id"></ChanelCard>
            </ChanelContainer>
        </div>
        </section>

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