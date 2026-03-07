# Personal Portfolio — Robotics Engineering

A premium full-stack personal portfolio for a robotics engineering student, built with Next.js, React, TypeScript, and Tailwind. Design inspired by Stripe, Linear, and Vercel.

## Features

- **Pages:** Home, Projects (with case studies), Build Log/Blog, About, Resume, Contact
- **Tech:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Geist font
- **Design:** 8px spacing system, subtle animations, responsive layout, light/dark support via CSS variables
- **Backend:** Next.js API route for contact (`POST /api/contact`), server action with Zod validation, shared validation and processing in `src/lib/contact.ts`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/              # App Router pages and layout
  components/       # Shared UI (Header, Footer, Button, ProjectCard, Container)
  lib/              # Data (projects, blog), validation (contact), utils, contact processing
  types/            # TypeScript types for Project, BlogPost
```

## Contact form

The contact form is validated with Zod and submitted via a server action. Valid payloads are processed in `src/lib/contact.ts`; replace `processContactSubmission` with your email provider (e.g. Resend) or database write for production.

## Deployment

Build and start:

```bash
npm run build
npm start
```

Set `NEXT_PUBLIC_APP_URL` in production if you need the full URL for redirects or emails.

## License

Private. All rights reserved.
