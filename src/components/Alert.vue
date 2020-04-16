<template>
  <div class="app-alert">
    <span>{{alertText}}</span>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  prop: ['alertTitle']
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