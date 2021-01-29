import React from 'react'
import { useAuth } from '../contexts/auth'

import '../styles/components/header.css'

export default function Header () {
  const { user } = useAuth()
  return (
        <header className="header">
            <h1>Olá {user.name}</h1>
        </header>
  )
}
