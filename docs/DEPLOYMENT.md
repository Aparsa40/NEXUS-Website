# Render deployment

## Service settings

Create a Node Web Service from the private GitHub repository Aparsa40/NEXUS-Website.

| Setting | Value |
| --- | --- |
| Runtime | Node |
| Branch | main, after the initial branch is reviewed and merged |
| Build command | npm install && npm run build |
| Start command | npm start |
| Health check path | /healthz |
| Node version | 22 |

Render provides the PORT environment variable. The server binds to 0.0.0.0.

## Before deployment

1. Review and merge the initial website branch after CI passes.
2. Connect the repository to Render.
3. Confirm the service URL and HTTPS certificate.
4. Open /, /terms, /privacy, and /healthz on the deployed hostname.
5. Add the final Terms of Service and Privacy Policy URLs to the Discord Developer Portal.

## Operational notes

- No database is required for the current site.
- No secrets are required for the current site.
- The site sends X-Robots-Tag: noindex, follow and includes a matching HTML robots meta tag. This discourages search indexing without blocking Discord from fetching legal pages.
- Render free instances may sleep when idle; allow for a cold start when validating Discord's URL checks.
