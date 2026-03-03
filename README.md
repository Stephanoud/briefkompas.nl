# BriefKompas.nl

Production-ready basis voor een Next.js App Router project op Vercel.

## Lokaal draaien

```bash
npm ci
npm run dev
```

Open <http://localhost:3000>.

## Waarom deze setup deploy-robuust is

- Geen runtime-afhankelijkheid op Google Fonts via `next/font/google`.
- Lokale system-font fallback stack in `globals.css`.
- Vercel-config met expliciete build/install commands.
- Basis security headers via `vercel.json`.

## Vercel deploy

1. Push naar GitHub.
2. Import in Vercel als Next.js project.
3. Controleer Build Command (`npm run build`) en Install Command (`npm ci`).
4. Deploy.

## Productie-checklist

- [ ] Domein gekoppeld en TLS actief.
- [ ] Environment variables gezet in Vercel (zonder secrets in repo).
- [ ] Preview + Production deployments groen.
- [ ] `npm run lint` en `npm run build` slagen in CI.
- [ ] Errorpagina’s aanwezig (`app/not-found.tsx`, `app/error.tsx`) waar relevant.
- [ ] Privacy/disclaimer pagina’s aanwezig en up-to-date.
- [ ] Logging/monitoring geconfigureerd (bijv. Vercel logs + alerts).
- [ ] Backups/retentiebeleid bepaald voor uploads en gegevensopslag.
