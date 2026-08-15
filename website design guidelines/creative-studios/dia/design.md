# DIA — Design Reconstruction

Source: https://dia.tv/

## Why this reference
DIA is especially useful for understanding **kinetic identity systems**: typography is not merely styled text but a time-based, responsive visual material. The studio describes itself as specializing in kinetic identity systems, making it a valuable reference for websites that need sophistication through motion rather than decoration.

## Evidence
- **A** — DIA publicly describes its practice around brand, design, and typographic kinesis / kinetic identity systems.
- **A** — The official site credits the typeface **Rand by François Rappo / Optimo** and website design & development by Bänziger Hug.
- **A** — DIA states that new technologies are used while work remains grounded in design fundamentals, and that R&D feeds larger projects.
- **B** — Live-site impression: stark black/white framework, type-led navigation, highly controlled negative space, and motion/sequence as a primary identity carrier.

## Design DNA
`kinetic / typographic / disciplined / monochrome / experimental / modular / temporal`

## Reconstructed tokens
> A: Rand is source-confirmed. Other values are B working approximations. Do not redistribute the proprietary font.

```css
--bg: #f5f5f1;
--fg: #0a0a0a;
--inverse-bg: #0a0a0a;
--inverse-fg: #f5f5f1;
--line: rgba(10,10,10,.3);
--muted: rgba(10,10,10,.52);

--radius: 0px;
--space-unit: 8px;
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 40px;
--space-5: 64px;
--space-6: 104px;
--space-7: 168px;
```

## Typography
- Source typeface: Rand. For open specimens use a neutral grotesk fallback rather than approximating or redistributing Rand.
- Treat typography as a **variable system**: scale, width, position, cropping, repetition, and time can all be parameters.
- Keep the static base highly disciplined so kinetic moments read clearly.

Suggested reconstruction:
- Kinetic display: `clamp(72px, 15vw, 240px) / .78–.9`
- Large label: `32–64px / .95`
- Body: `15–18px / 1.4`
- Metadata: `10–12px / 1.1`

## Grid & composition
- Strong modular grid with large empty fields.
- Use full-bleed typographic stages rather than card containers.
- A single word or phrase may act like an image.
- Repetition is allowed when each repetition changes through time/position/weight.

## Components
### Kinetic word stage
Large text clipped in a viewport. Hover/scroll modifies tracking, translation, or scale.

### Programmatic index
Sparse list with project title, year, discipline; motion can carry preview rather than permanent thumbnails.

### Contrast field
Hard black/white section reversal; no shadow required.

### Type matrix
Repeated words/characters in a grid to make the typeface/system itself visible.

## Motion
Motion is structural, not garnish.
- Fast interaction feedback: `100–180ms`.
- Kinetic type phase: `500–1400ms`.
- Prefer transforms, clipping, variable-axis changes, repetition, and stagger.
- Avoid bouncing/easing that feels playful unless the concept asks for it.
- Always provide `prefers-reduced-motion` fallback.

## Reusable rules
1. Establish an extremely stable static grid before adding expressive motion.
2. Let type perform the role normally assigned to illustration.
3. Motion should encode a concept: rhythm, compression, expansion, signal, sequence, or transformation.
4. Reduce palette and component ornament when typography carries the identity.
5. Create motion tokens just as deliberately as spacing or color tokens.

## Suggested motion tokens
```css
--duration-fast: 140ms;
--duration-ui: 220ms;
--duration-scene: 760ms;
--ease-direct: cubic-bezier(.2,.8,.2,1);
--ease-linear-art: cubic-bezier(.65,0,.35,1);
```

## Best use
- Motion-first brand/product sites
- AI / media / creative-tech launches
- Portfolio openers
- Dynamic data storytelling where typography can represent state

## Avoid for
- Operational B2B pages where continuous motion reduces scanability; borrow the type discipline, not necessarily the kinetic layer.
