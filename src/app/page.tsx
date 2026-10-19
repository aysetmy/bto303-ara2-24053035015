'use client';
import React, { useState } from 'react';

export default function Home() {
  const [animals, setAnimals] = useState([
    { id: 1, name: 'Simbad', species: 'Aslan', age: 5, gender: 'Erkek', zone: 'Afrika Savanı', health: 'Sağlıklı - Aşılı', diet: 'Et (Günde 6kg)', lastFed: '13:00' },
    { id: 2, name: 'Bıcır', species: 'Maymun', age: 3, gender: 'Dişi', zone: 'Primat Adası', health: 'Gözetim Altında', diet: 'Meyve ve Sebze (Günde 3 öğün)', lastFed: '12:30' },
    { id: 3, name: 'Kocaayak', species: 'Fil', age: 12, gender: 'Erkek', zone: 'Asya Ormanları', health: 'Sağlıklı', diet: 'Saman ve Sebze (Günde 50kg)', lastFed: '11:00' }
  ]);

  const [search, setSearch] = useState('');
  const [form, setForm] = useState({ name: '', species: '', age: '', gender: 'Erkek', zone: '', health: 'Sağlıklı', diet: '', lastFed: '12:00' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.species || !form.zone) return;
    setAnimals([...animals, { id: Date.now(), ...form, age: Number(form.age) }]);
    setForm({ name: '', species: '', age: '', gender: 'Erkek', zone: '', health: 'Sağlıklı', diet: '', lastFed: '12:00' });
  };

  const handleDelete = (id: number) => {
    setAnimals(animals.filter(a => a.id !== id));
  };

  const filteredAnimals = animals.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.species.toLowerCase().includes(search.toLowerCase()) ||
    a.zone.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={{ minHeight: '100vh', background: '#0f172a', color: '#f8fafc', padding: '40px 20px', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Başlık */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '10px' }}>
            🐾 ZooMaster Pro: Hayvanat Bahçesi Yönetim Paneli
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Hayvan Kayıtları, Sağlık Takibi, Besleme Programları ve Barınak Yönetimi</p>
        </header>

        {/* İstatistik Kartları */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
            <p style={{ color: '#94a3b8', margin: '0 0 5px 0', fontSize: '0.9rem' }}>Toplam Hayvan Sayısı</p>
            <h3 style={{ fontSize: '2rem', margin: 0, color: '#38bdf8' }}>{animals.length}</h3>
          </div>
          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
            <p style={{ color: '#94a3b8', margin: '0 0 5px 0', fontSize: '0.9rem' }}>Sağlık Durumu İyi</p>
            <h3 style={{ fontSize: '2rem', margin: 0, color: '#4ade80' }}>{animals.filter(a => a.health.includes('Sağlıklı')).length}</h3>
          </div>
          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
            <p style={{ color: '#94a3b8', margin: '0 0 5px 0', fontSize: '0.9rem' }}>Özel Gözetimdekiler</p>
            <h3 style={{ fontSize: '2rem', margin: 0, color: '#facc15' }}>{animals.filter(a => !a.health.includes('Sağlıklı')).length}</h3>
          </div>
        </div>

        {/* Ana Grid: Form ve Liste */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '30px', alignItems: 'start' }}>

          {/* Yeni Kayıt Formu */}
          <div style={{ background: '#1e293b', padding: '30px', borderRadius: '16px', border: '1px solid #334155', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#f1f5f9', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>✨ Yeni Hayvan ve Bakım Kaydı</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '5px' }}>Hayvan Adı</label>
                <input type="text" placeholder="Örn: Simba" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#0f172a', border: '1px solid #475569', color: 'white', outline: 'none' }} required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '5px' }}>Tür</label>
                  <input type="text" placeholder="Örn: Aslan" value={form.species} onChange={e => setForm({ ...form, species: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#0f172a', border: '1px solid #475569', color: 'white', outline: 'none' }} required />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '5px' }}>Yaş</label>
                  <input type="number" placeholder="Örn: 5" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#0f172a', border: '1px solid #475569', color: 'white', outline: 'none' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '5px' }}>Cinsiyet</label>
                  <select value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#0f172a', border: '1px solid #475569', color: 'white', outline: 'none' }}>
                    <option value="Erkek">Erkek</option>
                    <option value="Dişi">Dişi</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '5px' }}>Barınak / Bölge</label>
                  <input type="text" placeholder="Örn: Afrika Savanı" value={form.zone} onChange={e => setForm({ ...form, zone: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#0f172a', border: '1px solid #475569', color: 'white', outline: 'none' }} required />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '5px' }}>Sağlık Durumu & Aşılar</label>
                <input type="text" placeholder="Örn: Sağlıklı / Aşıları Tam" value={form.health} onChange={e => setForm({ ...form, health: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#0f172a', border: '1px solid #475569', color: 'white', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '5px' }}>Besleme / Diyet Programı</label>
                <input type="text" placeholder="Örn: Et ve Vitamin (Günde 5kg)" value={form.diet} onChange={e => setForm({ ...form, diet: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#0f172a', border: '1px solid #475569', color: 'white', outline: 'none' }} />
              </div>
              <button type="submit" style={{ padding: '12px', background: 'linear-gradient(to right, #2563eb, #3b82f6)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', marginTop: '10px', transition: 'opacity 0.2s' }}>
                Sisteme Kaydet
              </button>
            </form>
          </div>

          {/* Liste ve Arama Bölümü */}
          <div style={{ background: '#1e293b', padding: '30px', borderRadius: '16px', border: '1px solid #334155', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #334155', paddingBottom: '10px', gap: '15px' }}>
              <h2 style={{ fontSize: '1.3rem', color: '#f1f5f9', margin: 0 }}>📋 Canlı Hayvan Listesi</h2>
              <input type="text" placeholder="Hayvan veya tür ara..." value={search} onChange={e => setSearch(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', background: '#0f172a', border: '1px solid #475569', color: 'white', fontSize: '0.9rem', outline: 'none', width: '180px' }} />
            </div>

            {filteredAnimals.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#64748b', fontStyle: 'italic' }}>Aradığınız kriterlere uygun hayvan bulunamadı.</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxHeight: '600px', overflowY: 'auto' }}>
                {filteredAnimals.map((animal) => (
                  <div key={animal.id} style={{ background: '#0f172a', padding: '18px', borderRadius: '12px', border: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                        <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '1.1rem' }}>{animal.name}</h3>
                        <span style={{ background: '#334155', color: '#38bdf8', padding: '2px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '600' }}>{animal.species}</span>
                        <span style={{ background: '#1e293b', color: '#94a3b8', padding: '2px 8px', borderRadius: '6px', fontSize: '0.75rem' }}>{animal.zone}</span>
                      </div>
                      <p style={{ margin: '4px 0', color: '#cbd5e1', fontSize: '0.9rem' }}>👤 <strong>Yaş / Cinsiyet:</strong> {animal.age} yaş, {animal.gender}</p>
                      <p style={{ margin: '4px 0', color: '#cbd5e1', fontSize: '0.9rem' }}>🩺 <strong>Sağlık / Aşı:</strong> <span style={{ color: animal.health.includes('Sağlıklı') ? '#4ade80' : '#facc15' }}>{animal.health}</span></p>
                      <p style={{ margin: '4px 0', color: '#cbd5e1', fontSize: '0.9rem' }}>🥩 <strong>Besleme:</strong> {animal.diet}</p>
                    </div>
                    <button onClick={() => handleDelete(animal.id)} style={{ background: '#7f1d1d', color: '#fca5a5', border: 'none', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '600' }}>
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