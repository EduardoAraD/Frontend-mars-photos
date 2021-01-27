import React from 'react'
import { useAuth } from '../contexts/auth'

export default function Header () {
  const { user } = useAuth()
  return (
        <header>
            <h1>{user}</h1>
        </header>
  )
}
