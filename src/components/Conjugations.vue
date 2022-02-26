<template>
	<div class="conjugations m-2 p-3 text-dark rounded-lg border-primary border-with-width-lg">
		<div class="text-dark d-inline-flex w-100 justify-content-between align-items-center">
			<h3 class="m-0">{{ verbalTense }}</h3>
			<i class="far fa-lightbulb d-float float-right" @click="showAnswer = !showAnswer"></i>
		</div>
		<ul>
			<PersonConjugation person="ich" :answer="verbalPeople.ich.conjugation" :showAnswer="showAnswer" :correctConjugation="verify" />
			<PersonConjugation person="du" :answer="verbalPeople.du.conjugation" :showAnswer="showAnswer" :correctConjugation="verify" />
			<PersonConjugation person="er/sie/es" :answer="verbalPeople.es.conjugation" :showAnswer="showAnswer" :correctConjugation="verify" />
			<PersonConjugation person="wir" :answer="verbalPeople.wir.conjugation" :showAnswer="showAnswer" :correctConjugation="verify" />
			<PersonConjugation person="ihr" :answer="verbalPeople.ihr.conjugation" :showAnswer="showAnswer" :correctConjugation="verify" />
			<PersonConjugation person="sie/Sie" :answer="verbalPeople.sie.conjugation" :showAnswer="showAnswer" :correctConjugation="verify" />
		</ul>
		<v-btn color="#B7B7A4" block @click="verificaResposta"> Verificar </v-btn>
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
	data: function() {
		return {
			verify: false,
			showAnswer: false,
			auxVerb: "",
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
		...mapGetters(["getAuxVerb"]),
	},
	beforeMount: function() {
		this.auxVerb = this.getAuxVerb;
		try {
			for (let verbalPerson of Object.values(this.verbalPeople)) {
				const conjugationFromAPI = GermanVerbsLib.getConjugation(
					GermanVerbsDict,
					this.verb,
					this.verbalTense,
					verbalPerson.person,
					verbalPerson.number,
					this.auxVerb
				).join(" ");
				verbalPerson.conjugation = conjugationFromAPI;
			}
		} catch (e) {
			console.log(e);
		}
	},
	methods: {
		verificaResposta: function() {
			this.verify = !this.verify;
		},
	},
};
</script>

<style>
.border-with-width-lg {
	border: 4px solid;
}

ul {
	list-style-type: none;
}
</style>
