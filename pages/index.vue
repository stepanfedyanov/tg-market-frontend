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
    border-bottom-right-radius: 70px;
    border-bottom-left-radius: 70px;
    &__container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &__text {
      max-width: 527px;
      padding-top: 55px
    }
    & .title {
      margin-bottom: 43px;
    }
    & .text {
      margin-bottom: 75px;
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
</style>
