<template>
	<main class="bg-light d-flex justify-content-between flex-column m-0 p-0 h-100vh">
		<header class="d-flex bg-primary p-2">
			<Me></Me>
			<h1 class="mx-auto text-center py-2 text-dark">Verben Konjugieren</h1>
		</header>
		<router-view />
		<FooterVue>
		</FooterVue>
	</main>
</template>

<script>
import Me from "./components/Me.vue";
import FooterVue from "./components/Footer.vue";
export default {
	name: "App",
	components: { Me, FooterVue },
};
</script>

<style>
main {
	height: 100vh;
}
</style>
