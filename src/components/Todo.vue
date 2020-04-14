<template>
  <div class="todo-wrapper">
    <div 
      class="todo-item"
      v-bind:class='todoStatus'
      @click='showSubTodoList'>
      <span class="todo-item__text">{{todo.name}}</span>
      <div class="btn-wrapper">
        <div class="todo-icon">+</div>
        <div class="todo-icon todo-redact"></div>
        <div class="todo-icon">&times;</div>
      </div>
    </div>
  <SubTodoList 
    v-if='isShowSubTodoList'
    v-bind:subTodos='todo.task'
  />
  </div>
</template>

<script>
import SubTodoList from '../components/SubTodoList.vue'

export default {
  name: 'Todo',
  props: ['todo'],
  data: function () {
    return {
      isShowSubTodoList: false
    }
  },
  components: {
    SubTodoList
  },
  methods: {
    showSubTodoList: function () {
      this.isShowSubTodoList = !this.isShowSubTodoList
    }
  },
  computed: {
    todoStatus: function() {
      if (this.todo.status && this.todo.task.length) {
        return 'todo-completed'
      } else if (!this.todo.status && this.todo.task.length) {
        return 'todo-not-completed'
      } else {
        return 'todo-default'
      }
    }
  }
}
</script>

<style lang="scss">
  .todo {
    &-wrapper {
      margin-bottom: 1rem;
    }

    &-item {
      box-sizing: border-box;
      width: 100%;
      height: 7rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 1.6rem;
      padding-left: 5.2rem;
      // border: 1px solid red;
      border-radius: 2.4rem;
      cursor: pointer;

      &__text {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 1.8rem;
        line-height: 2.8rem;
        letter-spacing: 0.09em;
        color: #000000;
      }
    }
    
    &-completed {
      background-color: $grey;
    }

    &-not-completed {
      background-color: $green;
    }

    &-default {
      background-color: #fff;
    }

    &-icon {
      font-size: 3.2rem;
      margin-left: 2rem;
      cursor: pointer;
    }

    &-redact {
      width: 1.8rem;
      background: url('../assets/redact.png') no-repeat center;
      background-size: contain;
    }
  }

  .btn-wrapper {
    display: flex;
    justify-content: space-around;
  }
</style>