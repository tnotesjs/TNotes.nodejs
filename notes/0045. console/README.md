# [0045. console](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0045.%20console)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. console 模块](#2-console-模块)
- [3. demos.1 - console 对象](#3-demos1---console-对象)
  - [3.1. `console.log()`、`console.info()`、`console.error()`、`console.warn()`](#31-consolelogconsoleinfoconsoleerrorconsolewarn)
  - [3.2. `console.assert()`](#32-consoleassert)
  - [3.3. `console.count()`、`console.countReset()`](#33-consolecountconsolecountreset)
  - [3.4. `console.time()`、`console.timeEnd()`](#34-consoletimeconsoletimeend)
  - [3.5. `console.table()`](#35-consoletable)
  - [3.6. `console.group()`、`console.groupEnd()`、`console.groupCollapsed()`](#36-consolegroupconsolegroupendconsolegroupcollapsed)
  - [3.7. `console.dir()`](#37-consoledir)
  - [3.8. 占位符 `%d`、`%s`、`%j`](#38-占位符-dsj)
- [4. 引用](#4-引用)

<!-- endregion:toc -->

## 1. 概述

- 了解 console 模块的基本用法

## 2. console 模块

- console：用于提供控制台标准输出。
- Node.js 中的 console 和传统 Web 中的 console 对象类似，可以参考 mdn docs console 文档了解详细用法：https://developer.mozilla.org/zh-CN/docs/Web/API/console

## 3. demos.1 - console 对象

### 3.1. `console.log()`、`console.info()`、`console.error()`、`console.warn()`

::: code-group

<<< ./demos/1/1.js [1.js]

:::

- 不同的消息类型，在 cmd 中打印出来看不出差异，但在浏览器端会展示不同的颜色提示。
- ![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-06-13-37-13.png)
- ![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-06-13-35-16.png)

### 3.2. `console.assert()`

::: code-group

<<< ./demos/1/2.js [2.js]

<<< ./demos/1/3.js [3.js]

<<< ./demos/1/4.js [4.js]

:::

- 如果第一个参数的值如果是 `false`，则将后续参数视作错误消息写入控制台。
- 如果断言（assertion）是 `true`，没有任何反应。
- 日常开发中使用频率很低，通常会优先想要 `console.log`，并自行控制打印逻辑。

### 3.3. `console.count()`、`console.countReset()`

::: code-group

<<< ./demos/1/5.js [5.js]

<<< ./demos/1/10.js [10.js]

:::

- `console.count()` 方法会记录调用 `count()` 的次数。
- `console.countReset()` 方法会重置计数器。

### 3.4. `console.time()`、`console.timeEnd()`

::: code-group

<<< ./demos/1/6.js [6.js]

:::

- `console.time()` 和 `console.timeEnd()` 是 JavaScript 中用于计算代码块执行时间的两个控制台方法。
  - `console.time(label)`：启动一个计时器，`label` 是计时器的唯一标识符，用于后续引用。
  - `console.timeEnd(label)`：停止计时器并输出从 `console.time(label)` 开始到当前的时间间隔，单位为毫秒。
- **注意事项**：
  - 每个计时器的 `label` 必须唯一。如果在第一个计时器未结束时重复使用相同的 `label`，可能会导致警告或错误。
  - 确保每个 `console.time()` 都有对应的 `console.timeEnd()`，否则计时器无法正确结束。
  - 避免在生产环境中过度使用这些方法，因为它们可能会影响性能并生成大量控制台输出。性能分析完成后，建议移除相关调用。

### 3.5. `console.table()`

::: code-group

<<< ./demos/1/7.js [7.js]

:::

- `console.table()` 方法用于在控制台中以表格形式打印对象或数组。
- 最终效果预览：
  - Node.js 环境：
    - ![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-06-14-00-36.png)
  - 浏览器环境：
    - ![图 3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-06-14-00-47.png)

### 3.6. `console.group()`、`console.groupEnd()`、`console.groupCollapsed()`

::: code-group

<<< ./demos/1/8.js [8.js]

<<< ./demos/1/9.js [9.js]

:::

- `console.group()` 和 `console.groupEnd()` 是 JavaScript 中用于在控制台中创建分组的方法，帮助组织和结构化日志信息，使输出更加清晰。
  - `console.group(label)`：开始一个新的日志分组，`label` 是可选的分组名称。所有在 `console.group()` 和 `console.groupEnd()` 之间的日志会被缩进，表明它们属于同一个分组。
  - `console.groupEnd()`：结束当前分组，返回到上一级分组或默认状态。
- `console.groupCollapsed()`
  - 与 `console.group()` 类似，但分组默认是折叠的，用户可以点击展开查看内容。
  - 不过在 Node.js 环境下效果和 `console.group()` 是一样的，没有折叠的交互。
- **注意事项**：
  - 确保每个 `console.group()` 都有对应的 `console.groupEnd()`，以避免分组混乱。
  - 这些方法主要用于调试和开发阶段，不应该出现在生产环境的正式代码中。发布前建议移除或注释掉相关调用。
- **最终效果预览**：
  - Node.js 环境：
    - ![图 4](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-06-14-05-29.png)
  - 浏览器环境：
    - ![图 5](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-06-14-06-10.png)
    - ![图 6](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-06-14-11-26.png)

### 3.7. `console.dir()`

::: code-group

<<< ./demos/1/11.js [11.js]

:::

- **`console.dir`**：用于打印复杂对象，并支持自定义选项。

| 特性         | `console.log`          | `console.dir`                     |
| ------------ | ---------------------- | --------------------------------- |
| **用途**     | 通用日志输出           | 专门用于输出对象的详细信息        |
| **输出格式** | 可能简化对象输出       | 以 JSON 格式逐层展开对象          |
| **支持配置** | 不支持额外选项         | 支持 `options` 参数（如 `depth`） |
| **适用场景** | 简单日志记录或快速调试 | 打印复杂对象结构时更合适          |

### 3.8. 占位符 `%d`、`%s`、`%j`

::: code-group

<<< ./demos/1/12.js [12.js]

:::

| 占位符 | 说明           |
| ------ | -------------- |
| `%d`   | 输出数字变量   |
| `%s`   | 输出字符串变量 |
| `%j`   | 输出 JSON 变量 |
| ……     | ……             |

- 占位符还有很多，比如 `%o`、`%O`、`%c` 等等，不过日常开发基本用不到占位符。

## 4. 引用

- https://developer.mozilla.org/zh-CN/docs/Web/API/console
