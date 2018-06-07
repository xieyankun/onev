<template>
  <span class="counter">
    <i @click.stop.prevent="counterChange(false)" v-if="full" class="icon iconshop ki-decrease"></i>
    <i @click.stop.prevent="counterChange(false)" v-if="full && count > 0" class="icon iconshop ki-decrease"></i>
    <span class="cart-count" v-if="full">{{count}}</span>
    <span class="cart-count" v-if="full && count > 0">{{count}}</span>
    <i class="icon iconshop ki-increase" @click.stop.prevent="counterChange(true)"></i>
  </span>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    full: {
      type: Boolean,
      default: function() {
        return false
      }
    },
    count: {
      type: Number
    }
  },
  methods: {
    counterChange (status) {
      console.log(status)
      if (status) {
        this.$emit('increaseCount')
      } else {
        this.$emit('decreaseCount')
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
