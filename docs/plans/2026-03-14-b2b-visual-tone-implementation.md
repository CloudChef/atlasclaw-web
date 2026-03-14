# AtlasClaw B2B Visual Tone Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refine the AtlasClaw website into a steadier B2B product presentation with more structured layout, clearer hierarchy, and homepage messaging that explicitly includes webhook + skills as a way to empower existing systems with AI.

**Architecture:** Keep the existing Astro site structure and shared components, but tighten the hero summary, card rhythms, and section framing through content and CSS refinements. Reuse existing content sources and components instead of adding new page concepts unless necessary.

**Tech Stack:** Astro, shared `.astro` components, static content in `src/content/site.js`, global CSS in `src/styles/global.css`

---

### Task 1: Persist the approved design direction

**Files:**
- Create: `docs/plans/2026-03-14-b2b-visual-tone-design.md`
- Create: `docs/plans/2026-03-14-b2b-visual-tone-implementation.md`

**Step 1: Write the design document**

Document the approved direction:
- AWS-like enterprise tone, not AWS product-catalog IA
- single-product homepage
- steadier B2B presentation
- webhook + skills message must appear on homepage

**Step 2: Verify the files exist**

Run: `find docs/plans -maxdepth 1 -type f | sort`
Expected: both files listed

### Task 2: Tighten hero summary structure

**Files:**
- Modify: `src/styles/global.css`
- Reference: `src/components/HeroPanel.astro`

**Step 1: Adjust hero panel layout**

Keep:
- brand stage
- capability ribbon
- 2x2 capability grid

Improve:
- grouping
- spacing
- card rhythm
- section density

**Step 2: Run build**

Run: `npm run build`
Expected: build completes successfully

### Task 3: Keep homepage capability labels concrete

**Files:**
- Modify: `src/content/site.js`

**Step 1: Set concrete capability ribbon labels**

Use:
- `Multi-User`
- `Systems by Skills`
- `Multi Channels`
- `Auth by SSO`

Chinese:
- `多用户`
- `通过 Skills 连接系统`
- `多通道`
- `通过 SSO 认证`

**Step 2: Verify homepage output**

Run: `rg -n "Systems by Skills|Auth by SSO|通过 Skills 连接系统|通过 SSO 认证" dist/en/index.html dist/zh/index.html`
Expected: matches found in both built pages

### Task 4: Put webhook + skills on the homepage

**Files:**
- Modify: `src/content/site.js`

**Step 1: Update hero capability detail**

Add wording that existing systems gain AI capability through webhook entrypoints and skills.

**Step 2: Update homepage comparison card**

Ensure the system-integration comparison card mentions:
- webhook entrypoints
- skills / providers
- no need to rebuild the full agent stack

**Step 3: Update homepage feature card**

Ensure the multi-system integration feature card explicitly says webhook + skills / providers.

**Step 4: Run build**

Run: `npm run build`
Expected: build completes successfully

### Task 5: Keep architecture page aligned

**Files:**
- Modify: `src/content/site.js`
- Reference: `src/pages/[lang]/architecture.astro`

**Step 1: Keep the fourth design-choice card**

Ensure architecture page includes a fourth card explaining how systems gain LLM capability through webhook entrypoints and provider-qualified skills.

**Step 2: Verify built architecture pages**

Run: `rg -n "How do systems gain LLM brains|系统如何接入 LLM brains" dist/en/architecture/index.html dist/zh/architecture/index.html`
Expected: matches found in both built pages

### Task 6: Final verification

**Files:**
- Reference: `src/content/site.js`
- Reference: `src/styles/global.css`
- Reference: `src/components/HeroPanel.astro`
- Reference: `src/pages/[lang]/index.astro`
- Reference: `src/pages/[lang]/architecture.astro`

**Step 1: Run full build**

Run: `npm run build`
Expected: Astro build passes with all routes generated

**Step 2: Verify key homepage phrases**

Run: `rg -n "webhook entrypoints and skills|Systems by Skills|Multi Channels|Auth by SSO" dist/en/index.html`
Expected: all key phrases present

**Step 3: Verify Chinese homepage phrases**

Run: `rg -n "Webhook 入口和 Skills|通过 Skills 连接系统|多通道|通过 SSO 认证" dist/zh/index.html`
Expected: all key phrases present
