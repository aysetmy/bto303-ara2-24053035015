'use client';
import React, { useState } from 'react';

export default function Home() {
  const [animals, setAnimals] = useState([
    { id: 1, name: 'Simbad', species: 'Aslan', age: 5, health: 'İyi - Aşılı', diet: 'Et (Günde 5kg)' },
    { id: 2, name: 'Bıcır', species: 'Maymun', age: 3, health: 'Kontrol Edilecek', diet: 'Meyve ve Muz' }
  ]);

  const [form, setForm] = useState({ name: '', species: '', age: '', health: '', diet: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.species) return;
    setAnimals([...animals, { id: Date.now(), ...form, age: Number(form.age) }]);
    setForm({ name: '', species: '', age: '', health: '', diet: '' });
  };

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: '40px 20px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#2c3e50', fontSize: '2.5rem', marginBottom: '10px' }}>🦁 Hayvanat Bahçesi Yönetim Sistemi</h1>
          <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>Hayvan Kayıtları, Sağlık Durumları ve Besleme Takip Paneli</p>
        </header>

        {/* Yeni Hayvan ve Bakım Formu */}
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)', marginBottom: '40px' }}>
          <h2 style={{ color: '#34495e', marginBottom: '20px', borderBottom: '2px solid #ecf0f1', paddingBottom: '10px' }}>✨ Yeni Hayvan ve Bakım Kaydı Ekle</h2>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#2c3e50' }}>Hayvan Adı</label>
              <input type="text" placeholder="Örn: Simba" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#2c3e50' }}>Tür</label>
              <input type="text" placeholder="Örn: Aslan, Fil" value={form.species} onChange={e => setForm({ ...form, species: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#2c3e50' }}>Yaş</label>
              <input type="number" placeholder="Örn: 4" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#2c3e50' }}>Sağlık Durumu</label>
              <input type="text" placeholder="Örn: Sağlıklı / Tedavide" value={form.health} onChange={e => setForm({ ...form, health: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#2c3e50' }}>Besleme Programı / Diyeti</label>
              <input type="text" placeholder="Örn: Günde 2 öğün et ve vitamin takviyesi" value={form.diet} onChange={e => setForm({ ...form, diet: e.target.value })} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
            </div>
            <button type="submit" style={{ gridColumn: 'span 2', padding: '12px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>
              Hayvanı ve Kayıtları Ekle
            </button>
          </form>
        </div>

        {/* Kayıtlı Hayvanlar ve Takip Listesi */}
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#34495e', marginBottom: '20px', borderBottom: '2px solid #ecf0f1', paddingBottom: '10px' }}>📋 Hayvan Listesi, Sağlık ve Besleme Takibi</h2>
          {animals.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '30px', color: '#94a3b8', fontStyle: 'italic' }}>Henüz kayıtlı hayvan bulunmuyor.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {animals.map((animal) => (
                <div key={animal.id} style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '8px', borderLeft: '5px solid #2563eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>{animal.name} <span style={{ fontSize: '0.9rem', fontWeight: 'normal', color: '#64748b' }}>({animal.species}, {animal.age} yaşında)</span></h3>
                    <p style={{ margin: '3px 0', color: '#475569', fontSize: '0.95rem' }}>🩺 <strong>Sağlık:</strong> {animal.health || 'Belirtilmedi'}</p>
                    <p style={{ margin: '3px 0', color: '#475569', fontSize: '0.95rem' }}>🥩 <strong>Besleme:</strong> {animal.diet || 'Belirtilmedi'}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}