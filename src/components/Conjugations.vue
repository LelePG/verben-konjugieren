<template>
	<div class="conjugations  text-dark">
		<div class="text-dark d-flex">
			<h3>{{ tempoVerbal }}</h3>
			<i class="far fa-lightbulb" @click="showAnswer = !showAnswer"></i>
		</div>
		<ul id="tentantivasUsuario">
			<!-- <PersonConjugation person="ich" answer="ho" showAnswer="showAnswer" correctConjugation="verify" /> -->
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
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import PersonConjugation from "./PersonConjugation.vue";

export default {
	props: ["tempoVerbal", "verbo"],
	components: {
		PersonConjugation,
	},
	data: function() {
		return {
			verify: false,
			resposta: {},
			pontos: 0,
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
					this.verbo,
					this.tempoVerbal,
					verbalPerson.person,
					verbalPerson.number,
					this.auxVerb
				).join(" ");
				verbalPerson.conjugation = conjugationFromAPI;
			}
			console.log(this.verbalPeople);
		} catch (e) {
			console.log(e);
		}
	},
	methods: {
		...mapMutations(["setInputWithFocus", "setPontos"]),

		verificaResposta: function() {
			this.verify = !this.verify;
		},
	},
};
</script>

<style>
div.conjugations {
	margin: 10px;
	padding: 15px;
	border: 4px solid #6b705c;
	box-shadow: 2px 2px #030303b0;
	border-radius: 10px;
	min-width: 220px;
}

h3#tempoVerbal {
	display: inline;
	text-align: center;
	margin-right: 10px;
}

div.titulo i {
	float: right;
	text-align: left;
}

ul#tentantivasUsuario {
	list-style-type: none;
	margin-bottom: 10px;
}

p.respostasMostrar {
	color: #6b705c;
	text-align: center;
	margin-top: 8px;
	margin-bottom: 7px;
}
</style>
