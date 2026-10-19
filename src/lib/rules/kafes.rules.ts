/**
 * lib/rules/kafes.rules.ts
 * İş Kuralı 1 — Kapasite Kuralı
 *
 * Saf fonksiyonlar: veritabanından ve arayüzden bağımsız.
 * Testler bu fonksiyonları doğrudan import eder (F2 rubrik maddesi).
 */

/**
 * Kafese yeni hayvan eklenip eklenemeyeceğini kontrol eder.
 * @param kapasite  Kafesin maksimum hayvan kapasitesi
 * @param mevcutSayi  Kafesteki mevcut hayvan sayısı
 * @returns { gecerli: boolean; mesaj: string }
 */
export function kafesKapasiteKontrol(
  kapasite: number,
  mevcutSayi: number,
): { gecerli: boolean; mesaj: string } {
  if (kapasite <= 0) {
    return {
      gecerli: false,
      mesaj: "Kapasite en az 1 olmalıdır.",
    };
  }

  if (mevcutSayi >= kapasite) {
    return {
      gecerli: false,
      mesaj: `Kafes dolu (kapasite: ${kapasite}, mevcut: ${mevcutSayi}). Yeni hayvan eklenemez.`,
    };
  }

  return { gecerli: true, mesaj: "Kafese hayvan eklenebilir." };
}

/**
 * Kafes kapasitesinin geçerli bir pozitif tam sayı olup olmadığını doğrular.
 */
export function gecerliKapasite(kapasite: number): boolean {
  return Number.isInteger(kapasite) && kapasite > 0 && kapasite <= 1000;
}
