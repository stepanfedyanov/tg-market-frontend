<template>
  <div>
    <NavBar />

    <section class="promo">
      <div class="container">
        <div class="promo__container">
          <img src="~/assets/img/promo-phone.png" alt="">
          <div class="promo__text">
            <Title>Биржа рекламы со встроенным сервисом аналитики телеграм каналов</Title>
            <P>Самый полный каталог телеграмм ботов, стикеров, и каналов Всегда будьте в курсе событий. Подписывайся</P>
            <div class="promo__btn-wrapper">
              <Button link="/channels">Перейти в каталог</Button>
            </div>
          </div>
        </div>
        <div class="promo__down">
          <svg width="20" height="55" viewBox="0 0 20 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.28" d="M1 22.6072L10 31.6072L19 22.6072" stroke="white" stroke-width="2"/>
          <path opacity="0.1" d="M1 1L10 10L19 1" stroke="white" stroke-width="2"/>
          <path d="M1 44.3928L10 53.3928L19 44.3928" stroke="white" stroke-width="2"/>
          </svg>
        </div>
      </div>
    </section>

    <div v-if="error">
      {{ error }}
    </div>

<!--    <ul v-else>-->
<!--      <li  v-for="telegram in telegrams.data" :key="telegram.id">-->
<!--      {{telegram.attributes.name}}-->
<!--      </li>-->
<!--    </ul>-->

    <section class="popular">
      <div class="container">
        <Title titleBlack='true' num="01">Сейчас популярно</Title>

        <div v-if="error">
          {{ error }}
        </div>


        <ChanelContainer v-else>
          <ChanelCard v-for="telegram in telegramsPopular" :key="telegram.id"
          :name="telegram.attributes.name"
          :people="telegram.attributes.subs"
          :tag="telegram.attributes.tag"
          :subText="telegram.attributes.shortText"
          :link="`${domain}/channel/` + telegram.id"
          :avatarUrl="telegram.attributes.logoUrl"></ChanelCard>
        </ChanelContainer>

        <Button link="/channels">Больше каналов</Button>
      </div>
    </section>

    <section class="category">
      <div class="container">
        <Title titleBlack='true' num="02">Выбрать категорию</Title>

        <div v-if="error">
          {{ error }}
        </div>

        <ChanelContainer v-else>
          <CategoryBtn v-for="category in categories" :key="category.id" :link="'/category/' + category.id">
            {{ category.attributes.Category }}
          </CategoryBtn>
        </ChanelContainer>

        <ChanelContainer>
          <ChanelCard v-for="telegramCategory in channelByCategoryId.data" :key="telegramCategory.id"
          :name="telegramCategory.attributes.name"
          :people="telegramCategory.attributes.subs"
          :tag="telegramCategory.attributes.tag"
          :subText="telegramCategory.attributes.shortText"
          :link="`${domain}/channel/` + telegramCategory.id"
          :avatarUrl="telegramCategory.attributes.logoUrl"></ChanelCard>
        </ChanelContainer>

      </div>
    </section>

    <section class="about-us">
      <img class="about-us__clouds" src="~/assets/img/clouds-about-us.svg" alt="Облака">
      <div class="container">
        <Title titleBlack="true" num="03">Что такое telegrator.ru?</Title>

        <div class="about-us__container">
          <img src="~/assets/img/about-us-img.png" alt="Что такое telegrator.ru?">
          <div class="about-us__text-container">
            <P>
              <span>Биржа рекламы телеграм</span> <br><br>
              Это бесплатный сервис для продвижения ваших
              Telegram каналов в интернете. С помощью нашей
              биржи вы всегда можете найти выгодные предложения
              по размещению рекламы или взаимному пиару<br><br>

              С помощью нашей биржи вы всегда можете найти
              выгодные предложения по размещению рекламы
              или взаимному пиару
            </P>

            <MiniButton class="chanel-card__link" link="/add_my_channel">Перейти
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.919612 5.66154L9.85461 1.80292C10.7366 1.40098 13.7277 0.114768 13.7277 0.114768C13.7277 0.114768 15.1082 -0.447948 14.9932 0.918648C14.9548 1.48136 14.6481 3.45087 14.3413 5.58115L13.3826 11.8916C13.3826 11.8916 13.3059 12.8161 12.654 12.9768C12.0021 13.1376 10.9283 12.4141 10.7366 12.2534C10.5832 12.1328 7.86053 10.324 6.86349 9.43977C6.59506 9.19861 6.28828 8.71628 6.90184 8.15357C8.28236 6.82716 9.9313 5.17921 10.9283 4.13417C11.3885 3.65184 11.8487 2.52641 9.9313 3.893L4.52429 7.71143C4.52429 7.71143 3.91073 8.11337 2.7603 7.75163C1.60987 7.38988 0.267702 6.90755 0.267702 6.90755C0.267702 6.90755 -0.652641 6.30464 0.919612 5.66154Z" fill="#2BA0D2"/>
                </svg>
            </MiniButton>
          </div>
        </div>
      </div>
    </section>


    <section class="more">
      <div class="container">
        <Title titleBlack="true" num="04">Часто-задаваемые вопросы</Title>

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

