# Eventra — Full-Stack Event Platform

Eventra is a full-stack event management platform built with Next.js.  
It allows users to browse events, view detailed event pages, and manage event data through API routes.

This project was built as a hands-on learning experience while coding along with a long-form tutorial.  
All code was written and tested manually to deeply understand how the system works end-to-end.

---

## ✨ Features

- Dynamic home page listing upcoming events
- Event detail pages with related events
- Full CRUD functionality using Next.js API routes
- Cloud-based image uploads
- Server and client component separation
- Analytics integration for tracking user interactions
- Modern caching and performance optimizations

---

## ⚙️ Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **MongoDB**
- **Mongoose**
- **Cloudinary**
- **PostHog Analytics**

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

```bash
git clone https://github.com/iibrahimx/eventra.git
cd eventra
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
MONGODB_URI=
CLOUDINARY_URL=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
```

### Run the project

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 📸 Screenshots

### Home Page

### Event Details

## 📚 Learning Notes

This project helped reinforce:

- Full-stack development with Next.js
- API design and database integration
- Real-world project structure
- Debugging and incremental development

## 📄 License

This project is for educational purposes.
