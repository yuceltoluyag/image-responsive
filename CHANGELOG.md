# Değişiklik Günlüğü

## [1.1.0] - 2026-11-05

### Değiştirildi
- Gulp tabanlı görsel işleme altyapısı Sharp ile değiştirildi.
- Görsel işleme görevleri `gulpfile.mjs` yerine `build.mjs` üzerinden yürütülmeye başlandı.
- Görsel optimizasyonu ve WebP dönüşümü tek bir Sharp işlem hattında birleştirildi.
- Kaynak görseller artık alt klasör yapıları korunarak işleniyor.
- Her kaynak görsel için dört farklı genişlikte çıktı oluşturulacak şekilde boyutlandırma mantığı güncellendi.
- WebP kalite ve optimizasyon ayarları merkezi olarak yapılandırıldı.
- `README.md`, yeni proje yapısına ve kullanım şekline göre güncellendi.

### Kaldırıldı
- Gulp ve ilgili eklentiler kaldırıldı:
  - `gulp`
  - `gulp-imagemin`
  - `gulp-webp`
  - `gulp-rezzy`
  - `gulp-rename`
  - `del`
- Eski `gulpfile.mjs` yapılandırması kaldırıldı.
- Görsel optimizasyonu için kullanılan birden fazla eklentinin oluşturduğu bağımlılık zinciri ortadan kaldırıldı.

### Güvenlik
- Eski bağımlılık zincirinden kaynaklanan npm audit sorunlarını gidermek amacıyla Sharp tabanlı daha sade bir yapıya geçildi.
- Bağımlılık sayısı azaltıldı.

## [1.1.0] - 2025-10-26

### Eklendi
- Projeye `gulp-rezzy`, `gulp-imagemin` ve `gulp-webp` eklentileri dahil edildi.
- `CHANGELOG.md` dosyası oluşturuldu.

### Değiştirildi
- `gulp-responsive` eklentisi kaldırılarak yerine `gulp-rezzy` kullanıldı.
- Gulp yapılandırma dosyası (`gulpfile.js`) CommonJS'den ESM'ye (`gulpfile.mjs`) geçirildi.
- `del` paketi `deleteSync` kullanacak şekilde güncellendi.
- Gulp görevleri artık sadece `.webp` formatında çıktı verecek şekilde güncellendi.
- `README.md` dosyası güncellendi.