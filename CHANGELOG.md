# Changelog

All notable changes to this project are documented in this file.

This project follows the [Keep a Changelog](<https://keepachangelog.com/en/1.1.0/>) format.

## \[1.1.0\] - 2026-11-05

### Changed

- Replaced the Gulp-based image processing pipeline with Sharp.
- Migrated image processing tasks from `gulpfile.mjs` to `build.mjs`.
- Consolidated image optimization and WebP conversion into a single Sharp processing pipeline.
- Updated the image processing logic to preserve source directory structures in the output.
- Introduced a multi-resolution output strategy that generates four image variants at different widths for each source image.
- Centralized WebP encoding and optimization settings.
- Updated `README.md` to reflect the new project structure, configuration, and usage instructions.

### Removed

- Removed Gulp and its associated plugins:
  - `gulp`
  - `gulp-imagemin`
  - `gulp-webp`
  - `gulp-rezzy`
  - `gulp-rename`
  - `del`
- Removed the legacy `gulpfile.mjs` configuration.
- Eliminated the dependency chain introduced by multiple image optimization plugins.

### Security

- Migrated to a streamlined Sharp-based architecture to address npm audit issues associated with the previous dependency tree.
- Reduced the number of project dependencies.

## \[1.0.0\] - 2025-10-26

### Added

- Integrated `gulp-rezzy`, `gulp-imagemin`, and `gulp-webp` plugins.
- Added `CHANGELOG.md` to document project changes.

### Changed

- Replaced `gulp-responsive` with `gulp-rezzy` for responsive image processing.
- Migrated the Gulp configuration from CommonJS (`gulpfile.js`) to ECMAScript Modules (`gulpfile.mjs`).
- Updated the `del` package integration to use `deleteSync`.
- Updated Gulp tasks to generate WebP-only output.
- Updated `README.md`.
