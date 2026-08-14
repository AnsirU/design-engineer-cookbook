# AGENT.md

## Required workflow
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
- One primary action per local action group.
- Do not hard-code brand colors, radius, spacing, shadow, or motion inside product pages.
- Do not duplicate overlay behavior.
- Do not invent icons if a semantic icon exists.
- Do not silently change page archetype.
- Preserve keyboard and accessibility behavior when styling.
