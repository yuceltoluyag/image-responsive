# Responsive Image Processing

A lightweight Node.js utility that generates optimized WebP images at multiple resolutions from source images, preparing them for responsive image delivery in modern web applications.

Image processing is powered by [Sharp](<https://sharp.pixelplumbing.com/>), a high-performance image processing library. No Gulp or additional image optimization plugins are required.

## Requirements

- Node.js 20.9 or later
- npm

## Installation

Clone the repository and install the project dependencies:

bash

```bash
npm install
```

## Usage

1. Place the source images in the `src` directory.
2. Run the build command from the project root:

bash

```bash
npm run build
```

3. The generated WebP images will be written to the `dist` directory.

Each build starts by cleaning the existing contents of the `dist` directory before generating new output files.

## Supported Image Formats

The following source image formats are supported:

- JPEG (`.jpg`, `.jpeg`)
- PNG (`.png`)
- GIF (`.gif`)

## Generated WebP Resolutions

Each source image is converted into four WebP variants with predefined widths:

| Suffix | Width | Intended Use |
| --- | --- | --- |
| `-sm` | 320px | Mobile devices |
| `-md` | 640px | Tablets and smaller viewports |
| `-lg` | 1024px | Laptops and standard desktop displays |
| `-xl` | 1920px | Large and high-resolution displays |

For example, processing `example.jpg` produces the following output files:

text

```text
dist/
├── example-sm.webp
├── example-md.webp
├── example-lg.webp
└── example-xl.webp
```

If a source image is smaller than the target width, it is automatically upscaled to match the requested dimensions. An output variant is generated for each configured resolution regardless of the original image dimensions.

## Configuration

Image dimensions, output naming conventions, and WebP encoding parameters can be customized in `build.mjs`:

- `SIZES`: Defines the target image widths and corresponding filename suffixes.
- `WEBP_OPTIONS`: Specifies WebP encoding parameters, including quality and optimization settings.
- `SUPPORTED_FORMATS`: Defines the supported source image file extensions.

## Project Structure

text

```text
image-responsive/
├── src/                 # Source images
├── dist/                # Generated WebP variants
├── build.mjs            # Image processing and build script
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Dependency lockfile
├── .gitignore
├── README.md
└── CHANGELOG.md
```

The contents of the `src` and `dist` directories are excluded from version control. `.gitkeep` files are included to preserve these directories in the repository.

## Technologies

- [Node.js](<https://nodejs.org/>) – JavaScript runtime
- [Sharp](<https://sharp.pixelplumbing.com/>) – High-performance image processing
- [WebP](<https://developers.google.com/speed/webp>) – Modern image format for efficient web delivery

## Changelog

For a detailed history of changes, updates, and improvements, see the CHANGELOG.md file.
