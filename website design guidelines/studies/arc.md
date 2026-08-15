# Arc — Website Study

## Snapshot
- Product category: browser / productivity
- Design archetype: calm editorial product storytelling with playful brand moments
- Best used for: consumer productivity, creative software, approachable AI products

## Observed design language
- Large editorial headlines and relatively simple section structures.
- Product screenshots are allowed to breathe and are not always constrained inside heavy cards.
- Copy is conversational and benefit-led.
- Strong use of whitespace and visual pacing.
- Brand personality comes from copy, imagery, and selective color rather than dense UI chrome.

## Why it works
Arc makes a technically complex product feel emotionally legible. The page prioritizes a small number of ideas at a time and uses product imagery as evidence.

## Reusable rules
```yaml
layout:
  pacing: spacious
  copy_measure: narrow
  product_visual: large

typography:
  tone: editorial-conversational
  headline: oversized

surface:
  cards: selective
  chrome: minimal

content:
  claims: benefit-led
  evidence: product-screenshot
```

## Good use cases
- consumer productivity
- creative tools
- browser/desktop products
- approachable AI product launches

## Do not copy blindly
The conversational tone and spacious composition are not suitable defaults for dense enterprise or operational products.