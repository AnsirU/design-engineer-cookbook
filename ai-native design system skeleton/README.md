# AI-native Design System Skeleton

一个用于快速启动 **Agent 可直接使用的设计系统** 的品牌中立母版。

目标不是预先决定视觉，而是先固定那些跨品牌可复用的结构：  
**Research → Brand Intent → Foundations / Theme → Components → Blocks / Recipes → Page Blueprints / Templates → Agent Interface → Doctor / Evals → Knowledge Refresh**。

本骨架从两类核心来源抽象：
- 用户提供的 `our-ui` 完整运行上下文：tokens、组件规范、布局、页面模板、交互规范、manifest、recipes、coverage/QA、playground。
- Meta Astryx：accessible components、brand-level theming、page/block/component examples、CLI 与 Agent-first discovery/build workflow。

同时用当前官方资料校准 token、agent knowledge 与 QA：DTCG 2025.10、OpenAI Harness Engineering、Storybook testing/a11y。

## 一句话原则

> **把“品牌怎么长”留给 Theme，把“界面怎么工作”固化到 Component / Block，把“Agent 怎么找到、组合、验证”固化到 Manifest / Search / Blueprint / Eval。**

## Consume mode vs System-change mode

### Consume mode
Agent 使用已经沉淀好的 tokens / components / recipes / templates / docs。普通页面生成不需要每次重新上网研究。

### System-change mode
当 Agent 修改 Theme Compiler、组件规则、recipes、templates、Planner、Doctor 或 Agent contract 时，必须：
1. 先查本地知识库与现有实现；
2. 对知识缺口检索当前官方/标准资料；
3. 形成 Research Packet（evidence / agreements / tensions / decisions / rejected alternatives / provenance）；
4. 再修改系统能力；
5. 运行 Doctor 与 Golden Eval。

## v0.3 可执行能力

`cli/` 已支持：

```bash
ds init
ds capabilities --json
ds research check
ds theme create technical --density=compact --geometry=sharp --brand=#19a974
ds theme compile
ds search "agent progress" --dense
ds docs ChatComposer --dense
ds build "AI agent chat workbench" --json
ds component Button
ds template chat-workbench
ds doctor --json
ds eval planner --json
```

当前 Build Planner 使用确定性的 page/block/component ranking，而不是在线 LLM 调用；同一个 prompt 可复现。Theme Compiler 输出 DTCG 2025.10-shaped source tokens、resolved tokens 和 CSS。

## 目录

- `01-common-architecture.md`：共性系统结构。
- `02-design-philosophy-and-practices.md`：设计哲学与界面通用实践。
- `03-component-and-code-skeleton.md`：最低可用组件集与代码/API 原则。
- `04-agent-operability.md`：Agent 如何查、选、组合、验证。
- `05-prebuild-deposits.md`：品牌未定前可提前沉淀的资产。
- `06-build-checklist.md`：从品牌气质到系统的执行清单。
- `07-research-first-implementation.md`：系统级变更的 Research-first contract。
- `08-maturity-model.md`：成熟度、验证梯度与生产化边界。
- `research/`：本轮四项核心能力的研究记录与 baseline sources。
- `starter/`：manifest、theme/token contracts、schemas、golden evals 与代表性组件代码。
- `cli/`：可执行的 `ds` CLI v0.3。

## 当前成熟度边界

这已经是一套可运行、可检索、可规划、可静态检查、可做 planner golden eval 的 **design-system generator skeleton**，但还不是生产级组件库。

下一阶段生产化重点不是继续无限加静态文档，而是：真实 accessible primitives、rendered component harness、interaction/a11y/visual tests、page blueprint validation、rendered golden-page eval 与版本迁移机制。
