const filter = {
  state: {
    status: 'Неисполненные'
  },
  mutations: {
    CHANGE_FILTER_STATUS (state, status) {
      state.status = status
    }
  },
  getters: {
    status: state => state.status
  }
}

export default filter