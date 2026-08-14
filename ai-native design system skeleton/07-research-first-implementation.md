# Research-first implementation contract

The next four system capabilities — Theme Compiler, Agent Search/Docs, Template + Recipe Build Planner, and Design-System Doctor — must be implemented with research as a hard precondition.

## Principle

Do not turn a design preference into a system rule from memory alone.

Before adding or changing a system rule, the agent must:

1. **Retrieve local knowledge first** — inspect the repository, uploaded design-system context, existing tokens, components, recipes, templates, QA scripts, decision logs, and any project-specific design documentation.
2. **Search the web when external evidence is useful** — prefer current primary sources: standards, official design-system docs, framework docs, accessibility standards, and first-party engineering/design writeups.
3. **Synthesize rather than copy** — record what sources agree on, where they disagree, what is context-dependent, and what rule is appropriate for this system.
4. **Attach provenance** — every new systemic rule should be traceable to local evidence, external evidence, or an explicit design decision.
5. **Implement only after the research packet is ready.**

## Required research packet

Each track stores a packet at `design-system/research/<track>.json` with:

```json
{
  "track": "theme-compiler",
  "question": "How should visual intent compile into portable semantic tokens?",
  "localEvidence": [],
  "webEvidence": [],
  "agreements": [],
  "tensions": [],
  "decisions": [],
  "rejectedAlternatives": [],
  "status": "ready"
}
```

A packet is `ready` only when it contains at least one local evidence item when a local knowledge base exists, at least one authoritative external source when the question benefits from external validation, and explicit decisions.

## Track 1 — Theme Compiler

Research before implementation:
- existing brand and token conventions in the local system;
- DTCG token terminology, aliases, types, groups, and interchange format;
- mature theme architectures from current design systems;
- density, geometry, typography, elevation, color and motion practices;
- accessibility constraints that should not vary with brand expression.

Output should separate:
- **intent**: compact, sharp, quiet, brand-led;
- **semantic decisions**: surface, content, action, state, focus;
- **resolved values**: px/rem/color/easing values;
- **platform output**: CSS/StyleX/etc.

## Track 2 — Agent Search / Docs

Research before implementation:
- how the local knowledge base is structured and indexed;
- how current agent-ready systems expose components/templates/docs;
- current repository instruction patterns for coding agents;
- low-token machine-readable output conventions.

The interface should optimize for progressive disclosure:
`capabilities → search → summary → exact component/template docs → source`.

## Track 3 — Template + Recipe Build Planner

Research before implementation:
- local recipes and page archetypes;
- recurring task language from real product requests;
- high-quality page templates from agent-friendly systems;
- failure cases where agents create raw markup instead of system components.

The planner should prefer:
`intent → page archetype → recipes → components → missing capabilities → implementation plan`.

It must not start from an unconstrained component list.

## Track 4 — Design-System Doctor

Research before implementation:
- local QA/coverage scripts and known failure modes;
- accessibility automation practices;
- design-token compliance and raw-value detection;
- component adoption and duplicate-component detection;
- visual/template regression and agent usability evaluation.

Doctor should eventually report separate categories:
- token violations;
- component violations;
- interaction/a11y violations;
- template/blueprint drift;
- agent-operability issues;
- documentation/provenance freshness.

## Source hierarchy

When evidence conflicts, prefer:
1. product-specific local source of truth;
2. standards/specifications;
3. official framework/design-system documentation;
4. first-party design/engineering articles;
5. high-quality secondary analysis;
6. inference, clearly labeled.

Network research must never silently overwrite product-specific constraints.

## Evidence freshness

For software, agent tooling, accessibility tooling and design-system APIs, verify current documentation at implementation time. Store `checkedAt`, source URL/title and the rule derived from it.

## Decision rule

A research finding is not automatically a design-system rule. The research packet must explain why it is appropriate for this system, which contexts it applies to, and what remains configurable.