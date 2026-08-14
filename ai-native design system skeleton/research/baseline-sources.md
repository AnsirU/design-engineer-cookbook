# Baseline research for the next four capabilities

This is a starting evidence pack, not a frozen source of truth. The agent should re-check current docs when implementing a capability.

## Source-derived findings

### Design Tokens Community Group (DTCG)
Source: Design Tokens Format Module 2025.10 draft/report.

Useful implications:
- Design tokens are intended to express design decisions in a platform-agnostic way and create a shared vocabulary across tools and disciplines.
- Tokens have explicit names, values and types; groups, aliases/references and composite tokens support scalable structure.
- A portable token layer should avoid coupling brand intent directly to one rendering technology.

Apply to:
- Theme Compiler token model;
- token aliases and semantic/primitive separation;
- machine-readable token validation.

### Astryx by Meta
Sources: official product site, CLI integration docs, “How Astryx works”, and template/build articles.

Useful implications:
- Agent-ready design systems expose components, templates, themes and docs through CLI/MCP instead of expecting an agent to crawl a docsite manually.
- Human-facing docs/examples/templates and agent-facing material should stay in sync.
- High-quality templates are strong exemplars for agents; template-first generation reduces raw markup and inconsistent component usage.
- Astryx describes evaluation/vibe tests that measure whether people and AI can actually build successfully with the system.
- Strong documented conventions improve predictability for both humans and agents.

Apply to:
- `ds search` / `ds docs`;
- capability manifest;
- Template + Recipe Build Planner;
- Doctor's agent-usability/evaluation layer.

### Storybook
Source: official accessibility testing documentation.

Useful implications:
- Automated accessibility auditing should be integrated into component QA, not treated as a manual afterthought.
- Automated checks are a first line of QA rather than complete accessibility proof; unresolved/incomplete cases still need manual review.
- Component-level rendered examples provide a useful test surface for accessibility, interaction and visual regression.

Apply to:
- Doctor accessibility checks;
- component story/test requirements;
- distinction between automated violations and manual-review requirements.

### OpenAI agent repository practices
Sources: Codex documentation and OpenAI “Harness engineering” article.

Useful implications:
- A short agent instruction file should act as a map rather than a monolithic knowledge dump.
- Durable repository knowledge should live in structured, searchable docs that serve as a system of record.
- Agent effectiveness improves with clear repository instructions, reliable test commands and verifiable outputs.

Apply to:
- local knowledge-base organization;
- `AGENT.md` / capability manifest design;
- research retrieval order;
- Doctor checks for docs/provenance freshness.

## Local knowledge-base findings from the provided AI-native design-system context

The uploaded system already contains patterns that should be treated as first-party local evidence when bootstrapping a new system:
- `system.manifest.json` style capability mapping;
- component recipes that map natural-language product needs to reusable components;
- page templates/archetypes instead of component-only documentation;
- component coverage and QA scripts;
- agent guidance plus machine-readable indices.

These local patterns and the external sources above converge on the same architecture:

`knowledge → capability manifest → search/docs → templates/recipes → components/tokens → QA/eval`

## Initial decisions

1. Research packets are required before the four next major capabilities are promoted from prototype to stable.
2. Local product/design-system evidence wins over generic web guidance when they conflict.
3. Web research should prefer primary sources and current standards.
4. Every systemic rule should carry provenance or be labeled as an explicit design decision.
5. Page templates and recipes are first-class design-system assets, not optional documentation.
6. QA includes both UI correctness and agent usability.