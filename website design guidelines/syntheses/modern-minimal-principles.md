# Modern Minimal Website Principles

This synthesis converts repeated observations from the initial reference set into reusable design-engineering guidance.

## 1. Separate the marketing shell from the product's actual density
Modern B2B sites often use generous whitespace around realistic, dense product UI. Do not assume a spacious landing page implies a spacious application.

## 2. Let typography carry hierarchy before adding containers
Use scale, weight, line-height, measure, and spacing before reaching for another card, divider, or background.

## 3. Product evidence beats abstract decoration
Screenshots, diagrams, code, metrics, and interaction demos should prove the claim directly.

## 4. Use cards selectively
A card should represent a meaningful module, capability, comparison, or interactive unit. Avoid cardifying every paragraph.

## 5. Keep one dominant spatial rhythm
A page should establish a predictable section cadence, then deliberately interrupt it at important moments.

## 6. Accent color should indicate meaning or focus
The most refined references do not distribute brand color evenly. Neutral foundations make accent moments more effective.

## 7. Borders are structural; shadows are optional
Modern minimal sites rely heavily on alignment, whitespace, and low-contrast borders. Heavy shadows are rarely necessary for hierarchy.

## 8. Vary composition without losing the grid
The page can alternate centered, split, wide visual, and editorial compositions, while maintaining shared alignment anchors.

## 9. Motion should explain state, capability, or sequence
Prefer motion that demonstrates product behavior, reveals relationships, or guides attention. Avoid generic floating/parallax as a default.

## 10. Treat screenshots as designed content
Define consistent crop logic, framing, annotation, captions, and scale. Product UI should not be dropped into a page as an unedited image.

## 11. Use reference sites as calibration, not skins
Extract:
- hierarchy logic
- spacing rhythm
- composition patterns
- density strategy
- interaction behavior

Do not blindly copy:
- brand gradients
- radius values
- dark/light theme
- typography personality

## 12. For B2B/product-design deliverables
A useful default is:

```yaml
principles:
  - precise
  - calm
  - evidence-led
  - structured
  - low-decoration

layout:
  content_max_width: "1200–1440px depending on evidence density"
  readable_text_measure: "~55–75 characters"
  grid: "12-column or equivalent alignment system"
  section_spacing: "large and consistent; reduce for dense report sections"

surface:
  cards: selective
  borders: subtle
  shadow: minimal
  radius: product-context-dependent

content:
  pattern: "claim -> evidence -> explanation -> implication"
```

Numeric ranges above are starting heuristics, not extracted facts from a specific reference site.
