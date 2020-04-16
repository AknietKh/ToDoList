<template>
  <div class="modal">
    <div class="modal__header">Новая задача</div>
    <div class="modal__main">
        <label class='modal-field'>
          <span>Название задачи:</span>
          <input type="text" class="modal-field__input" v-model.trim='name'>
        </label>
    </div>
    <div class="modal__footer">
      <button class="app-button" @click='onCreateTodo'>Создать</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddTodoModal',
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    onCreateTodo () {
      this.$store.commit('CHANGE_MODAL_TYPE', '')
      // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
      axios({
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
          this.$store.dispatch('getNotCompletedTodos')
        })
        .then(() => {
          const newTitle = `Задача ${this.name} успешно создана`
          console.log(newTitle);
          this.$emit('on-alert', newTitle)
        })
        .catch(err => {
          const errMessage = err.response.data.message
          console.log(errMessage)
        })  
    }
  }
}
</script>

<style lang="scss">
  .modal {
    box-sizing: border-box;
    width: 70.6rem;
    height: 51rem;
    position: absolute;
    top: 30%;
    left: 32%;
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
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 2.9rem;
      text-align: center;
      margin-bottom: 8.3rem;
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
