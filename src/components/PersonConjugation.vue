<template>
	<li>
		<span class="person">{{ person }}</span>
		<span v-if="showAnswer === true">{{ answer }}</span>
		<input v-else type="text" :name="person" @focus="changeInputWithFocus" v-model="userInput" :class="usedClasses" />
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

<style css-scoped>
input[type="text"] {
	border: 2px solid #6b705c;
	border-radius: 5px;
	width: 140px;
}

li {
	display: flex;
	justify-content: space-around;
	margin: 4px;
}

li span {
	width: 30px;
}
</style>
