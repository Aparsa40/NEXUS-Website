# Architecture

## Current stack

- Node.js 22+
- TypeScript with strict compiler settings
- Express 5
- Helmet for baseline HTTP security headers
- Server-rendered HTML; no client framework or database

## Request flow

1. Express applies security headers and the site's noindex policy.
2. Static assets are served from public/.
3. The home, terms, and privacy routes are rendered by the page view module.
4. /healthz and /api/health expose a small health response for hosting checks.

## Design constraints

- The site does not currently use accounts, cookies, analytics, forms, or a database.
- English and Persian pages are selected with the lang query parameter.
- Legal pages remain reachable to Discord while search engines are asked not to index the site.
- No bot credentials or third-party API keys belong in this repository.

## Relationship to the bot

The website is a separate deployment and repository from Aparsa40/NEXUS. Legal statements are based on the current bot implementation and must be revisited whenever its data flows, integrations, storage, or GitHub write behavior changes.
