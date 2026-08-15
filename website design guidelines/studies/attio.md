# Attio — Website Study

## Snapshot
- Product category: CRM / B2B SaaS
- Design archetype: clean editorial SaaS with refined product UI
- Best used for: modern B2B, CRM, workflow tools, AI SaaS

## Observed design language
- Large typographic statements paired with highly polished product interface fragments.
- White/light surfaces use generous whitespace while keeping UI examples compact.
- Cards are used to demonstrate distinct product capabilities, not as the default container for every section.
- Product visuals often retain realistic information density, which helps the marketing site feel credible.
- Neutral color system is periodically interrupted by stronger brand or feature accents.

## Why it works
It presents a complex B2B product without making the website feel like an admin dashboard.

## Reusable rules
```yaml
layout:
  marketing_shell: spacious
  product_examples: dense
  copy_measure: controlled

surface:
  cards: capability-specific
  border: subtle
  radius: moderate

composition:
  use_realistic_ui_density: true
  alternate_text_and_product: true
```

## Good use cases
- B2B SaaS
- CRM and data products
- workflow automation
- portfolio presentation of complex UI

## Do not copy blindly
Do not transfer marketing-page whitespace directly into productivity software where scan density matters.