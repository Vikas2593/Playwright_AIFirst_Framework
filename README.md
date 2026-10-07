# Playwright_AIFirst_Framework

A Playwright (TypeScript) test framework built around an AI-first workflow: Playwright's planner, generator and healer agents help plan, write and repair tests.

Application under test: <https://sauce-demo.myshopify.com> (configured as `baseURL`).

## Project structure

| Path | Purpose |
| --- | --- |
| `tests/` | Playwright test files |
| `tests/seed.spec.ts` | Seed test used by the agents as a starting point/environment |
| `pages/` | Page objects |
| `specs/` | Markdown test plans produced by the planner agent |
| `.github/agents/` | Playwright agent definitions: planner, generator, healer |
| `.github/workflows/` | `playwright.yml` (CI test run) and `copilot-setup-steps.yml` |
| `playwright.config.ts` | Playwright configuration (Chromium, HTML reporter) |

## Getting started

```bash
npm install
npx playwright install
```

## Running tests

```bash
npx playwright test                 # run all tests
npx playwright test tests/cartFlow.spec.ts
npx playwright test --headed        # watch the browser
npx playwright show-report          # open the HTML report
```

## AI-first workflow

1. **Plan**: the planner agent explores the app and writes a test plan to `specs/`.
2. **Generate**: the generator agent turns a plan into tests in `tests/`, starting from `tests/seed.spec.ts`.
3. **Heal**: the healer agent runs failing tests, diagnoses them and fixes the code.

## CI

GitHub Actions (`.github/workflows/playwright.yml`) installs dependencies and browsers, then runs `npx playwright test`. On CI, tests retry twice and run with a single worker.
