# NEXUS-Website

Official bilingual website and legal documentation for **NEXUS-AI**.

> The repository is private. The deployed website and legal URLs are intended to be reachable publicly by Discord and users who need to review the policies. Search indexing is discouraged with a noindex directive.

## Project status

**Initial implementation — v0.1.0**

The site currently includes:
- A bilingual (English/Persian) project overview.
- Terms of Service at /terms.
- Privacy Policy at /privacy.
- Health endpoints at /healthz and /api/health.
- Responsive styling, baseline security headers, automated tests, and CI.

The legal pages describe the current bot behavior observed in Aparsa40/NEXUS. They must be reviewed whenever the bot's integrations, data flows, storage, or GitHub write behavior changes.

## Technology

- Node.js 22+
- TypeScript (strict mode)
- Express 5
- Helmet
- Node test runner via tsx

## Local development

Install dependencies and start the development server:

    npm install
    cp .env.example .env
    npm run dev

On Windows PowerShell:

    Copy-Item .env.example .env
    npm install
    npm run dev

Open http://localhost:3000.

## Scripts

| Command | Purpose |
| --- | --- |
| npm run dev | Start the development server with watch mode. |
| npm run check | Run the TypeScript type check. |
| npm test | Run HTTP route tests. |
| npm run build | Compile TypeScript into dist/. |
| npm start | Start the compiled production server. |

## Routes

| Route | Description |
| --- | --- |
| / | Project overview (use ?lang=en or ?lang=fa). |
| /terms | Terms of Service. |
| /privacy | Privacy Policy. |
| /healthz | Hosting health check. |
| /api/health | JSON health response. |

## Render deployment

See docs/DEPLOYMENT.md. Recommended settings:

- Build: npm install && npm run build
- Start: npm start
- Health check: /healthz

No database or application secrets are required by the current website.

## Security and legal notes

- Do not commit .env files, Discord tokens, GitHub tokens, or AI provider keys.
- The website does not currently use analytics, user accounts, cookies, forms, or a database.
- Legal pages are operational descriptions, not legal advice. Review them against the deployed bot configuration before submitting them for platform verification.
- See SECURITY.md for vulnerability reporting guidance.

## License

This repository is marked UNLICENSED. No permission to reuse or redistribute the source is granted by default.
