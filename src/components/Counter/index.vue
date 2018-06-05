<template>
  <span class="counter">
    <i class="icon iconshop ki-decrease" v-if="count > 0" @click.stop.prevent="counterChange(false)"></i>
    <span class="cart-count" v-if="count > 0">{{count}}</span>
    <i class="icon iconshop ki-increase" @click.stop.prevent="counterChange(true)"></i>
  </span>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    count: {
      type: Number
    }
  },
  methods: {
    counterChange(status) {
      console.log(status)
      if(status) {
        this.increaseCount()
        this.$emit('increaseCount')
      } else {
        this.decreaseCount()
        this.$emit('decreaseCount')
      }
    },
    increaseCount (event) {
      // console.log('increaseCount')
      // this.$emit('increaseCount')
    },
    decreaseCount (event) {
      // console.log('decreaseCount')
      // this.$emit('increaseCount')
    },
  }
}
</script>

<style scoped lang="scss">

</style>
