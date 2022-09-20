<template>
    <div class="chanel">
        <NavBar />

        <div class="breadcrumbs">
            <Crumbs :title="params.name" />
        </div>

        

        <section class="info">
            <div class="container-mini">
                <div class="info__wrapper">
                    <div class="info__image">
                        <img :src="params.logoUrl" alt="Пример канала">
                        <!-- <div class="info__stat">
                            <h4 class="info__text">Статистика:</h4>
                            <div class="info__cloud-wrap">
                                <MiniInfo background="gray" icon="view">6428</MiniInfo>
                                <MiniInfo background="gray" icon="repost">314</MiniInfo>
                            </div>
                        </div> -->
                    </div>
                    <div class="info__info">
                        <div class="info__cloud-wrap">
                            <MiniInfo icon="people">{{ params.subs }}</MiniInfo>
                            <MiniInfo icon="people">{{ params.category }}</MiniInfo>
                        </div>
                        <h1 class="h1">{{ params.name }}</h1>

                        <MiniInfo background="red" icon="tg">{{ params.tag }}</MiniInfo>

                        <div class="info__text">{{params.about}}</div>

                        <div class="info__btn-wrap">
                            <MiniButton background="true" icon="tg" :link="'https://t.me/' + params.tag">Перейти</MiniButton>
                            <MiniButton v-if="isNotPrivate" background="true" icon="stat" link="#stat">Статистика</MiniButton>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section v-if="isNotPrivate" class="graph" id="stat">
            <div class="container">
                <Title titleBlack="true" num="01">Статистика</Title>

                <Tabs>
                    <div class="tabs__window tabs__window_active">
                      <div class="stat">
                        <div class="stat__card">
                          <div class="stat__card-col">
                            <span>{{ allStat.subs[0] }}</span><br>
                            Подписчиков
                          </div>
                          <div class="stat__card-col">
                            за сутки: <span class="mini"> {{ allStat.subs[1] }}</span><br>
                            за неделю: <span class="mini"> {{ allStat.subs[2] }}</span><br>
                            за месяц: <span class="mini"> {{ allStat.subs[3] }}</span><br>
                          </div>
                        </div>
                        <div v-if="allStat.ci[0].substring(0, 1) === '-' || allStat.ci[0].substring(0, 1) === '+'" class="stat__card">
                          <div class="stat__card-col">
                            Рост подписчиков<br>
                            <span>{{ allStat.ci[0] }}</span>
                          </div>                  
                          <div class="stat__card-col">
                            Подписок: <span class="mini"> {{ allStat.ci[1] }}</span><br>
                            Отписок: <span class="mini"> {{ allStat.ci[2] }}</span><br>
                          </div>
                        </div> 
                        <div v-else class="stat__card">
                          <div class="stat__card-col">
                            Индекс цитирования<br>
                            <span>{{ allStat.ci[0] }}</span>
                          </div>
                          <div class="stat__card-col">
                            Упоминаний каналов: <span class="mini"> {{ allStat.ci[1] }}</span><br>
                            Упоминаний: <span class="mini"> {{ allStat.ci[2] }}</span><br>
                            Репостов: <span class="mini"> {{ allStat.ci[3] }}</span><br>
                          </div>
                        </div> 
                        <div v-if="allStat.ci[0].substring(0, 1) === '-' || allStat.ci[0].substring(0, 1) === '+'" class="stat__card">
                          <div class="stat__card-col">
                            Индекс цитирования<br>
                            <span>{{ allStat.err[0] }}</span>
                          </div>
                          <div class="stat__card-col">
                            Упоминаний каналов: <span class="mini"> {{ allStat.err[1] }}</span><br>
                            Упоминаний: <span class="mini"> {{ allStat.err[2] }}</span><br>
                          </div>
                          <!-- <div class="stat__card-col">
                            Рост подписчиков<br>
                            <span>{{ allStat.ci[0] }}</span>
                          </div>                  
                          <div class="stat__card-col">
                            Подписок: <span> {{ allStat.ci[1] }}</span><br>
                            Отписок: <span> {{ allStat.ci[2] }}</span><br>
                          </div> -->
                        </div> 
                        <div v-else class="stat__card">
                          <div class="stat__card-col">
                            Средний охват<br>
                            <span>{{ allStat.err[0] }}</span>
                          </div>
                          <div class="stat__card-col">
                            ERR: <span class="mini">{{ allStat.err[1] }}</span><br>
                            ERR24: <span class="mini">{{ allStat.err[2] }}</span>
                          </div>
                        </div> 
                        <div v-if="!(allStat.ci[0].substring(0, 1) === '-' || allStat.ci[0].substring(0, 1) === '+')" class="stat__card">
                          <div class="stat__card-col">
                            Рекламный охват<br><span>{{allStat.comm[0]}}</span>
                          </div>
                          <div class="stat__card-col">
                            за 12 часов: <span class="mini">{{ allStat.comm[1] }}</span><br>
                            за 24 часов: <span class="mini">{{ allStat.comm[2] }}</span><br>
                            за 48 часов: <span class="mini">{{ allStat.comm[3] }}</span><br>
                          </div>
                        </div> 
                        <div v-if="!(allStat.ci[0].substring(0, 1) === '-' || allStat.ci[0].substring(0, 1) === '+')" class="stat__card">
                          <div class="stat__card-col">
                            Возраст канала<br> <span>{{ allStat.old }}</span>
                          </div>
                        </div> 
                        <div v-if="!(allStat.ci[0].substring(0, 1) === '-' || allStat.ci[0].substring(0, 1) === '+')" class="stat__card stat__card_col">
                          <div class="stat__card-col">
                            Количество постов<br>
                            <span>{{ allStat.posts[0] }}</span>
                          </div>
                          <div class="stat__card-col">
                            Опубликовано вчера: <span class="mini">{{allStat.posts[1]}}</span>
                            Опубликовано за неделю: <span class="mini">{{allStat.posts[2]}}</span>
                            Опубликовано за месяц: <span class="mini">{{allStat.posts[3]}}</span>
                          </div>
                        </div>
                        <div v-if="!(allStat.ci[0].substring(0, 1) === '-' || allStat.ci[0].substring(0, 1) === '+')" class="stat__card">
                          <div class="stat__card-col">
                            Охват аудитории:<br> <span>{{allStat['post:'][0]}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tabs__window">
                      <Graph v-if="subsLoad" :data="subsStat"/>
                    </div>
                    <div class="tabs__window">
                        <div class="ci">
                          <div v-if="ci" class="ci__main">
                            {{ ci.all }}<br>
                            <span>индекс цитирования</span>
                          </div>
                          <div class="ci__second">
                            <div class="ci__channels">
                              <p>Каналов цитируют - {{ci.channels}}</p>
                              <p>Упоминаний в каналах - {{ci.channels_up}}</p>
                              <p>Репостов в каналах - {{ci.channels_rep}}</p>
                            </div>
                            <div class="ci__chats">
                              <p>Чатов цитируют - {{ci.chats}}</p>
                              <p>Упоминаний в каналах - {{ci.chats_up}}</p>
                              <p>Репостов в каналах - {{ci.chats_rep}}</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </section>

        <section class="popular">
      <div class="container">
        <Title titleBlack='true' num="02">Похожие каналы</Title>

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
          :link="`/channel/` + telegram.id"
          :avatarUrl="telegram.attributes.logoUrl"></ChanelCard>
        </ChanelContainer>
      </div>
    </section>

    <Footer />
    </div>
</template>

<style lang="scss">
    .chanel {
        padding-top: 100px;
    }
    .graph {
        padding-top: 60px;
    }
    .popular {
      padding-top: 60px;
    }
    .breadcrumbs {
        display: flex;
        justify-content: center;
    }
    .stat {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      &__card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        width: 45%;
        @media (max-width: 650px) {
          width: 100%
        }
        margin-bottom: 20px;
        border: 1px #2FA6DA solid;
        border-radius: 10px;
        &_col {
            flex-direction: column;
            .stat__card-col:last-of-type {
              margin-top: 20px;
              text-align: center;
            }
        }
        &-col {
          span {
            font-size: 24px;
            font-weight: 500;
            color: #2FA6DA
          }
          span.mini {
            font-size: inherit;
            font-weight: inherit;
            color: #2FA6DA
          }
        }
      }
    }
    .ci {
      &__main {
        font-size: 64px;
        line-height: 35px;
        text-align: center;
        color: #37AEE2;
        font-weight: 600;
        span {
          font-size: 18px;
          font-weight: 400;
        }
      }
      &__second {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      p {
        font-size: 24px
      }
    }
    .info {
        padding-top: 60px;
        &__image {
          img {
            width: 330px;
            height: 330px;
          }
        }
        @media (max-width: 787px) {
          width: 100%;
        }
        &__wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
          position: relative;
          @media (max-width: 787px) {
            align-items: center;
            justify-content: center;
          }

          &::before {
            content: url('~/assets/img/clouds.svg');
            position: absolute;
            left: -50px;
            z-index: -1;
            @media (max-width: 787px) {
              display: none;
            }
          }
        }
        @media (max-width: 787px) {
          &__image {
            img {
              width: 100%;
            }
          }
        }
        &__info {
            max-width: 434px;
            .info__text {
                margin-top: 45px;
            }
            @media (max-width: 787px) {
              width: 100%;
            }
        }
        &__text {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #141414;
        }
        &__cloud-wrap {
            display: flex;
            align-items: center;
            @media (max-width: 787px) {
              justify-content: center;
            }
        }
        &__stat {
            .info__cloud-wrap {
                justify-content: center;
            }
        }
        h4.info__text {
            margin-top: 15px;
            margin-bottom: 5px;
            text-align: center
        }
        &__btn-wrap {
            min-height: 62px;
            display: flex;
            padding-top: 50px;
            @media (max-width: 425px) {
              flex-wrap: wrap;
              gap: 20px;
              .button {
                width: 100%
              }
            }
        }
    }
