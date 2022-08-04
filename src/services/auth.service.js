import axios from 'axios'

const API_URL = 'http://192.168.0.6:5000/api/auth/'

const register = (name, email, password) => {
  return axios.post('http://192.168.0.6:5000/api/users/', {
    name,
    email,
    password
  })
}

const login = (email, password) => {
  return axios
    .post(API_URL + 'signin', {
      email,
      password
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data)) // eslint-disable-line
      }

      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user') // eslint-disable-line
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user')) // eslint-disable-line
}

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser
}

export default AuthService
