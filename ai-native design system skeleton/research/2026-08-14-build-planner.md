# Research Packet — Template + Recipe Build Planner

Checked: 2026-08-14
Status: ready for skeleton v0.3 decisions

## Question
How should natural-language requests resolve to reliable page structures without agents bypassing the design system?

## Local evidence
- `our-ui/spec/product-design-system/PAGE_TEMPLATES.md`: defines App Shell, Dense Table, Dashboard, Builder Workbench and Chat Workbench as task-level structures.
- `our-ui/component-recipes.json`: maps common requests to canonical component compositions and rules.
- `our-ui/templates/`: provides materialized page examples that agents can start from instead of recreating layouts from memory.

## External evidence
- Astryx “AI is a copycat so we gave it good examples to copy”: https://astryx.atmeta.com/blog/astryx-cli-build-command

## Agreements
- High-quality exemplars strongly affect agent component adoption and output quality.
- Examples are useful at three scales: page, block, component.
- Natural-language discovery needs more than literal filename matching.
- Deterministic ranking is valuable because identical prompts remain reproducible and inspectable.

## Decisions
1. Planner order is `intent → page archetype → blocks/recipes → components → missing capabilities`.
2. Add synonyms, stemming and typo-tolerant edit-distance matching.
3. Rank page matches first and return one recommended starting move.
4. Treat weaker page matches as layout references rather than forced scaffolds.
5. Do not let missing primitives silently become raw ad-hoc UI; record the gap.
