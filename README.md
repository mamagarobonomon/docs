# Nimbus Docs

This repo contains the documentation site for **Nimbus** (MDX pages + Mintlify configuration).

## Local development

### Prerequisites

- Node.js (LTS recommended)

### Install

```bash
npm ci
```

### Run the docs site

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Project structure

- **Site config**: `docs.json` (navigation, theme, links, etc.)
- **Pages**: `*.mdx` (e.g. `index.mdx`, `python-sdk/*`, `core-concepts/*`)
- **API spec**: `api-reference/openapi.json`
- **Static assets**: `images/`, `logo/`, `favicon.svg`

## Common maintenance commands

### Check internal links

```bash
npx --yes mintlify broken-links
```

### Validate the OpenAPI spec

```bash
npx --yes mintlify openapi-check api-reference/openapi.json
```

### Accessibility check (optional)

```bash
npx --yes mintlify a11y
```

## Editing navigation

Navigation and grouping are defined in `docs.json` under `navigation.groups`. Page entries are **routes**, which usually map to:

- `some/path` → `some/path.mdx`
- `some/path` → `some/path/index.mdx`

## Contributing

- Keep pages in **MDX** and prefer internal links like `/python-sdk/quickstart`.
- After editing `<Tabs>/<Tab>` blocks, run the broken-links check (it also catches MDX parse errors).

