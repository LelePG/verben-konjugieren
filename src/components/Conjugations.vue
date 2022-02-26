<template>
	<div class="conjugacoes">
		<div class="titulo">
			<h3 id="tempoVerbal">{{ tempoVerbal }}</h3>
			<i class="far fa-lightbulb" @click="escondeResposta = !escondeResposta"></i>
		</div>
		<div v-if="true">
			<ul id="tentantivasUsuario">
				<PersonConjugation person="ich" :answer="resposta.ich" :showAnswer="!escondeResposta" :usedClasses="classesInput.ich" />
				<PersonConjugation person="du" :answer="resposta.du" :showAnswer="!escondeResposta" :usedClasses="classesInput.du" />
				<PersonConjugation person="er/sie/es" :answer="resposta.es" :showAnswer="!escondeResposta" :usedClasses="classesInput.es" />
				<PersonConjugation person="wir" :answer="resposta.wir" :showAnswer="!escondeResposta" :usedClasses="classesInput.wir" />
				<PersonConjugation person="ihr" :answer="resposta.ihr" :showAnswer="!escondeResposta" :usedClasses="classesInput.ihr" />
				<PersonConjugation person="sie/Sie" :answer="resposta.sieP" :showAnswer="!escondeResposta" :usedClasses="classesInput.sieP" />
			</ul>
			<v-btn color="#B7B7A4" block @click="verificaResposta"> Verificar </v-btn>
		</div>

		<div v-else>
			<p class="respostasMostrar" v-for="pessoa in Object.entries(this.resposta)" :key="pessoa[0]">{{ pessoa[0] }} - {{ pessoa[1] }}</p>
			<v-btn color="#B7B7A4" block @click="escondeResposta = true"> Voltar </v-btn>
		</div>
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
			verificar: false,
			entradasUsuario: {
				ich: "",
				du: "",
				er: "",
				es: "",
				sieS: "",
				wir: "",
				ihr: "",
				sieP: "",
				Sie: "",
			},
			classesInput: {
				ich: "",
				du: "",
				er: "",
				es: "",
				sieS: "",
				wir: "",
				ihr: "",
				sieP: "",
				Sie: "",
			},
			resposta: {},
			pontos: 0,
			escondeResposta: true,
			auxVerb: "",
		};
	},
	computed: {
		...mapGetters(["getAuxVerb"]),
	},
	beforeMount: function() {
		console.log("hug");
		this.auxVerb = this.getAuxVerb;
		try {
			(this.resposta.ich = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 1, "S", this.auxVerb).join(" ")),
				(this.resposta.du = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 2, "S", this.auxVerb).join(" ")),
				(this.resposta.er = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 3, "S", this.auxVerb).join(" ")),
				(this.resposta.es = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 3, "S", this.auxVerb).join(" ")),
				(this.resposta.sieS = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 3, "S", this.auxVerb).join(" ")),
				(this.resposta.wir = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 1, "P", this.auxVerb).join(" ")),
				(this.resposta.ihr = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 2, "P", this.auxVerb).join(" ")),
				(this.resposta.sieP = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 3, "P", this.auxVerb).join(" ")),
				(this.resposta.Sie = GermanVerbsLib.getConjugation(GermanVerbsDict, this.verbo, this.tempoVerbal, 3, "P", this.auxVerb).join(" "));
		} catch (e) {
			//document.location.reload(true);
			console.log("buig");
		}
	},
	methods: {
		...mapMutations(["setInputWithFocus", "setPontos"]),
		alteraInputFocus: function() {
			const inputFocado = this.$el.querySelector(`input[type="text"]:focus`);
			this.$store.commit("setInputWithFocus", inputFocado);
		},
		respostaJaTaCerta: function(nameDoInput) {
			return this.classesInput[nameDoInput] === "certo";
		},
		respostaCerta: function(resposta, pessoa) {
			return resposta.toLowerCase().trim() === this.resposta[pessoa].toLowerCase().trim();
		},
		verificaResposta: function() {
			this.verificar = true;
			this.$emit("verify-conjugations");
			console.log("emiti");
			let conjugacoes = Object.entries(this.entradasUsuario); //retorna um array
			for (let [pessoa, resposta] of conjugacoes) {
				if (this.respostaJaTaCerta(pessoa)) {
					continue;
				}

				if (this.respostaCerta(resposta, pessoa)) {
					const pontosDaResposta = this.classesInput[pessoa] ? 5 : 10;
					this.classesInput[pessoa] = "certo";
					this.$store.commit("setPontos", pontosDaResposta);
				} else {
					this.classesInput[pessoa] = "errado";
				}
			}
		},
	},
};
</script>

<style>
div.conjugacoes {
	margin: 10px;
	padding: 15px;
	border: 4px solid #6b705c;
	box-shadow: 2px 2px #030303b0;
	border-radius: 10px;
	min-width: 220px;
}

div.titulo {
	color: #4c4f40;
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

.certo {
	background-color: rgba(14, 250, 14, 0.555);
}

.errado {
	background-color: rgba(228, 59, 59, 0.808);
}
</style>
