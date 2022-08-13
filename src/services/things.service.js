import axios from 'axios'

const API_URL = 'http://192.168.0.6:5000/api/things/'

const getThings = () => {
  return axios.get(API_URL)
}

const createThing = (data) => {
  return axios.post(API_URL, data).then((data) => data)
}

const updateThing = (id, body) => {
  return axios.put(API_URL + id, body).then((data) => data)
}

const deleteThing = (id) => {
  return axios.delete(API_URL + id).then((data) => data)
}

const getUserThings = (userId) => {
  return axios.get(API_URL + '?user=' + userId)
}

const ThingService = {
  getThings,
  createThing,
  updateThing,
  deleteThing,
  getUserThings
}

export default ThingService
