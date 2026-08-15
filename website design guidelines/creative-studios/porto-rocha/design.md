---
version: alpha
name: "PORTO ROCHA"
description: "Source-audited reconstruction of PORTO ROCHA's editorial modernist portfolio system."
colors:
  ink-black: "#000000"
  ash-gray: "#808080"
  paper-white: "#ffffff"
  system-blue: "#007aff"
typography:
  body-sm:
    fontFamily: "SF Pro Text, Inter, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.25
  heading:
    fontFamily: "SF Pro Display, Inter, Helvetica Neue, system-ui, sans-serif"
    fontSize: "23px"
    fontWeight: 400
    lineHeight: 1.17
    letterSpacing: "0.02em"
rounded:
  card: "8px"
  pill: "9999px"
spacing:
  base: "8px"
  xs: "8px"
  sm: "10px"
  md: "12px"
  lg: "16px"
  xl: "20px"
components:
  project-card:
    padding: "16px"
    rounded: "{rounded.card}"
  tag:
    rounded: "{rounded.pill}"
---

# PORTO ROCHA — DESIGN.md

> Source URL: https://www.portorocha.com/  
> Audited: 2026-08-15  
> Audit status: **partial source-audited**  
> Evidence: live site + public source-analysis extraction. Exact implementation values below are marked A/B.

## Overview
PORTO ROCHA's website is a useful reference for **editorial density without visual heaviness**. The system is materially simple—mostly black, white, gray, regular-weight typography, open surfaces, and controlled borders—but the composition can still feel energetic because project content, imagery, indexing, and occasional color fields change the rhythm.

The key transferable idea is: **keep the underlying UI grammar neutral and precise so individual projects can carry their own visual identity.**

Design DNA: `editorial / cultural / modernist / flat / information-dense / project-led / restrained`.

## Colors
| Token | Value | Role | Evidence |
|---|---:|---|---|
| `ink-black` | `#000000` | body text, headings, nav, borders | B — repeated extraction |
| `ash-gray` | `#808080` | secondary text, metadata, dividers | B — repeated extraction |
| `paper-white` | `#ffffff` | page and card surfaces | B — repeated extraction |
| `system-blue` | `#007aff` | occasional highlight / wash / emphasis | B — extracted; not a primary CTA system color |

**Color rule:** the brand does not require a permanent colorful CTA language. Project imagery and episodic section color can provide expression while the base chrome stays neutral.

## Typography
### Font system
Public source-analysis identifies an SF Pro-based stack:
- **SF Pro Display** for headings / larger text. **B**
- **SF Pro Text** for body, navigation, buttons, captions and metadata. **B**

The system relies heavily on **400 regular** rather than multiple font weights. Hierarchy comes from scale, spacing, placement, and color. **B/C**

### Type scale
| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Body / UI | SF Pro Text | 14px | 400 | 1.25 | normal |
| Body | SF Pro Text | 16px | 400 | ~1.4 | normal |
| Small heading | SF Pro Display | 18px | 400 | ~1.35 | — |
| Heading | SF Pro Display | 23px | 400 | 1.17 | +0.02em |

A distinctive detail is **slightly positive tracking** on larger display text instead of the aggressive negative tracking common in SaaS interfaces.

## Layout
- spacing base: **8px**. **B**
- recurring gaps: 8 / 10 / 12 / 16 / 20px. **B**
- card padding: about **16px**. **B**
- recurring section separation: roughly **24–32px** in dense index zones. **B**

### Composition rules
1. Treat the homepage/portfolio as an **index of work**, not merely a grid of identical cards.
2. Preserve strong horizontal and vertical alignment even when content density is high.
3. Let project imagery vary in ratio and visual personality.
4. Avoid over-styling the global shell; project work should dominate.
5. Use small metadata and larger project titles to establish editorial hierarchy.

## Elevation & Depth
- flat surfaces;
- minimal or no shadow;
- separation comes from borders, whitespace, image blocks, and color changes;
- avoid stacked floating cards.

