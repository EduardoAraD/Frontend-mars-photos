import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/header'

import { Photo } from '../models/Photo'
import PhotoServices from '../services/photo'

import '../styles/pages/dashboard.css'

export default function Dashboard () {
  const [photos, setPhotos] = useState<Photo[]>([])
  // const [page, setPage] = useState(1)
  const page = 1
  const limit = 20

  async function loadingData () {
    const data = await PhotoServices.getPhotos(limit, page)
    if (data.photos.length > 0) {
      setPhotos(data.photos)
      console.log(data.photos)
    } else {
      console.log(data.error)
    }
  }

  useEffect(() => {
    loadingData()
  }, [])

  return (
        <div id="page-dashboard">
            <Header />
            <div className="content">
              <h1>Fotos de Marte</h1>
              <div className="cards">
                { photos.map(item => {
                  return (
                    <Link to={`/photo/${item.id}`} key={item.id} className="card">
                      <div className="card-img" >
                        <img src={item.url} alt={`${item.id}`} />
                      </div>
                      <h3>{`${item.date} - ${item.id}`}</h3>
                    </Link>
                  )
                })}
              </div>
            </div>
        </div>
  )
}
