<template>
  <div class="sub-todos-wrapper">
    <div v-if='!subTodos.length'>
      <div class="sub-todo-empty">У вас нет подзадач...</div>
    </div>
    <div v-else>
      <SubTodo 
      v-for='subTodo in subTodos'
      v-bind:key='subTodo.id'
      v-bind:subTodo='subTodo'
      v-bind:todo="todo"
    />
    </div>
  </div>
</template>

<script>
import SubTodo from '../components/SubTodo'

export default {
  name: 'SubTodoList',
  props: ['subTodos', 'todo'],
  components: {
    SubTodo
  }
}
</script>

<style lang="scss">
  .sub-todo-empty {
    // box-sizing: border-box;
    padding: 1rem;
    padding-left: 2rem;
    margin: 1rem;
    margin-left: 5rem;
    border: 1px solid $grey;
    border-radius: 2.4rem;
  }
</style>