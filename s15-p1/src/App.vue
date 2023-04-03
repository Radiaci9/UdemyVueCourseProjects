<template>
  <base-container title="Auth">
    <UserAuth />
  </base-container>
  <base-container title="Vuex" v-if="isAuthorized">
    <TheCounter />
    <FavoriteValue />
    <!-- <button @click="add">Add 7</button> -->
    <!-- <button @click="increase(7)">Add 7</button> -->
    <button @click="inc(7)">Add 7</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import { mapActions } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    isAuthorized() {
      return this.$store.state.isAuthorized;
    },
  },
  methods: {
    add() {
      this.$store.dispatch('counter/increase', 7);
      // this.$store.dispatch({
      //   type: 'increase',
      //   value: 7,
      // });
    },
    // ...mapActions(['increase']),
    ...mapActions('counter', {
      inc: 'increase',
    }),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
