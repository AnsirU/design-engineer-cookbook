# 06 · Build Checklist

## Phase 0 — Brand Intent
- [ ] 写 5 个品牌关键词
- [ ] 写 5 个反关键词
- [ ] 选择 density：compact / default / comfortable
- [ ] 选择 geometry：sharp / balanced / rounded
- [ ] 选择 elevation：flat / subtle / layered
- [ ] 选择 motion：quiet / responsive / expressive
- [ ] 选择 color：neutral-led / brand-led / expressive
- [ ] 确定 typography 气质
- [ ] 确定 icon 气质

输出：`theme.contract.json`

## Phase 1 — Theme
- [ ] semantic color
- [ ] spacing
- [ ] control sizes
- [ ] radius
- [ ] border
- [ ] shadow
- [ ] type
- [ ] motion
- [ ] dark mode
- [ ] focus

## Phase 2 — P0 Components
- [ ] primitives
- [ ] form
- [ ] navigation
- [ ] surface/layout
- [ ] overlays
- [ ] feedback
- [ ] data
- [ ] agent-specific

每个组件同时交付：implementation、typed API、doc、recipe、example、test、accessibility rules。

## Phase 3 — Patterns
- [ ] form field
- [ ] filter toolbar
- [ ] page header
- [ ] settings row
- [ ] confirmation
- [ ] creation flow
- [ ] agent execution
- [ ] artifact result

## Phase 4 — Templates
- [ ] app shell
- [ ] table
- [ ] card grid
- [ ] detail
- [ ] settings/form
- [ ] dashboard
- [ ] chat
- [ ] workbench

## Phase 5 — Agent Interface
- [ ] manifest
- [ ] search
- [ ] component detail
- [ ] template list/skeleton
- [ ] recipe lookup
- [ ] token docs
- [ ] json output
- [ ] dense output
- [ ] CLI or MCP
- [ ] local overrides
- [ ] error codes

## Phase 6 — QA
- [ ] token lint
- [ ] component coverage
- [ ] a11y
- [ ] keyboard
- [ ] responsive
- [ ] dark
- [ ] visual regression
- [ ] golden-page eval

## Definition of Done
给 Agent 一句自然语言页面需求，它应该能：
1. 找到正确 template；
2. 找到正确 recipes；
3. 只使用已有 components；
4. 只使用合法 tokens；
5. 输出可运行界面；
6. 自动跑 QA；
7. 清楚报告自己做了哪些 override。
