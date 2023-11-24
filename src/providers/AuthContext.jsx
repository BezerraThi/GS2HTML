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

// ===================================================================

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null)
  const [userData, setUserData] = useState(null)

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

function useAuth() {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within a UserProvider')

  return context
}

export { AuthProvider, useAuth }
