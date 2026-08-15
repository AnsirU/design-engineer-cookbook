---
version: alpha
name: "[Website / Brand]"
description: "Source-audited website design language for AI-assisted reconstruction."
colors: {}
typography: {}
rounded: {}
spacing: {}
components: {}
---

# [Website / Brand] — DESIGN.md

> Source URL:  
> Audited date:  
> Audit status: `source-audited | partial | visual-only`  
> Target viewport(s):  
> Evidence sources: page HTML, linked CSS, CSS custom properties, computed styles, public design docs, public assets.

## Overview
Describe the site's visual identity, product/brand personality, audience, density, emotional tone, and the strongest transferable design idea. State what should feel true even when an exact token is not available.

## Colors
Document exact repeated source values first, then explain their semantic roles.

For every token record:
- value
- role
- source path / selector / CSS variable when available
- evidence grade

Include:
- page / surface colors
- foreground hierarchy
- borders / dividers
- interactive colors
- semantic colors
- selection / focus colors
- gradients only when source-confirmed

## Typography
Document actual font-family declarations and loaded font assets when inspectable.

For each recurring type role capture:
- font family
- font size
- weight
- line-height
- letter-spacing
- text transform
- font-feature / variable-font settings if relevant
- role and typical usage

Prefer a table covering display, heading, body, label, caption, mono/code, buttons, and inputs.

## Layout
Capture both tokens and composition rules:
- max page width(s)
- content width(s)
- column count
- gutters
- page margins
- section spacing
- component gaps
- card padding
- breakpoint behavior
- full-bleed exceptions
- deliberate grid breaks

Repeated values should become spacing tokens. One-off art-direction values stay documented as exceptions rather than being promoted to tokens.

## Elevation & Depth
Capture:
- borders vs outline/box-shadow boundaries
- shadow stacks
- blur / backdrop-filter
- overlays
- z-index layers when meaningful
- whether the system is intentionally flat

## Shapes
Capture:
- radius scale
- border widths
- pills vs cards vs media geometry
- nested-radius relationships
- clipping / masks / unusual shapes

## Components
Document recurring components as implementation recipes, not just names.

For each component include:
- anatomy
- exact or tokenized dimensions
- typography
- padding / gaps
- colors / surfaces
- default / hover / active / focus / disabled states
- responsive substitutions
- placement rules where relevant

Good candidates: nav, CTA, project row, card, media frame, tag, input, tooltip, modal, footer, index row.

## Interaction & Motion
Treat behavior as part of the design system.

Capture:
- hover behavior
- focus behavior
- cursor changes
- scroll-linked effects
- sticky / pinned regions
- reveal behavior
- durations
- easing functions
- transform properties
- reduced-motion fallbacks
- mobile/touch substitutions

## Responsive Behavior
Record what changes structurally rather than merely scales:
- navigation substitution
- column collapse
- typography clamp behavior
- spacing compression
- media cropping
- interaction changes for touch
- minimum hit targets

## Content & Voice
Capture:
- headline grammar
- capitalization
- button language
- metadata style
- number/date treatment
- claim-to-proof structure

## Do's and Don'ts
Write rules an agent can apply without seeing the source site.

### Do
- ...

### Don't
- ...

## Agent Prompt Guide
Provide a compact quick-reference block containing the highest-value tokens and 3–5 example component prompts.

## Source Audit
### A — Direct source confirmation
List selectors, variables, font declarations, component styles, or official design docs used to confirm values.

### B — Measured / repeated reconstruction
Values measured repeatedly from the rendered website when source naming is unavailable.

### C — Interpretive principles
Transferable design judgments that are not implementation facts.

## References
- Live website
- CSS / JS assets inspected
- Official design / brand docs
- Public design-system docs
- Supporting measured extraction tools, clearly marked as secondary evidence
