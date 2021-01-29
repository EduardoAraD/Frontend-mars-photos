import { initPhoto, Photo } from './Photo'
import { initUser, User } from './User'

export interface Like {
    id: number,
    photo: Photo,
    user: User
}

export function initLike () {
  return {
    id: -1,
    photo: initPhoto(),
    user: initUser()
  }
}
