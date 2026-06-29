# [0044. filename 和 dirname](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0044.%20filename%20%E5%92%8C%20dirname)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. `__filename` 和 `__dirname`](#2-__filename-和-__dirname)
- [3. demos.1 - 在 CMD 环境中获取 `__filename` 和 `__dirname`](#3-demos1---在-cmd-环境中获取-__filename-和-__dirname)
- [4. demos.2 - 在 ESM 环境中获取 `__filename` 和 `__dirname`](#4-demos2---在-esm-环境中获取-__filename-和-__dirname)
- [5. demos.3 - `__filename` 和 `__dirname` 实际上并非全局变量](#5-demos3---__filename-和-__dirname-实际上并非全局变量)
- [6. 引用](#6-引用)

<!-- endregion:toc -->

## 1. 概述

- 了解两个全局变量 `__filename` 和 `__dirname` 的基本使用
- 掌握在两种不同的模块化机制 CMD 和 ESM 中如何获取 `__filename` 和 `__dirname`

## 2. `__filename` 和 `__dirname`

- `__filename`：表示当前正在执行的脚本的文件名，包括文件所在位置的绝对路径，但该路径和命令行参数所指定的文件名不一定相同。如果在模块中，则返回的值是模块文件的路径。
- `__dirname`：表示当前执行的脚本所在的目录。
- 注意：
  - `__filename` 和 `__dirname` 实际上并非全局变量，而是模块作用域下的变量，是 NodeJS 在编译模块的时候注入的两个参数。
  - 若想要了解 `__filename` 和 `__dirname` 的更多信息，比如它是怎么来的，为什么可以像全局变量一样在模块中直接访问到它，可查阅 [Node.js 文档 - The module wrapper 模块包装器](https://nodejs.org/api/modules.html#the-module-wrapper)。

```js
;(function (exports, require, module, __filename, __dirname) {
  // Module code actually lives in here
})
```

## 3. demos.1 - 在 CMD 环境中获取 `__filename` 和 `__dirname`

::: code-group

<<< ./demos/1/1.cjs {js} [1.cjs]

:::

## 4. demos.2 - 在 ESM 环境中获取 `__filename` 和 `__dirname`

::: code-group

<<< ./demos/2/1.mjs {js} [1.mjs]

:::

- **在 ESM（ECMAScript Modules）环境中，`__filename` 和 `__dirname` 这两个在 CommonJS 中常用的全局变量并不直接可用**。但可以通过以下方式来获取等效的功能：
  - step1. **使用 `import.meta.url` 获取当前模块的 URL**
    - `import.meta.url` 提供了当前模块的完整 URL，可以基于它来计算文件路径信息。
  - step2. **结合 `fileURLToPath` 和 `dirname` 函数转换为传统路径格式**
    - 使用 `url.fileURLToPath()` 将 URL 转换为操作系统兼容的路径字符串。
    - 使用 `path.dirname()` 从文件路径中提取目录部分。
- 这种方法也是 Node.js 官方文档推荐的在 ESM 中替代 `__filename` 和 `__dirname` 的标准做法。
  - ![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-11-17-05-41.png)
- 利用 nodejs 官方提供的 AI 搜索：`fileURLToPath(import.meta.url)`，也能快速了解到该写法的相关介绍说明。
  - ![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-11-17-06-39.png)

## 5. demos.3 - `__filename` 和 `__dirname` 实际上并非全局变量

::: code-group

<<< ./demos/3/1.cjs {js} [1.cjs]

:::

- Node.js 在编译模块时，会将这些变量作为局部变量注入到模块作用域中，这类似于在模块顶部声明了 `const __filename = ...` 和 `const __dirname = ...`。
- 因此，虽然我们在代码中可以直接使用 `__dirname` 和 `__filename`，但它们实际上是模块作用域的局部变量，而非全局变量。
- 这也是为什么 `global.__dirname` 和 `global.__filename` 都返回 `undefined` 的原因。
- 由于写起来感觉像是一个全局变量，直接写 `__dirname` 和 `__filename` 就可以访问了，因此也常将其称作是“全局变量”。

## 6. 引用

- https://nodejs.org/api/modules.html#the-module-wrapper
  - The module wrapper 模块包装器
