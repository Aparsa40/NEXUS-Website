# NEXUS-AI Website

Official bilingual (English and Persian) website and public legal documentation for the [NEXUS-AI Discord bot](https://github.com/Aparsa40/NEXUS).

**Website:** https://nexus-website-1406.onrender.com  
**Release:** 1.0.0 (initial public website release candidate)

> This is the public source repository for the website. The deployed site is intended to provide Discord users and platform reviewers with accessible project information, Terms of Service, and Privacy Policy pages. Search indexing is intentionally discouraged; the pages remain publicly accessible.

## What is included

- Responsive project overview in English and Persian.
- English and Persian Terms of Service.
- English and Persian Privacy Policy.
- Express 5 server with security headers.
- Health endpoints for hosting checks.
- Automated HTTP tests and GitHub Actions CI.
- Render deployment documentation and Discord Developer Portal URL reference.

## Public routes

| Page | English | Persian |
| --- | --- | --- |
| Home | [Open](https://nexus-website-1406.onrender.com/?lang=en) | [باز کردن](https://nexus-website-1406.onrender.com/?lang=fa) |
| Terms of Service | [Open](https://nexus-website-1406.onrender.com/terms) | [باز کردن](https://nexus-website-1406.onrender.com/terms?lang=fa) |
| Privacy Policy | [Open](https://nexus-website-1406.onrender.com/privacy) | [باز کردن](https://nexus-website-1406.onrender.com/privacy?lang=fa) |
| Health check | [JSON](https://nexus-website-1406.onrender.com/healthz) | — |

The canonical policy URLs for Discord Developer Portal are documented in [docs/DISCORD-DEVELOPER-PORTAL.md](docs/DISCORD-DEVELOPER-PORTAL.md).

## Technology and runtime

- Node.js 22.x
- TypeScript (strict mode)
- Express 5
- Helmet
- Node.js test runner through `tsx`

The supported runtime is pinned to Node.js 22.x through `.node-version`, `package.json`, and CI.

## Local development

Requirements: Node.js 22.x and npm.

Windows PowerShell:

```powershell
git clone https://github.com/Aparsa40/NEXUS-Website.git
Set-Location NEXUS-Website
npm ci
Copy-Item .env.example .env
npm run dev
```

macOS / Linux:

```bash
git clone https://github.com/Aparsa40/NEXUS-Website.git
cd NEXUS-Website
npm ci
cp .env.example .env
npm run dev
```

Open http://127.0.0.1:3000.

The website does not require application credentials, a database, or third-party API keys. `.env.example` only documents the optional local `PORT` and `NODE_ENV` settings.

## Quality checks

Run these commands before submitting changes:

```bash
npm ci
npm run check
npm test
npm run build
```

GitHub Actions runs the same typecheck, test, and build sequence on pushes to the maintained branches and on pull requests targeting `main`.

## Render deployment

The production service is hosted as a Render Free Web Service:

- Repository: `Aparsa40/NEXUS-Website`
- Branch: `main`
- Build command: `npm install && npm run build`
- Start command: `npm run start`
- Health check: `/healthz`
- Region: Oregon
- Service URL: https://nexus-website-1406.onrender.com

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for the deployment contract, smoke tests, and operational limitations. Production auto-deploy is configured to run after CI checks pass.

## Security and privacy

- Never commit `.env` files, Discord tokens, GitHub tokens, or AI provider keys.
- The website currently has no user accounts, forms, analytics integration, application database, or application-managed cookies.
- The bot's actual data flows are described in the legal pages. Re-review those pages whenever the bot's integrations, permissions, storage, or GitHub write workflow changes.
- The site sends `X-Robots-Tag: noindex, follow` and includes a matching HTML robots directive. This discourages search indexing without blocking public access to the legal pages.
- See [SECURITY.md](SECURITY.md) for vulnerability reporting guidance.

## Documentation

- [Deployment](docs/DEPLOYMENT.md)
- [Discord Developer Portal URLs](docs/DISCORD-DEVELOPER-PORTAL.md)
- [Versioning and releases](docs/VERSIONING.md)
- [Security policy](SECURITY.md)
- [Changelog](CHANGELOG.md)

## License

All rights reserved. The repository is public for inspection and deployment; public visibility does not grant permission to copy, modify, distribute, or use the source. See [LICENSE](LICENSE).
