<template>
  <BaseDialog
    v-if="isIncorrectData"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>One of inputs is invalid</p>
    </template>
    <template #actions>
      <BaseButton @click="confirmError">Ok</BaseButton>
    </template>
  </BaseDialog>
  <BaseCard>
    <form v-on:submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="link" />
      </div>
      <div>
        <BaseButton type="submit">Add</BaseButton>
      </div>
    </form>
  </BaseCard>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      isIncorrectData: false,
    };
  },
  methods: {
    submitData() {
      if (
        !this.$refs?.title?.value ||
        !this.$refs?.description?.value ||
        !this.$refs?.link?.value
      ) {
        this.isIncorrectData = true;
        return;
      }
      this.isIncorrectData = false;

      this.addResource({
        title: this.$refs.title.value,
        description: this.$refs.description.value,
        link: this.$refs.link.value,
      });
    },
    confirmError() {
      this.isIncorrectData = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
