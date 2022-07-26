<template>
    <div id="form">
        <NavBar />

        <div class="breadcrumbs">
            <Crumbs title="Заявка"/>
        </div>

        <Title titleBlack='true'>Оставь заявку и твой канал попадет на биржу!</Title>



        <form class="form" method="POST" @submit="submitForm">
            <P>{{ result }}</P>

            <label for="tag">Ссылка на канал или @username</label>
            <input type="text" name="tag" id="tag" placeholder="@username или t.me/...">

            <label for="name">Название канала, которое будет отображаться на сайте</label>
            <input type="text" name="name" id="name" placeholder="Например: Telegram Новости">

            <label for="about">Расскажите немного о своем канале</label>
            <textarea name="about" id="about" cols="30" rows="10"></textarea>

            <button>Отправить канал</button>
        </form>

        <Footer />
    </div>
</template>

<style lang="scss">
    #form {
        padding-top: 100px
    }
    .breadcrumbs {
        display: flex;
        justify-content: center;
    }
    .form {
        display: flex;
        flex-direction: column;
        max-width: 550px;
        margin: 50px auto;
        padding: 0px 30px 35px;
        border-radius: 10px;
        -webkit-box-shadow: 0px 0px 35px -2px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 0px 35px -2px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 0px 35px -2px rgba(34, 60, 80, 0.2);
        .text {
            color: black
        }
        label {
            color: #7f8894;
            margin-bottom: 10px;
        }
        input, textarea {
            padding: 10px;
            color: #7f8894;
            border: #bfbfbf 1px solid;
            border-radius: 5px;
            margin-bottom: 20px
        }
        textarea {
            resize: none;
        }
        button {
            width: 259px;
            height: 40px;
            display: block;
            background: #FFFFFF;
            border: #195168 1px solid;
            border-radius: 10px;
            margin: 0 auto;

            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            letter-spacing: 0.1em;
            text-transform: uppercase;

            color: #195168;

            text-decoration: none;
        }
    }
</style>

<script>
export default {
    data () {
        return {
            SERVER_URL: process.env.serverUrl,
            result: null,
            headers: {'Content-Type': 'application/json', 'Authorization': process.env.auth}
        }
    },
    methods: {
        async submitForm(e) {
            e.preventDefault();

            const target = e.target;

            let formData = new FormData(target);

            let object = {};
            formData.forEach((value, key) => object[key] = value);
            object["link"] = "https://t.me/" + object["tag"];

            let jsonj = JSON.stringify({data: object});

            let response = await fetch(`${this.SERVER_URL}/api/telegrams`, {
                method: 'POST',
                headers: this.headers,
                body: jsonj
            }).then((e) => { this.result = 'Ваш канал успешно добавлен в список! Обычно канал появляется в списке спустя 10-15 минут.'},
            (e) => { this.result = 'К сожалению, ваш запрос не был выполнен из-за технической ошибки( Попытайтесь повторить попытку через некоторое время. Если ошибка также будет появляться - обратитесь в техническую поддержку' });

        }
    }
}
</script>

