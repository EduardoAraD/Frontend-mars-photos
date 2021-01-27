import React, { createContext, ReactNode, useContext, useState } from 'react'

interface Props {
    children: ReactNode
}

interface AuthContextData {
    signed: boolean;
    user: string;

    login(name:string): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider ({ children }: Props) {
  const [user, setUser] = useState('')

  function login (name: string) {
    setUser(name)
  }

  return (
        <AuthContext.Provider value={{ signed: user !== '', user, login }}>
            {children}
        </AuthContext.Provider>
  )
}

export function useAuth () {
  return useContext(AuthContext)
}
