<template>
  <h3>{{ userName }}</h3>
  <h3>{{ userAge }}</h3>
  <h4>{{ mix }}</h4>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  setup(props) {
    const userAge = inject('userAge');
    console.log(userAge);
    const mix = computed(() => props.userName + '//' + userAge.value);

    // context.emit(); //
    return { mix, userAge };
  },
  props: ['userName'],
  // computed: {
  //   mix() {
  //     return this.userName + this.userAge;
  //   },
  // },
};
</script>
