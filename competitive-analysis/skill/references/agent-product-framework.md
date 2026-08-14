# Agent Product Analysis Framework

仅当研究对象是 Agent、AI Copilot、AI workflow、自动化执行型产品时使用。

## G1｜任务与领域对象

回答：Agent 在帮用户完成什么？

关注：
- 核心用户
- 工作目标
- Domain objects
- Task chain
- Outputs
- Completion criteria

## G2｜Agent 协作机制

统一使用四组：

### 1. 目标与上下文
- Intent
- Current project
- Selected object
- Files / assets
- Memory
- Rules
- Autonomy level

### 2. 规划与执行
- Plan
- Approval
- Tool / sub-agent
- Permissions
- Parallel execution

### 3. 过程监督
- Progress
- Activity
- Agent status
- Task Board
- Waiting / Needs Attention
- Intervention

### 4. 验证与恢复
- Diff
- Test
- Runtime evidence
- Review
- Checkpoint
- Rollback
- Retry
- Resume

## G3｜交互呈现

统一使用四阶段：

1. 任务发起
2. 执行协作
3. 结果审查
4. 持续与恢复

注意：
- G2 是机制；
- G3 是用户如何看到与控制这些机制；
- 页面结构不是第五个并列维度。

## Automation

从四个角度研究：
- 入口对象
- Trigger / schedule
- Long-running context
- Review / notification / recovery

如果目标产品还未进入长期自动化阶段，把它放在远期探索，不放 Baseline。
