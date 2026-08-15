# design.md Seed — Modern Product Website

Use this as a starting point only after selecting references and extracting the target product's design DNA.

```yaml
meta:
  intent: "modern product / design-engineering presentation"
  default_tone:
    - precise
    - calm
    - contemporary
    - evidence-led

layout:
  shell:
    max_width: 1360px
    side_padding_desktop: 32px
    side_padding_mobile: 20px
  grid:
    desktop_columns: 12
    tablet_columns: 8
    mobile_columns: 4
  readable_text:
    max_width: 720px
  section_spacing:
    hero_to_first: 96px
    major: 120px
    compact_report: 72px

spacing:
  base: 4px
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 120]

typography:
  display:
    size: "clamp(48px, 6vw, 88px)"
    line_height: 0.98
    weight: 600
  h1:
    size: "clamp(40px, 4.5vw, 64px)"
    line_height: 1.02
    weight: 600
  h2:
    size: "clamp(28px, 3vw, 44px)"
    line_height: 1.08
    weight: 600
  body:
    size: 16px
    line_height: 1.6
  caption:
    size: 12px
    line_height: 1.45

surface:
  philosophy: "use alignment and spacing before adding containers"
  border: "1px subtle neutral"
  radius:
    default: 8px
    large_visual: 12px
  shadow: "minimal; use only for elevation"

color:
  foundation: "neutral"
  accent_count: 1
  accent_usage:
    - focus
    - active state
    - key evidence
    - selected annotation

composition:
  hero:
    preferred_patterns:
      - "large statement + wide product proof"
      - "split copy / product visual"
  report_section:
    preferred_pattern: "claim -> evidence -> explanation -> implication"
  screenshots:
    consistent_frame: true
    consistent_caption: true
    crop_intentionally: true

motion:
  principle: "explain state, sequence, or product behavior"
  decorative_motion: "avoid by default"

rules:
  - "Do not cardify every section."
  - "Do not apply a reference brand's skin without business justification."
  - "Preserve target-product density where it reflects real workflow needs."
  - "Use product UI and evidence as primary visual material."
  - "Treat all numeric values as project defaults, not universal truths."
```

## Agent usage

Before applying this file, an agent should:
1. Inspect the target product or brief.
2. Extract existing design DNA.
3. Select 2–4 relevant studies from this knowledge base.
4. Mark which project attributes should be preserved.
5. Override this seed accordingly.
6. Validate the result against the target context, not against the reference websites alone.
