# Website Study Framework

Use the same dimensions for every study so observations remain comparable and reusable.

## 1. Grid & Container
- Maximum content width
- Column count / apparent grid
- Gutter behavior
- Full-bleed vs constrained sections
- Asymmetry / intentional grid breaks

## 2. Typography
- Display / H1 scale
- H2 / section heading scale
- Body size and line-height
- Weight contrast
- Tracking
- Measure / readable text width
- Monospace usage

## 3. Spacing & Density
- Section rhythm
- Card padding
- Inter-element gaps
- Desktop density
- Responsive compression strategy

## 4. Surface & Geometry
- Background layers
- Border usage
- Radius system
- Shadow / blur usage
- Card vs open-layout preference

## 5. Color & Contrast
- Base neutrals
- Accent strategy
- Semantic color usage
- Gradient usage
- Contrast hierarchy

## 6. Composition
- Hero structure
- Text-to-visual ratio
- Screenshot / product UI framing
- Repetition vs contrast across sections
- Editorial vs dashboard-like composition

## 7. Rhythm
- How sections alternate
- Where visual density increases/decreases
- Use of pauses / whitespace
- Pattern repetition and interruption

## 8. Interaction
- Navigation behavior
- Hover / focus treatment
- Scroll-linked effects
- Sticky regions
- Carousels / marquees / tabs
- Motion intensity and purpose

## 9. Content Strategy
- Headline style
- Claim-to-proof relationship
- Product screenshot captions
- Feature grouping
- Use of social proof / metrics / code samples

## 10. Implementation Signals
When publicly inspectable or source-confirmed:
- CSS framework / component system clues
- CSS variables / token naming
- Container widths
- Breakpoints
- Repeated spacing values
- Radius values
- Transition durations

Never present visually estimated values as source-confirmed implementation facts.

## 11. Reusable Rules
Translate observations into implementation-ready rules:

```yaml
layout:
  max_width: 1280px
  grid: 12
  section_gap: 120px

typography:
  display: 64/1.0
  body: 16/1.55

surface:
  radius: 8px
  border: subtle

composition:
  hero: "text-left + product visual-right"
```

## 12. Anti-patterns
Record what should *not* be copied blindly, especially when a reference has a very specific brand, audience, or content model.
