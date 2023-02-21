<template>
 <form @submit.prevent="submitData">
  <div>
    <label>Name</label>
    <input v-model="name" type="text"/>
  </div>
  <div>
    <label>Phone</label>
    <input v-model="phone" type="phone"/>
  </div>
  <div>
    <label>Email</label>
    <input v-model="email" type="email"/>
  </div>
  <div>
    <label>Is Favorite?</label>
    <input v-model="isFavorite" type="checkbox" />
  </div>
    
  <button type="submit">Save New</button>
 </form>
</template>

<script>
export default  {
  emits: {
    'add-friend': (friend) => {
      if (friend) return true;

      console.warn('Friend is missing');
      return false;
    },
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      isFavorite: false,
    };
  },
  methods: {
    submitData() {
      this.$emit('add-friend', {
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFavorite: this.isFavorite,
      });

      this.name = '';
      this.phone = '';
      this.email = '';
      this.isFavorite = false;
    }
  }
};
</script>