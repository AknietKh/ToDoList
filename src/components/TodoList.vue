<template>
  <div class="todo-list-wrapper">
    <div class="todo-list__header">
      <span>Список дел</span>
      <div class="filter-wrapper">
        <button class="app-button button-add">+</button>
        <select name="filter" class="filter">
          <option value="Неисполненные" class="filter-item">Неисполненные</option>
          <option value="Исполненные" class="filter-item">Исполненные</option>
          <option value="Все" class="filter-item">Все</option>
        </select>
      </div>
    </div>
    <div class="todo-list__main">
      <Todo
        v-for="todo in getTodos"
        v-bind:key='todo.id'
        v-bind:todo="todo"
      />
    </div>
  </div>
</template>

<script>
import Todo from '../components/Todo.vue'

export default {
  name: 'TodoList',
  computed: {
    getTodos () {
      return this.$store.getters.getTodos
    }
  },
  components: {
    Todo
  }

}
</script>

<style lang="scss">
  .todo-list {
    &-wrapper {
      box-sizing: border-box;
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 2rem;
    }

    &__header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 2.9rem;
        letter-spacing: 0.09em;
        color: $grey;
      }
    }

    &__main {
      width: 100%;
      flex-grow: 1;
      margin-top: 2rem;
    }
  }

  .button-add {
    width: 6.4rem;
    background-color: $grey;
    border-color: $grey;
    font-size: 3.6rem;
  }

  .filter {
    box-sizing: border-box;
    width: 34rem;
    height: 5.8rem;
    margin-left: 3.2rem;
    padding-left: 4.7rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2rem;
    letter-spacing: 0.09em;
    color: #1D1D1D;
    cursor: pointer;

    &-wrapper {
      display: flex;
      align-items: center;
    }
  }

  .filter::-ms-expand {
    margin-right: 2rem;
    color: $green;
  }
</style>