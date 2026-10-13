# NaviDev Portfolio

Next.js 14 + TypeScript + Tailwind CSS. The site is in English.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to put your information

| What | Where |
| --- | --- |
| Name, role, tagline, email, location, social links | `src/data/portfolio.ts` -> `profile`, `socials` |
| About me text and quick facts | `src/data/portfolio.ts` -> `about` |
| Skills | `src/data/portfolio.ts` -> `skills` |
| Projects | `src/data/portfolio.ts` -> `projects` |
| Jobs / internships | `src/data/portfolio.ts` -> `experience` |
| Studies and certifications | `src/data/portfolio.ts` -> `education` |
| Contact text | `src/data/portfolio.ts` -> `contact` |
| Your photo | Replace `public/images/avatar.svg` (or add `avatar.jpg` and update the path in `profile.avatar`) |
| Project screenshots | Add images to `public/images/` and update `image` in each project |
| Your CV | Replace `public/resume.pdf` |
| Colors | `tailwind.config.ts` -> `colors` |
| Page title / SEO | `src/app/layout.tsx` (uses your name and tagline automatically) |

## Contact form

The form opens the visitor's email app. To receive messages directly, connect a service such as Formspree or Resend inside `src/components/Contact.tsx`.

## Deploy

Push to GitHub and import the repo in Vercel. No extra setup needed.
