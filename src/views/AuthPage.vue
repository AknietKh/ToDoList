<template>
  <div class="auth">
    <div class="main-content">
      <h1 class="header-text">Авторизация</h1>
      <form class="form" @submit.prevent="onSubmit">
        <div class="form-wrapper">
          <div class="input-field">
            <input
            type="text"
            placeholder="логин"
            v-model.trim="login"
            :class="{invalid: $v.login.$dirty && !$v.login.required}"
            >
            <div
              class="validation-message"
              v-show="$v.login.$dirty && !$v.login.required">
              Укажите логин
            </div>
          </div>
          <div class="input-field">
            <input
              type="password"
              placeholder="пароль"
              v-model.trim="password"
              :class="{invalid: $v.password.$dirty && !$v.password.required}"
            >
            <div
              class="validation-message"
              v-if="$v.password.$dirty && !$v.password.required">
              Укажите пароль
            </div>
          </div>
          <div
            class="validation-message"
            v-if="errMessage"
          >
            {{errMessage}}
            <!-- Неверный логин или пароль -->
          </div>
        </div>

        <button type="submit" class="app-button">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'auth',
  data: function () {
    return {
      login: '',
      password: ''
    }
  },
  validations: {
    login: { required },
    password: { required }
  },
  methods: {
    onSubmit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const { login, password } = this
      this.$store.dispatch('login', { login, password })
        .then(() => this.$router.push('/task-manager'))
        .catch(err => console.log(err))
      // this.$router.push('/task-manager')
    }
  },
  computed: {
    errMessage () {
      return this.$store.getters.errMessage
    }
  }
}
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

      .input-field {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 8rem;
        margin-bottom: 1rem;
      }

      input {
        box-sizing: border-box;
        width: 28.4rem;
        height: 5.5rem;
        padding: 0 1.4rem;
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
