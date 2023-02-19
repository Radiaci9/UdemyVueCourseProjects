const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
      boxDSelected: false,
      boxESelected: false,
      boxFSelected: false,
      boxGSelected: false,
    }
  },
  computed: {
    boxFClasses() {
      return {active: this.boxFSelected};
    },
  },
  methods: {
    boxSelected(box) {
      if (box === 'A') this.boxASelected = !this.boxASelected
      else if (box === 'B') this.boxBSelected = !this.boxBSelected
      else if (box === 'C') this.boxCSelected = !this.boxCSelected
      else if (box === 'D') this.boxDSelected = !this.boxDSelected
      else if (box === 'E') this.boxESelected = !this.boxESelected
      else if (box === 'F') this.boxFSelected = !this.boxFSelected
      else if (box === 'G') this.boxGSelected = !this.boxGSelected
    }
  }
});

app.mount('#styling');
