<template>
  <div class="container">
    <ListData />
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- <Transition
      enter-to-class=""
      enter-from-class=""
      enter-active-class=""
    > -->
    <Transition
      :css="false"
      @after-enter="afterEnter"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
      @leave="leave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="paragraphIsVisible">rrrrrrrrrrrrrrrrrrrrrrrrrr</p>
    </Transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <Transition name="fade-btn" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </Transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import ListData from './components/ListData.vue';

export default {
  components: {
    ListData,
  },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paragraphIsVisible: false,
      usersAreVisible: false,
      enterAnimationIntervalId: null,
      leaveAnimationIntervalId: null,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    log($event, method) {
      console.log(method, $event);
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      let round = 1;
      this.enterAnimationIntervalId = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterAnimationIntervalId);
          done();
        }
      }, 30);
    },
    afterEnter(el) {
      el.style.opacity = 1;
    },
    beforeLeave(el) {
      el.style.opacity = 1;
    },
    leave(el, done) {
      let round = 1;
      this.leaveAnimationIntervalId = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveAnimationIntervalId);
          done();
        }
      }, 30);
    },
    afterLeave(el) {
      el.style.opacity = 0;
    },
    enterCancelled() {
      if (this.enterAnimationIntervalId) {
        clearInterval(this.enterAnimationIntervalId);
      }
    },
    leaveCancelled() {
      if (this.leaveAnimationIntervalId) {
        clearInterval(this.leaveAnimationIntervalId);
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.5s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.5s ease-out forwards;
}

/* .para-enter-from { */
/* opacity: 0;
  transform: translateY(-30px); */
/* } */

/* .para-enter-active { */
/* animation: slide-scale 3s ease-in forwards; */
/* transition: all 1s ease-out; */
/* } */

/* .para-enter-to { */
/* opacity: 1;
  transform: translateY(0); */
/* } */
/* .para-leave-from { */
/* opacity: 1;
  transform: translateY(0); */
/* } */

/* .para-leave-active { */
/* animation: slide-scale 3s ease-out; */
/* transition: all 1s ease-out; */
/* } */

/* .para-leave-to { */
/* opacity: 0;
  transform: translateY(30px); */
/* } */
.fade-btn-enter-from,
.fade-btn-leave-to {
  opacity: 0;
}

.fade-btn-enter-active {
  animation: opacity 0.3s ease-out;
}
.fade-btn-leave-active {
  animation: opacity 0.3s ease-in;
}

.fade-btn-enter-to,
.fade-btn-leave-from {
  opacity: 1;
}
@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(2);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
