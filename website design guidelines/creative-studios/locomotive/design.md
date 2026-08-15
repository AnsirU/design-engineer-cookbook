---
version: alpha
name: "Locomotive"
description: "Source-audited reconstruction of Locomotive's editorial, image-led digital portfolio language."
colors:
  ink: "#000000"
  paper: "#ffffff"
typography:
  body:
    fontFamily: "HelveticaNowDisplay, Neue Haas Grotesk Display Pro, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.3
  heading-sm:
    fontFamily: "HelveticaNowDisplay, Neue Haas Grotesk Display Pro, Arial, sans-serif"
    fontSize: "26px"
    fontWeight: 400
    lineHeight: 1.2
  heading-lg:
    fontFamily: "LocomotiveNew, Söhne Breit, sans-serif"
    fontSize: "70px"
    fontWeight: 400
    lineHeight: 1.1
  display:
    fontFamily: "LocomotiveNew, Söhne Breit, sans-serif"
    fontSize: "110px"
    fontWeight: 400
    lineHeight: 1
rounded:
  none: "0px"
spacing:
  base: "4px"
  xs: "4px"
  sm: "8px"
  md: "20px"
  lg: "40px"
  section: "150px"
components:
  editorial-row:
    padding: "20px"
    rounded: "{rounded.none}"
  full-bleed-media:
    width: "100vw"
    rounded: "{rounded.none}"
---

# Locomotive — DESIGN.md

> Source URL: https://locomotive.ca/  
> Audited: 2026-08-15  
> Audit status: **partial source-audited**  
> Evidence: live site + public source-analysis extraction. Exact values below are marked A/B; proprietary font files are not redistributed.

## Overview
Locomotive's current website behaves more like a **high-end editorial monograph** than a conventional agency template. The interface itself is deliberately austere: black ink, white paper, square geometry, thin structural lines, regular-weight typography, and very little UI ornament. Photography and large-format display typography carry the emotion.

Core transfer principle: **keep the UI system quiet enough that imagery and scale can become the brand.**

Design DNA: `editorial / monochrome / cinematic / typographic / flat / image-led / high-craft`.

## Colors
### System palette
| Token | Value | Role | Evidence |
|---|---:|---|---|
| `ink` | `#000000` | body text, headings, borders, inverted sections | B — repeated live-source extraction |
| `paper` | `#ffffff` | page canvas, light surfaces, inverse text | B — repeated live-source extraction |

The UI does not rely on a persistent chromatic accent. Color is supplied primarily by project imagery rather than interface chrome.

**Rule:** do not add a SaaS-style brand accent simply because an action needs emphasis. Emphasis should come from scale, inversion, placement, or imagery first.

## Typography
### Font system
- **LocomotiveNew** — signature display face for large titles. Public extraction identifies it as the 70–110px display family. **B**
- **HelveticaNowDisplay** — working face for body and smaller headings, typically around 15–26px. **B**
- The live system is strongly biased toward **weight 400** rather than building hierarchy through boldness. **B/C**

### Type scale
| Role | Family | Size | Weight | Line height | Use |
|---|---|---:|---:|---:|---|
| Body | HelveticaNowDisplay | 15px | 400 | 1.3 | paragraph, metadata, compact utility copy |
| Heading Small | HelveticaNowDisplay | 26px | 400 | 1.2 | project/card title, section subheading |
| Heading Large | LocomotiveNew | 70px | 400 | 1.1 | major section title |
| Display | LocomotiveNew | 110px | 400 | 1.0 | hero / project statement |

**Hierarchy rule:** let type scale jump dramatically. Avoid filling the 26→70px gap with many intermediate heading styles unless a specific editorial need requires it.

## Layout
- Base spacing unit: **4px**. **B**
- Common element gap: about **20px**. **B**
- Card / row padding: **20–40px**. **B**
- Major section breathing room: approximately **150px**. **B**
- Full-bleed imagery frequently becomes the section itself rather than sitting inside a rounded container. **B/C**

### Composition rules
1. Use large empty fields between major editorial moments.
2. Let images run edge-to-edge or occupy dominant grid spans.
3. Pair oversized display text with very small supporting copy rather than medium-sized UI everywhere.
4. Prefer horizontal editorial rows and open layouts over card grids when showcasing work.

## Elevation & Depth
The system is intentionally flat.

