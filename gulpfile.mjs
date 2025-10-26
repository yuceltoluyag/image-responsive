import gulp from 'gulp';
import { deleteSync } from 'del';
import imagemin from 'gulp-imagemin';
import rezzy from 'gulp-rezzy';
import webp from 'gulp-webp';

// Temizleme görevi - dist klasörünü temizler
gulp.task("clean", function (done) {
  deleteSync(["dist/**/*"]);
  done();
});

// Responsive resim görevleri
gulp.task("images", function () {
  return gulp
    .src("src/**/*.{jpg,jpeg,png,gif}")
    .pipe(
      rezzy([
        {
          width: 320,
          suffix: "-sm",
        },
        {
          width: 640,
          suffix: "-md",
        },
        {
          width: 1024,
          suffix: "-lg",
        },
        {
          width: 1920,
          suffix: "-xl",
        },
      ])
    )
    .pipe(imagemin())
    .pipe(webp())
    .pipe(gulp.dest("dist"));
});

// Varsayılan görev
gulp.task(
  "default",
  gulp.series("clean", "images", function (done) {
    console.log("İşlem tamamlandı! Resimler dist klasörüne kaydedildi.");
    done();
  })
);