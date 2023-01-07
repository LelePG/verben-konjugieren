<template>
	<main class="bg-light d-flex justify-content-between flex-column m-0 p-0 h-100vh relative">
		<header class="d-flex flex-nowrap align-items-center bg-primary p-2">
			<Me></Me>
			<h1 class="text-center flex-grow-1 text-dark pr-5">Verben Konjugieren</h1>
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

h1 {
	width: 100vw;
	float: top;
}
</style>