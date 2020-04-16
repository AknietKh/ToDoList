<template>
  <div class="modal">
    <div class="modal__header">Новая подзадача</div>
    <div class="modal__main">
        <label class='modal-field'>
          <span>Название подзадачи:</span>
          <input type="text" class="modal-field__input" v-model='name'>
        </label>

        <label class="modal-field_check">
          <input 
            type="checkbox"
            class="modal-field__checkbox"
            v-model='isChecked'
          >
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
      name: '',
      isChecked: false
    }
  },
  methods: {
    onCreateSubTodo () {
      const task = this.$store.getters.getTask;
      const todoId = task.todo.id

      this.$store.commit('CHANGE_MODAL_TYPE', '')
      // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
      axios({
        method: 'post',
        url: `http://31.211.50.217/api/create-list/${todoId}/item`,
        data: {
          name_list: this.name
        }
      })
        .then(resp => {
          console.log(resp)
          return resp
        })
        .then(resp => {
          //не оптимальное решение, вплане перерисовок списка задач.
          if (this.isChecked) {
            // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
            axios({
              method: 'post',
              url: `http://31.211.50.217/api/urgency/${resp.data.data.id}`,
              data: {
                urgency: this.isChecked
              }
            })
            .then(() => {
              this.$store.dispatch('getNotCompletedTodos')
            })
            .catch(err => {
              const errMessage = err.response.data.message
              console.log(errMessage);
            })
          }
        })
        .then(() => {
          this.$store.dispatch('getNotCompletedTodos')
        })
        .then(function () {
          const alert = {
            id: Date.now(),
            status: true,
            text: `Подзадача "${this.name}" успешно добавлена в задачу "${task.todo.name}"`
          }
          this.$store.commit('ADD_ALERT', alert)
        })
        .catch(err => {
          const errMessage = err.response
          console.log(errMessage);
        })
    }
  }
}
</script>
