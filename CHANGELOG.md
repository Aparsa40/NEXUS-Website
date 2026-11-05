# Changelog

Notable changes to the NEXUS-AI website are documented here. Dates use ISO 8601.

## [1.0.0] - 2026-11-05

### Added

- First release candidate for the public bilingual NEXUS-AI website.
- Public route reference and Discord Developer Portal policy URL documentation.
- Production Render deployment contract and operational smoke-test checklist.
- Versioning and release process documentation.
- Explicit all-rights-reserved source notice.

### Changed

- Corrected repository visibility wording: source repository is public; legal pages remain publicly reachable.
- Standardized supported Node.js runtime on 22.x across repository metadata and CI.
- Updated CI to use deterministic `npm ci` installation.
- Expanded HTTP tests for security headers, static assets, route behavior, and bilingual legal pages.
- Clarified that the website and Discord bot are separate deployment units.

## [0.1.0] - 2026-11-05

### Added

- Initial bilingual NEXUS-AI website (English and Persian).
- Terms of Service and Privacy Policy based on the observed bot implementation.
- Express 5 and TypeScript server with Helmet security headers.
- Health endpoints and automated HTTP tests.
- GitHub Actions CI workflow and initial Render deployment documentation.
- Search-engine noindex directives while keeping legal pages publicly reachable.
