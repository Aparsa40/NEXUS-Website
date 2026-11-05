# Security Policy

## Scope

This policy covers the NEXUS-AI website repository and its deployed web application. The Discord bot has its own runtime and integrations.

## Reporting a vulnerability

Please do not publish exploit details, credentials, tokens, or personal data in a public issue. Report suspected vulnerabilities privately to the repository owner through GitHub's private communication channels. Include a concise description, affected route or component, safe reproduction steps, potential impact, and suggested mitigation.

Do not include live secrets in reports. Revoke and rotate any credential that may have been exposed.

## Security practices

- Keep dependencies updated and review automated security alerts.
- Store deployment secrets in the hosting provider's environment settings, never in source control.
- Use least-privilege access for repository and deployment integrations.
- Review changes to security headers, routing, and legal data-flow descriptions.
