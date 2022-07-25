<template>
    <footer class="d-flex align-items-center justify-content-center p-2 bg-dark text-light footer-height">
        <span>
            Feito com 🪄 por LelePG
        </span>
        <a href="https://github.com/LelePG/verben-konjugieren" className="mx-3" target="_blank" rel="noreferrer">
            <img class="ml-3 m-1 logo-footer" :src="image" />
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

<style>
.logo-footer {
    width: 25px;
}

.footer-height {
    max-height: 60px;
}
</style>