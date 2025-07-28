'use client'

import { useSession, signIn } from 'next-auth/react'
import { useEffect } from 'react'

export default function Home() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn('google')
    }
  }, [status])

  if (status === 'loading') return <p>Cargando...</p>

  return (
    <main>
      <h1>Bienvenido, {session?.user?.name}</h1>
    </main>
  )
}
