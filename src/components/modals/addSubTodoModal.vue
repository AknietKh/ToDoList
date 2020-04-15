<template>
  <div class="modal">
    <div class="modal__header">Новая подзадача</div>
    <div class="modal__main">
        <label class='modal-field'>
          <span>Название подзадачи:</span>
          <input type="text" class="modal-field__input" v-model='name'>
        </label>

        <label class="modal-field_check">
          <input type="checkbox" class="modal-field__checkbox">
          <span>срочная задача</span>
        </label>
    </div>
    <div class="modal__footer">
      <button class="app-button" @click='onCreateSubTodo'>Создать</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddSubTodoModal',
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    onCreateSubTodo () {
      const todoId = this.$store.getters.getTask.todo.id;
      console.log(todoId);

      this.$store.commit('CHANGE_MODAL_TYPE', '')
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
      axios({
        method: 'post',
        url: `http://31.211.50.217/api/create-list/${todoId}/item`,
        data: {
          name_list: this.name
        }
      })
        .then(resp => {
          console.log(resp);
          // const todos = resp.data
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
