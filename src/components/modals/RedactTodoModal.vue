<template>
  <div class="modal">
    <div class="modal__header">Изменить название задачи</div>
    <div class="modal__main">
        <label class='modal-field'>
          <span>Новое название:</span>
          <input type="text" class="modal-field__input" v-model='name'>
        </label>
    </div>
    <div class="modal__footer">
      <button class="app-button" @click='onRedactTodo'>Сохранить</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RedactTodoModal',
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    onRedactTodo () {
      const task = this.$store.getters.getTask;
      const todoId = task.todo.id
      console.log(task)
      console.log(todoId);

      this.$store.commit('CHANGE_MODAL_TYPE', '')
      // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
      axios({
        method: 'post',
        url: `http://31.211.50.217/api/update-list/${todoId}`,
        data: {
          name: this.name
        }
      })
        .then(resp => {
          console.log(resp);
        })
        .then(() => {
          this.$store.dispatch('getNotCompletedTodos')
        })
        .catch(err => {
          const errMessage = err.response.data.message
          console.log(errMessage);
        })
    }
  }
}
</script>