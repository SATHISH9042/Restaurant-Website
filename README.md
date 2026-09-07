# Saffron Leaf Restaurant Website

> **Authentic South Indian Flavours, Served Fresh**

A modern, responsive, production-quality South Indian restaurant website built with React, Vite, Tailwind CSS, TypeScript, and Framer Motion. Engineered both as a portfolio project and a modular, client-ready template.

---

## 🔒 Security & Secrets Audit

This project is entirely **frontend-driven** and contains:
- **NO `.env` files**
- **NO API keys**
- **NO passwords**
- **NO database credentials**
- **NO secret tokens**

All forms (reservations, contact messages, newsletter subscriptions) use a clean service abstraction layer (`src/services/`) that is ready to connect to any backend API or webhook (such as Supabase, Firebase, Node.js/Express, or Formspree) when you are ready to deploy to a real client.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v3 with custom luxury warm palette
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Routing**: React Router v7

---

## 📁 Centralized Configuration

All restaurant information can be updated from a single file:
- **`src/config/restaurant.ts`**: Restaurant name, tagline, phone, address, operating hours, WhatsApp pre-filled message, Google Maps embed, and special offers.
- **`src/config/menuData.ts`**: Categorized menu with pricing, descriptions, dietary indicators, spice levels, and photography.
- **`src/config/galleryData.ts`**: Categorized photo gallery (Food, Interior, Events, Kitchen).
- **`src/config/testimonials.ts`**: Customer reviews and ratings.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or `http://localhost:5174`).

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 📄 License
MIT
