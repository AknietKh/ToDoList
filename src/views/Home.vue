<template>
  <div class="home">
    <div class="main-content">
      <h1 class="header-text">Добро пожаловать</h1>
      <p>Планируйте свой день вместе с таск-менеджером!</p>
      <router-link to="/auth">
        <button class="app-button">Войти</button>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: url("../assets/bg.png") no-repeat center;
    background-size: cover;
  }

  h1 {
    margin-bottom: 5.6rem;
  }

  p {
    width: 46rem;
    margin-bottom: 5.6rem;
  }
</style>
