# Security Policy

## Scope

This policy covers the public NEXUS-AI website source repository and its deployed web application. The NEXUS Discord bot is a separate application with its own runtime, credentials, integrations, and operational security requirements.

## Supported versions

Security fixes are applied to the current maintained release line. Older releases may not receive fixes; update to the latest reviewed release where possible.

## Reporting a vulnerability

Please do not publish exploit details, credentials, tokens, or personal data in a public issue.

Use GitHub private vulnerability reporting if it is enabled for this repository. Otherwise, contact the repository owner through a private GitHub communication channel. Include:

- A concise description of the issue.
- The affected route, dependency, or component.
- Safe reproduction steps.
- Potential impact and realistic attack prerequisites.
- A suggested mitigation, if known.

Do not include live secrets in reports. If a credential may have been exposed, revoke and rotate it immediately.

## Security practices

- Keep dependencies updated and review GitHub Dependabot alerts.
- Use `npm ci` and commit the lockfile.
- Store deployment secrets in the hosting provider's environment settings, never in source control.
- Use least-privilege access for repository and deployment integrations.
- Review changes to security headers, routing, static asset handling, and legal data-flow descriptions.
- Run typecheck, automated tests, and production build checks before merging.

## Disclosure

Please allow the maintainer reasonable time to investigate and prepare a fix before publicly disclosing a vulnerability. Do not access, modify, or delete data that does not belong to you while validating a report.
