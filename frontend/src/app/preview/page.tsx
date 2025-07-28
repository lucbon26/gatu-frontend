'use client';

import { useSession, signOut } from 'next-auth/react';

export default function PreviewPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Cargando...</p>;
  }

  if (!session) {
    return <p>No autorizado</p>;
  }

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Bienvenido, {session.user?.name}
      </h1>
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
   style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#ef4444',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        Cerrar sesión
      </button>
    </main>
  );
}
