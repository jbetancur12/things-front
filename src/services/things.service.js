import axios from 'axios'

const API_URL = 'http://192.168.0.6:5000/api/things/'

const getThings = () => {
  return axios.get(API_URL)
}

const createThing = (data) => {
  return axios.post(API_URL, data).then((data) => data)
}

const deleteThing = (data) => {
  return axios.delete(API_URL + data).then((data) => data)
}

const ThingService = {
  getThings,
  createThing,
  deleteThing
}

export default ThingService
