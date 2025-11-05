# Images Directory

This directory contains all static images used in the BYD Prize website.

## Directory Structure

```
images/
├── cars/           # Car images (product photos, hero images)
├── environment/    # Environmental and technology images
└── winners/        # Winner profile photos
```

## Image Guidelines

### General Requirements
- **Formats**: JPG, PNG, or WebP
- **Optimization**: Compress images before uploading for better performance
- **Naming**: Use lowercase with hyphens (e.g., `my-image.jpg`)
- **File sizes**: 
  - Hero images: ~200-500KB
  - Profile photos: ~100-300KB
  - Background images: ~300-700KB

### Best Practices
1. Use descriptive filenames
2. Optimize images with tools like TinyPNG or ImageOptim
3. Consider using WebP format for better compression
4. Keep aspect ratios consistent within each category

## Usage in Code

Images in the `public` folder are referenced with absolute paths starting with `/`:

```tsx
<img src="/images/cars/byd-seal-u.jpg" alt="BYD SEAL U" />
```

This works because Vite serves the `public` directory as the root during development and build.

