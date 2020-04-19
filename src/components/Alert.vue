<template>
  <div class="app-alert">
    <span>{{alert.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: ['alert'],
  mounted: function () {
    console.log(this.alert)
    // this.$store.dispatch('getCompletedTodos')
    this.$store.dispatch('dismissed', this.alert)
  }
}
</script>

<style lang="scss">
  .app-alert{
    // position: absolute;
    // top: 10rem;
    // right: 3rem;
    box-sizing: border-box;
    width: 42.7rem;
    height: auto;
    padding: 1.5rem;
    margin-bottom: 1rem;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 2.4rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.8rem;
    letter-spacing: 0.09em;
    color: #000000;
  }
</style>