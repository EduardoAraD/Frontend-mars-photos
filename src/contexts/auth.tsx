import React, { createContext, ReactNode, useContext, useState } from 'react'
import UserService from '../services/user'
import { User, initUser } from '../models/User'

interface Props {
    children: ReactNode
}

interface AuthContextData {
    signed: boolean;
    user: User;

    login(name:string): void;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider ({ children }: Props) {
  const [user, setUser] = useState(initUser())

  async function login (name: string) {
    const { user, error } = await UserService.login(name)
    if (user.id !== -1) {
      setUser(user)
    }
    return { error }
  }

  function signOut () {
    setUser(initUser())
  }

  return (
        <AuthContext.Provider value={{ signed: user.id !== -1, user, login, signOut }}>
            {children}
        </AuthContext.Provider>
  )
}

export function useAuth () {
  return useContext(AuthContext)
}
