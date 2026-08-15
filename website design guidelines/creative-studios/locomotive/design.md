# Locomotive — Design Reconstruction

Source: https://locomotive.ca/

## Why this reference
Locomotive is useful for studying **immersive digital-first portfolio design** where interaction, code, and brand narrative are treated as one system. The studio explicitly positions itself at the intersection of design thinking and technical know-how and describes its work as Digital-first Design™.

## Evidence
- **A** — Official positioning: independent digital-first design agency in Montréal; design and code are integral to its approach.
- **A** — The studio explicitly frames its mission around making digital presence a “digital destination.”
- **A** — Official work descriptions repeatedly emphasize fluid animation, strong visual rhythm, cinematic touches, and bold modular typography.
- **B/C** — The current portfolio uses an immersive, motion-led presentation rather than conventional SaaS sections; third-party descriptions also note charcoal/acid accents and code-driven transitions, but exact values should be treated as reconstruction rather than official tokens.

## Design DNA
`immersive / cinematic / technical / kinetic / bold / playful / high-craft`

## Reconstructed tokens
> B: working approximations.

```css
--bg: #171916;
--fg: #f2f2ec;
--surface: #22241f;
--line: rgba(242,242,236,.22);
--muted: rgba(242,242,236,.58);
--acid: #c7ff2f;
--warm: #ee5c3b;

--radius-xs: 2px;
--radius-sm: 6px;
--space-1: 6px;
--space-2: 12px;
--space-3: 18px;
--space-4: 28px;
--space-5: 44px;
--space-6: 72px;
--space-7: 116px;
--space-8: 180px;
```

## Typography
- Bold display typography acts as navigational signage.
- Body copy can remain compact and matter-of-fact.
- Use monospace or code-like microcopy sparingly for technical flavor, not as a blanket aesthetic.

Suggested reconstruction:
- Hero: `clamp(64px, 12vw, 184px) / .84`
- Project title: `clamp(42px, 7vw, 104px) / .9`
- Body: `16–20px / 1.45`
- Meta: `10–12px / 1.15`

## Grid & composition
- Viewport-scale project stages.
- Full-bleed media should alternate with compressed text moments.
- Sticky copy + moving media is a useful pattern for case studies.
- Navigation can be spatial/cinematic but should retain explicit labels and keyboard accessibility.

## Components
### Full-bleed project stage
Large media placeholder with oversized project title and compact metadata.

### Sticky narrative rail
Copy remains pinned while media progresses through states.

### Motion navigation
Menu feels like entering a scene rather than opening a dropdown; still needs predictable targets.

### Signal CTA
Small high-chroma accent against dark neutral field; reserve color for action and state.

## Motion
- Motion directs attention and reinforces narrative continuity.
- UI: `140–220ms`.
- Section transition: `450–900ms`.
- Media travel: `700–1400ms`.
- Prefer inertial scroll, clipping, transform, pinning, and directional continuity.
- Respect `prefers-reduced-motion` and avoid hiding essential navigation behind gesture-only behavior.

## Reusable rules
1. If the site promises technical craft, interaction quality is part of the brand proof.
2. Give each section a clear visual “scene”; use motion to connect scenes.
3. Keep the base palette dark and restrained when motion/media already carry high stimulation.
4. Use high-chroma accent as a signal, not as general decoration.
5. Every experimental interaction needs a conventional affordance underneath it.

## Best use
- Creative technology
- Game / 3D / AI product storytelling
- Interactive portfolios
- Experience-led launch pages

## Avoid for
- Dense operational applications; borrow its motion grammar selectively for onboarding, demos, and feature storytelling rather than table/form workflows.
