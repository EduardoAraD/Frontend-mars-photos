import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-mars-photos-deploy.herokuapp.com'
})

export default api
