const app = Vue.createApp({
  data() {
    return {
      counter: 50,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm1(event) {
      alert('Submitt')
    },
    submitForm2(event) {
      event.preventDefault();

      alert('Submitt')
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num = 1) {
      this.counter += num;
    },
    reduce(num = 1) {
      this.counter -= num;
    }
  }
});

app.mount('#events');
