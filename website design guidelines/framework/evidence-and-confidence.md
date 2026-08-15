# Evidence & Confidence

Every design observation should carry an evidence level.

## A — Source confirmed
Directly visible in public source code, official design-system documentation, CSS variables, component documentation, or an inspectable public asset.

Use wording such as:
- `Confirmed: 8px radius`
- `CSS token: --radius-md: 8px`

## B — Strong visual inference
Repeated across the site and visually stable enough to estimate, but not confirmed in source.

Use wording such as:
- `Estimated: ~120px section spacing`
- `Likely 12-column grid`

## C — Interpretive principle
A design reading rather than a numeric fact.

Examples:
- "Uses whitespace as a pacing device."
- "Primary hierarchy comes from type scale rather than cards."

## Capture rule
For each study, separate:

1. **Observed** — what is visibly present.
2. **Confirmed values** — what can be verified from code/docs.
3. **Estimated values** — useful approximations.
4. **Interpretation** — why the system works.
5. **Reusable rule** — how to apply it elsewhere.

This prevents the knowledge base from turning visual guesses into fake implementation facts.
