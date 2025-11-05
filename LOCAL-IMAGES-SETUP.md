# Local Images Setup Guide

This document explains how local images are now configured in your BYD Prize website.

## What Changed

All external image URLs (from Unsplash) have been replaced with local image paths. The following components were updated:

1. **Winners.tsx** - 6 winner profile images
2. **Hero.tsx** - Main hero car image
3. **AboutCause.tsx** - Green technology image

## Directory Structure

```
public/
└── images/
    ├── cars/
    │   ├── byd-seal-u.jpg          [NEEDED]
    │   └── README.md
    ├── environment/
    │   ├── green-technology.jpg     [NEEDED]
    │   └── README.md
    └── winners/
        ├── sarah-johnson.jpg        [NEEDED]
        ├── michael-chen.jpg         [NEEDED]
        ├── emily-rodriguez.jpg      [NEEDED]
        ├── david-kim.jpg            [NEEDED]
        ├── lisa-martinez.jpg        [NEEDED]
        ├── james-wilson.jpg         [NEEDED]
        └── README.md
```

## How to Add Your Images

### Step 1: Prepare Your Images

Download or prepare your images according to these specifications:

**Winner Photos:**
- Size: 800x800px (square)
- Format: JPG or PNG
- File size: < 500KB each

**Car Image:**
- Size: 1200x800px (3:2 ratio)
- Format: JPG or PNG
- File size: 200-500KB

**Environment Image:**
- Size: 1000x1000px (square)
- Format: JPG or PNG
- File size: 300-700KB

### Step 2: Place Images in Correct Directories

Copy your images to the appropriate directories using the exact filenames shown above:

```bash
# Example:
cp ~/Downloads/my-car-photo.jpg public/images/cars/byd-seal-u.jpg
cp ~/Downloads/sarah.jpg public/images/winners/sarah-johnson.jpg
```

### Step 3: Test Your Website

Run your development server and verify the images load correctly:

```bash
npm run dev
```

Visit http://localhost:5173 and check:
- Hero section shows the car image
- Winners section shows all 6 winner photos
- AboutCause section shows the environment image

## Image Optimization Tips

1. **Compress images** before adding them:
   - Use [TinyPNG](https://tinypng.com/) for PNG/JPG
   - Use [Squoosh](https://squoosh.app/) for all formats

2. **Consider WebP format** for better compression:
   - Change file extensions to `.webp`
   - Update the filenames in the components accordingly

3. **Use appropriate dimensions**:
   - Don't upload images larger than needed
   - Scale down to recommended sizes before adding

## How Image Paths Work

In Vite/React, images in the `public` folder are served as static assets:

```tsx
// This path structure:
public/images/cars/byd-seal-u.jpg

// Becomes this in your code:
<img src="/images/cars/byd-seal-u.jpg" alt="Car" />

// The leading "/" refers to the public directory root
```

## Troubleshooting

**Images not showing?**
- Check filenames match exactly (case-sensitive)
- Verify files are in the correct directories
- Clear browser cache and refresh
- Check browser console for 404 errors

**Images look pixelated?**
- Use higher resolution source images
- Follow recommended dimensions in READMEs

**Slow loading?**
- Compress images more aggressively
- Consider converting to WebP format
- Ensure file sizes are within recommendations

## Need Help?

Each image directory contains a README.md with specific requirements and tips for that category.

