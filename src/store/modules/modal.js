const modal = {
  state: {
    type: '',
    taskName: {
      todoName: '',
      subTodoName: ''
    },
    task: {}
  },
  mutations: {
    CHANGE_MODAL_TYPE (state, { type, taskName = {}, task = {} }) {
      state.type = type
      state.taskName = taskName
      state.task = task
    }
  },
  getters: {
    modalType: state => state.type,
    taskName: state => state.taskName,
    getTask: state => state.task
  }
}

export default modal
