import React, { useState } from 'react'
import { useAuth } from '../contexts/auth'

import '../styles/pages/login.css'

export default function App () {
  const { login } = useAuth()
  const [name, setName] = useState('')

  function handleSubmitLogin () {
    console.log(name)
    login(name)
  }

  return (
    <div id="page-login">
      <div className='content'>
        <h2>Seja bem vindo</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleSubmitLogin}>Entrar</button>
      </div>
    </div>
  )
}
