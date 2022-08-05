const eventBus = {
  on (event, callback) {
    document.addEventListener(event, (e) => {
      window.location.replace('/')

      localStorage.removeItem('user') // eslint-disable-line
    })
  },
  dispatch (event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data })) // eslint-disable-line
  },
  remove (event, callback) {
    document.removeEventListener(event, callback)
  }
}

export default eventBus
