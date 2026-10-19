import React from 'react';

export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#2c3e50', textAlign: 'center' }}>🐾 Hayvanat Bahçesi Yönetim Sistemi</h1>

      <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginTop: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2>Yeni Hayvan Ekle</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input type="text" placeholder="Hayvan Adı" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <input type="text" placeholder="Tür (Örn: Aslan, Maymun)" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <input type="number" placeholder="Yaş" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <button type="submit" style={{ padding: '10px', background: '#27ae60', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Hayvanı Kaydet
          </button>
        </form>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2>Kayıtlı Hayvanlar Listesi</h2>
        <p style={{ color: '#7f8c8d' }}>Henüz kayıtlı bir hayvan bulunmuyor. Yukarıdaki formdan ekleme yapabilirsiniz.</p>
      </div>
    </main>
  );
}