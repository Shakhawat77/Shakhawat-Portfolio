function App() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      color: 'white'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '40px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '20px',
        maxWidth: '600px'
      }}>
        <div style={{
          background: '#4ecdc4',
          padding: '10px 20px',
          borderRadius: '25px',
          display: 'inline-block',
          marginBottom: '20px'
        }}>
          ✅ React is Working!
        </div>
        
        <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>
          Jensen Omega
        </h1>
        
        <h2 style={{ marginBottom: '20px' }}>
          Software Developer Portfolio
        </h2>
        
        <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>
          🎉 Success! Your React portfolio is now running properly.
        </p>
        
        <button 
          onClick={() => alert('🎉 React button works!')}
          style={{
            background: '#ff6b6b',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1.1em',
            cursor: 'pointer',
            margin: '10px'
          }}
        >
          Test React Button
        </button>
        
        <div style={{ marginTop: '30px', fontSize: '0.9em', opacity: '0.8' }}>
          <p>🌐 Server: http://192.168.0.102:3000/</p>
          <p>🔧 Status: React Development Server Active</p>
        </div>
      </div>
    </div>
  );
}

export default App;