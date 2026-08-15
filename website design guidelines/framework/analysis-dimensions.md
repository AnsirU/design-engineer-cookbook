# Website Reverse-Engineering Framework

Use this framework for every website study. The goal is not visual description alone; it is to produce a source-grounded `DESIGN.md` that an AI coding agent can actually use.

The section order follows the emerging DESIGN.md convention: **Overview → Colors → Typography → Layout → Elevation & Depth → Shapes → Components → Do's and Don'ts**, with additional sections for interaction, responsive behavior, content, and agent guidance.

## 0. Source audit first
Before interpreting the visual style, inspect as much of the public implementation as possible:

- page HTML / DOM structure
- linked CSS bundles
- CSS custom properties
- `@font-face` declarations and loaded font assets
- repeated class declarations / component styles
- computed values when available
- breakpoints / media queries
- transitions / animation keyframes
- SVG / image treatment
- official brand or design-system documentation

Do not invent a token because it looks plausible. Promote a value to a token only when it is repeated, source-defined, or strongly measured across multiple instances.

## 1. Overview / Brand & Style
- design archetype
- personality and emotional tone
- target audience
- density: compact / balanced / spacious
- dominant visual mechanism: typography, imagery, motion, grid, color, surface, etc.
- what must remain true when adapting the style elsewhere

## 2. Colors
Capture exact values and semantic roles:
- canvas / page background
- surfaces / inverse surfaces
- primary / secondary foreground
- muted foreground
- borders / dividers
- primary interaction
- semantic status colors
- selection / focus
- gradients

Record CSS variables or selectors whenever available.

## 3. Typography
For every recurring text role capture:
- font family
- size
- weight
- line-height
- letter-spacing
- text transform
- feature / variation settings

Minimum roles to check:
- display
- large / medium headings
- body large / medium / small
- caption / metadata
- button / navigation
- input / form
- mono / code

Also record the hierarchy strategy: size, weight, spacing, alignment, or typeface contrast.

## 4. Layout & Spacing
- page max-width
- wide max-width if separate
- grid columns
- gutters
- horizontal page margins
- section gaps
- common element gaps
- component padding
- row heights
- full-bleed rules
- intentional grid breaks
- readable text measure

Derive a spacing scale from repeated source values instead of forcing an arbitrary 4px/8px system.

## 5. Elevation & Depth
- border strategy
- outline / `box-shadow` used as borders
- layered shadows
- blur / backdrop-filter
- overlays
- flat vs elevated surfaces
- z-axis hierarchy

## 6. Shapes
- radius scale
- border widths
- pills / chips
- media clipping
- unusual masks / SVG shapes
- nested-radius behavior

## 7. Components
Reverse-engineer recurring components as recipes:
- anatomy
- dimensions
- padding / gap
- typography
- color
- border / radius / shadow
- default state
- hover
- active / pressed
- focus-visible
- disabled
- responsive variant

Do not stop at `Button` or `Card`; capture distinctive higher-order patterns such as project index rows, media stages, sticky narrative blocks, navigation capsules, filter bars, product-demo frames, etc.

## 8. Interaction & Motion
- hover intent
- focus behavior
- cursor behavior
- sticky / pinned elements
- scroll-linked movement
- clipping / reveal
- transition duration
- easing
- animated properties
- animation staggering
- reduced-motion behavior

Whenever possible record actual CSS transition or keyframe values.

## 9. Responsive Behavior
Inspect multiple breakpoints and record structural substitutions:
- nav → drawer / menu
- multi-column → single-column
- type scale / `clamp()`
- gutter changes
- section-gap compression
- media cropping changes
- touch interaction replacing hover behavior
- minimum tap targets

## 10. Content & Voice
- capitalization
- headline length and grammar
- button voice
- metadata treatment
- number / date formatting
- claim → evidence relationship
- technical vs editorial language

## 11. Composition & Rhythm
This is interpretive but essential:
- hero composition
- text / media ratio
- density changes across scroll
- repetition / interruption
- whitespace as pacing
- screenshot / media framing
- section sequence

## 12. Do's and Don'ts
Convert the study into rules an agent can execute without seeing the reference.

Avoid vague rules such as `make it premium`. Prefer:
- `Use a single 400 weight and create hierarchy through a 15px → 26px → 70px → 110px scale.`
- `Keep UI surfaces monochrome; let photography supply color.`

## 13. Agent Prompt Guide
End each study with:
- quick token reference
- 3–5 canonical component recipes
- layout defaults
- motion defaults
- the most important prohibitions

## Evidence grades
- **A — Direct source confirmation:** public CSS/HTML/assets or official documentation.
- **B — Measured reconstruction:** repeated rendered value or reliable source-analysis extraction, but not an official named token.
- **C — Interpretation:** transferable design principle.

A finished study should explicitly state its audit status: `source-audited`, `partial`, or `visual-only`.
