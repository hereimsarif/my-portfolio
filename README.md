# Modern Portfolio Website

A statically exportable, modern portfolio site built with Next.js 13/App Router, Tailwind CSS, and TypeScript.

## Features
- Single-page layout: Hero, About Me, Projects, Contact
- Premium UI: Soft gradients, rounded corners, subtle shadows
- Responsive, mobile-first design
- Sticky header with smooth scroll navigation
- Dark/light mode toggle
- Scroll-animated reveal for sections
- Exportable via `next export`
- Contact form & social links

## Setup

1. **Clone the repo**
   ```sh
git clone https://github.com/yourusername/portfolio-next.git
cd portfolio-next
```

2. **Install dependencies**
   ```sh
npm install
# or
yarn
```

3. **Configure env variables**
   - Copy `.env.example` to `.env.local` and fill in any required values.

4. **Run locally**
   ```sh
npm run dev
# or
yarn dev
```

5. **Build & export**
   ```sh
npm run build && npm run export
```
   - Static site will be in `/out` directory.

## Customization
- Project data: Edit `ProjectsSection.tsx`.
- Personal info and images: Update `AboutSection.tsx`, Hero section, and images in `/public`.

## Folder Structure
- `app/` - App router pages & layouts
- `components/` - UI components
- `lib/` - Utilities (scroll, validation, etc.)
- `styles/` - CSS/Tailwind
- `public/` - Static assets

## Tech Stack
- Next.js 13+ (App Router, Static Export)
- TypeScript
- Tailwind CSS
- Framer Motion (for animation)

## License
MIT
