# Production deployment — Render

This document records the current production deployment contract for the NEXUS-AI website.

## Production service

| Setting | Value |
| --- | --- |
| Provider | Render |
| Workspace | `NEXUS-AI` |
| Project | `NEXUS` |
| Environment | `Production` |
| Service | `nexus-website` |
| Service type | Node.js Web Service |
| Plan | Free |
| Repository | `https://github.com/Aparsa40/NEXUS-Website` |
| Deploy branch | `main` |
| Region | Oregon |
| Root directory | Repository root |
| Build command | `npm install && npm run build` |
| Start command | `npm run start` |
| Health check path | `/healthz` |
| Public URL | `https://nexus-website-1406.onrender.com` |

Render auto-deploy is configured to deploy the `main` branch after CI checks pass. Feature branches do not replace the production site unless they are merged into `main`.

## Runtime

The supported runtime is Node.js 22.x. The repository pins this through `.node-version`, the `engines.node` field in `package.json`, and the GitHub Actions workflow. Keep those settings aligned when upgrading Node.js.

Render supplies the `PORT` environment variable. The server validates it and listens on `0.0.0.0`.

## Environment variables and secrets

No application secrets or external credentials are required by the current website. The only optional local variables are:

- `PORT` — local HTTP port; defaults to `3000`.
- `NODE_ENV` — local runtime mode.

Do not add Discord, GitHub, or OpenRouter credentials to this website service. Those belong to the separate bot runtime.

## Deployment procedure

1. Make changes on a feature branch.
2. Run `npm ci`, `npm run check`, `npm test`, and `npm run build`.
3. Open a pull request targeting `main`.
4. Wait for the CI workflow to pass and review the diff.
5. Merge the pull request only after approval.
6. Confirm Render deploys the new `main` commit after CI checks pass.
7. Verify the public routes and health endpoint listed below.

Do not manually deploy an unreviewed feature branch to the production service.

## Production smoke tests

Open each URL after a deployment:

- `/` — English home page.
- `/?lang=fa` — Persian home page (RTL).
- `/terms` and `/terms?lang=fa` — Terms of Service.
- `/privacy` and `/privacy?lang=fa` — Privacy Policy.
- `/healthz` — JSON health response with status `ok`.
- `/styles.css` — public stylesheet.

Also verify that the language switch remains on the current page, policy navigation works, and unknown routes return HTTP 404.

## Operational limitations

- Render Free Web Services may spin down when idle; the first request after inactivity can be slower.
- The website has no persistent application data and no database.
- `X-Robots-Tag: noindex, follow` and the HTML robots meta tag discourage search indexing. They do not require authentication and must not prevent Discord from fetching the policy pages.
- The Render service is managed separately from the NEXUS Discord bot. Updating this website does not deploy or modify the bot.
