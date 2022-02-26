<template>
	<v-card class="bg-light pa-2">
		<div class="d-flex flex-column align-items-center text-dark pt-2">
			<h2>O verbo é {{ verb }} - {{ translation }}</h2>
			<h3>Pontos: {{ getPoints }}</h3>
		</div>
		<v-container>
			<v-row>
				<Conjugations v-for="verbalTense in verbalTenses" :key="verbalTense" :verbalTense="verbalTense" :verb="verb" />
			</v-row>
		</v-container>
		<div class="text-center">
			<CharButton char="ß" />
			<CharButton char="ä" />
			<CharButton char="ö" />
			<CharButton char="ü" />
			<CharButton char="Ä" />
			<CharButton char="Ö" />
			<CharButton char="Ü" />
		</div>

		<div class="text-center">
			<router-link to="/">
				<v-btn class="bg-warning mx-2 my-1">Voltar</v-btn>
			</router-link>

			<a href="/play">
				<v-btn class="bg-warning mx-2 my-3">Recarregar</v-btn>
			</a>
		</div>
	</v-card>
</template>

<script>
import Conjugations from "./Conjugations.vue";
import file from "raw-loader!../assets/listaVerbos1.txt";
import { mapGetters } from "vuex";
import CharButton from "./CharButton.vue";

export default {
	components: {
		Conjugations,
		CharButton,
	},
	computed: {
		...mapGetters(["getPoints", "getVerbalTenses"]),
	},
	data: function() {
		return {
			verb: "brauchen",
			translation: "procurar",
			verbalTenses: [],
		};
	},
	created: function() { //Todo: modificar esta função
		const texto = file.toString().split("\n");
		const indiceAleatorio = Math.trunc(Math.random() * texto.length);
		const verboEtraducao = texto[indiceAleatorio].split(":");
		this.verb = verboEtraducao[0].trim();
		this.translation = verboEtraducao[1].trim();
		this.verbalTenses = this.getVerbalTenses;
	},
};
</script>

<style>
a,
a:hover {
	text-decoration: none;
}
</style>
