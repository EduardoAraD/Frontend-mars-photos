import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/header'

import '../styles/pages/dashboard.css'

const data = [
  {
    id: 0,
    img_url: 'https://upload.wikimedia.org/wikipedia/pt/d/d0/Ferrovi%C3%A1rioAC2019.png',
    earth_date: '2020-01/20',
    name: 'Photo Mars',
    description: 'Photo em faege teste acom as tronatos e seus espetaculos estraordinarios.'
  }, {
    id: 1,
    img_url: 'https://upload.wikimedia.org/wikipedia/pt/d/d0/Ferrovi%C3%A1rioAC2019.png',
    earth_date: '2020-01/20',
    name: 'Photo Mars',
    description: 'Photo em faege teste acom as tronatos e seus espetaculos estraordinarios.'
  }, {
    id: 2,
    img_url: 'https://upload.wikimedia.org/wikipedia/pt/d/d0/Ferrovi%C3%A1rioAC2019.png',
    earth_date: '2020-01/20',
    name: 'Photo Mars',
    description: 'Photo em faege teste acom as tronatos e seus espetaculos estraordinarios.'
  }, {
    id: 3,
    img_url: 'https://upload.wikimedia.org/wikipedia/pt/d/d0/Ferrovi%C3%A1rioAC2019.png',
    earth_date: '2020-01/20',
    name: 'Photo Mars',
    description: 'Photo em faege teste acom as tronatos e seus espetaculos estraordinarios.'
  }, {
    id: 4,
    img_url: 'https://upload.wikimedia.org/wikipedia/pt/d/d0/Ferrovi%C3%A1rioAC2019.png',
    earth_date: '2020-01/20',
    name: 'Photo Mars',
    description: 'Photo em faege teste acom as tronatos e seus espetaculos estraordinarios.'
  }
]

export default function Dashboard () {
  return (
        <div id="page-dashboard">
            <Header />
            <div className="content">
              <h1>Fotos de Marte</h1>
              <div className="cards">
                { data.map(item => {
                  return (
                    <Link to={`/photo/${item.id}`} key={item.id} className="card">
                        <img src={item.img_url} alt={item.name} />
                        <h3>{item.name}</h3>
                    </Link>
                  )
                })}
              </div>
            </div>
        </div>
  )
}
