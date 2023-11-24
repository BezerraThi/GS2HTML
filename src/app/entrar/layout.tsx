import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Responsive Web Development',
  description: 'Projeto Responsive Web Development'
}
export default function SignInLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
