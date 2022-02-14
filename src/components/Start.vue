<template>
	<div class="bg-light pb-5 d-flex flex-column align-items-center">
		<h4 class="pt-4 pb-3 text-dark text-center font-weight-bolder">
			Selecione os tempos verbais que você quer praticar e clique em iniciar!
		</h4>
		<b-form class="pa-2 d-flex justify-content-around w-100">
			<b-form-group>
				<h4 class="text-dark">Indicativ</h4>
				<b-form-checkbox v-for="tense in indicativ" class="text-dark" v-model="verbalTenses" :value="tense.value" :key="tense.text">{{
					tense.text
				}}</b-form-checkbox>
			</b-form-group>

			<b-form-group>
				<h4 class="text-dark">Konjunktiv1</h4>
				<b-form-checkbox v-for="tense in konjunktiv1" class="text-dark" v-model="verbalTenses" :value="tense.value" :key="tense.text">{{
					tense.text
				}}</b-form-checkbox>
			</b-form-group>

			<b-form-group>
				<h4 class="text-dark">Konjunktiv2</h4>
				<b-form-checkbox v-for="tense in konjunktiv2" class="text-dark" v-model="verbalTenses" :value="tense.value" :key="tense.text">{{
					tense.text
				}}</b-form-checkbox>
			</b-form-group>

			<b-form-group>
				<h4 class="text-dark">Verbo auxiliar</h4>
				<b-form-radio v-model="auxVerb" label="Sein" value="SEIN" class="text-dark"> Sein </b-form-radio>
				<b-form-radio v-model="auxVerb" label="Haben" value="HABEN" class="text-dark"> Haben </b-form-radio>
			</b-form-group>
		</b-form>

		<router-link to="/play" event="" @click.native="loadInfo()" class="w-75 mt-3" >
			<b-button class="bg-secondary w-100" v-b-hover="" >Iniciar </b-button>
		</router-link>
	</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	data: function() {
		return {
			verbalTenses: [],
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
		};
	},
	methods: {
		...mapMutations[("setVerbalTenses", "setAuxVerb")],
		loadInfo: async function() {
			if (!this.verbalTenses.length) {
				window.alert("Você precisa selecionar pelo menos um tempo.");
				return;
			} else if (this.verbalTenses.length > 5) {
				window.alert("Você selecionou tempos demais.\nSelecione até 5 tempos.");
				return;
			}

			await this.$store.commit("setVerbalTenses", this.verbalTenses);
			await this.$store.commit("setAuxVerb", this.auxVerb);
			this.$router.push("/play");
		},
	},
};
</script>
