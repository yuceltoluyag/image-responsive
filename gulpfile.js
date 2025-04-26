const gulp = require("gulp");
const imageResize = require("gulp-image-resize");
const webp = require("gulp-webp");
const rename = require("gulp-rename");
const responsive = require("gulp-responsive");
const del = require("del");

// Temizleme görevi - dist klasörünü temizler
gulp.task("clean", function () {
  return del(["dist/**/*"]);
});

// Responsive resim görevleri
gulp.task("responsive-images", function () {
  return gulp
    .src("src/**/*.{jpg,jpeg,png,gif}")
    .pipe(
      responsive(
        {
          "**/*.{jpg,jpeg,png,gif}": [
            {
              width: 320,
              rename: { suffix: "-sm", extname: ".webp" },
            },
            {
              width: 640,
              rename: { suffix: "-md", extname: ".webp" },
            },
            {
              width: 1024,
              rename: { suffix: "-lg", extname: ".webp" },
            },
            {
              width: 1920, // Orjinal boyuta yakın
              rename: { suffix: "-xl", extname: ".webp" },
            },
          ],
        },
        {
          quality: 80,
          progressive: true,
          withMetadata: false,
          errorOnEnlargement: false,
        },
      ),
    )
    .pipe(gulp.dest("dist"));
});

// Varsayılan görev
gulp.task(
  "default",
  gulp.series("clean", "responsive-images", function (done) {
    console.log("İşlem tamamlandı! Resimler dist klasörüne kaydedildi.");
    done();
  }),
);
