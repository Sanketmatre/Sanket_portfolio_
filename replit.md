# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Project: Sanket Matre Portfolio

A professional multi-page portfolio website for **Sanket Matre**, final-year ENTC Engineering student.

### Architecture
- **Frontend**: React + Vite at `/` (`artifacts/fresher-portfolio`)
  - Theme: Dark navy (#0d1526) + Electric Blue + Violet accent, Inter font
  - Routing: Wouter with `Router base` set to `import.meta.env.BASE_URL`
  - Auth: JWT stored in `localStorage` as `"auth_token"`, wired via `setAuthTokenGetter`
  - Animations: Framer Motion, Tailwind CSS v4
- **Backend API**: Express at port 8080 (`artifacts/api-server`)
  - Routes: `/api/auth/*` (JWT), `/api/contact` (POST), `/api/resume/download` (proxy)
- **Database**: PostgreSQL — tables: `users`, `contact_messages`

### Pages (12 routes)
| Route | Page |
|-------|------|
| `/` | Home — typewriter hero, code card, stats, CTAs |
| `/about` | About — bio, keywords, traits, resume download |
| `/skills` | Skills — animated progress bars by category |
| `/projects` | Projects — filterable cards, FramDirect featured |
| `/experience` | Experience & Education timeline |
| `/certifications` | Certifications & Achievements |
| `/coding-profiles` | LeetCode, HackerRank, CodeChef profiles |
| `/contact` | Contact form (saved to DB) + social links |
| `/login` | JWT login → localStorage |
| `/register` | Register new account |
| `/dashboard` | Auth-protected dashboard |
| `*` | 404 NotFound |

### Key Person Info
- LinkedIn: https://www.linkedin.com/in/sanket-matre-0126a2296/
- Featured project: FramDirect (Python/Flask/MySQL, -60% distribution costs)
- 100+ DSA problems solved
