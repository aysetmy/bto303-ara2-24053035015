/**
 * lib/rules/bakim.rules.ts
 * İş Kuralı 2 — Günlük Bakım Sınırı Kuralı
 *
 * Saf fonksiyonlar: veritabanından ve arayüzden bağımsız.
 * Testler bu fonksiyonları doğrudan import eder (F2 rubrik maddesi).
 */

export const GUNLUK_BAKIM_SINIRI = 3;

export const GECERLI_BAKIM_TURLERI = [
  "Besleme",
  "Veteriner Muayenesi",
  "Tımar",
  "Egzersiz",
  "İlaç Uygulaması",
] as const;

export type BakimTuru = (typeof GECERLI_BAKIM_TURLERI)[number];

/**
 * Aynı hayvan için aynı gün aynı bakım türünün günlük sınırı aşıp aşmadığını
 * kontrol eder.
 *
 * @param mevcutKayitSayisi  O gün aynı tür için zaten kayıtlı bakım sayısı
 * @returns { gecerli: boolean; mesaj: string }
 */
export function gunlukBakimSiniriKontrol(
  mevcutKayitSayisi: number,
): { gecerli: boolean; mesaj: string } {
  if (mevcutKayitSayisi >= GUNLUK_BAKIM_SINIRI) {
    return {
      gecerli: false,
      mesaj: `Bu hayvan için bugün aynı türde en fazla ${GUNLUK_BAKIM_SINIRI} bakım kaydı oluşturulabilir (mevcut: ${mevcutKayitSayisi}).`,
    };
  }

  return {
    gecerli: true,
    mesaj: `Bakım kaydı oluşturulabilir (bugünkü kayıt: ${mevcutKayitSayisi}/${GUNLUK_BAKIM_SINIRI}).`,
  };
}

/**
 * Bakım türünün izin verilen listede olup olmadığını kontrol eder.
 */
export function gecerliBakimTuru(bakimTuru: string): bakimTuru is BakimTuru {
  return (GECERLI_BAKIM_TURLERI as readonly string[]).includes(bakimTuru);
}

/**
 * İki tarihin aynı takvim günü olup olmadığını kontrol eder (UTC).
 */
export function ayniGunMu(tarih1: Date, tarih2: Date): boolean {
  return (
    tarih1.getUTCFullYear() === tarih2.getUTCFullYear() &&
    tarih1.getUTCMonth() === tarih2.getUTCMonth() &&
    tarih1.getUTCDate() === tarih2.getUTCDate()
  );
}
