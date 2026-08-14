# Design System Skeleton CLI v0.3

A zero-dependency Node CLI for a research-first, agent-operable design system skeleton.

## Principle

The CLI separates two modes:

- **Consume mode**: agents use curated manifests, templates, recipes and tokens without re-searching the web for every task.
- **System-change mode**: changes to compiler logic, catalogs, recipes, templates, QA rules or agent contracts require local evidence first, external primary-source validation where beneficial, and an updated research packet.

## Commands

```bash
ds init
ds capabilities --json
ds research check
ds theme create technical --density=compact --geometry=sharp --brand=#19a974
ds theme compile
ds search "agent progress" --dense
ds docs ChatComposer --dense
ds build "AI agent chat workbench" --json
ds component Button
ds template chat-workbench
ds doctor --json
ds eval planner --json
```

## What v0.3 adds

1. DTCG 2025.10-shaped portable source tokens plus resolved CSS-facing tokens.
2. Progressive disclosure: capabilities → search → docs → page/block/component source → plan.
3. Page-archetype-first build planning with synonyms, light stemming and typo-tolerant ranking.
4. Page / block(recipe) / component examples as three composition scales.
5. Doctor categories for structure, token use, components, accessibility heuristics, agent operability and research provenance.
6. Research packet lifecycle for Theme Compiler, Search/Docs, Build Planner and Doctor changes.
7. Deterministic golden planner evals for archetype accuracy and recipe recall.

## Deliberate boundaries

- Theme intent mappings are system design decisions, not claims made by DTCG.
- The generic component generator is a scaffold, not a production accessibility implementation.
- `doctor` static checks are a first line only; rendered accessibility, interaction and visual regression belong in the next layer (Storybook/axe/component tests + golden-page evals).
- Network research is performed by the coding/design agent in system-change mode; the CLI stores and validates the resulting evidence packet rather than embedding a search provider.

## Evaluation

`ds eval planner` runs deterministic golden prompts against the archetype/recipe planner. It currently measures archetype accuracy and recipe recall. Component adoption, token compliance, accessibility, visual/blueprint drift and repair turns are declared as next-layer metrics for rendered evals.
