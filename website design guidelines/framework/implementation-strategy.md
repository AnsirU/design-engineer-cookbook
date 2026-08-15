# Implementation Strategy — Design MD → HTML / Product UI

## Short answer
Use **native HTML/CSS/JS for design-language specimens** and **component primitives such as shadcn/ui for product prototypes**.

They solve different problems.

## 1. Design-language specimen
Goal: show brand atmosphere, typography, color, spacing, geometry, composition, image treatment, and motion grammar.

Preferred implementation:

```text
Design reference
→ design.md
→ native HTML/CSS/JS specimen
```

Why native HTML is better here:
- no inherited shadcn radius, spacing, or anatomy;
- easier to reproduce unusual grids and editorial composition;
- easier to demonstrate giant typography, asymmetric layouts, custom motion, and near-zero component chrome;
- no dependency/runtime needed; the file can be opened locally;
- a design specimen should expose **the visual system itself**, not the component framework beneath it.

## 2. Product prototype
Goal: rapidly build realistic interaction with reliable accessibility and behavior.

Preferred implementation:

```text
Product DNA
+ selected reference rules
+ business requirements
→ project design.md
→ shadcn / Radix / Base UI / domain primitives
→ reskin + composition rules
→ interactive prototype
```

Use shadcn for:
- Dialog / Drawer
- Popover / Tooltip
- Select / Combobox
- Tabs
- Table
- Form
- Command
- Menu
- Toast
- accessible focus / keyboard behavior

Do **not** treat shadcn defaults as the final visual language.

## 3. Transformation layer
A project `design.md` should distinguish:

```text
FOUNDATION
colors / type / spacing / radii / borders / elevation

COMPONENT TRANSFORMS
button / input / tabs / table / dialog / tooltip

COMPOSITION RULES
page width / grids / section rhythm / density

INTERACTION RULES
hover / focus / open / placement / offset / collision / responsive substitution

MOTION
fast feedback / UI transition / scene transition / reduced motion
```

This makes it possible to reuse the behavior of a mature primitive while replacing its visual grammar.

## 4. Rule of thumb
- Want to **study or exhibit a style** → native HTML.
- Want to **build a usable product screen quickly** → shadcn/primitives + design.md.
- Want to **reverse-engineer a screenshot** → reconstruct structure first, then map recognized patterns to primitives, then apply a screenshot-derived design.md.

## 5. Future automation target
An agent should eventually be able to execute:

```text
reference URLs / screenshots
→ analyze design DNA
→ retrieve relevant knowledge-base studies
→ generate project design.md
→ choose implementation substrate
→ transform primitives
→ compose pages
→ validate visual + interaction rules
```
