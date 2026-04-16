export default function Page() {
  return (
    <div style={{ 
      backgroundColor: '#111', 
      color: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀 Portal de Herson</h1>
      <p style={{ fontSize: '1.2rem', color: '#888' }}>
        ¡Misión cumplida! Tu portal ya está vivo en internet.
      </p>
      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        border: '1px solid #333', 
        borderRadius: '8px' 
      }}>
        <p>Próximo paso: Agregar tus aplicaciones aquí.</p>
      </div>
    </div>
  )
}
