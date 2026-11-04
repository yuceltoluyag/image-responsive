# Responsive Resim İşleme Projesi

Kaynak görselleri farklı genişliklerde WebP formatına dönüştüren, optimize eden ve web projelerinde kullanılmaya hazır hâle getiren basit bir Node.js aracıdır.

Görsel işleme işlemleri için [Sharp](https://sharp.pixelplumbing.com/) kullanılır. Gulp veya ek görsel optimizasyon eklentilerine ihtiyaç duymaz.

## Gereksinimler

- Node.js 20.9 veya üzeri
- npm

## Kurulum

Projeyi klonladıktan sonra gerekli bağımlılıkları yükleyin:

```bash
npm install
```

## Kullanım

1. İşlemek istediğiniz görselleri `src` klasörüne yerleştirin.
2. Proje dizininde aşağıdaki komutu çalıştırın:

```bash
npm run build
```

3. İşlenen görseller `dist` klasörüne kaydedilir.

Her derleme işleminde önceki `dist` içeriği temizlenir ve çıktılar yeniden oluşturulur.

## Desteklenen Görsel Formatları

Kaynak olarak aşağıdaki formatlar desteklenir:

- JPEG (`.jpg`, `.jpeg`)
- PNG (`.png`)
- GIF (`.gif`)

## Oluşturulan WebP Boyutları

Her kaynak görsel için dört farklı genişlikte WebP çıktısı oluşturulur:

| Sonek | Genişlik | Kullanım |
|---|---:|---|
| `-sm` | 320px | Mobil cihazlar |
| `-md` | 640px | Tablet ve küçük ekranlar |
| `-lg` | 1024px | Dizüstü bilgisayarlar |
| `-xl` | 1920px | Büyük ekranlar |

Örneğin `ornek.jpg` dosyası için şu çıktılar oluşturulur:

```text
dist/
└── ornek-sm.webp
└── ornek-md.webp
└── ornek-lg.webp
└── ornek-xl.webp
```

Kaynak görselin genişliği hedef boyuttan küçük olsa bile ilgili çıktı oluşturulur. Bu durumda görsel hedef genişliğe büyütülür.

## Yapılandırma

Boyutları değiştirmek veya WebP optimizasyon ayarlarını düzenlemek için `build.mjs` dosyasındaki aşağıdaki bölümleri düzenleyebilirsiniz:

- `SIZES`: Oluşturulacak görsel genişlikleri ve dosya sonekleri.
- `WEBP_OPTIONS`: WebP kalite ve optimizasyon ayarları.
- `SUPPORTED_FORMATS`: İşlenecek kaynak görsel uzantıları.

## Proje Yapısı

```text
image-responsive/
├── src/                 # Kaynak görseller
├── dist/                # Oluşturulan WebP dosyaları
├── build.mjs            # Görsel işleme betiği
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── CHANGELOG.md
```

`src` ve `dist` klasörlerinin içeriği Git tarafından takip edilmez. Klasörlerin depoda görünmesini sağlamak için `.gitkeep` dosyaları kullanılır.

## Kullanılan Teknoloji

- [Node.js](https://nodejs.org/)
- [Sharp](https://sharp.pixelplumbing.com/)
- WebP