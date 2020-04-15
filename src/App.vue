<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  created: function () {
    // // Прочитать про это. Код отвечает за обработку просроченных токенов
    // axios.interceptors.response.use(undefined, function (err) {
    //   return new Promise(function (resolve, reject) {
    //     console.log('check')
    //     if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
    //       console.log('inside');
    //       this.$store.dispatch('logout')
    //     }
    //     throw err
    //   })
    // })
    this.$store.dispatch('login', {login: 'admin1', password: '123456'}) //пока так, нужно решить пробелму с перезагрузкой
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import "@/assets/style/reset.scss";

@font-face {
  font-family: "Gotham Pro";
  src: url(assets/font/gotham_pro.ttf);
}

html {
  font-size: 10px;
}

body {
  display: flex;
  height: 100vh;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
  align-items: stretch;
  font-family: $font-main;
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 2.9rem;
  // letter-spacing: 0.09em;
  color: rgba(29, 29, 29, 0.6);
}

.app-button {
  width: 28.4rem;
  height: 5.5rem;
  border: 1px solid $btn-main-color;
  border-radius: 2.4rem;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  background-color: $btn-main-color;
  font-family: $font-main;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.2rem;
  letter-spacing: 0.09em;
  color: #1D1D1D;
  cursor: pointer;

  &_small {
    width: 13.2rem;
    font-size: 1.6rem;
    line-height: 2rem;
  }

  &:hover {
    font-weight: 600;
    box-shadow: none;
  }

  &:active {
    // filter: contrast(0.9);
    // opacity: 1;
    font-weight: normal;
    box-shadow: none;
  }
}

._btn-red {
  border-color: $red;
  background-color: $red;
}

._btn-green {
  border-color: $green;
  background-color: $green;
}

.header-text {
  font-family: $font-header;
  font-style: normal;
  font-weight: 900;
  font-size: 6.4rem;
  line-height: 6.1rem;
  letter-spacing: -0.05em;
  color: #1D1D1D;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  // height: 27.7rem;
}

:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
}

.invalid {
  border: 2px solid #ff6f60;
}

.validation-message {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  border: 1px solid rgba(225, 100, 100, 0.5);;
  border-radius: 1.2rem;
  background-color: rgba(225, 100, 100, 0.5);;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: #1D1D1D;
  text-align: center;
}

  @media only screen and (min-width: 1500px) {
    html {
      font-size: 8px;
    }
  }
</style>