<script>
  export default {
      name: 'IndexPage',
      data () {
        return {
          SERVER_URL: process.env.serverUrl,
          domain: process.env.domain,
          telegrams: [],
          telegramsPopular: [],
          categories: [],
          error: null,
          headers: {'Content-Type': 'application/json', 'Authorization': process.env.auth},
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
      updateListCategory: async function (id) {
        try {
          const responceCategoryById = await fetch(`${this.SERVER_URL}/api/categories/${id}?populate=*`, {
            method: 'GET',
            headers: this.headers,
          }).then(this.checkStatus)
            .then(this.parseJSON);

          this.channelByCategoryId = responceCategoryById.data.attributes.Channel;
        } catch (error) {
          console.log(error)
        }
      }
    },
    async mounted () {
      try {
        const responseChannels = await fetch(`${this.SERVER_URL}/api/telegrams`, {
          method: 'GET',
          headers: this.headers,
        }).then(this.checkStatus)
          .then(this.parseJSON),
        responseCategories = await fetch(`${this.SERVER_URL}/api/categories`, {
          method: 'GET',
          headers: this.headers,
        }).then(this.checkStatus)
          .then(this.parseJSON),
        responseChannelsByCategories = await fetch(`${this.SERVER_URL}/api/categories/1?populate=*`, {
          method: 'GET',
          headers: this.headers,
        }).then(this.checkStatus)
          .then(this.parseJSON);
          
        this.telegrams = responseChannels;
        this.channelByCategoryId = responseChannelsByCategories.data.attributes.Channel;
        this.categories = responseCategories.data;

        for (let i = 1; i < responseChannels.meta.pagination.pageCount; i++) {
          if (this.telegramsPopular.length < 6) {
            const popularChannels = await fetch(`${this.SERVER_URL}/api/telegrams?pagination[page]=${i}`, {
              method: 'GET',
              headers: this.headers,
            }).then(this.checkStatus)
              .then(this.parseJSON);

            const popular = popularChannels.data.filter(i => i.attributes.isPopular === true);

            this.telegramsPopular = [...this.telegramsPopular, ...popular];
          } else {
            break;
          }
        }

      } catch (error) {
        this.error = error
      }
    }
  }
</script>

<style lang="scss">
  .promo {
    position: relative;
    background: url('~/assets/img/promo-bg.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 120px;
    overflow: hidden;
    border-bottom-right-radius: 70px;
    border-bottom-left-radius: 70px;
    @media (max-width: 1024px) {
      padding-bottom: 150px;
    }
    &__container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    img {
      @media (max-width: 1024px) {
        position: absolute;
        opacity: 0.1;
        z-index: 1;
        bottom: 0;
      }
    }
    &__text {
      max-width: 527px;
      padding-top: 55px;
      @media (max-width: 1024px) {
        position: relative;
        z-index: 2;
      }
    }
    & .title {
      margin-bottom: 43px;
    }
    & .text {
      margin-bottom: 75px;
      @media (max-width: 1024px) {
        text-align: center;
      }
    }
    &__btn {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 152.7%;
      margin-left: 44px;

      letter-spacing: 0.1em;
      text-decoration-line: underline;
      text-transform: uppercase;

      color: #B6E1FF;
      @media (max-width: 430px) {
        display: none;
      }
    }
    &__btn-wrapper {
      @media (max-width: 430px) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &__down {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .popular {
    padding-top: 60px;
    & > .container > .button {
        height: 15px;
        width: fit-content;
        display: block;
        margin: 0 auto;
        margin-top: 30px;
        background: linear-gradient(241.57deg, #37AEE2 2.93%, #1E96C8 103.57%);
        color: #fff;
      }
  }

  .category {
    padding-top: 60px;
  }

  .about-us {
    padding-top: 60px;
    position: relative;
    .title {
      margin-bottom: 45px;
      position: relative;
      z-index: 2;
    }
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 2;
      @media (max-width: 1024px) {
        justify-content: center;
        flex-direction: column;
        img {
          width: 300px;
        }
      }
    }
    .text {
      color: #141414!important;
    }
    &__text-container {
      margin-left: 62px;
      @media (max-width: 1024px) {
        margin-left: 0;
      }
    }
    &__clouds {
      position: absolute;
      top: 0%;
      z-index: 1;
      @media (max-width: 1024px) {
        width: 100%
      }
    }
  }

  .more {
    padding-top: 60px;
  }
</style>
