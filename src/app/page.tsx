export default function Page() {
  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      color: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{ 
        padding: '40px', 
        borderRadius: '20px', 
        border: '1px solid #333',
        background: 'linear-gradient(145deg, #111, #050505)'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🚀 Portal de Herson</h1>
        <p style={{ fontSize: '1.2rem', color: '#aaa', marginBottom: '30px' }}>
          ¡Tu portal ya está vivo en internet!
        </p>
        <div style={{ 
          display: 'inline-block',
          padding: '10px 20px', 
          borderRadius: '50px', 
          backgroundColor: '#222',
          fontSize: '0.9rem',
          color: '#00ff88',
          border: '1px solid #00ff88'
        }}>
          ● Sistema Activo
        </div>
      </div>
    </div>
  )
}
