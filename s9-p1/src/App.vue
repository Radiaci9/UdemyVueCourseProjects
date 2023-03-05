<template>
	<div>
		<TheHeader />
		<button @click="setSelectedComponents('ActiveGoals')">Active Goals</button>
		<button @click="setSelectedComponents('ManageGoals')">Manage Goals</button>
		<KeepAlive>
			<component :is="selectedComponent"></component>
		</KeepAlive>
		<!-- <component :is="selectedComponent"></component> -->
	</div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
	components: {
		TheHeader,
		ActiveGoals,
		ManageGoals,
	},
	data() {
		return {
			selectedComponent: 'ActiveGoals',
			activeUser: {
				name: 'Rad',
				description: 'Site owner and admin',
				role: 'admin',
			},
		};
	},
	methods: {
		setSelectedComponents(comp) {
			this.selectedComponent = comp;
		},
	},
};
</script>

<style>
html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>
