import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { useAuth } from '../contexts/auth'
import Header from '../components/header'

import { initPhoto, Photo } from '../models/Photo'

import PhotoServices from '../services/photo'
import LikeServices from '../services/like'
import '../styles/pages/photoshow.css'

interface PhotoParams {
  id: string
}

export default function PhotoShow () {
  const { user } = useAuth()
  const { goBack } = useHistory()
  const params = useParams<PhotoParams>()
  const [photo, setPhoto] = useState<Photo>(initPhoto())
  const [likes, setLikes] = useState(0)
  const [likeId, setLikeId] = useState(-1)

  async function loadingData () {
    const id = parseInt(params.id, 10) || 0
    const { data, error } = await PhotoServices.showPhoto(id, user.id)
    if (error === '') {
      setPhoto(data.photo)
      setLikes(data.likes)
      setLikeId(data.like.id)
      console.log(data)
    } else {
      console.log(error)
    }
  }

  useEffect(() => {
    loadingData()
  }, [params.id])

  async function createLike () {
    const { like, error } = await LikeServices.createLike(photo.id, user.id)
    if (error === '') {
      setLikeId(like.id)
      setLikes(likes + 1)
    } else {
      console.log(error)
    }
  }

  async function deleteLike () {
    const response = await LikeServices.deleteLike(likeId)
    if (response === '') {
      setLikes(likes - 1)
      setLikeId(-1)
    } else {
      console.log(response)
    }
  }

  async function getLike () {
    if (likeId === -1) {
      await createLike()
    } else {
      await deleteLike()
    }
  }

  return (
        <div id="page-photo">
            <button className="back"
              onClick={goBack}
            >
              <FiArrowLeft color="#FFF" size={20} />
            </button>
            <Header />
            <div className="page">
              <div className="content">
                <h2>{`${photo.date} - ${photo.id}`}</h2>
                <div className="my-img">
                  <img src={photo.url} alt={`${photo.id}`} />
                </div>
                <div className="action">
                  <button
                    className={likeId !== -1 ? 'active' : 'not-active' }
                    onClick={getLike}>Like</button>
                  <h3>{likes} likes</h3>
                </div>
              </div>
            </div>
        </div>
  )
}
