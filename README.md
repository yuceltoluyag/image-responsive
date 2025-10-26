# Responsive Resim İşleme Projesi

Bu proje, kaynak görsellerinizi işleyerek farklı boyutlarda WebP formatında optimizasyonu sağlar.

## Kurulum

Gerekli bağımlılıkları yüklemek için:

```bash
npm install
```

## Kullanım

1. Kaynak görsellerinizi `src` klasörüne yerleştirin
2. Aşağıdaki komutu çalıştırın:

```bash
npm run build
```

3. İşlenmiş görselleriniz `dist` klasöründe oluşturulacaktır

## Oluşturulan Formatlar

Sistem her bir görsel için 4 farklı boyutta WebP formatında görseller oluşturur:

- `-sm`: 320px genişliğinde (mobil cihazlar için)
- `-md`: 640px genişliğinde (tablet ve küçük ekranlar için)
- `-lg`: 1024px genişliğinde (dizüstü bilgisayarlar için)
- `-xl`: 1920px genişliğinde (büyük ekranlar için)

## Özel Boyutlar

Özel boyut ayarları için `gulpfile.mjs` dosyasını düzenleyebilirsiniz.