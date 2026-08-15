# Supabase — Website Study

## Snapshot
- Product category: developer platform / backend infrastructure
- Design archetype: dark technical minimalism with product/code evidence
- Best used for: developer tools, technical B2B, AI infrastructure

## Observed design language
- Dark surfaces with restrained green accents.
- Product UI, code snippets, diagrams, and status-like elements carry much of the visual storytelling.
- Sections are modular, but the page avoids excessive decorative cards.
- Monospace details reinforce technical credibility.
- Contrast between quiet shell and highlighted technical content makes complex information scannable.

## Why it works
The visual system feels developer-native without becoming terminal cosplay. Technical evidence remains readable and product-focused.

## Reusable rules
```yaml
color:
  base: dark-neutral
  accent: single-technical-color

typography:
  body: neutral-sans
  code: monospace

surface:
  border: subtle
  code_panel: elevated

content:
  proof: code-and-product-ui
```

## Good use cases
- developer platforms
- AI infrastructure
- APIs and technical products
- technical documentation landing pages

## Do not copy blindly
Do not use monospace or code motifs as decoration when the product is not actually technical.