import api from './api'
import { Like, initLike } from '../models/Like'
import { AxiosError } from 'axios'

interface LikeResponse {
    like: Like,
    error: string
}

export default {
  async createLike (photo: number, user: number): Promise<LikeResponse> {
    return api.post('/likes', { photo, user })
      .then((response) => {
        const data = response.data
        const like:Like = {
          id: data.id,
          photo: data.photo,
          user: data.user
        }
        return { like, error: '' }
      })
      .catch((err: AxiosError) => {
        const error = err.response?.data.error || err.message
        return { like: initLike(), error }
      })
  },

  async deleteLike (likeId: number):Promise<string> {
    return api.delete(`/likes/${likeId}`)
      .then(() => {
        return ''
      })
      .catch((err:AxiosError) => {
        const error = err.response?.data.error || err.message
        return error
      })
  },

  async showLike (likeId: number): Promise<LikeResponse> {
    return api.get(`/likes/${likeId}`)
      .then((response) => {
        const data = response.data
        const like:Like = {
          id: data.id,
          photo: data.photo,
          user: data.user
        }
        return { like, error: '' }
      })
      .catch((err: AxiosError) => {
        const error = err.response?.data.error || err.message
        return { like: initLike(), error }
      })
  }
}
