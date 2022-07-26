<template>
	<div class="conjugations mx-2 my-3 p-3 text-dark rounded-lg border-primary border-with-width-lg custom-width">
		<div class="text-dark d-inline-flex w-100 justify-content-between align-items-center">
			<h5 class="m-0">{{ verb.name }} - {{ verb.translation }}</h5>
			<i class="far fa-lightbulb d-float float-right ml-1" @click="showAnswer = !showAnswer"></i>
		</div>
		<p v-if="error">{{ error }}</p>
		<ul v-else>
			<PersonConjugation person="ich" :answer="verbalPeople.ich.conjugation" :showAnswer="showAnswer"
				:correctConjugation="verifyAnswers" />
			<PersonConjugation person="du" :answer="verbalPeople.du.conjugation" :showAnswer="showAnswer"
				:correctConjugation="verifyAnswers" />
			<PersonConjugation person="er/sie/es" :answer="verbalPeople.es.conjugation" :showAnswer="showAnswer"
				:correctConjugation="verifyAnswers" />
			<PersonConjugation person="wir" :answer="verbalPeople.wir.conjugation" :showAnswer="showAnswer"
				:correctConjugation="verifyAnswers" />
			<PersonConjugation person="ihr" :answer="verbalPeople.ihr.conjugation" :showAnswer="showAnswer"
				:correctConjugation="verifyAnswers" />
			<PersonConjugation person="sie/Sie" :answer="verbalPeople.sie.conjugation" :showAnswer="showAnswer"
				:correctConjugation="verifyAnswers" />
		</ul>
		<b-button v-if="!error" class="bg-primary text-dark" block @click="verificaResposta"> Verificar
		</b-button>
	</div>
</template>

<script>
const GermanVerbsLib = require("german-verbs");
const GermanVerbsDict = require("german-verbs-dict/dist/verbs");
import { mapGetters } from "vuex";
import PersonConjugation from "./PersonConjugation.vue";

export default {
	props: ["verbalTense", "verb"],
	components: {
		PersonConjugation,
	},
	data: function () {
		return {
			verifyAnswers: false,
			showAnswer: false,
			error: "",
			verbalPeople: {
				ich: { person: 1, number: "S" },
				du: { person: 2, number: "S" },
				es: { person: 3, number: "S" },
				wir: { person: 1, number: "P" },
				ihr: { person: 2, number: "P" },
				sie: { person: 3, number: "P" },
			},
		};
	},
	computed: {
		...mapGetters(["getAuxVerb", "getCurrentVerbalTense"]),
		auxVerb: function () {
			return this.getAuxVerb
		},
	},
	watch: {
		'getCurrentVerbalTense': function () {
			this.showAnswer = false
			this.updateVerb()
		}
	},
	methods: {
		verificaResposta: function () {
			this.verifyAnswers = !this.verifyAnswers;
		},
		updateVerb: function () {
			try {
				for (let verbalPerson of Object.values(this.verbalPeople)) {
					const conjugationFromAPI = GermanVerbsLib.getConjugation(
						GermanVerbsDict,
						this.verb.name.trim(),
						this.verbalTense.trim(),
						verbalPerson.person,
						verbalPerson.number,
						this.auxVerb
					).join(" ");
					verbalPerson.conjugation = conjugationFromAPI;
				}
			} catch (e) {
				this.error = `Houve um problema com o verbo ${this.verb.name} e ele não pode ser conjugado.\nVerifique a digitação dele na tela inicial e tente novamente.`
				console.log(e)
			}
		},
	},
	created: function () {
		this.updateVerb();
	}
};
</script>

<style>
.border-with-width-lg {
	border: 4px solid;
}

.custom-width {
	width: auto;
	max-width: 300px;
}

ul {
	list-style-type: none;
}
</style>
