<template>
  <div class="modal-wrapper">
    <div class="modal"> 
      <div class="modal__header">
        Новая задача
        <div class="modal-close" @click='onCloseModal'>&times;</div>
      </div>
      <div class="modal__main">
        <label class='modal-field'>
          <span>Название задачи:</span>
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
        <button class="app-button" @click='onCreateTodo'>Создать</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'AddTodoModal',
  data: function () {
    return {
      name: '',
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
    onCreateTodo () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      this.$store.commit('CHANGE_MODAL_TYPE', '')
      // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
      /*axios({
        method: 'post',
        url: `http://31.211.50.217/api/create-list`,
        data: {
          name: this.name
        }
      })
        .then(resp => {
          console.log(resp.status)
        })
        .then(() => {
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
        })
        .then(function () {
          const alert = {
            id: Date.now(),
            status: true,
            text: `Задача "${this.name}" успешно создана`
          }
          this.$store.commit('ADD_ALERT', alert)
        })
        .catch(err => {
          const errMessage = err.response.data.message
          console.log(errMessage)
        })*/
    }
  }
}
</script>

<style lang="scss">
  .modal {
    &-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba($color: #000000, $alpha: 0.2);
    }

    box-sizing: border-box;
    width: 70.6rem;
    height: 51rem;
    // position: absolute;
    // top: 30%;
    // left: 32%;
    display: flex;
    flex-direction: column;
    padding: 2.7rem 5rem 6.8rem;
    background: #FFFFFF;
    border: 1px solid $red;
    border-radius: 1.2rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.8rem;
    letter-spacing: 0.09em;
    color: #000000;

    &__header {
      position: relative;
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 2.9rem;
      text-align: center;
      margin-bottom: 8.3rem;
    }

    &-close {
      position: absolute;
      top: -1.5rem;
      right: -3rem;
      font-size: 4rem;
      cursor: pointer;
    }

    &__main {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
    }

    &__footer {
      margin-top: 2.2rem;
      text-align: center;
    }

    &-field {
      display: flex;
      flex-direction: column;

      &__input {
        box-sizing: border-box;
        padding: 0 1.5rem;
        height: 4rem;
        margin-top: 1rem;
        border: 1px solid #000000;
        border-radius: 1.2rem;
      }

      &__checkbox {
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
        cursor: pointer;
      }

      &_check {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }
</style>
