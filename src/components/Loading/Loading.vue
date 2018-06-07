<template>
  <transition name="fade">
    <div class="loading-wrapper">
      <div class="lds-spinner" style="100%; height:100%">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'v-loading',
    data() {
      return {
        queue: [],
        shown: false
      };
    },
    created() {
      this.inited = false
    },
    methods: {
      show() {
        this.queue.push('showing')
        if (this.shown) {
          return
        }
        this.shown = true
      },
      hide() {
        this.queue.shift();
        if (this.queue.length === 0) {
          this.shown = false
        }
      },
    },

  };
</script>

<style type="text/css">
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.lds-spinner {
  position: relative;
}
.lds-spinner div {
  left: 94px;
  top: 48px;
  position: absolute;
  -webkit-animation: lds-spinner linear 1.5s infinite;
  animation: lds-spinner linear 1.5s infinite;
  background: #bd4030;
  width: 12px;
  height: 24px;
  border-radius: 40%;
  -webkit-transform-origin: 6px 52px;
  transform-origin: 6px 52px;
}
.lds-spinner div:nth-child(1) {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-animation-delay: -1.375s;
  animation-delay: -1.375s;
}
.lds-spinner div:nth-child(2) {
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
  -webkit-animation-delay: -1.25s;
  animation-delay: -1.25s;
}
.lds-spinner div:nth-child(3) {
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg);
  -webkit-animation-delay: -1.125s;
  animation-delay: -1.125s;
}
.lds-spinner div:nth-child(4) {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.lds-spinner div:nth-child(5) {
  -webkit-transform: rotate(120deg);
  transform: rotate(120deg);
  -webkit-animation-delay: -0.875s;
  animation-delay: -0.875s;
}
.lds-spinner div:nth-child(6) {
  -webkit-transform: rotate(150deg);
  transform: rotate(150deg);
  -webkit-animation-delay: -0.75s;
  animation-delay: -0.75s;
}
.lds-spinner div:nth-child(7) {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  -webkit-animation-delay: -0.625s;
  animation-delay: -0.625s;
}
.lds-spinner div:nth-child(8) {
  -webkit-transform: rotate(210deg);
  transform: rotate(210deg);
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(9) {
  -webkit-transform: rotate(240deg);
  transform: rotate(240deg);
  -webkit-animation-delay: -0.375s;
  animation-delay: -0.375s;
}
.lds-spinner div:nth-child(10) {
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
  -webkit-animation-delay: -0.25s;
  animation-delay: -0.25s;
}
.lds-spinner div:nth-child(11) {
  -webkit-transform: rotate(300deg);
  transform: rotate(300deg);
  -webkit-animation-delay: -0.125s;
  animation-delay: -0.125s;
}
.lds-spinner div:nth-child(12) {
  -webkit-transform: rotate(330deg);
  transform: rotate(330deg);
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.loading-wrapper{
  position: absolute;
  background: rgba(0,0,0,0.5);
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
}
.lds-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px !important;
  height: 200px !important;
  /* -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px); */
  /* transform: translate(-100px, -100px) scale(1) translate(100px, 100px); */
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
</style>
