# AI-native Design System Skeleton — Maturity Model

The skeleton is not a finished brand system. It is reusable infrastructure that turns brand intent and product constraints into an agent-operable design system.

## Target architecture

`Brand intent → research-backed system decisions → portable tokens → components → blocks/recipes → page blueprints/templates → agent discovery/planning → QA/evals → knowledge refresh`

## v0.3 maturity baseline

### Foundation contract
- Separate brand-variable decisions from system invariants.
- Theme intent uses axes such as density, geometry, elevation, motion and color strategy.
- Portable source tokens use DTCG 2025.10 structures where applicable; platform output is a separate resolved layer.

### Component contract
Every production component should eventually expose role/use cases, do/do-not guidance, anatomy/slots, props and controlled state, interaction states, keyboard/accessibility contract, semantic token dependencies, related components, examples and provenance.

The included generic generator is only a scaffold. Production primitives must use behaviorally correct accessible foundations.

### Composition contract
The system has three example scales:
- **Page** — full archetype/template.
- **Block / Recipe** — reusable task-level composition.
- **Component example** — canonical use of one component.

Agents should resolve requests in that order rather than start with an unconstrained component list.

### Agent operability
Progressive disclosure:
1. capabilities;
2. search;
3. dense summary;
4. exact docs;
5. page/block source;
6. build plan;
7. implementation;
8. doctor/eval.

`AGENT.md` is a map, not the knowledge base itself.

### Research-first governance
Normal page generation consumes curated knowledge without network calls. System-level changes require local evidence first, current external primary sources where useful, explicit decisions/rejected alternatives, provenance/checked date, and a ready research packet before changing rules.

### Verification ladder
- **Static**: manifests, raw values, duplicate primitives, missing docs.
- **Component**: interaction tests, accessibility automation, state coverage.
- **Rendered**: responsive, theme, visual regression, focus/keyboard checks.
- **Page**: blueprint/template drift and end-to-end task states.
- **Agent**: golden prompts, component adoption, repair turns, token compliance.

## What remains before a reference design system

The skeleton is mature enough to begin controlled validation, but not yet a production component library. Before calling it production-ready, add:
1. real accessible primitive implementations;
2. Storybook or equivalent rendered component harness;
3. token schema validation in CI;
4. blueprint validation and template source materialization;
5. rendered golden-page evals;
6. release/version/migration policy;
7. ownership and freshness metadata for knowledge records.
