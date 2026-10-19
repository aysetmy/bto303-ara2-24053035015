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

  const total = animals.length;
  const healthy = animals.filter(a => a.health.includes('Sağlıklı')).length;
  const attention = animals.filter(a => !a.health.includes('Sağlıklı')).length;

  return (
    <main style={{ minHeight: '100vh', background: '#111b11', color: '#e0e0e0', padding: '40px 20px', fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>

        {/* Üst Bilgi - Referans Tasarıma Göre Düzenlenmiş */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', marginBottom: '60px', borderBottom: '1px solid #333', paddingBottom: '20px' }}>
          <header>
            <h1 style={{ fontSize: '3rem', fontWeight: '700', color: '#4caf50', margin: '0 0 10px 0' }}>PROTECTING OUR</h1>
            <h1 style={{ fontSize: '3rem', fontWeight: '900', color: '#a5d6a7', margin: 0 }}>ENVIRONMENT</h1>
            <p style={{ color: '#9e9e9e', fontSize: '1.2rem', marginTop: '15px', fontStyle: 'italic' }}>Wildlife Conservation & Zoo Management</p>
          </header>
          <div style={{ background: '#1a2c1a', padding: '15px', borderRadius: '10px', border: '2px solid #a5d6a7', textAlign: 'center' }}>
            <p style={{ color: '#a5d6a7', margin: 0, fontSize: '0.9rem' }}>Global Impact Score</p>
            <h3 style={{ fontSize: '2.5rem', margin: '5px 0', color: '#c8e6c9' }}>94%</h3>
          </div>
        </div>

        {/* İstatistik Kartları - Referans Grid Düzeni */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '40px' }}>
          {[
            { title: 'TOTAL SPECIES PROTECTED', value: total, color: '#a5d6a7' },
            { title: 'HEALTHY POPULATION', value: healthy, color: '#81c784' },
            { title: 'SPECIAL PROTECTION NEEDED', value: attention, color: '#c5e1a5' }
          ].map((card, index) => (
            <div key={index} style={{ background: '#1a2c1a', padding: '25px', borderRadius: '10px', border: `1px solid #333`, boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
              <p style={{ color: '#a5d6a7', margin: '0 0 15px 0', fontSize: '0.9rem', fontWeight: '600' }}>{card.title}</p>
              <h3 style={{ fontSize: '3.5rem', margin: 0, color: card.color, fontWeight: '800' }}>{card.value}</h3>
            </div>
          ))}
        </div>

        {/* Ana İçerik - Form ve Liste Grid Yapısı */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '40px', alignItems: 'start' }}>

          {/* Yeni Kayıt Formu - Temiz Tasarım */}
          <div style={{ background: '#1a2c1a', padding: '40px', borderRadius: '12px', border: '1px solid #333', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '30px', color: '#a5d6a7', borderBottom: '1px solid #444', paddingBottom: '15px' }}>WHAT IS CONSERVATION?</h2>
            <p style={{ color: '#9e9e9e', fontSize: '1rem', lineHeight: '1.6', marginBottom: '25px' }}>
              Conservation refers to the actions taken to protect natural environments, wildlife, and resources such as water, soil, forests, and clean air. It aims to use resources wisely so that nature can continue to function in a healthy way. The goal is to achieve balance between human needs and the planet's capacity to support life.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Animal Name (e.g., 'Leo')" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={{ width: '100%', padding: '12px', borderRadius: '6px', background: '#111b11', border: '1px solid #444', color: 'white', outline: 'none' }} required />
              <input type="text" placeholder="Species (e.g., 'Lion')" value={form.species} onChange={e => setForm({ ...form, species: e.target.value })} style={{ width: '100%', padding: '12px', borderRadius: '6px', background: '#111b11', border: '1px solid #444', color: 'white', outline: 'none' }} required />
              <input type="text" placeholder="Zone (e.g., 'African Savanna')" value={form.zone} onChange={e => setForm({ ...form, zone: e.target.value })} style={{ width: '100%', padding: '12px', borderRadius: '6px', background: '#111b11', border: '1px solid #444', color: 'white', outline: 'none' }} required />
              <button type="submit" style={{ padding: '14px', background: '#2e7d32', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', marginTop: '15px', transition: 'background 0.2s' }}>
                ADD TO CONSERVATION LIST
              </button>
            </form>
          </div>

          {/* Canlı Hayvan Listesi - Grid Yapısı */}
          <div style={{ background: '#1a2c1a', padding: '40px', borderRadius: '12px', border: '1px solid #333', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid #444', paddingBottom: '15px' }}>
              <h2 style={{ fontSize: '1.6rem', color: '#a5d6a7', margin: 0 }}>LIVE CONSERVATION STATUS</h2>
              <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} style={{ padding: '10px', borderRadius: '6px', background: '#111b11', border: '1px solid #444', color: 'white', fontSize: '0.9rem', outline: 'none', width: '200px' }} />
            </div>

            {filteredAnimals.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#666', fontStyle: 'italic' }}>No animals match your search criteria.</div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', maxHeight: '600px', overflowY: 'auto' }}>
                {filteredAnimals.map((animal) => (
                  <div key={animal.id} style={{ background: '#111b11', padding: '25px', borderRadius: '10px', border: '1px solid #444', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <h3 style={{ margin: 0, color: '#c8e6c9', fontSize: '1.2rem' }}>{animal.name}</h3>
                      <span style={{ background: '#2e7d32', color: 'white', padding: '3px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>{animal.species}</span>
                    </div>
                    <p style={{ margin: '5px 0', color: '#9e9e9e', fontSize: '0.9rem' }}><strong>Zone:</strong> {animal.zone}</p>
                    <p style={{ margin: '5px 0', color: '#9e9e9e', fontSize: '0.9rem' }}><strong>Health:</strong> <span style={{ color: animal.health.includes('Sağlıklı') ? '#81c784' : '#ffd54f' }}>{animal.health}</span></p>
                    <p style={{ margin: '5px 0', color: '#9e9e9e', fontSize: '0.9rem' }}><strong>Diet:</strong> {animal.diet}</p>
                    <button onClick={() => handleDelete(animal.id)} style={{ background: '#d32f2f', color: '#ffcdd2', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '700', marginTop: '10px', textTransform: 'uppercase' }}>
                      Remove from List
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