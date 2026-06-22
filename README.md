# ☕ Cafe Sonorous — Frespresso Cafe Vapi

A premium cafe website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Swiper**.

> **Live Demo:** [cafe-sonorous.vercel.app](https://cafe-sonorous.vercel.app)

---

## ✨ Features

| Feature | Details |
|---------|---------|
| 🎨 **Design** | Luxury coffee-house theme with gold accents, smooth animations |
| 📱 **Responsive** | Pixel-perfect across 320px → 1920px |
| 🖼️ **Gallery** | Masonry layout with lightbox viewer |
| 📝 **Menu** | Filterable tabs — All, Coffee, Tea, Food, Shakes, Snacks |
| 💬 **Reviews** | Swiper slider with autoplay and pagination |
| 🗺️ **Location** | Google Maps embed with full address |
| 🚀 **Performance** | Dynamic imports, optimized images, lazy loading |
| ♿ **Accessibility** | ARIA labels, keyboard nav, reduced motion support |
| 🔍 **SEO** | Metadata, Open Graph, Twitter Cards, JSON-LD Schema, sitemap, robots |
| 📈 **Lighthouse** | Target: 95+ Performance, 95+ Accessibility, 95+ Best Practices, 100 SEO |

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles + Tailwind
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Home page (all sections)
│   ├── robots.ts           # Robots.txt route
│   └── sitemap.ts          # Sitemap.xml route
├── components/             # React components
│   ├── Navbar.tsx          # Sticky nav with mobile drawer
│   ├── Hero.tsx            # Full-screen hero with CTA
│   ├── About.tsx           # About + Why Choose Us
│   ├── Menu.tsx            # Filterable menu grid
│   ├── Gallery.tsx         # Masonry gallery + lightbox
│   ├── Testimonials.tsx    # Swiper review slider
│   ├── Contact.tsx         # Contact info + Google Map
│   └── Footer.tsx          # Footer with links + social
├── data/
│   └── menu.ts             # Menu items data
├── lib/
│   └── utils.ts            # Utility functions
├── types/
│   └── index.ts            # Shared TypeScript types
└── public/                 # Static assets
    ├── cafe1.jpg (placeholder)
    ├── cafe2.jpg (placeholder)
    ├── coffee.jpg (placeholder)
    └── logo.png (placeholder)
```

---

## 🚀 Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/cafe-sonorous.git
cd cafe-sonorous

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🎨 Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `coffee` | `#6F4E37` | Primary brand color |
| `gold` | `#C89B3C` | Accent, highlights |
| `cream` | `#F5E6D3` | Light background |
| `dark` | `#1A1A1A` | Dark background |

### Fonts

| Font | Usage |
|------|-------|
| **Playfair Display** | Headings (class: `font-heading`) |
| **Poppins** | Body text (class: `font-body`) |

### Tailwind Classes

```tsx
// Custom colors
bg-coffee  text-coffee  border-coffee
bg-gold    text-gold    border-gold
bg-cream   text-cream   border-cream
bg-dark    text-dark    border-dark

// Custom fonts
font-heading  // Playfair Display
font-body     // Poppins
```

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/cafe-sonorous.git
git push -u origin main

# 2. Import on Vercel
# Go to https://vercel.com → New Project → Import from GitHub
# Vercel auto-detects Next.js — click Deploy
```

### Deploy on Netlify

```bash
# 1. Build command
npm run build

# 2. Publish directory
.next

# 3. Or use Netlify CLI
npx netlify deploy --prod
```

---

## 🔍 SEO Details

- **Metadata**: Title, description, keywords in `layout.tsx`
- **Open Graph**: Title, description, image, locale (`en_IN`)
- **Twitter Cards**: Summary with large image
- **JSON-LD**: LocalBusiness schema with address, hours, rating, price range
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots**: Configured at `/robots.txt`
- **Canonical URLs**: Set via `metadataBase`

---

## 🧩 Technologies

- [Next.js 14](https://nextjs.org/) — React framework
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [Swiper](https://swiperjs.com/) — Review slider
- [Lucide React](https://lucide.dev/) — Icons
- [Fontsource](https://fontsource.org/) — Self-hosted fonts

---

## 📄 License

MIT License — see [LICENSE](./LICENSE).

---

## 🤝 Support

For issues or questions:

- Email: hello@cafesonorous.com
- Phone: +91 98765 43210
- Address: 1008, Laddak, Vapi East, Sonorous, Vapi, Gujarat 396191

---

<p align="center">Made with ❤️ in Vapi, Gujarat</p>
