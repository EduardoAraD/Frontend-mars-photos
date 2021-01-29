import { User, initUser } from './User'

export interface Photo {
    id: number;
    url: string;
    date: string;
}

export interface PhotoComplete {
    photo: Photo,
    likes: number,
    user: User,
    like: { id: number }
}

export function initPhoto () {
  return {
    id: -1,
    url: '',
    date: ''
  }
}

export function initPhotoComplete () {
  return {
    photo: initPhoto(),
    likes: 0,
    user: initUser(),
    like: { id: -1 }
  }
}
