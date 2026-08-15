# DESIGN.md Reference Sources

Use these sites as **reference sources for method and output quality**, not as content that must be copied into this repository.

The repository's primary asset is the reusable `DESIGN.md` structure in `templates/website-study-template.md`. When creating a new DESIGN.md, an agent should consult the sources below for current examples, extraction depth, interaction guidance, and machine-readable formatting.

## 1. Vercel

### DESIGN.md
https://vercel.com/design.md

Use as a first-party example of an AI-readable design reference from a mature design-engineering organization.

### Web Interface Guidelines
https://vercel.com/design/guidelines

Particularly valuable for behavior and implementation rules that visual token extraction alone misses:
- keyboard and focus behavior
- hit-target sizing
- responsive and safe-area behavior
- tooltip / inline-help decisions
- empty / sparse / dense / error states
- nested radii
- borders and layered shadows
- interaction contrast
- motion/performance constraints
- copywriting rules

### Vercel Design
https://vercel.com/design

Use to understand how Vercel connects brand, product design, Geist, and design engineering.

## 2. Refero Styles

### Library
https://styles.refero.design/

Refero is a strong example of how a reverse-engineered website style can be packaged for AI agents. Each style can expose multiple representations such as:
- visual preview
- DESIGN.md
- Tailwind v4
- CSS variables
- design tokens

This multi-format presentation is worth copying as an **output model** even when our own repository stores only the reusable methodology.

### DESIGN.md examples
https://styles.refero.design/ai-agents/design-md-examples

Key ideas to reuse:
- choose references by job, density, tone, and audience rather than brand name alone;
- copy the system, not the website;
- capture palette, type scale, layout rhythm, component weight, and visual-noise level;
- provide exact values and implementation-ready rules where source evidence supports them;
- make the reference usable directly in Cursor, Codex, Claude Code, v0, Lovable, or similar agents.

### What to study in an individual Refero entry
When opening a style page, inspect how Refero structures:
1. Style / design-DNA summary
2. Color palette with semantic roles
3. Typography families, sizes, weights, line heights, tracking, features, fallbacks
4. Spacing and density
5. Max width and layout rhythm
6. Radius vocabulary
7. Borders / shadows / surface treatment
8. Do / Don't guidance
9. DESIGN.md output
10. CSS variables / Tailwind / token exports

## 3. Google DESIGN.md

Repository / specification:
https://github.com/google-labs-code/design.md

Use as a reference for DESIGN.md as an interchange format: machine-readable design tokens plus human-readable rationale and guidance.

## 4. Source website itself

The original production website remains the highest-value evidence source for a specific reverse-engineering task.

Audit in this order where possible:
1. official DESIGN.md / design-system / brand docs
2. HTML
3. linked CSS
4. CSS custom properties
5. font declarations and loaded assets
6. media queries / responsive rules
7. transitions / keyframes / interaction scripts
8. rendered measurements
9. visual interpretation

Do not promote a visual estimate to an official token.

## Recommended agent workflow

```text
Reference URL(s)
→ read official DESIGN.md / design docs if present
→ audit production source
→ inspect Refero or similar extracted references as secondary comparison
→ fill website-study-template.md
→ distinguish source-confirmed facts from reconstruction and interpretation
→ optionally render a specimen HTML / CSS variables / Tailwind theme
```

## Important principle

**This repository should store the method, schema, and reference map; it does not need to duplicate a large catalog of website-specific DESIGN.md files.**

When a new visual direction is needed, fetch the current source and current reference library at that time. This keeps the cookbook lightweight and avoids stale design snapshots.
