<template>
	<main class="bg-dark">
		<header>
			<Me></Me>
			<h1 class="mx-auto text-center py-3 text-light bg-primary">Verben Konjugieren</h1>
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
