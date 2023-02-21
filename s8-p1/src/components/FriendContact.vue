<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete-friend', id)">Delete</button>
  </li>
</template>

<script>
export default  {
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavorite',
  // ],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
      validator: (value) => value.includes('@'), 
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  // emits: [
  //   'toggle-favorite',
  // ],
  emits: {
    'toggle-favorite': (id) => {
      if (id) return true;

      console.warn('Id is missing');
      return false;
    },
    'delete-friend': (id) => {
      if (id) return true;

      console.warn('Id is missing');
      return false;
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit('toggle-favorite', this.id);
    },
  }
};
</script>