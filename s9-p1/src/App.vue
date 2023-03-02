<template>
	<div>
		<TheHeader />
		<badge-list></badge-list>
		<user-info
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		></user-info>
		<CourseGoals #default="slotProps">
			<h2>{{ slotProps.goal }}</h2>
		</CourseGoals>
	</div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
	components: {
		TheHeader,
		BadgeList,
		UserInfo,
		CourseGoals,
	},
	data() {
		return {
			activeUser: {
				name: 'Rad',
				description: 'Site owner and admin',
				role: 'admin',
			},
		};
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
