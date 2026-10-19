/**
 * prisma/seed.ts
 * Gerçekçi örnek verilerle veritabanını doldurur.
 * Her ana varlık için en az 10 kayıt (B3 rubrik maddesi).
 *
 * Çalıştır: npx prisma db seed
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seed başladı...");

  // ── 1. Kafesler (10 adet) ─────────────────────────────────────────────────
  const kafesler = await Promise.all([
    prisma.kafes.upsert({ where: { id: 1 }, update: {}, create: { ad: "Afrika Savannası", kapasite: 4, konum: "A Blok - Açık Alan", tur: "Açık Alan" } }),
    prisma.kafes.upsert({ where: { id: 2 }, update: {}, create: { ad: "Tropikal Orman", kapasite: 6, konum: "B Blok - Sera", tur: "Kapalı Kafes" } }),
    prisma.kafes.upsert({ where: { id: 3 }, update: {}, create: { ad: "Kutup Köşesi", kapasite: 3, konum: "C Blok - Soğuk Bölüm", tur: "Kapalı Kafes" } }),
    prisma.kafes.upsert({ where: { id: 4 }, update: {}, create: { ad: "Kuş Bahçesi", kapasite: 12, konum: "D Blok - Teras", tur: "Teras" } }),
    prisma.kafes.upsert({ where: { id: 5 }, update: {}, create: { ad: "Sürüngenler Evi", kapasite: 8, konum: "E Blok - Zemin Kat", tur: "Kapalı Kafes" } }),
    prisma.kafes.upsert({ where: { id: 6 }, update: {}, create: { ad: "Primatlar Adası", kapasite: 5, konum: "F Blok - Orta Alan", tur: "Açık Alan" } }),
    prisma.kafes.upsert({ where: { id: 7 }, update: {}, create: { ad: "Su Canlıları", kapasite: 10, konum: "G Blok - Havuz", tur: "Havuz" } }),
    prisma.kafes.upsert({ where: { id: 8 }, update: {}, create: { ad: "Küçük Memeliler", kapasite: 7, konum: "H Blok - İç Alan", tur: "Kapalı Kafes" } }),
    prisma.kafes.upsert({ where: { id: 9 }, update: {}, create: { ad: "Gece Hayvanları", kapasite: 5, konum: "I Blok - Karanlık Oda", tur: "Kapalı Kafes" } }),
    prisma.kafes.upsert({ where: { id: 10 }, update: {}, create: { ad: "Kelebek Bahçesi", kapasite: 20, konum: "J Blok - Cam Sera", tur: "Sera" } }),
  ]);
  console.log(`✅ ${kafesler.length} kafes oluşturuldu`);

  // ── 2. Bakıcılar (10 adet) ────────────────────────────────────────────────
  const bakicilar = await Promise.all([
    prisma.bakici.upsert({ where: { eposta: "ali.yilmaz@okul.edu.tr" }, update: {}, create: { ad: "Ali", soyad: "Yılmaz", rol: "Bakıcı", eposta: "ali.yilmaz@okul.edu.tr" } }),
    prisma.bakici.upsert({ where: { eposta: "ayse.kaya@okul.edu.tr" }, update: {}, create: { ad: "Ayşe", soyad: "Kaya", rol: "Veteriner", eposta: "ayse.kaya@okul.edu.tr" } }),
    prisma.bakici.upsert({ where: { eposta: "mehmet.demir@okul.edu.tr" }, update: {}, create: { ad: "Mehmet", soyad: "Demir", rol: "Bakıcı", eposta: "mehmet.demir@okul.edu.tr" } }),
    prisma.bakici.upsert({ where: { eposta: "fatma.celik@okul.edu.tr" }, update: {}, create: { ad: "Fatma", soyad: "Çelik", rol: "Eğitmen", eposta: "fatma.celik@okul.edu.tr" } }),
    prisma.bakici.upsert({ where: { eposta: "hasan.sahin@okul.edu.tr" }, update: {}, create: { ad: "Hasan", soyad: "Şahin", rol: "Bakıcı", eposta: "hasan.sahin@okul.edu.tr" } }),
    prisma.bakici.upsert({ where: { eposta: "zeynep.arslan@okul.edu.tr" }, update: {}, create: { ad: "Zeynep", soyad: "Arslan", rol: "Veteriner", eposta: "zeynep.arslan@okul.edu.tr" } }),
    prisma.bakici.upsert({ where: { eposta: "can.ozturk@okul.edu.tr" }, update: {}, create: { ad: "Can", soyad: "Öztürk", rol: "Eğitmen", eposta: "can.ozturk@okul.edu.tr" } }),
    prisma.bakici.upsert({ where: { eposta: "selin.kurt@okul.edu.tr" }, update: {}, create: { ad: "Selin", soyad: "Kurt", rol: "Bakıcı", eposta: "selin.kurt@okul.edu.tr" } }),
    prisma.bakici.upsert({ where: { eposta: "emre.polat@okul.edu.tr" }, update: {}, create: { ad: "Emre", soyad: "Polat", rol: "Bakıcı", eposta: "emre.polat@okul.edu.tr" } }),
    prisma.bakici.upsert({ where: { eposta: "nisa.aydın@okul.edu.tr" }, update: {}, create: { ad: "Nisa", soyad: "Aydın", rol: "Veteriner", eposta: "nisa.aydın@okul.edu.tr" } }),
  ]);
  console.log(`✅ ${bakicilar.length} bakıcı oluşturuldu`);

  // ── 3. Hayvanlar (12 adet) ────────────────────────────────────────────────
  const hayvanlar = await Promise.all([
    prisma.hayvan.upsert({ where: { id: 1 }, update: {}, create: { ad: "Simba", tur: "Aslan", dogumTarihi: new Date("2019-03-15"), cinsiyet: "Erkek", durum: "Sağlıklı", kafesId: 1 } }),
    prisma.hayvan.upsert({ where: { id: 2 }, update: {}, create: { ad: "Nala", tur: "Aslan", dogumTarihi: new Date("2020-07-22"), cinsiyet: "Dişi", durum: "Sağlıklı", kafesId: 1 } }),
    prisma.hayvan.upsert({ where: { id: 3 }, update: {}, create: { ad: "Loro", tur: "Papağan", dogumTarihi: new Date("2018-11-05"), cinsiyet: "Erkek", durum: "Sağlıklı", kafesId: 4 } }),
    prisma.hayvan.upsert({ where: { id: 4 }, update: {}, create: { ad: "Buz", tur: "Kutup Ayısı", dogumTarihi: new Date("2017-01-10"), cinsiyet: "Erkek", durum: "Gözlem Altında", kafesId: 3 } }),
    prisma.hayvan.upsert({ where: { id: 5 }, update: {}, create: { ad: "Kongo", tur: "Şempanze", dogumTarihi: new Date("2015-09-30"), cinsiyet: "Erkek", durum: "Sağlıklı", kafesId: 6 } }),
    prisma.hayvan.upsert({ where: { id: 6 }, update: {}, create: { ad: "Zümrüt", tur: "Yeşil Piton", dogumTarihi: new Date("2021-04-17"), cinsiyet: "Dişi", durum: "Sağlıklı", kafesId: 5 } }),
    prisma.hayvan.upsert({ where: { id: 7 }, update: {}, create: { ad: "Flört", tur: "Flamingo", dogumTarihi: new Date("2016-06-08"), cinsiyet: "Dişi", durum: "Sağlıklı", kafesId: 4 } }),
    prisma.hayvan.upsert({ where: { id: 8 }, update: {}, create: { ad: "Gece", tur: "Yarasa", dogumTarihi: new Date("2022-02-14"), cinsiyet: "Bilinmiyor", durum: "Sağlıklı", kafesId: 9 } }),
    prisma.hayvan.upsert({ where: { id: 9 }, update: {}, create: { ad: "Bolero", tur: "Kirpi", dogumTarihi: new Date("2023-08-25"), cinsiyet: "Erkek", durum: "Sağlıklı", kafesId: 8 } }),
    prisma.hayvan.upsert({ where: { id: 10 }, update: {}, create: { ad: "Denizci", tur: "Penguen", dogumTarihi: new Date("2020-12-03"), cinsiyet: "Erkek", durum: "Hasta", kafesId: 3 } }),
    prisma.hayvan.upsert({ where: { id: 11 }, update: {}, create: { ad: "Maymun", tur: "Bonobo", dogumTarihi: new Date("2014-05-19"), cinsiyet: "Dişi", durum: "Sağlıklı", kafesId: 6 } }),
    prisma.hayvan.upsert({ where: { id: 12 }, update: {}, create: { ad: "Mavi", tur: "Muhabbet Kuşu", dogumTarihi: new Date("2024-01-07"), cinsiyet: "Erkek", durum: "Sağlıklı", kafesId: 4 } }),
  ]);
  console.log(`✅ ${hayvanlar.length} hayvan oluşturuldu`);

  // ── 4. Bakım Kayıtları (15 adet) ──────────────────────────────────────────
  const bugun = new Date();
  const dun = new Date(bugun); dun.setDate(bugun.getDate() - 1);
  const ikiGunOnce = new Date(bugun); ikiGunOnce.setDate(bugun.getDate() - 2);

  const bakimKayitlari = await Promise.all([
    prisma.bakimKaydi.upsert({ where: { id: 1 }, update: {}, create: { tarih: bugun, bakimTuru: "Besleme", notlar: "Sabah öğünü normal miktarda verildi.", hayvanId: 1, bakiciId: 1 } }),
    prisma.bakimKaydi.upsert({ where: { id: 2 }, update: {}, create: { tarih: bugun, bakimTuru: "Besleme", notlar: "Öğle öğünü iştahla yendi.", hayvanId: 2, bakiciId: 1 } }),
    prisma.bakimKaydi.upsert({ where: { id: 3 }, update: {}, create: { tarih: bugun, bakimTuru: "Veteriner Muayenesi", notlar: "Genel durum iyi. Kan değerleri normal.", hayvanId: 4, bakiciId: 2 } }),
    prisma.bakimKaydi.upsert({ where: { id: 4 }, update: {}, create: { tarih: bugun, bakimTuru: "Tımar", notlar: "Haftalık tımar yapıldı.", hayvanId: 5, bakiciId: 4 } }),
    prisma.bakimKaydi.upsert({ where: { id: 5 }, update: {}, create: { tarih: bugun, bakimTuru: "Besleme", notlar: "Meyve ve sebze karışımı verildi.", hayvanId: 3, bakiciId: 8 } }),
    prisma.bakimKaydi.upsert({ where: { id: 6 }, update: {}, create: { tarih: dun, bakimTuru: "Veteriner Muayenesi", notlar: "Hasta penguen kontrol edildi. İlaç verildi.", hayvanId: 10, bakiciId: 6 } }),
    prisma.bakimKaydi.upsert({ where: { id: 7 }, update: {}, create: { tarih: dun, bakimTuru: "İlaç Uygulaması", notlar: "Antibiyotik dozu uygulandı.", hayvanId: 10, bakiciId: 2 } }),
    prisma.bakimKaydi.upsert({ where: { id: 8 }, update: {}, create: { tarih: dun, bakimTuru: "Besleme", notlar: "Akşam öğünü az yedi, not alındı.", hayvanId: 1, bakiciId: 9 } }),
    prisma.bakimKaydi.upsert({ where: { id: 9 }, update: {}, create: { tarih: dun, bakimTuru: "Egzersiz", notlar: "30 dakika serbest dolaşım.", hayvanId: 5, bakiciId: 7 } }),
    prisma.bakimKaydi.upsert({ where: { id: 10 }, update: {}, create: { tarih: dun, bakimTuru: "Tımar", notlar: "Tüyler kontrol edildi, normal.", hayvanId: 7, bakiciId: 8 } }),
    prisma.bakimKaydi.upsert({ where: { id: 11 }, update: {}, create: { tarih: ikiGunOnce, bakimTuru: "Besleme", notlar: "Canlı böcek verildi.", hayvanId: 6, bakiciId: 3 } }),
    prisma.bakimKaydi.upsert({ where: { id: 12 }, update: {}, create: { tarih: ikiGunOnce, bakimTuru: "Veteriner Muayenesi", notlar: "Yıllık kontrol. Aşılar güncellendi.", hayvanId: 11, bakiciId: 2 } }),
    prisma.bakimKaydi.upsert({ where: { id: 13 }, update: {}, create: { tarih: ikiGunOnce, bakimTuru: "Besleme", notlar: "Börtü-böcek karışımı verildi.", hayvanId: 8, bakiciId: 5 } }),
    prisma.bakimKaydi.upsert({ where: { id: 14 }, update: {}, create: { tarih: ikiGunOnce, bakimTuru: "Egzersiz", notlar: "Uçuş egzersizi yaptırıldı.", hayvanId: 12, bakiciId: 7 } }),
    prisma.bakimKaydi.upsert({ where: { id: 15 }, update: {}, create: { tarih: ikiGunOnce, bakimTuru: "Tımar", notlar: "Kirpi dikenleri temizlendi.", hayvanId: 9, bakiciId: 8 } }),
  ]);
  console.log(`✅ ${bakimKayitlari.length} bakım kaydı oluşturuldu`);

  console.log("🎉 Seed tamamlandı!");
}

main()
  .catch((e) => {
    console.error("❌ Seed hatası:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
