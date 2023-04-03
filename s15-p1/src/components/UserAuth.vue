<template>
  <p>isAuthorized: {{ isAuthorized }}</p>
  <button @click="logIn" v-if="!isAuthorized">Log In</button>
  <button @click="logOut" v-else>Log Out</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isAuthorized']),
  },
  methods: {
    ...mapActions(['logIn', 'logOut']),
  },
};
</script>
