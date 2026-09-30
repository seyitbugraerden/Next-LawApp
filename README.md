<div align="center">

# ⚖️ Next LawApp

### Modern law firm website built with Next.js 15 and React 19

A responsive legal services website featuring **practice areas, corporate pages, legal blog content, appointment forms, animated navigation and reusable UI components**.

<br />

![Next.js](https://img.shields.io/badge/Next.js-15.1-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white)

</div>

---

## About the Project

**Next LawApp** is a corporate legal services website developed with **Next.js 15 and React 19**.

The application is structured around a modern law firm website architecture and includes:

- Corporate information pages
- Legal practice areas
- Dynamic service routes
- Legal blog listing
- Appointment and contact forms
- Responsive desktop and mobile navigation
- Animated UI interactions
- Swiper-based content areas
- Reusable layout components
- Global footer and floating WhatsApp action

The project demonstrates a scalable frontend architecture suitable for professional service websites.

---

## Current Status

The project has a well-established frontend structure and multiple working routes, but several areas still contain **placeholder or mock content**.

Examples include:

- Lorem Ipsum service descriptions
- Static demo contact information
- Placeholder footer copy
- Mock blog data
- Placeholder external images
- Appointment forms without backend submission logic

Because of this, the repository is best described as a **functional frontend law-firm website template / prototype** rather than a finished production legal platform.

---

## Main Features

- Next.js 15 App Router
- React 19
- TypeScript
- Route Groups
- Dynamic Routes
- Responsive navigation
- Mobile navigation animation
- Dropdown menus
- Reusable layout components
- Legal service pages
- Legal blog listing
- Appointment forms
- Contact form
- Swiper components
- Animated UI elements
- React Icons
- Floating WhatsApp button
- Responsive footer
- Tailwind CSS design system
- Mock JSON content architecture

---

## Page Structure

The application contains multiple public-facing sections.

```text
/
├── Home
│
├── Biz Kimiz?
│   ├── /biz-kimiz/hakkimizda
│   ├── /biz-kimiz/misyonumuz
│   ├── /biz-kimiz/stratejimiz
│   └── /biz-kimiz/sertifikalarimiz
│
├── Hizmetlerimiz
│   ├── /hizmetlerimiz
│   └── /hizmetlerimiz/[slug]
│
├── Hukuki Blog
│   └── /hukuki-blog
│
└── İletişim
    └── /iletisim
```

---

## Home Page

The homepage is composed of several reusable sections:

```text
Hero
  ↓
About Us
  ↓
Logo Cloud
  ↓
Swiper Section
  ↓
Blog Slider
  ↓
Contact Form
```

This structure provides a strong base for a corporate legal services landing page.

---

## Hero Section

The hero introduces the law firm using:

- Responsive layout
- Corporate headline
- Supporting description
- Lawyer visual
- Appointment CTA
- Mobile and desktop optimized structure

Main CTA:

```text
Randevu Al
```

The section adapts from stacked mobile layout to a two-column desktop layout.

---

## Navigation System

The navbar uses JSON-based navigation data:

```text
mock/navData.json
```

This keeps route definitions separate from the component itself.

The navigation includes:

- Desktop dropdown menus
- Mobile menu
- Animated mobile menu entrance
- Nested submenu support
- Appointment CTA
- Sticky positioning

The mobile menu uses **Framer Motion** for transitions.

---

## Legal Practice Areas

The project currently includes the following practice areas:

- Şirketler Hukuku Danışmanlığı
- Sözleşme Hukuku Danışmanlığı
- Fikri ve Sınai Haklar Hukuku
- Gayrimenkul Hukuku Danışmanlığı
- İş ve Sosyal Güvenlik Hukuku

These routes use the dynamic structure:

```text
/hizmetlerimiz/[slug]
```

Example:

```text
/hizmetlerimiz/sirketler-hukuku
```

---

## Dynamic Service Pages

Service detail pages are handled by:

```text
app/(pages)/hizmetlerimiz/[slug]/page.tsx
```

The current page structure contains:

- Page header
- Breadcrumb-style navigation
- Service introduction
- Background image section
- Appointment form
- Practice area selection

The content is currently mostly placeholder-based, but the route architecture is already in place for reusable legal service detail pages.

---

## Legal Blog

The application contains a legal blog section using:

```text
mock/blog.json
```

Current topics include:

- Divorce proceedings
- Employee rights
- Intellectual property
- Mortgage sales
- Consumer rights

Each mock blog record includes:

```json
{
  "title": "...",
  "content": "...",
  "topics": [],
  "date": "...",
  "friendlyUrl": "..."
}
```

This provides a clean base for migrating the content to a CMS or database later.

---

## Blog Architecture

The blog listing renders content through:

```tsx
blog.map((post) => ...)
```

Each card includes:

- Thumbnail
- Title
- Short description
- Publication date
- Friendly URL
- Read More CTA

The current content source is static JSON.

---

## Appointment & Contact Forms

The project includes reusable form interfaces for:

- General contact
- Legal service inquiries
- Appointment requests

Current fields include:

```text
Name
Email
Phone
Legal Topic
Description
```

Available legal topic options include:

```text
Şirketler Hukuku Danışmanlığı
Sözleşme Hukuku Danışmanlığı
Fikri ve Sınai Haklar Hukuku
Gayrimenkul Hukuku Danışmanlığı
İş ve Sosyal Güvenlik Hukuku
```

> Forms currently provide the frontend interface only. Server-side submission and persistence are not implemented yet.

---

## Responsive Design

The interface includes responsive implementations for:

- Navbar
- Dropdown navigation
- Mobile navigation
- Hero section
- Forms
- Service grids
- Blog grids
- Footer
- Typography
- Spacing

Common breakpoints use Tailwind's:

```text
md
lg
```

variants throughout the application.

---

## Footer

The footer includes:

- Brand logo
- Corporate navigation
- Practice area navigation
- Social media icons
- Legal links
- Copyright section

Social icons include:

- Facebook
- X
- Instagram
- Telegram
- LinkedIn

---

## Floating WhatsApp Action

The root layout contains a fixed WhatsApp button:

```tsx
<FaWhatsapp />
```

The button uses:

- Fixed positioning
- Pulse animation
- Hover scaling
- High z-index

This provides a persistent contact entry point throughout the application.

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| **Next.js 15.1** | Application framework |
| **React 19** | UI architecture |
| **TypeScript 5** | Type safety |
| **Tailwind CSS 3.4** | Styling |
| **Framer Motion 11** | UI animations |
| **Motion 11** | Motion utilities |
| **Swiper 11** | Slider components |
| **React Icons** | Icon library |
| **React CountUp** | Animated number support |
| **Turbopack** | Development bundler |

---

## Architecture

```text
Next-LawApp/
│
├── app/
│   ├── (pages)/
│   │   ├── biz-kimiz/
│   │   │   ├── hakkimizda/
│   │   │   ├── misyonumuz/
│   │   │   ├── sertifikalarimiz/
│   │   │   └── stratejimiz/
│   │   │
│   │   ├── hizmetlerimiz/
│   │   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   │
│   │   ├── hukuki-blog/
│   │   ├── iletisim/
│   │   └── layout.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── home/
│   │   ├── AboutUs.tsx
│   │   ├── BlogTriple.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Hero.tsx
│   │   ├── LogoCloud.tsx
│   │   └── SwiperSection.tsx
│   │
│   ├── pages/
│   │   ├── PagesTitle.tsx
│   │   ├── about/
│   │   │   └── ImageGalery.tsx
│   │   └── services/
│   │       └── ServiceCard.tsx
│   │
│   └── ui/
│       ├── Container.tsx
│       ├── Footer.tsx
│       ├── Loader.tsx
│       ├── Navbar.tsx
│       ├── PageHeader.tsx
│       ├── SwiperDemo.tsx
│       └── SwiperDemoBlog.tsx
│
├── mock/
│   ├── blog.json
│   └── navData.json
│
├── public/
│   ├── assets/
│   ├── law.svg
│   └── logo.svg
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Content Architecture

The project currently separates navigation and blog content into mock files.

```text
mock/
├── navData.json
└── blog.json
```

This makes future migration to:

- REST API
- Headless CMS
- Database
- Admin panel

significantly easier.

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/seyitbugraerden/Next-LawApp.git
```

Navigate to the project:

```bash
cd Next-LawApp
```

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Runs Next.js with Turbopack.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm start
```

Runs the production application.

---

## Development Roadmap

Natural next steps for the project include:

- Replace Lorem Ipsum content
- Replace placeholder lawyer/contact information
- Add real legal service content
- Create individual blog detail pages
- Connect contact forms to a backend
- Add form validation
- Add email notifications
- Add CMS integration
- Add admin panel
- Replace mock JSON with persistent data
- Add SEO metadata per route
- Add structured legal service schema
- Add loading and error states
- Improve accessibility
- Add automated tests
- Optimize external images
- Add analytics
- Add cookie/privacy controls

---

## Potential Backend Architecture

The existing frontend can be extended into:

```text
Next.js UI
   │
   ▼
Server Actions / Route Handlers
   │
   ├── Contact
   ├── Appointment
   ├── Blog
   └── Services
   │
   ▼
Database / CMS
```

This would convert the current frontend prototype into a full legal content management platform.

---

## Developer

<div align="center">

### Seyit Buğra Erden

**Full Stack Developer · Software Engineer**

[GitHub](https://github.com/seyitbugraerden) ·
[LinkedIn](https://www.linkedin.com/in/sbugraerden/)

<br />

Built with **Next.js · React · TypeScript · Tailwind CSS · Framer Motion**

</div>
