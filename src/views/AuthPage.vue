<template>
  <div class="auth">
    <div class="main-content">
      <h1 class="header-text">Авторзация</h1>
      <form action="POST" class="form" @submit.prevent="onSubmit">
        <div class="form-wrapper">
          <input type="text" placeholder="логин">
          <input type="password" placeholder="пароль">

          <div
            class="invalid-data"
            v-if="isInvalid"
          >
            <span>Неверный логин или пароль</span>
          </div>
        </div>

        <button class="app-button">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
// export default {
// }
</script>

<style lang="scss">
  .auth {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: url("../assets/bg.png") no-repeat center;
    background-size: cover;
  }

  .form {
      display: flex;
      flex-direction: column;
      // justify-content: space-between;
      height: 26.8rem;

      &-wrapper {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      input {
        box-sizing: border-box;
        width: 28.4rem;
        height: 5.5rem;
        padding: 0 1.4rem;
        margin-bottom: 2.7rem;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 1.8rem;
        line-height: 2.2rem;
        letter-spacing: 0.09em;
        // color: rgba(36, 35, 35, 0.5);

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

  h1 {
    margin-bottom: 5.6rem;
  }
</style>
