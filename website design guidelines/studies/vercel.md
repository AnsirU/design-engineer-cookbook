# Vercel — Website Study

## Snapshot
- Product category: developer platform / cloud infrastructure
- Design archetype: monochrome, technical, grid-driven minimalism
- Best used for: developer tools, AI infrastructure, technical B2B products

## Observed design language
- Strong black/white contrast and rigid grid alignment.
- Typography is direct, neutral, and system-like rather than editorially expressive.
- Fine borders and repeated modular blocks create structure without heavy cards.
- Technical artifacts—code, metrics, dashboards, diagrams—are treated as primary visual evidence.
- Motion tends to reinforce state or system behavior instead of decorative storytelling.

## Why it works
The site communicates precision and engineering credibility by making the layout itself feel systematic.

## Reusable rules
```yaml
layout:
  grid: strict
  alignment: strong
  modules: repeatable

typography:
  tone: technical-neutral
  hierarchy: size-and-weight

surface:
  border: frequent-but-subtle
  radius: restrained
  shadow: near-none

color:
  base: monochrome
  accent: sparse
```

## Good use cases
- technical SaaS
- B2B infrastructure
- AI developer tools
- design-engineering documentation

## Do not copy blindly
A strict monochrome system can feel sterile for consumer or emotionally driven products.