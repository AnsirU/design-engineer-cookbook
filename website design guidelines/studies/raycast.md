# Raycast — Website Study

## Snapshot
- Product category: productivity / launcher
- Design archetype: polished dark product showcase with controlled color
- Best used for: productivity tools, desktop apps, AI assistants

## Observed design language
- Dark neutral shell with vivid but localized gradients.
- Product screenshots are large and cinematic, but copy remains concise.
- Strong use of depth, glow, and layered surfaces without becoming skeuomorphic.
- Sections often alternate between centered statements and framed product UI.
- Rounded geometry is present but controlled; it supports softness without turning every region into a card.

## Why it works
Raycast combines premium product polish with software-tool credibility. It feels expressive without losing interface precision.

## Reusable rules
```yaml
layout:
  hero: centered
  product_visual: dominant
  section_width: varied

surface:
  depth: layered
  glow: selective
  radius: medium

color:
  base: dark-neutral
  gradients: local-only

composition:
  screenshot_as_hero: true
```

## Good use cases
- AI assistants
- creative tools
- desktop utilities
- portfolio covers and hero sections

## Do not copy blindly
Glow and gradient are accents; applying them globally quickly destroys hierarchy.