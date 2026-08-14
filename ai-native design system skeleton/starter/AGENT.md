# AGENT.md

## Operating modes

### 1. Consume mode — build product UI with the established system
Use the existing knowledge, manifests, templates, recipes, components, tokens and QA rules. Do **not** browse the web by default; daily product generation should remain fast and reproducible.

### 2. System-change mode — add or change design-system rules/capabilities
Before changing Theme Compiler logic, agent search/docs behavior, build-planner rules, Doctor/QA rules, shared components, recipes, templates or token architecture, run the Research-first workflow below.

## Research-first workflow for system changes
1. Read `research-policy.json`.
2. Search local product/design-system knowledge first: manifests, tokens, components, templates, recipes, QA scripts, decision logs, examples and any `knowledge/` or `docs/` source of truth.
3. Identify what is already a product-specific constraint versus what is still an open design-system question.
4. Search current external sources when useful. Prefer standards/specifications, official framework/design-system docs and first-party design/engineering sources.
5. Create/update `design-system/research/<track>.json` with local evidence, web evidence, agreements, tensions, decisions, rejected alternatives, source provenance and `checkedAt`.
6. Do not convert a research finding directly into a rule. Explain why the selected rule fits this system and what remains configurable.
7. Implement only after the research packet is ready.
8. Run validation and record what changed.

## Required workflow for product UI generation
1. Classify the user intent and page archetype.
2. Read local overrides before global defaults.
3. Select a page template before assembling components.
4. Resolve natural-language intent through recipes.
5. Read exact component docs before using a component.
6. Use semantic tokens only.
7. Do not create a new primitive if an existing component can express the need.
8. Run validation after every meaningful UI change.
9. Report template, components, overrides, and failed checks.

## Hard rules
- Product-specific local source of truth overrides generic web guidance.
- One primary action per local action group.
- Do not hard-code brand colors, radius, spacing, shadow, or motion inside product pages.
- Do not duplicate overlay behavior.
- Do not invent icons if a semantic icon exists.
- Do not silently change page archetype.
- Preserve keyboard and accessibility behavior when styling.
- Cite or record provenance for new systemic rules.
