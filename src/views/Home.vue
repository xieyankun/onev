<template>
  <div class="home">
    <img src="../assets/logo.png">
    <Counter :count="count" @increaseCount="increaseCount" @decreaseCount="decreaseCount" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Counter from '@/components/Counter'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Counter
  },
  data() {
    return {
      count: 1
    }
  },
  methods: {
    increaseCount (event) {
      console.log('increaseCount')
      this.count++
    },
    decreaseCount (event) {
      console.log('decreaseCount')
      this.count--
    },
  }
}
</script>
