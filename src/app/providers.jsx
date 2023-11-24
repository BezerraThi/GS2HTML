'use client'

import { AuthProvider } from '@/providers/AuthContext'

export function MainProviders({ children }) {
  return <AuthProvider>{children}</AuthProvider>
}
