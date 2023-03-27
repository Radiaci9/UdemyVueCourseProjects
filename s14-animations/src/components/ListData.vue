<template>
  <TransitionGroup tag="ul" name="label-list">
    <li v-for="label in labels" :key="label" @click="removeLabel(label)">
      {{ label }}
    </li>
  </TransitionGroup>
  <div>
    <input type="text" ref="labelInput" />
    <button @click="addLabel">Add Labels</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labels: ['Users', 'Documents', 'Photos', 'Admin', 'Companies'],
    };
  },
  methods: {
    addLabel() {
      this.labels.unshift(this.$refs.labelInput.value);
    },
    removeLabel(label) {
      this.labels = this.labels.filter((itemLabel) => itemLabel !== label);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.label-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.label-list-enter-active {
  transition: all 1s ease-out;
}
.label-list-enter-to,
.label-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.label-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}
.label-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.label-list-move {
  transition: transform 0.8s ease;
}
</style>
