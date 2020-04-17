<template>
  <div class="sub-todo">
    <div class="sub-todo__main">
        <label class="sub-todo__name">
          <input
            type="checkbox"
            class="sub-todo__checkbox"
            v-model='isChecked'
            @change="onChangeStatus"
          >
          <span class="sub-todo__text">{{subTodo.name_list}}</span>
        </label>
        <div class="sub-todo__urgency" v-if='subTodo.urgency'></div>
    </div>
    <div class="sub-todo__right-bar"> 
        <span class="sub-todo__text">{{subTodo.created_at | datetime}}</span>
        <div class="btn-wrapper">
          <div class="todo-icon todo-redact" @click='onShowSubRedactTodoModal'></div>
          <div class="todo-icon" @click="onShowDeleteTaskModal">&times;</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SubTodo',
  data: function () {
    return {
      isChecked: this.subTodo.status
    }
  },
  props: ['subTodo', 'todo'],
  filters: {
    datetime: function (value) {
      if (!value) return ''
      const reg = /\d+/g;
      value = value.toString()      
      value = value.match(reg)
      return `${value[2]}.${value[1]}.${value[0]} ${value[3]}:${value[4]}:${value[5]}`
      // console.log(str[2]+"-"+str[1]+"-"+str[0]+" "+str[3]+":"+str[4]+":"+str[5])
    }
  },
  methods: {
    onShowSubRedactTodoModal () {
      this.$store.commit('CHANGE_MODAL_TYPE', { type: 'redactSubTodo', task: { subTodo: this.subTodo} })
    },
    onShowDeleteTaskModal () {
      const payload = {
        type: 'deleteTask',
        taskName: {
          todoName: this.todo.name,
          subTodoName: this.subTodo.name_list
        },
        task: this.subTodo
      }
      this.$store.commit('CHANGE_MODAL_TYPE', payload)
    },
    onChangeStatus () {
      console.log(this.isChecked);
      // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
      axios({
        method: 'post',
        url: `http://31.211.50.217/api/mark-done/${this.subTodo.id}`,
        data: {
          status: this.isChecked
        }
      })
        .then(resp => {
          console.log(resp);
          return resp
        })
        .then((resp) => {
          const filterStatus = this.$store.getters.status
          
          switch (filterStatus) {
            case 'Неисполненные':
              this.$store.dispatch('getNotCompletedTodos')
              break
            case 'Исполненные':
              this.$store.dispatch('getCompletedTodos')
              break
            case 'Все':
              this.$store.dispatch('getAllTodos')
              break
          }
          // this.$store.dispatch('getNotCompletedTodos')
          return resp
        })
        .catch(err => {
          const errMessage = err.response
          console.log(errMessage);
        })
    }
  }
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