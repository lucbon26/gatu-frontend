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
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1f2937" }}>
        GatuPatagonia
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#4b5563" }}>
        Nuestro sitio está en construcción 🛠️
      </p>
      <p style={{ fontSize: "1rem", color: "#6b7280", marginTop: "1rem" }}>
        Volvé pronto para conocer nuestros productos.
      </p>
    </main>
  );
}