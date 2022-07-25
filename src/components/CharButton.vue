<template>
	<button class="bg-primary text-dark py-1 px-3 rounded-lg mx-1 my-1" @click="insertCaracter()">{{ this.char
	}}</button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	props: ["char"],
	computed: {
		...mapGetters(["getInputWithFocus"]),
	},
	methods: {
		insertCaracter: function () {
			const inputWithFocus = this.getInputWithFocus;
			inputWithFocus.value += this.char;
			inputWithFocus.focus();
		},
	},
};
</script>
