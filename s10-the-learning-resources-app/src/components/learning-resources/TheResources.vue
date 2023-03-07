<template>
  <BaseCard>
    <BaseButton
      @click="setSelectedTab('StoredResources')"
      :mode="storedResBtnMode"
      >Stored Resources</BaseButton
    >
    <BaseButton @click="setSelectedTab('AddResource')" :mode="addResBtnMode"
      >Add Resource</BaseButton
    >
  </BaseCard>
  <KeepAlive>
    <component :is="selectedTab" />
  </KeepAlive>
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';

export default {
  props: ['resources'],
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'StoredResources',
      storedResources: [
        {
          id: '222222',
          title: '22222',
          description: '222 2 2 22 ',
          link: 'link?',
        },
        {
          id: 'gggggggg',
          title: 'ggggg',
          description: '2ggg',
          link: 'google link?',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  computed: {
    storedResBtnMode() {
      return this.selectedTab === 'StoredResources' ? null : 'flat';
    },
    addResBtnMode() {
      return this.selectedTab === 'AddResource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource({ title, description, link }) {
      this.storedResources.unshift({
        id: Math.random().toString(),
        title,
        description,
        link,
      });
      this.selectedTab = 'StoredResources';
    },
    removeResource(resId) {
      console.log(2);
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
