<template>
    <footer>
        <span>
            Feito com 🪄 por LelePG
        </span>
        <a href="https://github.com/LelePG/verben-konjugieren" className="mx-3" target="_blank" rel="noreferrer">
            <img class="logo" :src="image" />
        </a>
    </footer>
</template>

<script>
export default {
    data: function () {
        return {
            image: require("../assets/logos/github.png")
        }
    }
}

</script>