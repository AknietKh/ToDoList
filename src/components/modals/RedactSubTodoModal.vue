<template>
  <div class="modal">
    <div class="modal__header">Изменить название подзадачи</div>
    <div class="modal__main">
        <label class='modal-field'>
          <span>Новое название:</span>
          <input type="text" class="modal-field__input" v-model='name'>
        </label>
    </div>
    <div class="modal__footer">
      <button class="app-button" @click='onRedactSubTodo'>Сохранить</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RedactSubTodoModal',
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    onRedactSubTodo () {
      const task = this.$store.getters.getTask
      const subTodoId = task.subTodo.id
      this.$store.commit('CHANGE_MODAL_TYPE', '')

      // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
      axios({
        method: 'post',
        url: `http://31.211.50.217/api/update-task`,
        data: {
          id: subTodoId,
          name_list: this.name
        }
      })
        .then(resp => {
          console.log(resp)
        })
        .then(() => {
          this.$store.dispatch('getNotCompletedTodos')
        })
        .then(function () {
          const alert = {
            id: Date.now(),
            status: true,
            text: `Подзадача "${this.name}" из задачи "${task.subTodo.name}" успешно изменена`
          }
          this.$store.commit('ADD_ALERT', alert)
        })
        .catch(err => {
          const errMessage = err.response.data.message
          console.log(errMessage)
        })
    }
  }
}
</script>