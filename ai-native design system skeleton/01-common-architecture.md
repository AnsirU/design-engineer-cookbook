# 01 · Common Architecture

## 结论：一个 Agent-native 设计系统至少需要 7 层

### L0 · Identity / Brand Intent
定义“这个品牌为什么长这样”，不是 token 表。
- 品牌关键词 / 反关键词
- 信息密度：dense ↔ airy
- 几何感：sharp ↔ rounded
- 表面感：flat ↔ layered
- 色彩性格：neutral ↔ expressive
- 动效性格：quiet ↔ playful
- 文案语气
- 图像 / icon 原则

**作用：** 给 Theme 生成边界，避免 Agent 只凭“高级、简洁”自由发挥。

### L1 · Foundations
与具体组件无关的基础系统：
- color semantics
- typography scale
- spacing scale
- radius scale
- size / control height
- border
- shadow / elevation
- motion duration / easing
- z-index / overlay
- responsive / container breakpoints
- icon sizing
- accessibility focus ring

这层要使用 **semantic token**，而不是组件里散写视觉值。

### L2 · Theme
Theme 只负责“系统长什么样”，不改变核心行为。
- default / dark / high-contrast
- brand theme
- density theme（可选）
- motion preference
- component semantic aliases

Astryx 明确把 behavior/accessibility/quality 与 theme 分离；our-ui 也以 tokens + DESIGN/BRAND + components 分层。

### L3 · Components
可独立复用、带状态和可访问行为的基础能力。
组件应定义：
- props / slots
- states
- keyboard behavior
- accessibility contract
- allowed composition
- visual token mapping
- examples
- anti-patterns

**关键：不要把组件文档写成截图说明。组件必须是 Agent 可解析的 API。**

### L4 · Patterns / Recipes
组件之间的稳定组合关系。
例如：
- FormField = Label + Control + Help/Error
- FilterBar = Search + Select + Date + Actions
- PageHeader = Title + Description + Actions
- DataTableToolbar
- ConfirmationFlow
- ChatComposer
- Empty / Loading / Error
- Master-detail
- Command / creation flow

这一层解决“有 Button 和 Input，但 Agent 不知道怎么拼页面”的问题。

### L5 · Page Templates / Blueprints
页面级“好例子”，比规则更能约束 Agent。
基础模板建议至少：
- App Shell
- Card Grid / Object List
- Dense Table / Admin List
- Detail Page
- Form / Settings
- Analytics Dashboard
- Chat / Agent Workbench
- Builder / IDE Workbench
- Search / Command surface
- Modal / Drawer flow
- Empty / first-run state

模板不是 demo，而是 **Agent 的 high-quality exemplars**。

### L6 · Agent Interface
让 Agent 使用前五层的操作层：
- capability manifest
- searchable docs
- component registry
- recipe registry
- template registry
- JSON output
- token-efficient / dense output
- CLI and/or MCP
- code scaffolding / template injection
- source swizzle / override
- migration / codemod

### L7 · QA / Governance
Agent 生成后必须有闭环：
- token lint
- component coverage
- accessibility checks
- interaction checks
- visual regression
- responsive checks
- dark mode checks
- deprecated API checks
- recipe/template conformance
- source-of-truth priority
- version / migration rules

---

## 最值得固定的“骨架”，最不该提前固定的“皮肤”

### 品牌未定也可以先固定
- 层级关系
- token taxonomy
- semantic names
- component API
- component states
- accessibility
- keyboard behavior
- recipes
- page templates
- manifest schema
- Agent workflow
- QA rules
- migration model

### 品牌确定后再填写
- primary hue
- exact neutrals
- exact font family
- radius value
- control density
- shadow strength
- image style
- decorative motion
- brand-specific icon / illustration

这就是“先搭骨架、后换皮肤”成立的前提。
