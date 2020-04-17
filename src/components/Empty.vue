<template>
  <div class="empty-wrapper" @click='onShowAddTodoModal'>
    <div class="empty-text">Задачи отсутсвуют. Нажмите, чтобы добавить...</div>
    <div class="empty-plus" @click='onShowAddTodoModal'>+</div>
    <AddTodoModal v-if='getModalType === "addTodo"'/>
  </div>
</template>

<script>
import AddTodoModal from './modals/addTodoModal'

export default {
  name: 'Empty',
  components: {
    AddTodoModal
  },
  computed: {
    getModalType () {
      return this.$store.getters.modalType
    }
  },
  methods: {
    onShowAddTodoModal () {
      this.$store.commit('CHANGE_MODAL_TYPE', { type: 'addTodo' })
    }
  }
}
</script>

<style lang="scss">
 .empty {
    &-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    &-text {
      margin-bottom: 3rem;
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 0.09em;
      color: #3F3D3D;
    }

    &-plus {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.4rem;
      height: 2.4rem;
      border: 1px solid black;
      border-radius: 50%;
      cursor: pointer;
    }
 }
</style>