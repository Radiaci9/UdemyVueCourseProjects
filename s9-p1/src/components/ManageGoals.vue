<template>
	<div>
		<h2>Manage goals</h2>
		<input type="text" ref="goal" />
		<button @click="saveGoal">Set Goal</button>
		<Teleport to="body">
			<ErrorAlert v-if="inputIsInvalid">
				<h2>Input is invalid</h2>
				<p>Please enter a value</p>
				<button @click="confirmError">OK</button>
			</ErrorAlert>
		</Teleport>
	</div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
	components: {
		ErrorAlert,
	},
	data() {
		return {
			inputIsInvalid: false,
		};
	},
	methods: {
		saveGoal() {
			const enteredValue = this.$refs.goal.value;

			this.inputIsInvalid = !enteredValue;
		},
		confirmError() {
			this.inputIsInvalid = false;
		},
	},
};
</script>
