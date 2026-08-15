# Source Audit Protocol

A website study is not considered trusted until the implementation has been audited as far as public access allows.

## Why
Visual inspection is useful for composition, but it is unreliable for exact type, spacing, radii, motion, and component-state values. The knowledge base should therefore prefer source-derived evidence before design interpretation.

## Audit order

### 1. Official machine-readable design resources
Check first for:
- `/design.md`
- design-system documentation
- brand guidelines
- token files
- public component docs
- public repositories

These have the highest authority because they expose both values and intent.

### 2. Live page HTML
Record:
- semantic structure
- recurring component anatomy
- element order
- accessible names
- class / data-attribute patterns

### 3. CSS source
Inspect linked stylesheets and record:
- CSS custom properties
- `@font-face`
- font-family / weight / feature declarations
- colors
- spacing values that repeat
- width / max-width
- border radius
- border / box-shadow
- transitions / easings
- media queries
- `clamp()` / fluid type rules

### 4. Rendered measurement
Use computed styles or repeated rendered measurements for values not exposed as named tokens.

Mark these **B**, even if the measured pixel value is precise: it is a reconstructed implementation value, not necessarily an official design-system token.

### 5. Secondary extraction tools
Tools that analyze CSS/DOM may accelerate auditing. Treat their output as secondary evidence and cross-check important values against the live website when possible.

### 6. Visual interpretation
Only after the above should the study explain:
- why the hierarchy works
- how rhythm is constructed
- what gives the site its atmosphere
- which rules transfer well to another product

These are **C** findings.

## Token promotion rule
A value becomes a DESIGN.md token when at least one is true:
1. it is defined as a source variable/token;
2. it repeats consistently across multiple components;
3. it is a stable system-level measured value rather than a one-off art-direction value.

Do not turn every CSS number into a token.

## Required study metadata
Every `design.md` must include:

```text
Source URL
Audited date
Audit status: source-audited | partial | visual-only
Evidence sources
Target viewport(s)
```

## Required evidence trail
For important exact values, include at least one of:
- CSS variable name
- selector / declaration
- official docs reference
- font declaration
- measured extraction source

## DESIGN.md output contract
Use YAML front matter for machine-readable tokens and Markdown prose for usage intent.

Core order:
1. Overview
2. Colors
3. Typography
4. Layout
5. Elevation & Depth
6. Shapes
7. Components
8. Interaction & Motion
9. Responsive Behavior
10. Content & Voice
11. Do's and Don'ts
12. Agent Prompt Guide
13. Source Audit

The first 8 items stay compatible with the emerging Google `design.md` format; additional sections preserve behavior and context that coding agents need.

## Specimen rule
`specimen.html` should be generated from the audited DESIGN.md rather than independently art-directed. When the DESIGN.md changes, the specimen should be regenerated.
