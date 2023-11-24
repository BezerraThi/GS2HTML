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

import { useRouter } from 'next/navigation'

import { getLoginStatus, loginUser, logoutUser } from '@/utils/localStorageAuth'

// ===================================================================

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const router = useRouter()

  const [isUserLogged, setIsUserLogged] = useState(false)
  const [userType, setUserType] = useState(null)

  // =================================================================

  const handleStorageChange = () => {
    const logResponse = getLoginStatus()

    setIsUserLogged(!!logResponse)
    setUserType(logResponse)
  }

  const handleLogin = useCallback((userType) => {
    loginUser(userType)

    handleStorageChange()
  }, [])

  const handleLogout = useCallback(() => {
    logoutUser()

    handleStorageChange()

    router.push('/')
  }, [])

  // -----------------------------------------------------------------

  // useEffect(() => {
  //   window.addEventListener('storage', handleStorageChange)

  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange)
  //   }
  // }, [])

  // =================================================================

  const AuthContextValues = useMemo(() => {
    return {
      isUserLogged,
      userType,
      handleLogin,
      handleLogout
    }
  }, [userType, isUserLogged, handleLogin, handleLogout])

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
