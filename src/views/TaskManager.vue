<template>
  <div class="page">
    <header class="task-manager-header">
    <!-- <div class="user-login">{{this.$store.state.user.name}}</div> -->
    <div class="header-wrapper">
      <div class="user-login">@login_user</div>
      <button class="app-button app-button_small _btn-red">Выйти</button>
    </div>
  </header>
  <div class="task-manager-content">
    <div v-if='todos.length'>
      <TodoList/>
    </div>
    <div class="empty" v-else>
      <Empty/>
    </div>
  </div>
  </div>
</template>

<script>
import Empty from '../components/Empty'
import TodoList from '../components/TodoList'

export default {
  name: 'task-manager',
  data: function () {
    return {
      todos: []
    }
  },
  components: {
    Empty,
    TodoList
  }
}
</script>

<style lang="scss">
  .page {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }

  .task-manager{
    &-header {
      box-sizing: border-box;
      height: 12.9rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 6.3rem;
      background-color: $pink-light;
    }
    &-content {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      background-color: $pink-light;
    }
  }

  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 0.03;
    // border: 1px solid red;
  }

  .empty {
    width: 100%;
    max-width: 119.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $pink;
    cursor: pointer;
  }
</style>