<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setNewAge(18)">Change age</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
      <input type="text" placeholder="Last Name" ref="lastNameRef" />
      <button @click="setNewLastName">Set lastName</button>
      <h4>{{ fullName }}</h4>
    </div>
    <br />
    <UserData :user-name="user.name" :user-age="user.age" />
  </section>
</template>

<script>
import { ref, reactive, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData,
  },
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const ageeeeeee = ref(11);
    const lastNameRef = ref(null);
    const user = reactive({
      name: 'Rad',
      age: 25,
    });

    setTimeout(() => {
      user.name = 'Rad9';
      user.age = 33;
      ageeeeeee.value = 2222;
    }, 2000);

    const setNewAge = (newAge) => {
      user.age = newAge;
      ageeeeeee.value = newAge;
    };
    const setFirstName = (event) => (firstName.value = event.target.value);
    const setNewLastName = () => (lastName.value = lastNameRef.value.value);

    const fullName = computed(() => `${firstName.value} ${lastName.value}`);

    watch([lastName, firstName], (newVal, oldValue) => {
      user.age += 1;

      console.log('🚀 ~ file: App.vue:37 ~ watch ~ newVal:', newVal);
      console.log('🚀 ~ file: App.vue:37 ~ watch ~ newVal:', oldValue);
    });

    provide('userAge', ageeeeeee);

    return {
      user,
      setNewAge,
      fullName,
      setFirstName,
      lastName,
      lastNameRef,
      setNewLastName,
    };
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
