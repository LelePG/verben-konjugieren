<template>
	<li class="text-dark d-flex justify-content-between m-1 w-100">
		<label class="mr-2">{{ person }}</label>
		<input v-if="showAnswer" type="text" :name="person" :placeholder="answer" disabled :class="inputClasses" />
		<input v-else type="text" :name="person" @focus="changeInputWithFocus" v-model="userInput"
			:class="inputClasses" />
	</li>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
	props: ["person", "answer", "showAnswer", "correctConjugation"],
	data: function () {
		return {
			userInput: "",
			inputClasses: "border-with-width-sm border-3 border-primary rounded-lg pl-1 custom-width-input",
		};
	},
	computed: {
		...mapGetters(["getCurrentVerbalTense"]),
		classes: {
			get() {
				return this.inputClasses;
			},
			set(newValue) {
				this.inputClasses = newValue;
			},
		},
	},
	watch: {
		correctConjugation: function () {
			const isAlreadyCorrect = this.classes.includes(" correct");
			const isAlreadyWrong = this.classes.includes(" wrong");
			if (isAlreadyCorrect) {
				return;
			}
			let score = 0;
			if (this.conjugationIsCorrect()) {
				if (isAlreadyWrong) {
					score = 2;
					this.classes = this.classes.replace("wrong", "correct");
				} else {
					score = 5;
					this.classes = this.classes.concat(" correct");
				}
			} else {
				if (!isAlreadyWrong) {
					this.classes = this.classes.concat(" wrong");
				}
			}
			this.$store.commit("addPoints", score);
		},
		'getCurrentVerbalTense': function () {
			this.userInput = ""
			this.classes = this.classes.replace("wrong", "").replace("correct", "");
		}
	},
	methods: {
		...mapMutations(["setInputWithFocus, addPoints"]),
		changeInputWithFocus: function () {
			const focusedInput = this.$el.querySelector(`input[type="text"]`);
			this.$store.commit("setInputWithFocus", focusedInput);
		},
		conjugationIsCorrect() {
			return this.userInput.toLowerCase().trim() === this.answer.toLowerCase().trim();
		},
	},
}
</script>

<style>
.border-with-width-sm {
	border: 2px solid;
}

.custom-width-input {
	width: 160px;
}

.correct {
	background-color: rgba(135, 253, 135, 0.555);
}

.wrong {
	background-color: rgba(224, 127, 127, 0.808);
}
</style>
