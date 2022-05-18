<template>
    <div class="chanel">
        <NavBar />

        <div class="breadcrumbs">
            <Crumbs />
        </div>

        <section class="info">
            <div class="container-mini">
                <div class="info__wrapper">
                    <div class="info__image">
                        <img src="~/assets/img/example-tg-logo.png" alt="Пример канала">
                        <div class="info__stat">
                            <h4 class="info__text">Статистика:</h4>
                            <div class="info__cloud-wrap">
                                <MiniInfo background="gray" icon="view">6428</MiniInfo>
                                <MiniInfo background="gray" icon="repost">314</MiniInfo>
                            </div>
                        </div>
                    </div>
                    <div class="info__info">
                        <div class="info__cloud-wrap">
                            <MiniInfo icon="people">1 545 943</MiniInfo>
                            <MiniInfo icon="people">Новости и СМИ</MiniInfo>
                        </div>
                        <h1 class="h1">ТОПОР (Горячие новости)</h1>

                        <MiniInfo background="red" icon="tg">topor.telegr</MiniInfo>

                        <div class="info__text">
                            Официальный канал украинского интернет-СМИ mash
                            (мэш). Новости Украины и не только. Канал украинского
                            интернет-СМИ mash (мэш)
                            <br><br>
                            Новости Украины и не только.
                            Для связи: <a href="#">@markgang</a>
                        </div>

                        <div class="info__btn-wrap">
                            <MiniButton background="true" icon="tg">Перейти</MiniButton>
                            <MiniButton background="true" icon="stat" link="#stat">Статистика</MiniButton>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section class="graph" id="stat">
            <div class="container">
                <Title titleBlack="true" num="01">Статистика</Title>

                <Tabs>
                    <div class="tabs__window">
                        1
                    </div>
                    <div class="tabs__window">2</div>
                    <div class="tabs__window">3</div>
                    <div class="tabs__window tabs__window_active">4</div>
                </Tabs>
            </div>
        </section>

        <section class="popular">
      <div class="container">
        <Title titleBlack='true' num="02">Похожие каналы</Title>

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
    .chanel {
        padding-top: 100px;
    }
    .breadcrumbs {
        display: flex;
        justify-content: center;
    }
    .info {
        padding-top: 60px;
        &__wrapper {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            position: relative;
            &::before {
                content: url('~/assets/img/clouds.svg');
                position: absolute;
                left: -50px;
                z-index: -1
            }
        }
        &__info {
            max-width: 434px;
            .info__text {
                margin-top: 45px;
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
            align-items: center
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
        }
    }
</style>
