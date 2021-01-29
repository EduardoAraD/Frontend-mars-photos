import React from 'react'
import { FiPower } from 'react-icons/fi'
import { useAuth } from '../contexts/auth'

import '../styles/components/header.css'

export default function Header () {
  const { user, signOut } = useAuth()
  return (
        <header className="header">
            <h1>Olá {user.name}</h1>
            <div className="signOut">
              <button onClick={signOut}>
                <FiPower color="#232323" size={20} />
              </button>
              <h3>Sair</h3>
            </div>
        </header>
  )
}
