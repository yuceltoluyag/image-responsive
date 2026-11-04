import sharp from "sharp";
import { readdir, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const INPUT_DIR = "src";
const OUTPUT_DIR = "dist";

const SIZES = [
  { width: 320, suffix: "-sm" },
  { width: 640, suffix: "-md" },
  { width: 1024, suffix: "-lg" },
  { width: 1920, suffix: "-xl" },
];

const WEBP_OPTIONS = {
  quality: 82,
  effort: 5,
};

const SUPPORTED_FORMATS = new Set([".jpg", ".jpeg", ".png", ".gif"]);

async function findImages(directory) {
  const entries = await readdir(directory, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findImages(fullPath)));
    } else if (
      entry.isFile() &&
      SUPPORTED_FORMATS.has(path.extname(entry.name).toLowerCase())
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

async function processImage(inputPath) {
  const relativePath = path.relative(INPUT_DIR, inputPath);
  const outputDirectory = path.join(OUTPUT_DIR, path.dirname(relativePath));

  const extension = path.extname(inputPath);
  const filename = path.basename(inputPath, extension);

  await mkdir(outputDirectory, { recursive: true });

  for (const size of SIZES) {
    const outputPath = path.join(
      outputDirectory,
      `${filename}${size.suffix}.webp`,
    );

    await sharp(inputPath, {
      animated: true,
    })
      .rotate()
      .resize({
        width: size.width,
      })
      .webp(WEBP_OPTIONS)
      .toFile(outputPath);

    console.log(`✓ ${outputPath} (${size.width}px)`);
  }
}

async function build() {
  console.log("Eski dist klasörü temizleniyor...");

  await rm(OUTPUT_DIR, {
    recursive: true,
    force: true,
  });

  const images = await findImages(INPUT_DIR);

  if (images.length === 0) {
    console.log("İşlenecek görsel bulunamadı.");
    return;
  }

  console.log(`${images.length} görsel bulundu.\n`);

  for (const image of images) {
    await processImage(image);
  }

  console.log(
    `\nİşlem tamamlandı! ${images.length * SIZES.length} WebP dosyası oluşturuldu.`,
  );
}

build().catch((error) => {
  console.error("\nBuild hatası:", error);
  process.exitCode = 1;
});