- no persistent card shadows;
- no soft floating SaaS surfaces;
- depth is communicated through **black/white inversion, image scale, cropping, and viewport occupancy**;
- structural separation comes from hairlines and whitespace.

## Shapes
- dominant radius: **0px**. **B**
- buttons, images, project media, and editorial containers remain square unless the artwork itself introduces another shape.
- avoid nested rounded cards.

## Components
### Full-Bleed Project Stage
**Anatomy:** viewport-scale media + oversized title + compact metadata.

- Media: square corners, no border/shadow.
- Display title: 70–110px, 400 weight.
- Text overlay may invert between black and white depending on image contrast.
- Supporting navigation should remain compact and visually secondary.

### Editorial Project Row
- 1px/hairline structural separation.
- ~20px vertical rhythm.
- Title around 26px; metadata around body scale.
- Hover should reveal project information or media emphasis rather than lifting the row with a shadow.

### Display Headline
- No container.
- 70–110px LocomotiveNew-equivalent.
- Tight 1.0–1.1 line height.
- Keep one regular weight and use scale as the primary hierarchy device.

### Navigation
- navigation should read as typography, not a toolbar full of controls;
- preserve explicit text labels despite expressive presentation;
- if over media, maintain sufficient contrast and predictable hit areas.

## Interaction & Motion
The site's design reputation depends on execution quality, so motion should feel continuous and intentional rather than decorative.

Use:
- image reveal / crop changes;
- directional transitions;
- smooth scene changes;
- pinned or viewport-scale project moments;
- typography that participates in spatial transitions.

Avoid:
- generic hover scale;
- bouncy spring motion that conflicts with the editorial tone;
- decorative motion on every label.

When implementing a derived system, explicitly support `prefers-reduced-motion`.

## Responsive Behavior
Preserve the hierarchy rather than simply shrinking desktop:
- large display type should use responsive scaling / `clamp()`;
- reduce section gaps substantially on narrow screens while keeping the large-vs-small type contrast;
- full-bleed media remains full-bleed;
- hover-dependent project reveals need a tap-accessible alternative;
- editorial rows may stack metadata below titles rather than compressing everything into one line.

## Content & Voice
- short project-oriented labels;
- minimal interface copy;
- the visual work is allowed to speak before explanatory prose;
- metadata is compact and factual;
- avoid large quantities of marketing microcopy around the work.

## Do's and Don'ts
### Do
- Use black and white as the structural UI palette.
- Let photography provide chromatic energy.
- Use 400-weight typography and create hierarchy through scale.
- Keep corners square.
- Allow 150px-scale breathing room between major desktop sections.
- Use full-bleed media as a primary composition device.

### Don't
- Add generic gradients to the UI.
- Add card shadows or glassmorphism.
- Turn every project into an identical rounded card.
- Use bold weights as the default method of hierarchy.
- Fill empty space simply because it feels unused.

## Agent Prompt Guide
### Quick reference
```text
Canvas:            #FFFFFF
Ink:               #000000
Body:              15px / 400 / 1.3
Small heading:     26px / 400 / 1.2
Large heading:     70px / 400 / 1.1
Display:           110px / 400 / 1.0
Radius:            0px
Base spacing:      4px
Element gap:       ~20px
Section spacing:   ~150px
Elevation:         none
Color strategy:    UI monochrome; imagery supplies color
```

### Example component prompt
> Create a project index row on a white canvas. Use black text only, 0px radius, no shadow. Add a 1px black hairline boundary, ~20px vertical padding, a 26px regular-weight project title, and 15px regular metadata. On hover, reveal or emphasize project media; do not translate or lift the row.

## Source Audit
### A — Direct / official evidence
- Locomotive publicly positions itself as a digital-first studio combining design and technical craft.

### B — Repeated extracted implementation values
- `#000000` / `#ffffff` system palette.
- 15 / 26 / 70 / 110px type scale.
- regular 400 weight.
- 4px base spacing; ~20px element spacing; ~150px major section spacing.
- 0px component/media radius.

These values come from a public source-analysis extraction of the current live site and are treated as reconstructed implementation facts, not an official Locomotive token package.

### C — Interpretive principles
- editorial flatness lets imagery become the emotional layer;
- hierarchy is built through scale and spatial rhythm rather than UI decoration;
- color belongs primarily to content, not chrome.
