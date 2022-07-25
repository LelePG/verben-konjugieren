<template>
    <div>
        <img id="me" src="../assets/leticia.jpg">
        <figcaption>Desenho por <a target="_blank" href="https://www.instagram.com/rbmaya_art/">@rbmaya_art</a>
        </figcaption>


        <b-popover target="me" triggers="hover" placement="top">
            <p>Olá! Eu sou a Letícia, e este é o projeto Verben Konjugieren. Este projeto tem o intuito de ajudar na
                prática de conjugações de verbos em alemão, e você pode selecionar alguns sets de verbos e tempos
                verbais
                para praticar, ou inserir seus próprios verbos.
            </p>
            <p>Sentro da aplicação, você pode ver a resposta da conjugação dos verbos e verificar se o que você digitou
                está
                correto ou não.
            </p>
            <ul id="socials">
                <li v-for="link in links" :key="link.url">
                    <a :href="link.url" target="_blank">
                        <img class="logo" :src="link.image" />
                    </a>
                </li>
            </ul>
        </b-popover>

    </div>

</template>


<script>
export default {
    data: function () {
        return {
            links: [
                { image: require("../assets/logos/github.png"), url: "https://github.com/LelePG" },
                { image: require("../assets/logos/polywork.png"), url: "https://www.polywork.com/lelepg" },
                { image: require("../assets/logos/linkedin.png"), url: "https://www.linkedin.com/in/lelepg/ " }
            ]
        }
    }
}
</script>

<style>
#me {
    width: 100px;
    border-radius: 20%;
}
</style>