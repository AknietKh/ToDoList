<template>
  <div class="modal">
    <div class="modal__header">
      Изменить название задачи
      <div class="modal-close" @click='onCloseModal'>&times;</div>
    </div>
    <div class="modal__main">
        <label class='modal-field'>
          <span>Новое название:</span>
          <input 
            type="text"
            class="modal-field__input"
            v-model.trim='name'
            :class="{invalid: $v.name.$dirty && !$v.name.required}"
          >
          <div
            class="validation-message validation-message_modal "
            v-if="$v.name.$dirty && !$v.name.required">
            Заполните поле "Название задачи"
          </div>
          <div
            class="validation-message validation-message_modal"
            v-else-if="$v.name.$dirty && !$v.name.maxLength">
            Количество символов должно быть не более 255
          </div>
        </label>
    </div>
    <div class="modal__footer">
      <button class="app-button" @click='onRedactTodo'>Сохранить</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'RedactTodoModal',
  data: function () {
    return {
      name: ''
    }
  },
   validations: {
    name: { 
      required,
      maxLength: maxLength(255)
    }
  },
  methods: {
    onCloseModal () {
      this.$store.commit('CHANGE_MODAL_TYPE', '')
    },
    onRedactTodo () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      // const task = this.$store.getters.getTask;
      // const todoId = task.todo.id
      // console.log(task)
      // console.log(todoId);

      this.$store.commit('CHANGE_MODAL_TYPE', '')
      // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
      /*axios({
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
        .then(function () {
          const alert = {
            id: Date.now(),
            status: true,
            text: `Задача "${this.name}" успешно изменена`
          }
          this.$store.commit('ADD_ALERT', alert)
        })
        .catch(err => {
          const errMessage = err.response.data.message
          console.log(errMessage);
        }) */
    }
  }
}
</script>