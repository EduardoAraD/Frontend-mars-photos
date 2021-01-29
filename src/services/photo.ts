import api from './api'
import { Photo, PhotoComplete, initPhotoComplete } from '../models/Photo'
import { AxiosError } from 'axios'

interface PhotoApi {
    photos: Photo[],
    page: number,
    limit: number,
    total: number
}

interface PhotoResponse {
    data: PhotoComplete,
    error: string
}

interface PhotosResponse {
    photos: Photo[],
    error: string
}

export default {
  async getPhotos (limit: number, page: number): Promise<PhotosResponse> {
    return api.get(`/photos?page=${page}&limit=${limit}`)
      .then((response) => {
        const data: PhotoApi = response.data
        return { photos: data.photos, error: '' }
      })
      .catch((err: AxiosError) => {
        const error = err.response?.data.error || err.message
        return { photos: [], error }
      })
  },

  async showPhoto (photoId: number, userId: number): Promise<PhotoResponse> {
    return api.post(`/photos/${photoId}`, { userId })
      .then((response) => {
        const data: PhotoComplete = response.data
        return { data, error: '' }
      })
      .catch((err : AxiosError) => {
        const error = err.response?.data.error || err.message
        return {
          data: initPhotoComplete(),
          error
        }
      })
  }
}
