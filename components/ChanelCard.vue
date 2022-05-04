<script>
export default {
    props: ['name', 'people', 'tag', 'subText', 'link', 'avatarUrl' ]
}
</script>

<template>
    <div class="chanel-card">
        <div class="chanel-card__header">
            <img src="~/assets/img/example-tg-logo.png" :alt="name">
            <div class="chanel-card__text-wrapper">
                <h3>{{ name }}</h3>
                <div class="chanel-card__text-container">
                    <p class="chanel-card__people">{{ people }}</p>
                    <p class="chanel-card__tag">{{ tag }}</p>
                </div>
            </div>
        </div>
        <div class="chanel-card__body">
            <p class="chanel-card__text">
                {{ subText }}
            </p>
            <MiniButton :link="link" class="chanel-card__link">Перейти 
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.919612 5.66154L9.85461 1.80292C10.7366 1.40098 13.7277 0.114768 13.7277 0.114768C13.7277 0.114768 15.1082 -0.447948 14.9932 0.918648C14.9548 1.48136 14.6481 3.45087 14.3413 5.58115L13.3826 11.8916C13.3826 11.8916 13.3059 12.8161 12.654 12.9768C12.0021 13.1376 10.9283 12.4141 10.7366 12.2534C10.5832 12.1328 7.86053 10.324 6.86349 9.43977C6.59506 9.19861 6.28828 8.71628 6.90184 8.15357C8.28236 6.82716 9.9313 5.17921 10.9283 4.13417C11.3885 3.65184 11.8487 2.52641 9.9313 3.893L4.52429 7.71143C4.52429 7.71143 3.91073 8.11337 2.7603 7.75163C1.60987 7.38988 0.267702 6.90755 0.267702 6.90755C0.267702 6.90755 -0.652641 6.30464 0.919612 5.66154Z" fill="#2BA0D2"/>
                </svg>
            </MiniButton>
        </div>
    </div>
</template>

<style lang="scss">
    .chanel-card {
        position: relative;
        width: 300px;
        height: 250px;
        padding: 22px 28px;
        padding-right: 45px;
        background: #FFFFFF;
        box-shadow: 0px 2px 98px rgba(227, 232, 238, 0.38);
        border-radius: 23px;
        &__header {
            display: flex;
            align-items: center;
        }
        &__text-wrapper {
            margin-left: 20px;
            h3 {
                margin: 0;
                
            }
        }
        &__text-container {
            display: flex;
            justify-content: space-between;
            p {
                margin-top: 8px;
                margin-bottom: 0;
            }
        }
        &__people {
            &::before {
                content: url('~/assets/img/icons/people.svg');
                margin-right: 7px;
            }
        }
        &__tag {
            color: #8294A5;
        }
        &__text {
            font-size: 16px;
            color: #141414;
            margin-bottom: 24px;
        }
        .button_mini {
            position: absolute;
            bottom: 20px;
        }
    }
</style>