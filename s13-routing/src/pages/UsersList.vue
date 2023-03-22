<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save data</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false,
    };
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(_, _1, next) {
    console.log('UsersList beforeRouteEnter');
    next();
  },
  beforeRouteLeave(_, _1, next) {
    if (!this.changesSaved) {
      const userWantLeavePage = confirm('Data not saved! Are you sure?');
      next(userWantLeavePage);
    }
    next();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
