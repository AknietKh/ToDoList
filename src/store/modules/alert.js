const alert = {
  state: {
    alerts: []
  },
  mutations: {
    ADD_ALERT (state, alert) {
      const newAlerts = state.alerts.slice()
      console.log('before unshift', newAlerts)
      newAlerts.unshift(alert)
      console.log('After unshift', newAlerts)
      state.alerts = newAlerts
    },
    CHANGE_ALERT_STATUS (state, dismissedAlert) {
      let newAlerts = state.alerts.map(item => {
        if (item.id === dismissedAlert.id) {
          item.status = false
        }
        return item
      })
      console.log(newAlerts);
      state.alerts = newAlerts
    }
  },
  actions: {
    dismissed ({state, commit}, alert ) {
      console.log('dismissed', alert)
      setTimeout(function () {
        commit('CHANGE_ALERT_STATUS', alert)
      }, 1500)
    }
  },
  getters: {
    // alertText: state => state.alertText,
    // alertStatus: state => state.status,
    getAlerts: state => state.alerts
  }
}

export default alert
