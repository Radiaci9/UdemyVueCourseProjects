const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) this.counter = 0;
    },
    // name(value) {
    //   if (!this.name) this.fullname = '';
    //   else this.fullname = `${value} ${this.lastName}`;
    // },
    // lastName(value) {
    //   if (!this.name) this.fullname = '';
    //   else this.fullname = `${this.name} ${value}`;
    // }
  },
  computed: {
    fullname() {
      console.log('run&')

      return `${this.name} ${this.lastName}`;
    },
  },
  methods: {
    outputFullname() {
      console.log('run&')
      if (!this.name) return '';

      return `${this.name} Lastname`;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
  }
});

app.mount('#events');
