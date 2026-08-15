# Website Design Guidelines

A lightweight methodology for turning a real website into an AI-readable `DESIGN.md`.

The main goal of this folder is **not to maintain a large catalog of copied website styles**. Website implementations change, extracted tokens become stale, and the best reference may be different for every project. Instead, this folder should preserve:

- a stable reverse-engineering structure;
- a source-audit method;
- evidence / confidence rules;
- a curated map of high-quality reference sites;
- optional rendering guidance for turning a DESIGN.md into a visual specimen or product prototype.

## Recommended structure

```text
website design guidelines/
├── README.md
├── framework/
│   ├── analysis-dimensions.md
│   ├── evidence-and-confidence.md
│   ├── source-audit-protocol.md
│   └── implementation-strategy.md
├── templates/
│   └── website-study-template.md
├── references/
│   └── README.md
├── studies/              # optional / historical examples
├── creative-studios/     # optional / historical examples
└── syntheses/            # optional reusable principles
```

## Default workflow for an agent

When asked to create a new DESIGN.md:

1. Read `templates/website-study-template.md`.
2. Read `framework/source-audit-protocol.md` and `framework/evidence-and-confidence.md`.
3. Read `references/README.md` for current benchmark sources such as Vercel, Refero Styles, and the DESIGN.md specification.
4. Inspect the target website itself. Prefer current production source and first-party design documentation over old notes in this repository.
5. Extract source-confirmed values before making visual inferences.
6. Fill the template with tokens, layout rules, component recipes, interaction behavior, responsive transformations, Do / Don't guidance, and source evidence.
7. If useful, derive secondary outputs from the same DESIGN.md:
   - CSS variables
   - Tailwind theme
   - design tokens / JSON
   - specimen HTML
   - shadcn / Radix product-theme overrides

## What a good DESIGN.md should answer

A capable agent should be able to read the file and understand:

- what the product should feel like;
- exact or best-known colors, typography, spacing, radii, borders, and elevation;
- how dense the interface should be;
- how pages are laid out and aligned;
- how recurring components are constructed;
- what hover, focus, active, loading, error, and responsive behavior should do;
- which rules are source-confirmed versus reconstructed;
- what must **not** be copied blindly.

## Source priority

```text
Official DESIGN.md / design system / brand docs
→ production HTML / CSS / variables / fonts / JS
→ rendered measurements
→ high-quality extraction libraries such as Refero
→ visual interpretation
```

Never present a visual estimate as an official implementation token.

## Key principle

**Copy the system, not the website.**

Use references to constrain taste, density, hierarchy, component weight, and interaction quality. Preserve the target product's business requirements, information architecture, and design DNA instead of blindly reskinning it.

## Existing studies

The existing `studies/` and `creative-studios/` folders can remain as historical examples, but they are no longer the primary knowledge source. New work should normally be generated fresh from the current target URL using the template and source-audit process.
