import api from './api'
import { AxiosError } from 'axios'
import { User, initUser } from '../models/User'

interface UserResponse{
    user: User,
    error: string
}

export default {
  async login (name: string): Promise<UserResponse> {
    return api.post('/users', { name })
      .then((response) => {
        const data = response.data
        const user: User = {
          id: data.id,
          name: data.name
        }
        return { user, error: '' }
      })
      .catch((err: AxiosError) => {
        const error = err.response?.data.error || err.message
        return { user: initUser(), error }
      })
  }
}
