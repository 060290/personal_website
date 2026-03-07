# personal_website

A premium full-stack personal portfolio for a robotics engineering student, inspired by Stripe, Linear, and Vercel. Built with **Next.js 14**, **React**, **TypeScript**, and **Tailwind CSS**, with a clean modern UI, Geist typography, 8px spacing system, and subtle CSS animations.

## Structure

- **`/frontend`** — UI layer: React components, pages data (projects, blog), and frontend utilities (`lib/cn`, etc.).
- **`/backend`** — Server-side logic: contact form validation (Zod) and schema used by the API.
- **`/app`** — Next.js App Router: layout, routes (Home, Projects, Build Log, About, Resume, Contact), and API route for the contact form.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, featured projects, build log CTA |
| `/projects` | Projects list (quadruped assistive robot, obstacle-avoiding robot car) |
| `/projects/[slug]` | Case study pages with problem, solution, process, tech, outcomes |
| `/blog` | Build log index |
| `/blog/[slug]` | Individual build log posts |
| `/about` | About and links to projects, blog, resume, contact |
| `/resume` | Education, experience, skills, and PDF download placeholder |
| `/contact` | Validated contact form (POST to `/api/contact`) |

## Contact form (backend)

- **Validation**: `backend/lib/contact-schema.ts` — Zod schema for name, email, subject, message with min/max lengths.
- **API**: `app/api/contact/route.ts` — POST handler that validates with the backend schema and returns 400 with field errors or 200 on success. Extend this to send email (e.g. Resend, SendGrid) or store in a DB.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Customization

- **Content**: Edit `frontend/data/projects.ts` and `frontend/data/blog.ts` for projects and build log posts.
- **Resume PDF**: Add `resume.pdf` to `public/` and the Resume page link will work.
- **Images**: Add project images under `public/projects/` and reference them in the project data (e.g. `/projects/quadruped-hero.jpg`).
