const app = Vue.createApp({
  data() {
    return {
      courseGoal1: 'Finish the course and learn Vue!',
      courseGoal2: '<h2>Master Vue!</h2>',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() { return Math.random() < 0.5 ? this.courseGoal1 : this.courseGoal2; },
  }
});

app.mount('#user-goal');