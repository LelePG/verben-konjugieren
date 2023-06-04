<template>
	<div class="bg-light mb-auto">
		<div class="d-flex flex-column align-items-center text-dark pt-2">
			<h4 class="text-sm-center">O tempo é {{ currentVerbalTense.text }}</h4>
			<h5>Pontos: {{ getPoints }}</h5>
		</div>
		<div class="p-0 m-auto d-flex justify-content-around flex-wrap">
			<Conjugations v-for="verb in verbs" :key="verb.name" :verb="verb" :verbalTense="currentVerbalTense.value"
				:verifyAnswers="verifyAnswers" />
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
			<b-button class="bg-primary text-dark" @click="verifyAnswers = !verifyAnswers"> Verificar
			</b-button>
			<b-button v-if="index > 0" class="bg-primary text-dark mx-2 my-1" @click="decrementIndex">Anterior
			</b-button>
			<b-button v-if="index < getAvailableVerbalTenses" class="bg-primary text-dark mx-2 my-1"
				@click="incrementIndex">Próximo
			</b-button>
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
			currentVerbalTense: {},
			verifyAnswers: false
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
