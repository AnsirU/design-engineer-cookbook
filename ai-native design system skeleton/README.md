# AI-native Design System Skeleton

一个用于快速启动 **Agent 可直接使用的设计系统** 的品牌中立骨架。

目标不是预先决定视觉，而是把设计系统里“可提前确定的结构”先固定下来：  
**Foundation → Theme → Components → Patterns → Page Templates → Agent Interface → QA / Governance**。

本骨架从两类来源抽象：
- 用户提供的 `our-ui` 完整运行上下文：包含 tokens、组件规范、布局、页面模板、交互规范、manifest、recipes、coverage/QA、playground。
- Meta Astryx：组件 + brand-level theming + templates + CLI/MCP + machine-readable docs/manifest 的 AI-operable 设计系统。

## 一句话原则

> **把“品牌怎么长”留给 Theme，把“界面怎么工作”固化到 Component / Pattern，把“Agent 怎么找到并正确组合”固化到 Manifest / Recipe / Template / QA。**

## 推荐搭建顺序

1. 填 `starter/theme.contract.json`：先确定视觉轴，不急着填所有 token。
2. 根据品牌气质生成完整 semantic tokens。
3. 实现 `starter/component-manifest.json` 中的 P0 组件。
4. 实现 `starter/page-template-manifest.json` 中的基础页面骨架。
5. 给每个组件补 machine-readable docs / recipes / examples。
6. 接入 `starter/agent-manifest.json`，让 Agent 有单一入口发现能力。
7. 建立 lint / coverage / visual QA，避免 Agent 越写越偏。

## 目录

- `01-common-architecture.md`：两套系统的共性结构与推荐分层。
- `02-design-philosophy-and-practices.md`：设计哲学、界面通用实践。
- `03-component-and-code-skeleton.md`：最低可用组件集、代码结构与 API 原则。
- `04-agent-operability.md`：如何让 Agent 真正能查、能选、能组合、能验证。
- `05-prebuild-deposits.md`：品牌未定前还值得提前沉淀的内容。
- `06-build-checklist.md`：从“品牌气质一句话”到可用系统的执行清单。
- `starter/`：可以直接复制成新设计系统仓库起点的机器可读文件。

## 来源边界

本目录不是对任一来源的复制，而是对结构和方法的抽象。具体视觉值、组件数量和实现框架应按项目调整。
