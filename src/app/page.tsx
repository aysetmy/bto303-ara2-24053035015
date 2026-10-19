'use client';
import React, { useState } from 'react';

export default function Home() {
  const [animals, setAnimals] = useState([
    { id: 1, name: 'Simbad', species: 'Aslan', age: 5, gender: 'Erkek', zone: 'Afrika Savanı', health: 'Sağlıklı - Aşılı', diet: 'Et (Günde 6kg)' },
    { id: 2, name: 'Bıcır', species: 'Maymun', age: 3, gender: 'Dişi', zone: 'Primat Adası', health: 'Gözetim Altında', diet: 'Meyve ve Sebze (Günde 3 öğün)' },
    { id: 3, name: 'Kocaayak', species: 'Fil', age: 12, gender: 'Erkek', zone: 'Asya Ormanları', health: 'Sağlıklı', diet: 'Saman ve Sebze (Günde 50kg)' }
  ]);

  const [search, setSearch] = useState('');
  const [form, setForm] = useState({ name: '', species: '', age: '', gender: 'Erkek', zone: '', health: 'Sağlıklı', diet: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.species || !form.zone) return;
    setAnimals([...animals, { id: Date.now(), ...form, age: Number(form.age) }]);
    setForm({ name: '', species: '', age: '', gender: 'Erkek', zone: '', health: 'Sağlıklı', diet: '' });
  };

  const handleDelete = (id: number) => {
    setAnimals(animals.filter(a => a.id !== id));
  };

  const filteredAnimals = animals.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.species.toLowerCase().includes(search.toLowerCase()) ||
    a.zone.toLowerCase().includes(search.toLowerCase())
  );

  const total = animals.length;
  const healthy = animals.filter(a => a.health.includes('Sağlıklı')).length;
  const attention = animals.filter(a => !a.health.includes('Sağlıklı')).length;

  return (
    <main style={{
      minHeight: '100vh',
      background: '#f4f7f4', // Ferah açık/beyazımsı doğa tonu
      backgroundImage: 'radial-gradient(#2e7d32 0.75px, transparent 0.75px)', // Hafif yaprak/nokta doğa dokusu
      backgroundSize: '24px 24px',
      color: '#2c3e50',
      padding: '40px 20px',
      fontFamily: 'Helvetica Neue, Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>

        {/* Üst Bilgi - Beyaz/Yeşil Doğa Teması */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', marginBottom: '50px', borderBottom: '2px solid #c8e6c9', paddingBottom: '20px' }}>
          <header>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
              <span style={{ fontSize: '1.8rem' }}>🌿</span>
              <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1b5e20', margin: 0 }}>PROTECTING OUR</h1>
            </div>
            <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#2e7d32', margin: 0, letterSpacing: '1px' }}>WILDLIFE & ENVIRONMENT</h1>
            <p style={{ color: '#558b2f', fontSize: '1.1rem', marginTop: '10px', fontWeight: '600' }}>Hayvanat Bahçesi Yönetim ve Koruma Paneli</p>
          </header>
          <div style={{ background: '#ffffff', padding: '15px 25px', borderRadius: '12px', border: '2px solid #a5d6a7', textAlign: 'center', boxShadow: '0 4px 15px rgba(46,125,50,0.1)' }}>
            <p style={{ color: '#558b2f', margin: 0, fontSize: '0.85rem', fontWeight: '700' }}>EKOSİSTEM SKORU</p>
            <h3 style={{ fontSize: '2.2rem', margin: '5px 0', color: '#2e7d32', fontWeight: '800' }}>98%</h3>
          </div>
        </div>

        {/* İstatistik Kartları - Beyaz zemin & Yeşil vurgular */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', marginBottom: '40px' }}>
          {[
            { title: 'KORUNAN TOPLAM HAYVAN', value: total, color: '#1b5e20' },
            { title: 'SAĞLIKLI POPÜLASYON', value: healthy, color: '#2e7d32' },
            { title: 'ÖZEL GÖZETİMDEKİLER', value: attention, color: '#689f38' }
          ].map((card, index) => (
            <div key={index} style={{ background: '#ffffff', padding: '25px', borderRadius: '12px', border: '1px solid #c8e6c9', boxShadow: '0 6px 20px rgba(0,0,0,0.05)' }}>
              <p style={{ color: '#558b2f', margin: '0 0 10px 0', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.5px' }}>{card.title}</p>
              <h3 style={{ fontSize: '3rem', margin: 0, color: card.color, fontWeight: '800' }}>{card.value}</h3>
            </div>
          ))}
        </div>

        {/* Ana İçerik - Form ve Liste */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '30px', alignItems: 'start' }}>

          {/* Yeni Kayıt Formu - Şık Beyaz Kart */}
          <div style={{ background: '#ffffff', padding: '35px', borderRadius: '14px', border: '1px solid #c8e6c9', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', borderBottom: '2px solid #f1f8f1', paddingBottom: '12px' }}>
              <span>🍃</span>
              <h2 style={{ fontSize: '1.3rem', color: '#1b5e20', margin: 0, fontWeight: '700' }}>Yeni Hayvan & Bakım Ekle</h2>
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#33691e', marginBottom: '5px' }}>Hayvan Adı</label>
                <input type="text" placeholder="Örn: Simba" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={{ width: '100%', padding: '11px', borderRadius: '8px', background: '#f9fbf9', border: '1px solid #c8e6c9', color: '#2c3e50', outline: 'none' }} required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#33691e', marginBottom: '5px' }}>Tür</label>
                  <input type="text" placeholder="Örn: Aslan" value={form.species} onChange={e => setForm({ ...form, species: e.target.value })} style={{ width: '100%', padding: '11px', borderRadius: '8px', background: '#f9fbf9', border: '1px solid #c8e6c9', color: '#2c3e50', outline: 'none' }} required />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#33691e', marginBottom: '5px' }}>Yaş</label>
                  <input type="number" placeholder="Örn: 5" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} style={{ width: '100%', padding: '11px', borderRadius: '8px', background: '#f9fbf9', border: '1px solid #c8e6c9', color: '#2c3e50', outline: 'none' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#33691e', marginBottom: '5px' }}>Cinsiyet</label>
                  <select value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })} style={{ width: '100%', padding: '11px', borderRadius: '8px', background: '#f9fbf9', border: '1px solid #c8e6c9', color: '#2c3e50', outline: 'none' }}>
                    <option value="Erkek">Erkek</option>
                    <option value="Dişi">Dişi</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#33691e', marginBottom: '5px' }}>Barınak / Bölge</label>
                  <input type="text" placeholder="Örn: Afrika Savanı" value={form.zone} onChange={e => setForm({ ...form, zone: e.target.value })} style={{ width: '100%', padding: '11px', borderRadius: '8px', background: '#f9fbf9', border: '1px solid #c8e6c9', color: '#2c3e50', outline: 'none' }} required />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#33691e', marginBottom: '5px' }}>Sağlık Durumu & Aşılar</label>
                <input type="text" placeholder="Örn: Sağlıklı / Aşıları Tam" value={form.health} onChange={e => setForm({ ...form, health: e.target.value })} style={{ width: '100%', padding: '11px', borderRadius: '8px', background: '#f9fbf9', border: '1px solid #c8e6c9', color: '#2c3e50', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#33691e', marginBottom: '5px' }}>Besleme / Diyet Programı</label>
                <input type="text" placeholder="Örn: Et ve Vitamin (Günde 5kg)" value={form.diet} onChange={e => setForm({ ...form, diet: e.target.value })} style={{ width: '100%', padding: '11px', borderRadius: '8px', background: '#f9fbf9', border: '1px solid #c8e6c9', color: '#2c3e50', outline: 'none' }} />
              </div>
              <button type="submit" style={{ padding: '13px', background: '#2e7d32', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', marginTop: '10px', boxShadow: '0 4px 10px rgba(46,125,50,0.2)' }}>
                Sisteme Kaydet
              </button>
            </form>
          </div>

          {/* Canlı Hayvan Listesi - Beyaz Kart */}
          <div style={{ background: '#ffffff', padding: '35px', borderRadius: '14px', border: '1px solid #c8e6c9', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #f1f8f1', paddingBottom: '12px', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>📋</span>
                <h2 style={{ fontSize: '1.3rem', color: '#1b5e20', margin: 0, fontWeight: '700' }}>Kayıtlı Hayvanlar & Takip</h2>
              </div>
              <input type="text" placeholder="Ara..." value={search} onChange={e => setSearch(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', background: '#f9fbf9', border: '1px solid #c8e6c9', color: '#2c3e50', fontSize: '0.9rem', outline: 'none', width: '160px' }} />
            </div>

            {filteredAnimals.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#8c8c8c', fontStyle: 'italic' }}>Aradığınız kriterlere uygun kayıt bulunamadı.</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxHeight: '580px', overflowY: 'auto' }}>
                {filteredAnimals.map((animal) => (
                  <div key={animal.id} style={{ background: '#f9fbf9', padding: '20px', borderRadius: '10px', border: '1px solid #dcedc8', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                        <h3 style={{ margin: 0, color: '#1b5e20', fontSize: '1.15rem' }}>{animal.name}</h3>
                        <span style={{ background: '#e8f5e9', color: '#2e7d32', padding: '2px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700', border: '1px solid #c8e6c9' }}>{animal.species}</span>
                        <span style={{ background: '#f1f8f1', color: '#558b2f', padding: '2px 8px', borderRadius: '6px', fontSize: '0.75rem' }}>{animal.zone}</span>
                      </div>
                      <p style={{ margin: '4px 0', color: '#455a64', fontSize: '0.9rem' }}>👤 <strong>Yaş / Cinsiyet:</strong> {animal.age} yaş, {animal.gender}</p>
                      <p style={{ margin: '4px 0', color: '#455a64', fontSize: '0.9rem' }}>🩺 <strong>Sağlık:</strong> <span style={{ color: animal.health.includes('Sağlıklı') ? '#2e7d32' : '#f57f17', fontWeight: '600' }}>{animal.health}</span></p>
                      <p style={{ margin: '4px 0', color: '#455a64', fontSize: '0.9rem' }}>🥩 <strong>Besleme:</strong> {animal.diet}</p>
                    </div>
                    <button onClick={() => handleDelete(animal.id)} style={{ background: '#ffebee', color: '#c62828', border: '1px solid #ffcdd2', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '700' }}>
                      Sil
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}