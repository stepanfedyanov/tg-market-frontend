<script>
export default {
    props: ['link', 'background', 'icon']
}
</script>

<template>
    <a :href="link" class="button button_mini" :class="{background: background}">
        <slot></slot>
        <span v-if="icon">
            <svg width="15" v-if="icon === 'tg'" height="13" viewBox="0 0 15 13" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.919612 5.66154L9.85461 1.80292C10.7366 1.40098 13.7277 0.114768 13.7277 0.114768C13.7277 0.114768 15.1082 -0.447948 14.9932 0.918648C14.9548 1.48136 14.6481 3.45087 14.3413 5.58115L13.3826 11.8916C13.3826 11.8916 13.3059 12.8161 12.654 12.9768C12.0021 13.1376 10.9283 12.4141 10.7366 12.2534C10.5832 12.1328 7.86053 10.324 6.86349 9.43977C6.59506 9.19861 6.28828 8.71628 6.90184 8.15357C8.28236 6.82716 9.9313 5.17921 10.9283 4.13417C11.3885 3.65184 11.8487 2.52641 9.9313 3.893L4.52429 7.71143C4.52429 7.71143 3.91073 8.11337 2.7603 7.75163C1.60987 7.38988 0.267702 6.90755 0.267702 6.90755C0.267702 6.90755 -0.652641 6.30464 0.919612 5.66154Z"/>
            </svg>

            <svg width="14" v-if="icon === 'stat'" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.7 10H2.1C2.28565 10 2.4637 9.92817 2.59497 9.8003C2.72625 9.67243 2.8 9.49901 2.8 9.31818V0.681818C2.8 0.500989 2.72625 0.327566 2.59497 0.1997C2.4637 0.0718341 2.28565 0 2.1 0H0.7C0.514348 0 0.336301 0.0718341 0.205026 0.1997C0.0737505 0.327566 0 0.500989 0 0.681818V9.31818C0 9.49901 0.0737505 9.67243 0.205026 9.8003C0.336301 9.92817 0.514348 10 0.7 10ZM4.43333 10H5.83333C6.01898 10 6.19703 9.92817 6.32831 9.8003C6.45958 9.67243 6.53333 9.49901 6.53333 9.31818V2.95455C6.53333 2.77372 6.45958 2.60029 6.32831 2.47243C6.19703 2.34456 6.01898 2.27273 5.83333 2.27273H4.43333C4.24768 2.27273 4.06963 2.34456 3.93836 2.47243C3.80708 2.60029 3.73333 2.77372 3.73333 2.95455V9.31818C3.73333 9.49901 3.80708 9.67243 3.93836 9.8003C4.06963 9.92817 4.24768 10 4.43333 10ZM8.16667 10H9.56667C9.75232 10 9.93037 9.92817 10.0616 9.8003C10.1929 9.67243 10.2667 9.49901 10.2667 9.31818V4.77273C10.2667 4.5919 10.1929 4.41847 10.0616 4.29061C9.93037 4.16274 9.75232 4.09091 9.56667 4.09091H8.16667C7.98102 4.09091 7.80297 4.16274 7.67169 4.29061C7.54042 4.41847 7.46667 4.5919 7.46667 4.77273V9.31818C7.46667 9.49901 7.54042 9.67243 7.67169 9.8003C7.80297 9.92817 7.98102 10 8.16667 10ZM11.9 10H13.3C13.4857 10 13.6637 9.92817 13.795 9.8003C13.9263 9.67243 14 9.49901 14 9.31818V6.59091C14 6.41008 13.9263 6.23666 13.795 6.10879C13.6637 5.98093 13.4857 5.90909 13.3 5.90909H11.9C11.7143 5.90909 11.5363 5.98093 11.405 6.10879C11.2737 6.23666 11.2 6.41008 11.2 6.59091V9.31818C11.2 9.49901 11.2737 9.67243 11.405 9.8003C11.5363 9.92817 11.7143 10 11.9 10Z"/>
            </svg>

        </span>
    </a>
</template>

<style lang="scss">
    .button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: #FFFFFF;
        border-radius: 10px;

        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        letter-spacing: 0.1em;
        text-transform: uppercase;

        color: #195168;

        padding: 19px 37px;
        text-decoration: none;
        @media (max-width: 425px) {
            padding: 19px 15px;
        }
        &_mini {
            width: 146px;
            height: 24px!important;
            display: flex;
            align-items: center;
            justify-content: center;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #2BA0D2;
            padding: 15px 25px;
            transition: 0.3s all;
            border: 1px solid transparent;
            svg {
                margin-left: 10px;
            }
            &:hover {
                border: 1px solid #2BA0D2;
            }

        }
        &.background {
            background: #ECECEC;
            color: #000;
            fill: #000;
            margin-right: 15px;
            &:hover {
                color: #fff;
                fill: #fff;
                border: 1px solid transparent;
                background: linear-gradient(235.09deg, #37AEE2 4.64%, #1E96C8 100%);
            }
        }

    }
</style>
