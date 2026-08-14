# 05 · What Else to Deposit Before Branding

下面这些是最值得在视觉风格确定前完成的“前置资产”。

## A. UI Archetype Library
先整理产品世界里常见页面类型，而不是组件。建议至少 12 个：dashboard、data table、object grid、detail、create/edit form、settings、search/results、chat、agent task、workbench/IDE、onboarding/empty、permission/admin。

为每个 archetype 写：目标任务、必需区域、可选区域、dominant component、responsive strategy、empty/loading/error、canonical template。

## B. Interaction State Matrix
对每类交互组件统一列：default / hover / pressed / focus / selected / disabled / loading / error / success / read-only / empty。品牌确定后只需要“填视觉表现”，不用重新想状态。

## C. Semantic Token Contract
先定 token 名，不定值，例如：`color.text.primary`、`color.bg.canvas`、`color.action.primary`、`color.feedback.danger`、`space.control.inline`、`radius.control`、`motion.enter.fast`。这会成为 Figma Variables、CSS Variables、React Theme 和 Agent docs 的共同语言。

## D. Density Model
提前设计 compact / default / comfortable，但组件 API 不直接暴露所有 px，只暴露 density intent。

## E. Content & Microcopy Grammar
沉淀按钮用词、标题格式、empty-state 句法、error 结构、destructive warning、Agent approval / tool permission、loading / progress 文案。Agent 写 UI 时，文案质量往往比视觉更先暴露“像不像系统”。

## F. Icon Semantic Map
先定“语义 → icon name”，再换 icon 视觉风格。至少覆盖 add、close、search、filter、settings、more、download、upload、external、success、warning、error、agent、tool、attachment。

## G. Accessibility Baseline
做成不可覆盖的 contract：minimum hit target、focus visible、keyboard map、contrast floor、form label association、screen-reader text、reduced motion、live region rules。

## H. Data Display Grammar
提前规定数字对齐、日期格式、空值、truncate、tooltip、currency、percentages、status、long IDs、code / monospace、table density。

## I. Agent-specific Interaction Grammar
普通设计系统常漏掉，但 Agent 产品应提前沉淀：plan、execution、tool call、approval、progress、checkpoint、retry、interrupt、artifact、diff、citation、source、memory/context、background task、failure/recovery。每一种都定义 component/pattern 和状态。

## J. Reference Benchmark Set
准备 10–20 个“黄金页面”作为视觉与结构 benchmark。品牌换掉后，每次升级系统都让 Agent 跑 recreate、modify、migrate、dark mode、responsive、accessibility。这相当于设计系统的 eval dataset。

## K. Design-System Eval
不仅测代码 pass/fail，还测：component adoption rate、token compliance、template reuse、ad-hoc element count、visual similarity、accessibility score、repair turns、prompt tokens consumed。

## L. Decision Log
每个设计决策记录 decision、alternatives、evidence、reason、scope、revisit trigger。Agent 在未来遇到边缘情况时，能理解“为什么这样”，而不是只背规则。
