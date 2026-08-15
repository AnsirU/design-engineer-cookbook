# PORTO ROCHA — Design Reconstruction

Source: https://www.portorocha.com/

## Why this reference
PORTO ROCHA is a strong reference for **editorial modernism that remains culturally alive**. Its site carries a large volume of projects and studio activity without collapsing into a conventional portfolio-card template. The useful lesson is not a specific visual effect, but how typography, indexing, rhythm, and imagery can turn density into identity.

## Evidence
- **A** — The studio describes itself as a global strategy and design agency with New York and London offices.
- **A** — The live site exposes a very large project/news index directly on the main experience, signaling archive density as a core information model.
- **A** — The studio publicly emphasizes flexible brand systems, motion as a core layer of brand expression, and experimental practices.
- **B** — Live-site impression: modernist editorial structure, assertive typography, project-list density, minimal container decoration, frequent tension between orderly grids and expressive project imagery.

## Design DNA
`editorial / cultural / modernist / energetic / systematic / image-aware / non-corporate`

## Reconstructed tokens
> B: working approximations, not official tokens.

```css
--bg: #f4f2ed;
--fg: #101010;
--surface: #ffffff;
--line: rgba(16,16,16,.28);
--muted: rgba(16,16,16,.58);
--signal-red: #ef3c2f;
--signal-blue: #255cff;
--signal-yellow: #f1e64a;

--radius: 0px;
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 20px;
--space-5: 32px;
--space-6: 56px;
--space-7: 88px;
--space-8: 144px;
```

## Typography
- Use a neutral grotesk as the system anchor; personality comes from proportion and project-specific imagery/type rather than excessive UI styling.
- Titles can be large but often coexist with dense index text.
- Avoid many font weights; use size, alignment, caps, and spacing to create hierarchy.

Suggested reconstruction:
- Hero: `clamp(54px, 9vw, 140px) / .92`
- Section title: `32–56px / .98`
- Project title: `18–28px / 1.0`
- Body: `15–18px / 1.45`
- Index/meta: `10–13px / 1.2`

## Grid & composition
- 12-column editorial grid.
- Use full-width project rows as a primary navigation model.
- Allow image crops and typographic blocks to change ratio per project instead of forcing identical cards.
- Keep chrome restrained so project identities can rotate through different colors, typography, and image worlds.
- Dense content is acceptable when alignment is extremely consistent.

## Components
### Project index
A row that can include year/category/title and reveal imagery on hover or selection. Prioritize scan speed.

### Image-led project block
Media dominates; captions and metadata remain small and precise.

### News/activity ticker
Dense chronological text with minimal decoration, useful for studios/teams whose culture is part of the brand.

### Color interruption
A single project or section may temporarily take over the palette; the base framework remains neutral.

## Motion
- Motion should support identity, not operate as generic polish.
- Good patterns: cursor-following project preview, crop reveal, vertical list-to-image transitions, variable type or project-specific motion.
- UI transitions: `140–220ms`; editorial reveals: `350–700ms`.

## Reusable rules
1. A portfolio can be an **index**, not a gallery of equal cards.
2. Neutral site chrome gives individual projects more freedom to carry their own visual worlds.
3. Dense information can feel premium when baselines, columns, and typography are rigorously controlled.
4. Use color as an episodic takeover, not permanent decoration everywhere.
5. Let motion belong to the brand system or project story.

## Best use
- Design portfolio / studio archive
- Research collections
- Product/design case-study index
- Culture-heavy brands
- Portfolio homepages with many projects

## Avoid for
- Interfaces where users need strong persistent affordances and conventional component predictability.
