# Anuj Kekre — Developer Portfolio Website

A modern, high-performance, dark-themed developer portfolio website built using **React 19**, **Vite 7**, **Tailwind CSS v3**, and **Framer Motion**. It is fully responsive and tailored with real academic and project content.

## 🚀 Live Demo & Repository
- **GitHub Repository**: [https://github.com/anuj-k-bit/portfolio](https://github.com/anuj-k-bit/portfolio)
- **Deployment Platform**: Vercel

---

## 🛠️ Technology Stack
- **Framework**: React 19 + Vite 7 + TypeScript
- **Styling**: Tailwind CSS v3 (Utility classes, customized dark theme)
- **Animations**: Framer Motion (Transitions, typewriter loops, scroll tracking)
- **Icons**: `@tabler/icons-react` (Brand icons) & `lucide-react` (Interface icons)
- **Design Elements**: custom shadcn-style component primitives (Buttons, Cards, Badges, Forms) with custom focus glow states
- **Typography**: Google Fonts ("Fira Code" for headers/mono accents, "Antic" for body text)

---

## ✨ Features & Visual Styles

1. **Intelligent Loading Screen**: A 2-second initial block screen drawing an SVG developer logo and tracking a percentage counter (`00%` to `100%`) before fading out to the main landing page.
2. **Ambient Grid Background**: A fixed pure black background (`bg-black`) overlayed with subtle white grid lines (6% opacity) that parallax-shift slightly on scroll. Embellished with soft cyan, purple, and blue glowing background blur gradients.
3. **Interactive Glowing Cards**: High-tech project and skill panels that track the user's cursor position in real-time to overlay a dynamic radial glow.
4. **Floating Bottom Navigation**: A glassmorphism pill menu centered at the bottom of the screen. Features smooth scrolling to page anchors and automatically highlights the active section on scroll using an `IntersectionObserver`.
5. **Typewriter Headline**: An animated, typewriter-style intro loop rotating through professional titles.
6. **Detailed Education & Experience Timeline**: A vertical track mapping your B.Tech progress at VIT Bhopal alongside professional certifications, equipped with verification links and credentials.
7. **Social & Resume Integration**: Includes direct links to GitHub, LinkedIn, and email, alongside a self-hosted resume PDF available for download straight from the website assets.

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg             # Custom code-themed favicon
│   └── Anuj_Kekre_Resume.pdf   # Self-hosted resume document
├── src/
│   ├── components/
│   │   ├── ui/                 # Reusable UI primitives (Button, Card, Badge, Inputs)
│   │   ├── layout/             # Structure elements (Loader, GridBg, Navbar)
│   │   └── sections/           # Single-page sections (Hero, About, Skills, Experience, Projects, Contact)
│   ├── lib/
│   │   └── utils.ts            # Class merging (clsx + tailwind-merge) utility
│   ├── App.css                 # Empty style reset
│   ├── index.css               # Global Tailwind directives & custom scrollbars
│   ├── App.tsx                 # Layout coordinator & Intersection Observer setup
│   └── main.tsx                # App entrypoint
├── index.html                  # HTML template with Google Fonts & SEO metadata
├── tailwind.config.js          # Custom Tailwind configuration (colors, keyframes)
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies and scripts
```

---

## 💻 Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository or navigate to the directory:
   ```bash
   cd C:\portfolio
   ```
2. Install the project dependencies:
   ```bash
   npm install
   ```

### Running in Development Mode
To launch the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

### Compiling for Production
To build and optimize the application for production deployment:
```bash
npm run build
```
The compiled static assets will be outputted to the `dist/` directory.

---

## 🌐 Deployment

This project is configured for seamless deployment to **Vercel** via GitHub integration:

1. Push any modifications to your GitHub repository:
   ```bash
   git add .
   git commit -m "Update portfolio features"
   git push origin main
   ```
2. Go to the [Vercel Dashboard](https://vercel.com/dashboard).
3. Import your `portfolio` repository.
4. Click **Deploy**. Vercel will build the project and host it automatically.
