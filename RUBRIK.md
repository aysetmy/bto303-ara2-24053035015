## Değerlendirme rubriği (100 puan)

Rubrik 8 kategoride 32 maddeden oluşur ve toplam 100 puandır; teslim için DEGERLENDIRME.txt içindeki nihai toplam en az 85 olmalıdır.

A. Konsept ve kapsam (10 puan)
- A1: README'de konsept açıklaması: kim kullanır, hangi problemi çözer (en az 5 cümle) [4 puan]
- A2: En az 3 varlık var ve hepsi konsepte özgü adlar taşıyor ("item", "data" gibi genel adlar yok) [3 puan]
- A3: En az 2 konsepte özgü iş kuralı uygulanmış ve README'de sayılmış [3 puan]

B. Veri katmanı (15 puan)
- B1: Prisma şeması tüm varlıkları, tipleri, gereken yerde @unique/@@index tanımlarını içeriyor; migration'lar repoda [4 puan]
- B2: İlişkiler iki yönde tanımlı: en az 1 bire çok ve en az 1 çoka çok (ya da ikinci bir bire çok) [4 puan]
- B3: prisma/seed.ts her ana varlık için en az 10 gerçekçi kayıt üretiyor [4 puan]
- B4: Prisma Client tek örnekten kullanılıyor (lib/prisma.ts); listelerde include/select ile gereksiz sorgu (N+1) önlenmiş [3 puan]

C. CRUD işlevselliği (20 puan)
- C1: En az 2 varlık için oluşturma, listeleme, detay, güncelleme ve silme uçtan uca çalışıyor (Server Actions ya da Route Handlers) [5 puan]
- C2: Create/Edit formları hata sonrası girilen değeri koruyor; ilişkili alanlar select ile seçiliyor [4 puan]
- C3: Liste sayfasında sayfalama ve sıralama var (skip/take, orderBy) [3 puan]
- C4: En az bir listede arama ya da filtre çalışıyor [3 puan]
- C5: Silmede onay adımı var; ilişkili kayıtlar için bilinçli davranış (onDelete: Cascade ya da Restrict) seçilmiş [3 puan]
- C6: Detay sayfası ilişkili kayıtları gösteriyor [2 puan]

D. Doğrulama ve güvenlik (10 puan)
- D1: Tüm yazma işlemlerinde sunucu tarafında Zod doğrulaması var; hata mesajları kullanıcıya gösteriliyor [4 puan]
- D2: Ham form/istek verisi doğrulanmadan doğrudan prisma.create/update çağrısına verilmiyor [2 puan]
- D3: .env* repoda yok, .env.example var, repoda parola ya da bağlantı adresi yok [2 puan]
- D4: dangerouslySetInnerHTML kullanılmıyor ya da gerekçeli [2 puan]

E. Arayüz ve kullanılabilirlik (10 puan)
- E1: Ortak layout, gezinme menüsü ve etkin sayfa vurgusu var [3 puan]
- E2: 375 px genişlikte yatay taşma ya da kaydırma yok [3 puan]
- E3: Boş liste durumu ile başarı ve hata geri bildirimi var [2 puan]
- E4: Başlık ve etiketler konsept diliyle tutarlı (genel "Item", "Record" yok) [2 puan]

F. Test ve kalite (10 puan)
- F1: npm test hatasız; en az 8 test var (Zod şemaları ve en az 2 iş kuralı dahil) [5 puan]
- F2: İş kuralları arayüzden ve veritabanından ayrı, saf fonksiyonlar olarak lib/rules altında; testler bunları doğrudan çağırıyor [3 puan]
- F3: Kod stili ve derleme temiz [2 puan]

G. Yayın, Git ve belgeleme (15 puan)
- G1: Vercel production dağıtımı başarılı ve canlı adres giriş istemeden açılıyor [4 puan]
- G2: Canlı uygulama bulut veritabanında çalışıyor: canlı adreste oluşturulan kayıt listede görünüyor ve sayfa yenilenince kalıyor [3 puan]
- G3: README'de canlı adres (ilk satır), kurulum adımları ve Mermaid ER diyagramı var [3 puan]
- G4: Ders süresi içinde en az 8 anlamlı commit atılmış; commit yazarı GitHub hesabıyla eşleşiyor [3 puan]
- G5: Depo private ve mertronot@gmail.com collaborator olarak eklendi [2 puan]

H. Yapay zekâ şeffaflığı ve yansıtma (10 puan)
- H1: docs/ai-log/ içinde boş olmayan en az bir konuşma dışa aktarımı var [3 puan]
- H2: docs/YANSITMA.md en az 200 kelime ve şablondaki 5 soruyu yanıtlıyor [4 puan]
- H3: DEGERLENDIRME.txt her madde için kanıt satırı ve tur geçmişi içeriyor [3 puan]