## Shapes
- cards / contained elements may use an **8px** radius. **B**
- pill/tags may use fully rounded geometry (`9999px`). **B**
- much of the editorial layout remains visually open without container rounding.

The overall feel is still square/flat because rounded geometry is not used as the primary personality device.

## Components
### Project Index Row
**Role:** fast scanning across a large body of work.

Suggested reconstruction:
- 14px metadata;
- 18–23px project title;
- regular weight only;
- 8–16px internal spacing;
- hairline / subtle boundary when needed;
- image or color preview may appear contextually rather than permanently.

### Project Card
- white surface;
- ~16px padding when a container exists;
- ~8px radius;
- no heavy shadow;
- project visual remains dominant;
- small gray metadata sits below/adjacent to title.

### Tag / Category
- compact 14px text;
- pill radius when visibly treated as a tag;
- low visual weight;
- never compete with the project name.

### Navigation
- simple text-first navigation;
- regular weight;
- avoid oversized CTA buttons in the studio shell;
- navigation should feel like part of an editorial page rather than a SaaS toolbar.

## Interaction & Motion
Motion should support browsing and project identity rather than provide generic polish.

Appropriate patterns:
- project preview on hover;
- image reveal / crop transition;
- cursor-linked project image where it remains legible;
- index-to-project transitions;
- temporary palette takeover for a specific project.

Avoid:
- hover shadows;
- springy scaling on every card;
- motion that slows down scanning.

## Responsive Behavior
- dense desktop index layouts should stack cleanly rather than preserve compressed columns;
- metadata can move below titles on narrow screens;
- hover-only previews require a tap-accessible detail path;
- maintain 14px+ readable UI/body scale;
- preserve project individuality while simplifying grid structure.

## Content & Voice
- project name first;
- concise metadata such as year, discipline, client, or activity type;
- minimal marketing language around the work itself;
- the archive/catalog structure communicates studio breadth.

## Do's and Don'ts
### Do
- Use a neutral black/white/gray shell.
- Build hierarchy with scale and alignment more than font weight.
- Keep project metadata compact.
- Let individual project imagery and color temporarily change the atmosphere.
- Use consistent baselines and dense index structures.

### Don't
- Make every project card identical in visual ratio.
- Turn the shell into a rounded SaaS dashboard.
- Add strong shadows or glass surfaces.
- Use color everywhere just because the studio's projects are colorful.
- Use bold weight as the main hierarchy mechanism.

## Agent Prompt Guide
### Quick reference
```text
Canvas:            #FFFFFF
Primary text:      #000000
Secondary text:    #808080
Occasional blue:   #007AFF
Body/UI:           14px / 400 / 1.25
Heading:           23px / 400 / 1.17 / +0.02em
Spacing base:      8px
Common gaps:       8 / 10 / 12 / 16 / 20px
Card padding:      ~16px
Card radius:       ~8px
Tags:              full pill when needed
Elevation:         flat / minimal
```

### Example component prompt
> Create an editorial project index row on a white background. Use 14px regular SF-Pro-like metadata in #808080 and a 23px regular project title in black with slightly open tracking. Keep spacing tight (8–16px), avoid shadows, and use a subtle boundary only if needed. On hover, reveal contextual project imagery rather than lifting the row.

## Source Audit
### A — Direct / official evidence
- PORTO ROCHA publicly identifies itself as a global strategy and design agency and foregrounds its project archive on the live site.

### B — Repeated extracted implementation values
- black / white / gray base palette and `#007aff` highlight.
- SF Pro Display / SF Pro Text stacks.
- 14px body, 23px heading, regular 400 weights.
- heading line-height around 1.17 with +0.02em tracking.
- 8px spacing base, ~16px card padding, 8px card radius.

These values come from public source-analysis extraction of the current site and should be treated as reconstructed implementation values rather than an official PORTO ROCHA token release.

### C — Interpretive principles
- density feels premium when alignment is rigorous;
- a neutral global shell gives individual projects room to carry color and personality;
- archive/index structures can be more expressive than repeated identical cards.
