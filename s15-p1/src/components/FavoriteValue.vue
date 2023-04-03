<template>
  <h3>{{ counter }}</h3>
  <p>Do more///</p>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  computed: {
    counter() {
      return this.$store.getters['counter/normalizedCounter'];
    },
    // ...mapGetters(['normalizedCounter']),
  },
};
</script>
