<template>
  <div class="modal-wrapper">
    <div class="delete-modal">
      <div class="delete-modal__text">
        <span v-if='taskName.subTodoName'>Вы действительно хотите удалить “{{taskName.subTodoName}}" из задачи “{{taskName.todoName}}”?</span>
        <span v-else>Вы точно хотите удалить "{{taskName.todoName}}" ?</span>
        <div class="delete-modal__close" @click='onCloseModal'>&times;</div>
      </div>
      <div class="delete-modal__btns">
        <button class="app-button app-button_small _btn-green" @click="onDelete" >Да</button>
        <button class="app-button app-button_small _btn-red" @click="onCancel">Нет</button>  
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DeleteTaskModal',
  computed: {
    getModalType () {
      return this.$store.getters.modalType
    },
    taskName () {
      return this.$store.getters.taskName
    }
  },
  methods: {
    onCloseModal () {
      this.$store.commit('CHANGE_MODAL_TYPE', '')
    },
    onDelete() {
      const task = this.$store.getters.getTask
      const taskName = this.$store.getters.taskName

      console.log('task: ', task)
      if (task.task_list_id) {
        console.log('subTodo: ', task.id);
        console.log(task.task_list_id);
        this.$store.commit("CHANGE_MODAL_TYPE", '')
        // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        axios({
          method: 'delete',
          url: `http://31.211.50.217/api/delete-list/${task.task_list_id}/item/${task.id}`
        })
          .then(resp => {
            console.log(resp.status);
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
            // this.$store.dispatch('getNotCompletedTodos')
            return resp
          })
          .then(resp => {
            console.log('delete', taskName)
            const alert = {
              id: Date.now(),
              status: true,
              text: `Подзадача "${taskName.todoName}" из "${taskName.subTodoName}" успешно удалена`
            }
            this.$store.commit('ADD_ALERT', alert)
            return resp
          })
          .catch(err => {
            const errMessage = err.response
            console.log(errMessage);
          })
      } else {
        console.log(task.id)
        this.$store.commit("CHANGE_MODAL_TYPE", '')
        // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        axios({
          method: 'delete',
          url: `http://31.211.50.217/api/delete-list/${task.id}`
        })
          .then(resp => {
            console.log(resp);
            return resp
          })
          .then(resp => {
            const filterStatus = this.$store.getters.status
            console.log('filterStatus: ', filterStatus);
          
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
          .then(resp => {
            // console.log('delete')
            // console.log(task.name);
            const alert = {
              id: Date.now(),
              status: true,
              text: `Задача "${task.name}" успешно удалена`
            }
            console.log('delete', alert)
            this.$store.commit('ADD_ALERT', alert)
            return resp
          })
          .catch(err => {
            const errMessage = err.response
            console.log(errMessage);
          })
        
      }

      
    },
    onCancel () {
      this.$store.commit("CHANGE_MODAL_TYPE", '')
    }
  }
}
</script>

<style lang="scss">
  .delete-modal {
    box-sizing: border-box;
    width: 64.4rem;
    height: 24.9rem;
    position: absolute;
    top: 30%;
    left: 32%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5.2rem 4.4rem 3.2rem;
    background-color: #fff;
    border: 2px solid $red;
    border-radius: 1.2rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.8rem;
    text-align: center;
    letter-spacing: 0.09em;
    color: #000000;

    &__text {
      position: relative;
    }

    &__close {
      position: absolute;
      top: -4rem;
      right: -3rem;
      font-size: 4rem;
      cursor: pointer;
    }

    &__btns {
      display: flex;
      justify-content: space-between;
      font-size: 1.6rem;
      line-height: 2rem;
    }
  }
</style>
