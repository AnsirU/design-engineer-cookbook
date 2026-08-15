# Creative Studios — Source-audited Website Systems

This section complements the mature product-company references in `studies/` with more expressive, art-directed, and experimental web systems.

## Standard
A study is no longer considered complete from visual inspection alone. Each reference should be reverse-engineered **source first**, using the protocol in `../framework/source-audit-protocol.md`, then expressed as a machine-readable + human-readable `design.md` following the upgraded template.

Each studio should have:
- `design.md` — YAML design tokens + detailed usage rationale + source audit + agent prompt guide.
- `specimen.html` — self-contained visual specimen generated from the audited design language. It should demonstrate typography, color, layout, spacing, components, states, responsive behavior, and motion where relevant.

## Current set and audit status

| Reference | Style value | Audit status |
|---|---|---|
| Studio Freight | brutal elegance / schematic graphic language | **visual/official-language only — needs source audit before numeric tokens are trusted** |
| PORTO ROCHA | editorial modernism / dense project indexing | **partial source-audited** |
| DIA | kinetic identity / typography-as-motion | **official typography evidence + visual reconstruction — needs deeper CSS audit** |
| Locomotive | editorial / cinematic / monochrome portfolio | **partial source-audited** |

## Evidence model
- **A — Direct source confirmation:** public HTML/CSS/assets, official design docs, public component docs.
- **B — Measured reconstruction:** repeated values extracted/measured from the live implementation, including reliable secondary CSS/DOM extraction tools.
- **C — Transferable interpretation:** design principle synthesized for reuse.

## Implementation decision
Use **native HTML/CSS/JS for design-language specimens**. The purpose of the specimen is to expose the reference's own visual grammar without inheriting shadcn's default anatomy.

Use **shadcn/ui / Radix / Base UI for product prototypes** when reliable interaction primitives are useful. In that workflow, `design.md` is the transformation layer that replaces the primitive library's default visual identity.

```text
Live website / public source
→ source audit
→ DESIGN.md
→ native HTML specimen
→ product-specific DESIGN.md
→ shadcn / primitives when appropriate
→ final interactive prototype
```

## Next audit priority
1. Studio Freight — inspect live CSS/font declarations and rebuild tokens from source.
2. DIA — inspect typography, kinetic motion rules, CSS/JS transition values, and responsive behavior.
3. Regenerate all specimen HTML files from the new DESIGN.md schema so the HTML is a faithful visualization of the knowledge base rather than a separately art-directed artifact.
