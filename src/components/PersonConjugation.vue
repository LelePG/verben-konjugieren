<template>
	<li class="text-dark d-flex justify-content-between m-1 ">
		<label class="mr-2">{{ person }}</label>
		<input v-if="showAnswer" type="text" :name="person" :placeholder="answer" disabled :class="inputClasses" />
		<input v-else type="text" :name="person" @focus="changeInputWithFocus" v-model="userInput" :class="inputClasses" />
	</li>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	props: ["person", "answer", "showAnswer", "correctConjugation"],
	data: function() {
		return {
			userInput: "",
			inputClasses: "border border-3 border-dark rounded-lg pl-1 w-auto",
		};
	},
	computed: {
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
		correctConjugation: function() {
			if (this.conjugationIsCorrect()) {
				this.classes = this.classes.includes(" wrong") ? this.classes.replace(" wrong", " correct") : this.classes.concat(" correct");
			} else {
				this.classes = this.classes.includes(" correct") ? this.classes.replace(" correct", " wrong") : this.classes.concat(" wrong");
			}
		},
	},
	methods: {
		...mapMutations(["setInputWithFocus"]),
		changeInputWithFocus: function() {
			const focusedInput = this.$el.querySelector(`input[type="text"]`);
			this.$store.commit("setInputWithFocus", focusedInput);
		},
		conjugationIsCorrect() {
			return this.userInput.toLowerCase().trim() === this.answer.toLowerCase().trim();
		},
	},
};
</script>

<style>
.correct {
	background-color: rgba(135, 253, 135, 0.555);
}

.wrong {
	background-color: rgba(224, 127, 127, 0.808);
}
</style>
