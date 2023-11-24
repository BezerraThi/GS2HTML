/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { AuthContextData, IUserData } from '@/@types/Auth'

// ===================================================================

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null)
  const [userData, setUserData] = useState<IUserData | null>(null)

  // -----------------------------------------------------------------

  const isUserLogged = useMemo(() => {
    return false
  }, [userData])

  // =================================================================

  useEffect(() => {}, [])

  // =================================================================

  const handleLogout = useCallback(async () => {
    // const response = await handleLogoutUser()

    console.log('deslogando')

    // if (!response) {
    //   // Função de alerta falha ao fazer logout
    //   return
    // }
  }, [])

  // =================================================================

  const AuthContextValues = useMemo(() => {
    return {
      userId,
      userData,
      isUserLogged,
      handleLogout
    }
  }, [userId, userData, isUserLogged, handleLogout])

  return (
    <AuthContext.Provider value={AuthContextValues}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within a UserProvider')

  return context
}

export { AuthProvider, useAuth }
