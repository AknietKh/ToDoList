<template>
  <div class="app-alert" v-if='alert.status'>
    <span>{{alert.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  prop: ['alert'],
  mounted: function () {
    this.$store.dispatch('dismissed', alert)
  }
}
</script>

<style lang="scss">
  .app-alert{
    box-sizing: border-box;
    width: 42.7rem;
    height: auto;
    padding: 1.5rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.8rem;
    letter-spacing: 0.09em;
    color: #000000;
  }
</style>