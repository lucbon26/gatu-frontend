// layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { AuthProvider } from './providers'

export const metadata = {
  title: 'GatuPatagonia',
  description: 'Tu rincón feliz del sur',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}