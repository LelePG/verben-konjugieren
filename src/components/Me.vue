<template>
    <div id="my-info" class="d-flex flex-column justify-content-center">
        <img id="me" src="../assets/leticia.jpg">
        <div class="popover-info hidden">
            <h2 class="text-center">Hallo!!</h2>
            <p class="text-justify flex-grow-1">Olá! Eu sou a Letícia, e este é o projeto Verben Konjugieren. Este
                projeto tem o
                intuito de ajudar na
                prática de conjugações de verbos em alemão, e você pode selecionar alguns sets de verbos e tempos
                verbais
                para praticar, ou inserir seus próprios verbos.
            </p>
            <p class="text-justify">Dentro da aplicação, você pode ver a resposta da conjugação dos verbos e
                verificar
                se o que você digitou
                está
                correto ou não.
            </p>
            <p class="text-justify">O projeto é open source então sinta-se a vontade para contribuir com ele. O
                repositório pode ser acessado clicando no ícone do Github no rodapé da página.
            </p>
            <hr>
            <h5 class="text-sm-center ">Redes Sociais</h5>
            <ul id="socials" class="d-flex justify-content-center">
                <li v-for="link in links" :key="link.url" class="mx-2">
                    <a :href="link.url" target="_blank">
                        <img class="logo" :src="link.image" />
                    </a>
                </li>
            </ul>
            <hr />
            <span>Desenho por <a target="_blank" href="https://www.instagram.com/rbmaya_art/">@rbmaya_art</a>
            </span>
        </div>
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

<style scoped>
div#my-info {
    font-size: 0.8rem;
    text-align: left;
    position: relative;
}

#me {
    width: 70px;
    border-radius: 20%;
    margin-left: 20px;
}

#me:hover+.popover-info,
.popover-info:hover {
    display: block;
    position: absolute;
    z-index: 10;
    top: 72px;
    left: 30px;
}

.popover-info {
    background-color: #cebcb0;
    padding: 10px 15px;
    color: #3c271f;
    border-radius: 10px;
    min-width: 250px;
}

.hidden {
    display: none;
}

.logo {
    width: 20px;
}
</style>