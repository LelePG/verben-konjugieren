<template>
	<div class="bg-light ">
		<div class="d-flex flex-column align-items-center text-dark pt-2">
			<h4 class="text-sm-center">O tempo é {{ getCurrentVerbalTense }}</h4>
			<h5>Pontos: {{ getPoints }}</h5>
		</div>
		<div class="p-0 m-auto d-flex justify-content-around flex-wrap">
			<Conjugations v-for="verb in verbs" :key="verb.name" :verb="verb" :verbalTense="verbalTenses[index]" />
		</div>
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
				<b-button class="bg-primary text-dark mx-2 my-1">Voltar</b-button>
			</router-link>
			<b-button v-if="index > 0" class="bg-primary text-dark mx-2 my-1" @click="decrementIndex">Anterior
			</b-button>
			<b-button v-if="index < getAvailableVerbalTenses" class="bg-primary text-dark mx-2 my-1"
				@click="incrementIndex">Próximo
			</b-button>
			<b-button class="bg-primary text-dark mx-2 my-3" @click="clearAnswers">Limpar</b-button>
		</div>
	</div>
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
		...mapGetters(["getPoints", "getVerbs", "getVerbalTenses", "getCurrentVerbalTense", "getVerbs", "getAvailableVerbalTenses", "getCurrentIndex"]),
		index: function () {
			return this.getCurrentIndex;
		}
	},
	data: function () {
		return {
			verbalTenses: [],
			verbs: [],
			currentVerbalTense: ""
		};
	},
	methods: {
		...mapMutations(["setCurrentIndex"]),
		incrementIndex: function () {
			this.$store.commit("setCurrentIndex", +1);
		},
		decrementIndex: function () {
			this.$store.commit("setCurrentIndex", -1);
		},
		clearAnswers: function () {
			this.decrementIndex();
			this.incrementIndex();
		}
	},
	created: function () {
		this.currentVerbalTense = this.getCurrentVerbalTense;
		this.verbs = this.getVerbs
		this.verbalTenses = this.getVerbalTenses
	},
	updated: function () {
		this.currentVerbalTense = this.getCurrentVerbalTense;
	}
};
</script>

<style>
a,
a:hover {
	text-decoration: none;
}
</style>
