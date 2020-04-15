<template>
  <div class="modal">
    <div class="modal__header">Изменить название задачи</div>
    <div class="modal__main">
        <label class='modal-field'>
          <span>Новое название:</span>
          <input type="text" class="modal-field__input">
        </label>
    </div>
    <div class="modal__footer">
      <button class="app-button" @click='onRedactTodo'>Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RedactTodoModal',
  methods: {
    onRedactTodo () {
      this.$store.commit('CHANGE_MODAL_TYPE', '')
    }
  }
}
</script>