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
              <Button>Перейти в каталог</Button>
              <a href="#" class="promo__btn">Еще кнопка</a>
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

    <section class="popular">
      <div class="container">
        <Title titleBlack='true' num="01">Сейчас популярно</Title>

        <ChanelContainer>
          <ChanelCard 
          name="ТОПОР (Горячие новости)" 
          people="545 943"
          tag="@topor.telegr"
          subText="Официальный канал украинского
интернет-СМИ mash (мэш). Новости
Украины и не только..."
          link="https://yandex.ru"></ChanelCard>
          <ChanelCard 
          name="ТОПОР (Горячие новости)" 
          people="545 943"
          tag="@topor.telegr"
          subText="Официальный канал украинского
интернет-СМИ mash (мэш). Новости
Украины и не только..."
          link="https://yandex.ru"></ChanelCard>
          <ChanelCard 
          name="ТОПОР (Горячие новости)" 
          people="545 943"
          tag="@topor.telegr"
          subText="Официальный канал украинского
интернет-СМИ mash (мэш). Новости
Украины и не только..."
          link="https://yandex.ru"></ChanelCard>
        </ChanelContainer>
      </div>
    </section>

    <section class="category">
      <div class="container">
        <Title titleBlack='true' num="02">Выбрать категорию</Title>

        <ChanelContainer>
          <CategoryBtn>Новости и СМИ</CategoryBtn>
          <CategoryBtn>Блоги</CategoryBtn>
          <CategoryBtn>Новости и СМИ</CategoryBtn>
          <CategoryBtn>Блоги</CategoryBtn>
          <CategoryBtn>Новости и СМИ</CategoryBtn>
        </ChanelContainer>

        <ChanelContainer>
          <ChanelCard 
          name="ТОПОР (Горячие новости)" 
          people="545 943"
          tag="@topor.telegr"
          subText="Официальный канал украинского
интернет-СМИ mash (мэш). Новости
Украины и не только..."
          link="https://yandex.ru"></ChanelCard>
          <ChanelCard 
          name="ТОПОР (Горячие новости)" 
          people="545 943"
          tag="@topor.telegr"
          subText="Официальный канал украинского
интернет-СМИ mash (мэш). Новости
Украины и не только..."
          link="https://yandex.ru"></ChanelCard>
          <ChanelCard 
          name="ТОПОР (Горячие новости)" 
          people="545 943"
          tag="@topor.telegr"
          subText="Официальный канал украинского
интернет-СМИ mash (мэш). Новости
Украины и не только..."
          link="https://yandex.ru"></ChanelCard>
          <ChanelCard 
          name="ТОПОР (Горячие новости)" 
          people="545 943"
          tag="@topor.telegr"
          subText="Официальный канал украинского
интернет-СМИ mash (мэш). Новости
Украины и не только..."
          link="https://yandex.ru"></ChanelCard>
          <ChanelCard 
          name="ТОПОР (Горячие новости)" 
          people="545 943"
          tag="@topor.telegr"
          subText="Официальный канал украинского
интернет-СМИ mash (мэш). Новости
Украины и не только..."
          link="https://yandex.ru"></ChanelCard>
        </ChanelContainer>

        <Button>Больше каналов</Button>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
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
    
  }

  .category {
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
</style>
