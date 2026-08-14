# `ds` CLI

A minimal executable layer for the AI-native design system skeleton.

## What it does

The CLI turns the design-system methodology into a small machine-operable contract. It creates manifests and semantic tokens, scaffolds components and page templates, resolves simple natural-language requests to recipes, and runs structural checks before handoff.

## Local usage

```bash
cd "ai-native design system skeleton/cli"
npm test
node ./bin/ds.mjs --help
```

To try the CLI in another project, call the file directly:

```bash
node /path/to/bin/ds.mjs init
node /path/to/bin/ds.mjs theme create technical
node /path/to/bin/ds.mjs component Button
node /path/to/bin/ds.mjs template chat-workbench
node /path/to/bin/ds.mjs build "build an agent chat workspace"
node /path/to/bin/ds.mjs doctor
```

## Command intent

- `ds init` — create the agent-readable design-system contract.
- `ds theme create [name]` — establish a named theme intent without changing structural components.
- `ds component <Name>` — scaffold a component and register it in the component manifest.
- `ds template <name>` — scaffold a page archetype and register it in the template manifest.
- `ds build <prompt>` — resolve a request to an existing recipe and emit a build plan rather than generating arbitrary UI immediately.
- `ds doctor` — check whether the required agent, token, component, template, and recipe contracts are present.

## Current boundary

`v0.1.0` is intentionally small. `build` currently performs deterministic recipe matching, not LLM generation. The next useful extension is to add:

1. richer intent-to-recipe matching;
2. theme-intent → token compilation;
3. template skeleton injection;
4. component docs/search commands;
5. token/component compliance scanning;
6. visual golden-page regression checks;
7. CLI JSON/dense output for agents;
8. upgrade/codemod support.
