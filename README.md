# BYD Car Raffle Website 🚗⚡

A modern, responsive React website built with TypeScript and Tailwind CSS for the BYD annual car raffle promotion. Win a brand new 2025 BYD SEAL U electric vehicle!

## ✨ Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Winners Gallery**: Showcase of past winners with testimonials
- **Call-to-Action**: Clear email contact system for ticket purchases
- **IP Tracking**: Automatic visitor IP and geolocation logging (see TRACKING.md)

## 🏗️ Built With

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd /root/Documents/byd_prize
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Building for Production

Build the project:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
byd_prize/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section with main CTA
│   │   ├── KeyDetails.tsx      # Raffle details cards
│   │   ├── AboutCause.tsx      # Mission and impact section
│   │   ├── HowItWorks.tsx      # Step-by-step process
│   │   ├── Winners.tsx         # Past winners gallery
│   │   ├── CallToAction.tsx    # Email CTA section
│   │   └── Footer.tsx          # Footer with links
│   ├── App.tsx                 # Main app component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Colors

The website uses custom BYD brand colors defined in `tailwind.config.js`:
- `byd-blue`: #0066CC
- `byd-green`: #00B140

### Content

Update the raffle details in the respective component files:
- Prize details: `src/components/KeyDetails.tsx`
- Winners: `src/components/Winners.tsx`
- Contact email: `src/components/CallToAction.tsx` and `src/components/Footer.tsx`

### Images

The website uses Unsplash images as placeholders. Replace these with actual BYD vehicle images by updating the `src` attributes in:
- `src/components/Hero.tsx`
- `src/components/AboutCause.tsx`
- `src/components/Winners.tsx`

## 📧 Contact Configuration

The contact email is set to: `automotivecompanybyd@gmail.com`

Update this in:
- `src/components/CallToAction.tsx`
- `src/components/Footer.tsx`

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Update `vite.config.ts` to include base path
2. Build the project: `npm run build`
3. Deploy the `dist` folder to GitHub Pages

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a promotional website for BYD Company Limited. For questions or support, contact: automotivecompanybyd@gmail.com

## 📄 License

© 2025 BYD Company Limited. All rights reserved.

## 🎯 Key Sections

1. **Hero Section**: Eye-catching intro with main prize and CTAs
2. **Key Details**: Raffle information cards
3. **About Cause**: Mission and environmental impact
4. **How It Works**: Simple 4-step process
5. **Winners Gallery**: Testimonials from past winners
6. **Call to Action**: Email contact for ticket purchase
7. **Footer**: Links and company information

## 💡 Tips

- Run `npm run dev` for hot-reload during development
- Use browser DevTools for responsive testing
- Check console for any TypeScript errors
- Update images with actual BYD vehicle photos for production

## 🔧 Troubleshooting

**Issue**: Port 5173 already in use
**Solution**: Kill the process or specify a different port in `vite.config.ts`

**Issue**: Tailwind styles not applying
**Solution**: Ensure `@tailwind` directives are in `src/index.css`

**Issue**: TypeScript errors
**Solution**: Run `npm run build` to see detailed type errors

---

**Built with ❤️ for a greener future** 🌱

