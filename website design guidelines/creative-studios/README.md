# Creative Studios — Reverse-engineered Website Systems

This section complements the mature product-company references in `studies/` with more expressive, art-directed, and experimental web systems.

Each studio has two artifacts:

- `design.md` — reverse-engineered design language, evidence level, reusable rules, and implementation guidance.
- `specimen.html` — a self-contained browser specimen that demonstrates the reconstructed visual system with tokens, typography, layout, components, and motion. It is **not a pixel-perfect clone** and does not redistribute proprietary fonts or brand assets.

## First set

1. **Studio Freight** — brutal elegance; stark editorial contrast, purposeful reduction, diagrammatic/surreal graphic logic.
2. **PORTO ROCHA** — cultural/editorial modernism; project density, typography-led indexing, flexible identity systems.
3. **DIA** — kinetic identity; typography as motion system, high contrast, modular and time-based composition.
4. **Locomotive** — immersive digital-first design; cinematic pacing, bold type, code-driven motion, expressive interaction.

## Evidence model

- **A — Source confirmed:** explicitly stated by the studio/official website or directly verifiable in public source material.
- **B — Strong reconstruction:** repeated visual behavior inferred from the live site; useful as a working approximation, not an official token.
- **C — Transferable interpretation:** a design principle synthesized for reuse.

## Implementation decision

For these specimens, prefer **native HTML/CSS/JS** over shadcn/ui. The goal is to express each website's unique brand grammar without inheriting shadcn's default geometry, component anatomy, or interaction styling.

Use **shadcn/ui later as a product-prototype substrate** when you need reliable primitives such as Dialog, Popover, Tooltip, Tabs, Select, Table, and Form. In that case, apply the project's `design.md` as a transformation layer rather than using shadcn's default visual identity.

Recommended pipeline:

```text
Reference website
→ reverse engineering
→ design.md
→ visual specimen (native HTML/CSS)
→ product-specific design.md
→ shadcn / product primitives
→ final interactive prototype
```
