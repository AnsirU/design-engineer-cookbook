# Research Packet — Agent Search / Docs

Checked: 2026-08-14
Status: ready for skeleton v0.3 decisions

## Question
How should an agent discover a large design system without loading the entire knowledge base into context?

## Local evidence
- `our-ui/system.manifest.json`: a compact machine-readable map points to tokens, specs, recipes, templates, assets and QA.
- `our-ui/AGENT.md`: avoids duplicating every rule and routes agents to authoritative files by task.
- `our-ui/component-recipes.json`: maps natural-language intents to reusable components and rules.

## External evidence
- OpenAI Harness Engineering: https://openai.com/index/harness-engineering/
- Astryx CLI integrations: https://astryx.atmeta.com/docs/cli-integrations
- Astryx migration guide (`--dense`, `--json` workflows): https://astryx.atmeta.com/docs/migration

## Agreements
- A small agent entrypoint should act as a map, not an encyclopedia.
- Knowledge should live in structured, versioned sources of truth.
- Machine-readable and dense output modes reduce context cost.
- Components and templates should be extensible through a manifest/integration layer.

## Decisions
1. Discovery path is `capabilities → search → dense docs → exact source`.
2. Support human-readable, `--dense`, and `--json` output.
3. Search returns page, block/recipe and component candidates together.
4. Keep deterministic search local in consume mode; no network call is required to find system assets.
5. Reserve network research for system-level knowledge changes.
