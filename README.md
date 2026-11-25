# مَجَرّة | MAJARRAH

A three-page Arabic-first cosmic brand website built with React, TypeScript, Vite, Tailwind CSS, React Router, and Lucide icons.

## Pages

- `/` — Home
- `/services` — Services
- `/contact` — Contact
- `*` — Simple 404 page

## Edit central data

All business content is in `src/config/business.ts`:

- brand name and display name
- hero description and tagline
- about text
- the three services, their descriptions, notes, and images
- WhatsApp number and address
- optional Google Maps URL
- canonical site URL

Visual identity colors, font stack, and star density are in `src/config/theme.ts`. Arabic and future English UI strings are in `src/config/i18n.ts`.

WhatsApp links are generated in `src/utils/whatsapp.ts`. Every button reads the number from the central config, and each service button includes the selected service name in the prepared message.

## Images

Space imagery in `public/images/` and `public/og-cover.jpg` is sourced from NASA's public image library and optimized for the web.

## Run and build

```bash
npm install
npm run dev
npm run build
```

Production output is in `dist/`.
