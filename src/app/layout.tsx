import '@/styles/globals.scss'
import styles from '@/styles/pages/home.module.scss'

import type { Metadata } from 'next'

import { Header, Footer } from '@/components'

import { MainProviders } from './providers'

export const metadata: Metadata = {
  title: 'Responsive Web Development',
  description: 'Projeto Responsive Web Development'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <MainProviders>
          <div className={styles.page_wrapper}>
            <Header />
            <div className={styles.page_content_wrapper}>{children}</div>
            <Footer />
          </div>
        </MainProviders>
      </body>
    </html>
  )
}
