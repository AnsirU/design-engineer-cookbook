# 04 · Agent Operability

## 核心判断

“组件库能被 Agent import” ≠ “Agent-friendly design system”。

Agent 真正需要完成 6 个动作：
1. **Discover**：我有哪些能力？
2. **Search**：这个需求该用哪个组件 / pattern / template？
3. **Understand**：API、状态、限制是什么？
4. **Compose**：有哪些正确组合例子？
5. **Generate / Modify**：怎样把模板注入项目并按 theme 改？
6. **Validate / Upgrade**：怎么知道生成正确？版本变化后怎么迁移？

## 1. 单一发现入口 Capability Manifest

至少返回：version、commands/MCP tools、component/template/token registry、output formats、error codes、integration sources。Agent 不应该先 grep 整个 repo 才理解系统。

## 2. Search-first，而不是把所有 docs 塞进 prompt

推荐能力：
```bash
ds search "filter table"
ds component Button
ds component Select --json
ds template --list
ds template DataTablePage --skeleton
ds docs tokens --dense
```

三种输出模式：human Markdown、typed `--json`、token-efficient `--dense`。

## 3. Recipe Registry：自然语言 → 设计系统能力

```json
{
  "intent": ["创建筛选区", "filter toolbar"],
  "recipe": "FilterToolbar",
  "uses": ["SearchInput", "Select", "DateRange", "Button"],
  "rules": [
    "Only one primary action",
    "Controls share the same height",
    "Filters collapse before table columns"
  ]
}
```

用户通常不会说“给我一个 Combobox”，而是说“加一个筛选”，因此 recipe 比 component list 更接近真实意图。

## 4. Template Registry：给 Agent 好例子复制

每个模板要有：id、archetype、use cases、source、skeleton、preview、components used、required slots、customization points、anti-patterns。

**模板质量要高于 demo。** Agent 会复制你给它的平均水平。

## 5. Agent Guide：明确工作流

```text
1. classify intent
2. inspect local override
3. choose page template
4. choose recipes
5. inspect exact component docs
6. implement using tokens
7. run QA
8. summarize deviations
```

如果需求改变 shell / split / grid / page archetype，先重新选择 template，而不是局部 patch。

## 6. QA Contract

### Static
- no hard-coded colors
- no unknown spacing / radius
- no deprecated component
- no ad-hoc SVG if icon exists
- no duplicate component implementation
- correct import path
- component coverage

### Interaction
- keyboard navigation
- focus visible
- overlay dismiss / escape
- disabled / loading / error
- async feedback

### Visual
- light / dark
- representative widths
- overflow / alignment
- token diff
- screenshot regression

### Agent self-report
完成后输出：components used、template used、custom overrides、QA result、unresolved design decisions。

## 7. Versioning / Upgrade

一开始就设计 deprecated props、replacement hints、stable error codes、migration docs、codemods、versioned manifest schema。否则组件改名后 Agent 很容易同时生成新旧两套 API。
