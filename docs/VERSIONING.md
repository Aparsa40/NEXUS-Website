# Versioning and releases

The NEXUS-AI website follows Semantic Versioning (SemVer): `MAJOR.MINOR.PATCH`.

- **MAJOR** — incompatible changes to public routes, legal-document structure, or externally relied-on behavior.
- **MINOR** — backward-compatible user-facing features or new public documentation.
- **PATCH** — backward-compatible fixes, content corrections, dependency updates, and security fixes.

## Source of truth

- `package.json` contains the application version.
- `package-lock.json` must contain the same root package version.
- `CHANGELOG.md` records user-visible changes and release dates.
- Git tags use the `vMAJOR.MINOR.PATCH` format (for example, `v1.0.0`).
- GitHub Releases should be created from reviewed tags and include the matching changelog section.

## Release workflow

1. Complete work on a feature branch and open a pull request to `main`.
2. Run and pass CI: typecheck, tests, and production build.
3. Review the full diff, including legal text and deployment documentation.
4. Merge the approved pull request into `main`.
5. Confirm Render's production deployment succeeds and run the production smoke tests.
6. Create the matching annotated Git tag from the verified `main` commit.
7. Publish the GitHub Release using the corresponding `CHANGELOG.md` section.

Do not tag or publish a final release from an unmerged feature branch. The tag must point to the exact commit that was reviewed, merged, and deployed.
