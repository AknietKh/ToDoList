<template>
  <div class="sub-todo">
    <div class="sub-todo__main">
        <div class="sub-todo__name">
          <input
            type="checkbox"
            class="sub-todo__checkbox"
            v-bind:checked='subTodo.status'
          >
          <span class="sub-todo__text">{{subTodo.name_list}}</span>
        </div>
        <div class="sub-todo__urgency" v-if='subTodo.urgency'></div>
    </div>
    <div class="sub-todo__right-bar"> 
        <span class="sub-todo__text">{{subTodo.created_at}}</span>
        <div class="btn-wrapper">
          <div class="todo-icon todo-redact"></div>
          <div class="todo-icon">&times;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubTodo',
  props: ['subTodo']
}
</script>

<style lang="scss">
  .sub-todo {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    height: 7rem;
    border: 1px solid rgba(221, 214, 214, 0.9);
    border-radius: 1.2rem;
    margin-top: 2rem;
    margin-left: 5rem;
    padding: 1rem;
    padding-left: 1.5rem;

    &__main {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    }

    &__right-bar {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
    }

    &__name {
      display: flex;
      align-items: center;
    }

    &__checkbox {
      width: 2rem;
      height: 2rem;
      margin: 0;
      cursor: pointer;
    }

    &__text {
      margin-left: 2rem;
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 1.8rem;
      line-height: 2.8rem;
      letter-spacing: 0.09em;
      color: #1D1D1D;
    }

    &__urgency {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: $red;
    }
  }
</style>