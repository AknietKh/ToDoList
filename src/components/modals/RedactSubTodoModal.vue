<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal__header">
        Изменить название подзадачи
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
            Введите название подзадачи
          </div>
          <div
            class="validation-message validation-message_modal"
            v-else-if="$v.name.$dirty && !$v.name.maxLength">
            Количество символов должно быть не более 255
          </div>
        </label>
      </div>
      <div class="modal__footer">
        <button class="app-button" @click='onRedactSubTodo'>Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'RedactSubTodoModal',
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
    onRedactSubTodo () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
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
        .then(resp => {
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
          //this.$store.dispatch('getNotCompletedTodos')
          return resp
        })
        .then(resp => {
          console.log('redact',task)

          
          const alert = {
            id: Date.now(),
            status: true,
            text: `Подзадача "${this.name}" из задачи "${task.subTodo.name_list}" успешно изменена`
          }
          this.$store.commit('ADD_ALERT', alert)
          return resp
        })
        .catch(err => {
          const errMessage = err.response
          console.log(errMessage)
        })
    }
  }
}
</script>
