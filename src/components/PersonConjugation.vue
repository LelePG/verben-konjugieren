<template>
	<li class="text-dark d-flex justify-content-between m-1 ">
		<label class="mr-2">{{ person }}</label>
		<input v-if="showAnswer" type="text" :name="person" :placeholder="answer" disabled :class="`border border-3 border-dark rounded-lg pl-1 w-auto ${usedClasses}`"/>
		<input v-else type="text" :name="person" @focus="changeInputWithFocus" v-model="userInput" :class="`border border-3 border-dark rounded-lg pl-1 w-auto ${usedClasses}`" />
	</li>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	props: ["person", "answer", "showAnswer", "usedClasses"],
	data: function() {
		return {
			userInput: "",
		};
	},
	methods: {
		...mapMutations(["setInputWithFocus"]),
		changeInputWithFocus: function() {
			const focusedInput = this.$el.querySelector(`input[type="text"]`);
			this.$store.commit("setInputWithFocus", focusedInput);
		},
	},
};
</script>


