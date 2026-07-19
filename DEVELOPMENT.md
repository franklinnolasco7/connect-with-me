# Development guide

## Setup

Requires Node.js 20.19+ or 22.12+ and npm 10+.

```bash
npm install
npm run dev
```

## Customize

Edit `src/data/profile.ts` for profile details, contact values, links, and link
order. Links need a unique `id`; set `external: true` to open one in a new tab.

Edit `src/config/icons.ts` to add Lucide icons, then use the registered key as a
link's `icon`. Put the avatar in `public` and set its path in `avatarUrl`.

Encode public contact values with:

```bash
printf '%s' 'value' | base64
```

Base64 is only obfuscation. Never use it for passwords, tokens, or other real
secrets.

Also update the title and description in `index.html` before publishing.

## Checks

```bash
npm run check
```

This runs Prettier, ESLint, TypeScript, and the production build.

CI also blocks high- and critical-severity dependency vulnerabilities. Run the
same audit locally with:

```bash
npm run audit
```

## Deployment

CI checks pull requests and pushes to `main`. Vercel builds with
`npm run build`, publishes `dist`, and serves https://franklinks.tech.
