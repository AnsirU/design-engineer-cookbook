# 02 · Design Philosophy & Common UI Practices

## A. 从两个系统提炼出的核心设计哲学

### 1. Design system 应约束质量，不应锁死品牌
行为、可访问性、状态和结构需要强约束；颜色、字体、圆角、密度、动效应通过 theme 调整。

### 2. 对 Agent 来说，例子和规则同样重要
纯规则对生成式模型不够。高质量 template / block exemplar 可以显著减少“Agent 知道组件但还是手写 div”的情况。

### 3. 一个系统同时服务 Human 与 Agent
最理想的状态不是另写一份“AI 文档”，而是人和 Agent 读同一个 source of truth，只提供不同输出格式。

### 4. API 的可预测性比自由度更重要
稳定命名、明确 variant、少量合法组合、统一状态模型，比“每个组件都无限 custom”更适合 Agent。

### 5. 页面先选 archetype，再组合组件
页面生成先判断它是 list / table / settings / dashboard / workbench / chat，而不是从空白 canvas 开始摆控件。

### 6. Design system 需要“可验证”
规则如果只能靠设计师肉眼记忆，就不是真正 Agent-native。能 lint、能检查 coverage、能跑 visual QA，才有闭环。

### 7. Source of truth 必须有明确优先级
发生冲突时，要告诉 Agent：
local override > component spec > design foundations > source files > legacy implementation。
否则 Agent 会随机选一个旧实现。

---

## B. 通用界面实践：建议作为 Skeleton 默认原则

这些不是固定品牌风格，而是“基本可用”的结构性实践。

### 信息层级
- 每个区域只保留一个 primary action。
- 状态色与品牌色分离。
- 标题 / 内容 / meta / help / disabled 应有稳定层级。
- 同类对象保持稳定 meta 位置，利于扫描。

### 表单
- FormField 本身是复合 pattern，而非 Input 单组件。
- 必须定义 label、required、help、error、disabled、readonly。
- 横向字段和纵向字段要有不同 spacing contract。
- 单位、prefix、suffix、trailing action 作为 slot，而不是业务页面自己拼。

### 选择器
- Select、MultiSelect、Combobox、TreeSelect 不应混为一个组件。
- 菜单定位、escape、click outside、keyboard navigation 是系统行为。
- caret、check、clear 等状态 icon 必须来自同一 icon system。

### Navigation
- Tabs 用于 view/page switching；Segmented 用于局部值切换，语义分开。
- Sidebar / TopNav / Breadcrumb / Pagination 各自承担不同层级导航。
- active、hover、focus 不应只靠颜色差异。

### Feedback
- Toast：非阻塞反馈。
- Inline Alert：上下文内解释。
- Dialog：需要明确决定。
- Drawer：保持主任务上下文的次级任务。
- Progress / Skeleton：告诉用户系统仍在工作。
- Empty state 必须给下一步，不只是插画。

### Data-heavy UI
- 同构高密度对象优先 Table。
- 异构对象摘要优先 Card。
- Toolbar / filters / table 边线应共享栅格。
- 排行榜、timeline、metric 不要为了“统一”硬塞 table。

### Overlay
- Modal、Popover、Tooltip、Menu 共享 layering / dismissal / focus management contract。
- 不允许业务各自定义 z-index。

### Icon
- 单色 icon 使用 currentColor。
- 相同交互组保持同一视觉风格。
- 禁止 emoji / Unicode 符号替代系统 icon。
- brand logo 与 functional icon 分开管理。

### Motion
- 所有 motion 走 duration/easing token。
- 默认只表达：进入、退出、状态变化、空间关系。
- 禁止 `transition: all`。
- prefers-reduced-motion 必须进入系统。

### Responsive
- 页面级更推荐 container-aware layout，而不是只根据 viewport。
- 组件本身定义最小可用宽度和降级策略。
- mobile 不是简单缩小 desktop，而是明确 navigation / overlay / density 的替代模式。

### Accessibility
所有 P0 组件至少固化：
- semantic HTML / role
- keyboard
- visible focus
- disabled semantics
- label/description relation
- aria live for async feedback
- contrast
- reduced motion
