const Index = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ color: '#6366f1', fontSize: '24px', margin: 0 }}>TalentUp</h1>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Desarrolladores</a>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Empresas</a>
          </div>
        </div>
      </header>
      
      <main style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>
          Conecta <span style={{ color: '#6366f1' }}>talento</span> con <span style={{ color: '#6366f1' }}>oportunidades</span>
        </h1>
        <p style={{ fontSize: '20px', color: '#666', marginBottom: '40px', lineHeight: '1.6' }}>
          TalentUp es la plataforma donde desarrolladores excepcionales se encuentran con empresas innovadoras.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{ 
            backgroundColor: '#6366f1', 
            color: 'white', 
            border: 'none', 
            padding: '12px 24px', 
            borderRadius: '6px', 
            fontSize: '16px', 
            cursor: 'pointer' 
          }}>
            Comenzar Gratis
          </button>
          <button style={{ 
            backgroundColor: 'transparent', 
            color: '#6366f1', 
            border: '1px solid #6366f1', 
            padding: '12px 24px', 
            borderRadius: '6px', 
            fontSize: '16px', 
            cursor: 'pointer' 
          }}>
            Explorar Talento
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;
