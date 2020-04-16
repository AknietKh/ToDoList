const alert = {
  state: {
    alerts: []
  },
  mutations: {
    ADD_ALERT (state, alert) {
      const newAlerts = alerts.slice()

      newAlerts.unshift(alert)
      state.alerts = newAlerts
    },
    CHANGE_ALERT_STATUS (state, dismissedAlert) {
      const newAlerts = state.alerts.map(item => {
        if (item.id === dismissedAlert.id) {
          item.status = false
        }
      })
      state.alerts = newAlerts
    }
  },
  action: {
    dismissed ({state, commit}, alert ) {
      setTimeout(function () {
        commit('CHANGE_ALERT_STATUS', alert)
      }, 3000)
    }
  },
  getters: {
    // alertText: state => state.alertText,
    // alertStatus: state => state.status,
    getAlerts: state => state.alerts
  }
}

export default alert
