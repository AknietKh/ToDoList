<template>
  <div class="empty-wrapper">
    <div class="empty-text">Задачи отсутсвуют. Нажмите, чтобы добавить...</div>
    <div class="empty-plus">+</div>
  </div>
</template>

<style lang="scss">
 .empty {
    &-wrapper {
      height: 10rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    &-text {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 0.09em;
      color: #3F3D3D;
    }

    &-plus {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.4rem;
      height: 2.4rem;
      border: 1px solid black;
      border-radius: 50%;
    }
 }
</style>