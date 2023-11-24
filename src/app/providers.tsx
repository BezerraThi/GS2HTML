'use client'

import { AuthProvider } from '@/providers/AuthContext'

export function MainProviders({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}
