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
export default {
  name: 'RedactSubTodoModal',
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    onRedactSubTodo () {
      const task = this.$store.getter.getTask
      const subTodoId = task.task.id // надо чекунть, не уверен что правильно
      this.$store.commit('CHANGE_MODAL_TYPE', '')

      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
      axios({
        method: 'post',
        url: `http://31.211.50.217/api/update-task`,
        data: {
          id: subTodoId,
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