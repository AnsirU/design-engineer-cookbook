# Research Packet — Theme Compiler

Checked: 2026-08-14
Status: ready for skeleton v0.3 decisions

## Question
How should brand intent compile into a portable token model without hard-coding one brand's visual choices into the skeleton?

## Local evidence
- `our-ui/system.manifest.json`: treats tokens, design spec, component spec, layout spec and QA as separate sources of truth.
- `our-ui/spec/product-design-system/tokens.default.json`, `tokens.compact.json`, `tokens.dark.json`: demonstrates explicit mode/density token variants.
- `our-ui/AGENT.md`: relative changes such as “larger / tighter / rounder” move along predefined token ladders instead of inventing pixel values.

## External evidence
- DTCG Design Tokens Format Module 2025.10: https://www.designtokens.org/TR/2025.10/format/
- DTCG Color Module 2025.10: https://www.designtokens.org/TR/2025.10/color/
- DTCG Resolver Module 2025.10: https://www.designtokens.org/TR/2025.10/resolver/
- Astryx introduction / theming architecture: https://astryx.atmeta.com/blog/introducing-astryx

## Agreements
- Token data should be tool/platform independent before being translated to CSS or another runtime.
- Token type must be explicit; aliases should preserve semantic vocabulary.
- Theme variation should not require rewriting component behavior.
- Density and brand appearance are configurable; accessibility/interaction invariants are not simply visual theme knobs.

## Decisions
1. Maintain `theme.intent.json` separately from token output.
2. Compile to a DTCG 2025.10-shaped source token file plus a resolved platform file.
3. Treat intent-to-value mappings as skeleton design decisions, not as rules asserted by DTCG.
4. Keep platform-only values outside portable source tokens when their DTCG representation is not implemented or verified.
5. Revisit compiler mappings through research packets, not ad-hoc tweaks.

## Rejected alternatives
- One flat CSS variable file as the sole source of truth: too platform-specific and weak for tooling/interchange.
- Brand adjectives directly mapped to arbitrary CSS in product code: difficult to audit and reproduce.
