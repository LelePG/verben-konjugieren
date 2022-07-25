<template>
	<v-card class="bg-light pa-2">
		<div class="d-flex flex-column align-items-center text-dark pt-2">
			<h2>O verbo é {{ verb }} - {{ translation }}</h2>
			<h3>Pontos: {{ getPoints }}</h3>
		</div>
		<v-container>
			<v-row>
				<Conjugations v-for="verbalTense in verbalTenses" :key="verbalTense" :verbalTense="verbalTense" />
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
			<v-btn v-if="index > 0" class="bg-warning mx-2 my-1" @click="decrementIndex">Anterior</v-btn>
			<v-btn v-if="index < getAvailableVerbs" class="bg-warning mx-2 my-1" @click="incrementIndex">Próximo</v-btn>
			<a href="/play">
				<v-btn class="bg-warning mx-2 my-3">Recarregar</v-btn>
			</a>
		</div>
	</v-card>
</template>

<script>
import Conjugations from "./Conjugations.vue";
import { mapGetters, mapMutations } from "vuex";
import CharButton from "./CharButton.vue";

export default {
	components: {
		Conjugations,
		CharButton,
	},
	computed: {
		...mapGetters(["getPoints", "getVerbalTenses", "getCurrentVerb", "getAvailableVerbs", "getCurrentIndex"]),
		verb: function() {
			return this.getCurrentVerb?.name.trim();
		},
		translation: function() {
			return this.getCurrentVerb?.translation.trim();
		},
		index: function(){
			return this.getCurrentIndex;
		}
	},
	data: function() {
		return {
			verbalTenses: [],
			currentVerb:{},
		};
	},
	methods:{
		...mapMutations(["setCurrentIndex"]),
		incrementIndex: function(){
			this.$store.commit("setCurrentIndex", +1);
		},
		decrementIndex: function () {
			this.$store.commit("setCurrentIndex", -1);
		}
	},
	created: function() {
		this.currentVerb = this.getCurrentVerb;
		this.verbalTenses = this.getVerbalTenses;
	},
	updated: function(){
		this.currentVerb = this.getCurrentVerb;
	}
};
</script>

<style>
a,
a:hover {
	text-decoration: none;
}
</style>
