# Linear — Website Study

## Snapshot
- Product category: B2B product / issue tracking / software development
- Design archetype: dark, editorial, precise product storytelling
- Best used for: AI/B2B landing pages, product narratives, portfolio/report references

## Observed design language
### Grid & layout
- Large centered content frame with strong vertical pacing.
- Alternates wide product imagery with constrained text blocks.
- Uses asymmetry selectively rather than making every section symmetric.

### Typography
- Large display type with tight line-height.
- Short copy blocks; hierarchy is carried more by scale and weight than decoration.
- Secondary text is deliberately low contrast.

### Spacing & density
- Generous section spacing, but individual interface mockups remain dense.
- Strong contrast between spacious marketing shell and compact product UI.

### Surface & geometry
- Restrained radius and shadow usage.
- Product screenshots often function as the visual surface rather than being wrapped in heavy cards.
- Borders are subtle and structural.

### Color & contrast
- Neutral/dark foundation with selective luminous accents.
- Accent is used for focus, not to color every component.

### Composition & rhythm
- Frequent rhythm: statement → evidence/UI → breathing space → next statement.
- Product UI is treated as proof, not decoration.

## Why it works
Linear keeps the marketing layer calm while allowing the product itself to carry complexity. This is useful for B2B work where the interface should feel capable without making the surrounding presentation visually noisy.

## Reusable rules
```yaml
layout:
  shell: centered-wide
  copy_measure: narrow
  product_visual: wide
  section_rhythm: generous

typography:
  display: large-tight
  body: restrained
  hierarchy: scale-first

surface:
  cards: selective
  borders: subtle
  shadows: minimal

composition:
  pattern: "claim -> product evidence -> pause"
```

## Good use cases
- B2B product landing pages
- AI product narratives
- portfolio case studies
- interactive research reports

## Do not copy blindly
- A dark shell is not automatically appropriate for operational B2B software.
- Large whitespace works in storytelling pages; it should not be transferred directly into dense application UI.
