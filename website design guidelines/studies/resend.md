# Resend — Website Study

## Snapshot
- Product category: developer email infrastructure
- Design archetype: ultra-minimal technical SaaS
- Best used for: API products, focused landing pages, documentation hybrids

## Observed design language
- Very restrained palette and low visual noise.
- Strong reliance on typography, whitespace, code examples, and concise diagrams.
- Sections often feel almost document-like rather than card-heavy.
- Borders and rules are used for organization, not decoration.
- Visual identity comes from precision and restraint more than ornament.

## Why it works
The site makes a technical product feel trustworthy and easy to understand by removing almost everything that does not help explain the product.

## Reusable rules
```yaml
layout:
  density: low-medium
  structure: document-like

typography:
  tone: precise
  copy: concise

surface:
  cards: minimal
  borders: functional
  shadows: none-or-near-none

content:
  technical_evidence: primary
```

## Good use cases
- API products
- technical reports
- documentation-oriented landing pages
- small, focused SaaS products

## Do not copy blindly
Extreme restraint can feel under-designed when a product needs emotional differentiation or richer storytelling.