<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
  border: 1px solid $btn-color;
  border-radius: 2.4rem;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  background-color: $btn-color;
  font-family: $font-main;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.2rem;
  letter-spacing: 0.09em;
  color: #1D1D1D;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    filter: contrast(0.9);
    opacity: 1;
  }
}

.header-text {
  font-family: $font-header;
  font-style: normal;
  font-weight: 900;
  font-size: 6.4rem;
  line-height: 6.1rem;
  // letter-spacing: -0.05em;
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
</style>
