const eventBus = {
  on(event, callback) {
    document.addEventListener(event, (e) => {
      window.location.replace('/login')
      localStorage.removeItem('user')
    })
  },
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }))
  },
  remove(event, callback) {
    document.removeEventListener(event, callback)
  }
}

export default eventBus
