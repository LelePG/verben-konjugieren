<template>
	<div class="conjugations m-2 p-3 text-dark rounded-lg border-primary border-with-width-lg custom-width">
		<div class="text-dark d-inline-flex w-100 justify-content-between align-items-center">
			<h5 class="m-0">{{ verbalTense }}</h5>
			<i class="far fa-lightbulb d-float float-right ml-1" @click="showAnswer = !showAnswer"></i>
		</div>
		<ul>
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
		<v-btn color="#B7B7A4" block @click="verificaResposta"> Verificar </v-btn>
	</div>
</template>

<script>
const GermanVerbsLib = require("german-verbs");
const GermanVerbsDict = require("german-verbs-dict/dist/verbs");
import { mapGetters } from "vuex";
import PersonConjugation from "./PersonConjugation.vue";

export default {
	props: ["verbalTense"],
	components: {
		PersonConjugation,
	},
	data: function() {
		return {
			verifyAnswers: false,
			showAnswer: false,
			auxVerb: this.getAuxVerb,
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
		...mapGetters(["getAuxVerb", "getCurrentVerb"]),
		verb: function(){
			let verb = this.getCurrentVerb.name
			return verb;
		},
	},
	watch:{
		'getCurrentVerb': function(){
			this.showAnswer=false
			this.updateVerb()
		}
	},
	methods: {
		verificaResposta: function() {
			this.verifyAnswers = !this.verifyAnswers;
		},
		updateVerb: function() {
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
	},
	created: function() {
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
}

ul {
	list-style-type: none;
}
</style>
