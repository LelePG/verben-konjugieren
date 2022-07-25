<template>
	<div class="bg-light pb-5 d-flex flex-column align-items-center text-dark">
		<h4 class="pt-4 pb-3 text-center font-weight-bolder">
			Selecione os tempos verbais que você quer praticar e clique em iniciar!
		</h4>
		<b-form class="pa-2 d-flex justify-content-around w-100">
			<b-form-group>
				<h4>Indicativ</h4>
				<b-form-checkbox v-for="tense in indicativ" v-model="verbalTenses" :value="tense.value"
					:key="tense.text">{{ tense.text }}</b-form-checkbox>
			</b-form-group>

			<b-form-group>
				<h4>Konjunktiv1</h4>
				<b-form-checkbox v-for="tense in konjunktiv1" v-model="verbalTenses" :value="tense.value"
					:key="tense.text">{{ tense.text }}</b-form-checkbox>
			</b-form-group>

			<b-form-group>
				<h4>Konjunktiv2</h4>
				<b-form-checkbox v-for="tense in konjunktiv2" v-model="verbalTenses" :value="tense.value"
					:key="tense.text">{{ tense.text }}</b-form-checkbox>
			</b-form-group>

			<b-form-group>
				<h4>Verbo auxiliar</h4>
				<b-form-radio v-model="auxVerb" label="Sein" value="SEIN"> Sein </b-form-radio>
				<b-form-radio v-model="auxVerb" label="Haben" value="HABEN"> Haben </b-form-radio>
			</b-form-group>
		</b-form>

		<h3>Selecione um set de verbos</h3>
		<b-form-group label="Selecione o tipo">
			<b-form-radio v-model="verbsToBeUsed" value="default">Selecionar sets padrão
			</b-form-radio>
			<b-form-radio v-model="verbsToBeUsed" value="custom">Quero usar meus verbos
			</b-form-radio>
		</b-form-group>
		<b-form-select v-if="verbsToBeUsed === 'default'" v-model="verbalSet" :options="verbalSetsWithNames"
			class="w-75" placeholder="Selecione um set de verbos">
		</b-form-select>
		<b-form-input v-if="verbsToBeUsed === 'custom'" v-model="customSet"
			placeholder="Digite verbos separados por vírgula"></b-form-input>
		<router-link to="/play" event="" @click.native="loadInfo()" class="w-75 mt-3">
			<b-button class="bg-secondary w-100" v-b-hover="">Iniciar </b-button>
		</router-link>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
import sets from "../assets/sets.js";
export default {
	data: function () {
		return {
			verbalTenses: [],
			verbalSetsWithNames: sets.map((arr) => arr.map((element) => element.name)),
			verbalSet: [],
			indicativ: [
				{ value: "PRASENS", text: "Prasens" },
				{ value: "PRATERITUM", text: "Prateritum" },
				{ value: "FUTUR1", text: "Futur1" },
				{ value: "FUTUR2", text: "Futur2" },
				{ value: "PERFEKT", text: "Perfekt" },
				{ value: "PLUSQUAMPERFEKT", text: "Plusquamperferkt" },
			],
			konjunktiv1: [
				{ value: "KONJUNKTIV1_PRASENS", text: "Prasens" },
				{ value: "KONJUNKTIV1_FUTUR1", text: "Futur1" },
				{ value: "KONJUNKTIV1_PERFEKT", text: "Perfekt" },
			],
			konjunktiv2: [
				{ value: "KONJUNKTIV2_PRATERITUM", text: "Prateritum" },
				{ value: "KONJUNKTIV2_FUTUR1", text: "Futur1" },
				{ value: "KONJUNKTIV2_FUTUR2", text: "Futur2" },
			],
			auxVerb: "SEIN",
			verbsToBeUsed: "default",
			customSet: "",
		};
	},
	methods: {
		...mapMutations[("setVerbalTenses", "setAuxVerb", "setVerbs", "clearCurrentIndex", "clearPoints")],
		loadInfo: async function () {
			if (!this.verbalTenses.length) {
				window.alert("Você precisa selecionar pelo menos um tempo.");
				return;
			} else if (this.verbalTenses.length > 5) {
				window.alert("Você selecionou tempos demais.\nSelecione até 5 tempos.");
				return;
			} else if (!this.verbalSet) {
				window.alert("Selecione um set de verbos");
				return;
			}
			const index = this.verbalSetsWithNames.indexOf(this.verbalSet);
			let selectedSet

			if (this.verbsToBeUsed === "default") {
				selectedSet = sets[index];
			} else {
				selectedSet = this.customSet.split(",").map((element) => {
					return { name: element, translation: "" }
				})
			}
			await this.$store.commit("setVerbalTenses", this.verbalTenses);
			await this.$store.commit("setAuxVerb", this.auxVerb);
			await this.$store.commit("setVerbs", selectedSet);
			await this.$store.commit("clearCurrentIndex");
			await this.$store.commit("clearPoints");
			this.$router.push("/play");
		},
	},
};
</script>