</style>


<script>
import Graph from '../../components/Graph.vue'
  export default {
    data() {
        return {
            SERVER_URL: process.env.serverUrl,
            telegrams: [],
            nowDate: 0,
            domain: process.env.domain,
            params: [],
            subsLoad: false,
            allStat: [],
            subsStat: [],
            ci: {},
            isNotPrivate: true,
            isLoad: true,
            error: null,
            headers: { "Content-Type": "application/json", "Authorization": process.env.auth },
            channelByCategoryId: []
        };
    },
    head() {
        return {
            title: `Telegram-канал "${this.params.name}" — ${this.params.tag} — Telegram House`,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.params.about + ` - Телеграм канал "${this.params.name}" — ${this.params.tag} — Telegram House`
                },
                {
                    name: "keywords",
                    content: `tg, telegram, телеграм, тг, ${this.params.name}, ${this.params.tag}`
                }
            ],
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
    },
    async fetch() {
      try {
        const d = new Date();
        const ddate = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();

        this.nowDate = ddate + '.' + month + '.' + year;
        this.nowDate = '19.9.2022';

        
        const channelData = await fetch(`${this.SERVER_URL}/api/telegrams/${this.id}?populate=*`, {
            method: "GET",
            headers: this.headers,
        }).then(this.checkStatus)
            .then(this.parseJSON);

        this.params = channelData.data.attributes;
        this.allStat = this.params.default_stat[this.nowDate];

        if (this.params.tag !== 'приватный') {
          for (const [key, value] of Object.entries(channelData.data.attributes.stat_subs)) {
            this.subsStat.push({x: key , y: value});
          }
          for (const [key, value] of Object.entries(channelData.data.attributes.stat_ci)) {
            this.ci[key] = value;
          }
          this.subsLoad = true;
        } else {
          this.isNotPrivate = false;
        }
        
      } catch (error) {
        this.error = error;
      }
    },
    async mounted() {
      try {
        const responseChannels = await fetch(`${this.SERVER_URL}/api/telegrams`, {
          method: "GET",
          headers: this.headers,
        }).then(this.checkStatus)
            .then(this.parseJSON);
        for (let i = 1; i <= responseChannels.meta.pagination.pageCount; i++) {
          const channels = await fetch(`${this.SERVER_URL}/api/telegrams?pagination[page]=${i}`, {
              method: "GET",
              headers: this.headers,
          }).then(this.checkStatus)
              .then(this.parseJSON);
          const telegrams = channels.data.filter(i => i.attributes.category == this.params.category);
          telegrams.forEach(item => {
              if (this.telegrams.length < 6) {
                  this.telegrams.push(item);
              }
          });
          if (this.telegrams.length >= 1) {
              this.isLoad = false;
          }
          if (i === responseChannels.meta.pagination.pageCount && this.telegrams.length === 0) {
              this.error = "К сожалению, ничего не найдено :(";
              this.isLoad = false;
          }
      }
      } catch (e) {
        this.error = e;
      }
    },
    components: { Graph }
}
</script>
