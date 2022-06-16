<script>
  export default {
    data () {
      return {
        SERVER_URL: 'http://localhost:1337',
        telegrams: [],
        error: null,
        headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer d849f2fda81bd95443d7eea1c2965b8a1a915831c9f4a294569ad33b0b7975cf65abc9210e185bd9b4fb3b328e62e6266a2eed7aa959d790954eec14875722194ac981c125096470c5c43b4d90ca0f0f4d0f7ed59e787c00a51fff3dd09421119c3d4cc1f4a91943782162f787cee6ab804bf0eb0cf4ccd26c0e28826904aeb0'},
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
            :link="'http://localhost:3000/channel/' + telegram.id"></ChanelCard>
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