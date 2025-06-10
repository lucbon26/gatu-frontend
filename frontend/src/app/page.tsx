'use client'

import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#f3f4f6",
      textAlign: "center",
      padding: "2rem"
    }}>

<Image
  src="/gatu-logo-final.png"
  alt="Logo GatuPatagonia"
  width={300}
  height={300}
  style={{ marginBottom: "2rem" }}
/>

      <p style={{ fontSize: "1.25rem", color: "#4b5563" }}>
        Vuelve pronto para conocer nuestros productos.
      </p>
      <p style={{ fontSize: "1rem", color: "#6b7280", marginTop: "1rem" }}>
        Mientras tanto visitanos en nuestros otros canales.
      </p>

      <div style={{
        marginTop: "2rem",
        display: "flex",
        gap: "1.5rem",
        justifyContent: "center"
      }}>
        <a
          href="https://wa.me/5492944715515"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
        >
          <MessageCircle color="#25D366" size={32} />
        </a>
        <a
          href="https://www.facebook.com/gatupatagonia"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <Facebook color="#1877F2" size={32} />
        </a>
        <a
          href="https://www.instagram.com/gatupatagonia/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <Instagram color="#E1306C" size={32} />
        </a>
      </div>
    </main>
  );
}
