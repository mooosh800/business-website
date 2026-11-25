# Business Website

A three-page Arabic-first commercial website built with React, TypeScript, Vite, Tailwind CSS, React Router, and Lucide icons.

## Pages

- `/` — Home
- `/services` — Services
- `/contact` — Contact
- `*` — Simple 404 page

## Edit business data

All editable business data is in `src/config/business.ts`:

- business name and type
- hero description and tagline
- about text
- the three services
- WhatsApp number and address
- optional Google Maps URL
- canonical site URL

Visual identity colors and font stack are in `src/config/theme.ts`. UI translations for Arabic and future English support are in `src/config/i18n.ts`.

WhatsApp links are generated in `src/utils/whatsapp.ts`. Replace the placeholder number in `business.ts` with the real number including country code; all buttons update automatically.

## Run and build

```bash
npm install
npm run dev
npm run build
```

Production output is in `dist/`.
