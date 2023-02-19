const app = Vue.createApp({
  data() {
    return { goals: [], enteredGoalValue: '' };
  },
  computed: {
    isListEmpty() {
      return this.goals.length === 0;
    }
  },
  methods: {
    addGoal() {
      if (!this.enteredGoalValue) return;

      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = ''
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
