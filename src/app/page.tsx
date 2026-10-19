import React from 'react';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: '40px 20px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* Başlık */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#2c3e50', fontSize: '2.5rem', marginBottom: '10px' }}>🦁 Hayvanat Bahçesi Yönetim Sistemi</h1>
          <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>Hayvanları kolayca listeleyin, ekleyin ve yönetin.</p>
        </header>

        {/* Form Kartı */}
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)', marginBottom: '40px' }}>
          <h2 style={{ color: '#34495e', marginBottom: '20px', borderBottom: '2px solid #ecf0f1', paddingBottom: '10px' }}>✨ Yeni Hayvan Ekle</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#2c3e50' }}>Hayvan Adı</label>
              <input type="text" placeholder="Örn: Simbad" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#2c3e50' }}>Tür</label>
              <input type="text" placeholder="Örn: Aslan, Maymun, Zebra" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#2c3e50' }}>Yaş</label>
              <input type="number" placeholder="Örn: 5" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} />
            </div>
            <button type="submit" style={{ padding: '14px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: 'background 0.2s', marginTop: '10px' }}>
              Hayvanı Kaydet
            </button>
          </form>
        </div>

        {/* Liste Kartı */}
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#34495e', marginBottom: '20px', borderBottom: '2px solid #ecf0f1', paddingBottom: '10px' }}>📋 Kayıtlı Hayvanlar Listesi</h2>
          <div style={{ textAlign: 'center', padding: '30px', color: '#94a3b8', fontStyle: 'italic' }}>
            Henüz kayıtlı bir hayvan bulunmuyor. Yukarıdaki formdan yeni bir hayvan ekleyebilirsiniz.
          </div>
        </div>

      </div>
    </main>
  );
}