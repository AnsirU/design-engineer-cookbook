# 03 · Component & Code Skeleton

## 1. 最低可用组件集

不要一开始做 150+ 组件。先做能覆盖 80% SaaS / tool / Agent UI 的 P0。

### P0 · Primitives
- Text
- Icon
- Button
- IconButton
- Link
- Separator
- VisuallyHidden

### P0 · Form
- FormField
- TextInput
- TextArea
- NumberInput
- Checkbox
- RadioGroup
- Switch
- Select
- MultiSelect / Combobox
- SearchInput
- Date / DateRange（若业务需要）

### P0 · Navigation
- Tabs
- SegmentedControl
- Breadcrumb
- Pagination
- SideNav
- TopNav

### P0 · Surface / Layout
- Stack
- Inline
- Grid
- Container
- Card
- Divider
- ScrollArea
- AppShell

### P0 · Overlay
- Dialog
- AlertDialog
- Drawer
- Popover
- DropdownMenu
- Tooltip

### P0 · Feedback / Status
- Badge
- Status
- Alert
- Toast
- Spinner
- Progress
- Skeleton
- EmptyState

### P0 · Data
- Table
- ListItem
- Avatar
- Tag / Chip
- KeyValue
- Metric

### P0 · Agent-specific
- ChatMessage
- ChatComposer
- ContextChip
- AttachmentCard
- ExecutionStep
- ToolCallRow
- Plan / TaskList
- ArtifactCard
- ApprovalPrompt
- Diff / ChangeSummary
- AgentStatus

---

## 2. P1 组件：业务扩大后再补
- Tree
- TreeSelect
- CommandPalette
- FileTree
- Calendar
- Timeline
- Stepper
- DataGrid
- CodeBlock
- Markdown
- Chart wrappers
- SplitPane / ResizablePanel
- Upload / Dropzone
- RichText / Editor
- ColorPicker
- Slider
- Carousel

---

## 3. 推荐代码结构

```text
design-system/
├── package.json
├── AGENT.md
├── system.manifest.json
├── src/
│   ├── foundations/
│   │   ├── tokens.ts
│   │   ├── theme.ts
│   │   └── global.css
│   ├── components/
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.css.ts
│   │       ├── Button.doc.ts
│   │       ├── Button.recipe.ts
│   │       ├── Button.test.tsx
│   │       └── index.ts
│   ├── patterns/
│   ├── templates/
│   ├── icons/
│   └── index.ts
├── registry/
│   ├── components.json
│   ├── recipes.json
│   ├── templates.json
│   └── capabilities.json
├── scripts/
│   ├── lint-tokens.*
│   ├── check-coverage.*
│   ├── visual-qa.*
│   └── build-manifest.*
└── docs/
    ├── BRAND.md
    ├── DESIGN.md
    ├── COMPONENTS.md
    ├── LAYOUT.md
    ├── PATTERNS.md
    └── PAGE_TEMPLATES.md
```

---

## 4. 每个组件应该有的统一 Contract

```ts
type ComponentDoc = {
  name: string
  purpose: string
  whenToUse: string[]
  whenNotToUse: string[]
  importPath: string
  props: PropDoc[]
  slots?: SlotDoc[]
  states: string[]
  accessibility: {
    role?: string
    keyboard: string[]
    focus: string
  }
  tokens: string[]
  recipes: string[]
  examples: Example[]
  antiPatterns: string[]
  status: 'stable' | 'beta' | 'deprecated'
}
```

**原因：** Agent 最需要的不是 prose，而是“用途 → API → 合法状态 → 示例 → 禁止事项”的稳定结构。

---

## 5. 代码 API 设计原则

### 少量稳定 variant
优先：
```tsx
<Button variant="primary" size="md" />
```
避免：
```tsx
<Button blue rounded elevated strong compact />
```

### Slot 明确
```tsx
<PageHeader
  title="Projects"
  description="..."
  actions={<Button>New project</Button>}
/>
```

### 视觉值不暴露成随意 prop
避免：
```tsx
<Card padding={13} radius={11} shadow="0 8px 21px ..." />
```

优先：
```tsx
<Card density="default" elevation="raised" />
```

### 允许 escape hatch，但让它显式
可以提供 `xstyle` / `className` / `style`，但文档明确：
1. 先用 variant；
2. 再用 token；
3. 最后才 local override。

### Behavior 与 Theme 分离
Button 的 keyboard、disabled、loading、aria 逻辑不应因为换品牌 theme 改写。

---

## 6. 最值得提前做的 Recipes

- Create / Cancel action row
- Search + Filter toolbar
- Page header + actions
- Form section
- Settings list
- Data table page
- Card grid page
- Object detail page
- Empty → create flow
- Confirm destructive action
- Chat response with tool calls
- Chat response with artifacts
- Agent approval / permission
- Long-running task progress
- Master-detail
- Builder / workbench 3-column shell
