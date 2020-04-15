<template>
  <div class="modal">
    <div class="modal__header">Изменить название подзадачи</div>
    <div class="modal__main">
        <label class='modal-field'>
          <span>Новое название:</span>
          <input type="text" class="modal-field__input">
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
  methods: {
    onRedactSubTodo () {
      this.$store.commit('CHANGE_MODAL_TYPE', '')
    }
  }
}
</script>