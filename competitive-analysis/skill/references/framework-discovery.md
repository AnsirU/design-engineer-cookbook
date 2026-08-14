# Framework Discovery｜如何为不同产品类型选择成熟研究框架

## 原则

不要把“竞品分析框架”理解为一套固定模板。

不同产品类型已有不同的成熟研究体系。Skill 应先搜索当前领域的成熟方法，再决定分析维度。

## 来源优先级

1. 研究机构 / UX benchmark
2. 官方设计系统 / 服务设计手册
3. 大型科技公司设计团队公开方法
4. 高质量设计师 / 产品分析
5. 学术论文
6. 自建框架

## 搜索方式

组合搜索：
- `[产品类型] UX benchmark methodology`
- `[产品类型] UX research framework`
- `[产品类型] interaction design patterns`
- `[产品类型] usability benchmark`
- `[产品类型] product design framework`
- `[核心任务] UX best practices`
- `[产品类型] designer analysis`

## 已验证的示例方向

### 电商 / 零售
优先研究 Baymard 等大规模 UX benchmark。

Baymard 的方法本身就是：
- 基于大量可用性测试；
- 按 Homepage / Search / Product List / PDP / Checkout / Account 等模块拆解；
- 用 guideline 对竞品进行人工 benchmark；
- 同时保留 best / worst practice implementation examples。

因此电商竞品不适合直接套“功能 / 优点 / 缺点”三列表。

### B2B 电商
仍可参考 Baymard B2B benchmark，但要补：
- 复杂采购流程
- Account / permissions
- bulk action
- quote / approval
- repeat order
- team workflow

### 服务型产品
可参考 GOV.UK Service Manual：
- 谁是用户；
- 用户试图完成什么；
- 当前如何完成；
- 端到端服务触点；
- 用户需求与障碍；
- 不只看单个数字界面。

### Agent / AI workflow
调用 `agent-product-framework.md`。

### 其他产品
如果没有足够成熟的垂类框架：
1. 先找产品任务链；
2. 再找成熟模式；
3. 最后组合通用 UX 原则。

## 不能做的事

- 搜到一篇文章就直接当行业标准；
- 只因为框架有名就套用；
- 不考虑产品任务链；
- 把多个框架机械拼接成几十个维度；
- 让框架比研究问题更重要。

## 选择框架时给用户看到什么

不需要让用户审批所有理论。

只需在候选竞品确认时简洁说明：

> 这个品类已有 X 类成熟 benchmark，所以后续我会主要从 A / B / C / D 几个维度分析，而不是使用通用功能表。
