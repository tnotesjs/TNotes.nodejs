# [0103. global 对象详解](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0103.%20global%20%E5%AF%B9%E8%B1%A1%E8%AF%A6%E8%A7%A3)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 什么是 global 对象？](#3--什么是-global-对象)
  - [3.1. 定义](#31-定义)
  - [3.2. 特点](#32-特点)
  - [3.3. 作用](#33-作用)
- [4. 🤔 global 对象有哪些常用属性和方法？](#4--global-对象有哪些常用属性和方法)
  - [4.1. 进程相关](#41-进程相关)
  - [4.2. 定时器相关](#42-定时器相关)
  - [4.3. 控制台和 Buffer](#43-控制台和-buffer)
  - [4.4. 模块相关（非 global 属性）](#44-模块相关非-global-属性)
- [5. 🤔 如何在 global 对象上添加全局变量？](#5--如何在-global-对象上添加全局变量)
  - [5.1. 添加方式](#51-添加方式)
  - [5.2. 访问方式](#52-访问方式)
- [6. 🤔 global 对象与浏览器中的 window 对象有什么区别？](#6--global-对象与浏览器中的-window-对象有什么区别)
  - [6.1. 环境差异](#61-环境差异)
  - [6.2. this 指向差异](#62-this-指向差异)
  - [6.3. 统一的 globalThis](#63-统一的-globalthis)
- [7. 🤔 为什么不推荐在 global 上添加属性？](#7--为什么不推荐在-global-上添加属性)
  - [7.1. 主要问题](#71-主要问题)
  - [7.2. 推荐的替代方案](#72-推荐的替代方案)
  - [7.3. 少数合理的使用场景](#73-少数合理的使用场景)
- [8. 💻 demos.1 - global 常用属性](#8--demos1---global-常用属性)
- [9. 💻 demos.2 - 在 global 上添加全局变量](#9--demos2---在-global-上添加全局变量)
- [10. 💻 demos.3 - globalThis 统一全局对象](#10--demos3---globalthis-统一全局对象)
- [11. 🔗 引用](#11--引用)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- global 对象的定义和作用
- global 对象的常用属性和方法
- global 与 window 的区别
- globalThis 的使用
- 全局变量的注意事项

## 2. 🫧 评价

global 是 Node.js 中的全局对象，类似于浏览器中的 window 对象。

- global 对象上的属性和方法可以在任何地方直接访问，无需引入
- 虽然可以在 global 上添加属性，但不推荐这样做，会污染全局命名空间
- 使用 globalThis 可以编写跨平台的代码，同时兼容 Node.js 和浏览器
- 实际开发中应该尽量使用模块化的方式组织代码，避免依赖全局变量

## 3. 🤔 什么是 global 对象？

`global` 是 Node.js 中的全局对象，它在所有模块中都可以访问。

### 3.1. 定义

- `global` 对象是 Node.js 运行时的顶层对象
- 所有全局变量都是 `global` 对象的属性
- 类似于浏览器环境中的 `window` 对象

### 3.2. 特点

```javascript
// 这些都是 global 对象的属性
console.log(global.console === console) // true
console.log(global.setTimeout === setTimeout) // true
console.log(global.Buffer === Buffer) // true
```

### 3.3. 作用

- 提供全局可访问的变量和函数
- 存储进程相关信息
- 提供定时器、控制台等基础功能

## 4. 🤔 global 对象有哪些常用属性和方法？

### 4.1. 进程相关

| 属性                | 说明                                             |
| ------------------- | ------------------------------------------------ |
| `global.process`    | 当前 Node.js 进程对象                            |
| `global.__filename` | 当前执行文件的绝对路径（模块作用域变量）         |
| `global.__dirname`  | 当前执行文件所在目录的绝对路径（模块作用域变量） |

⚠️ 注意：`__filename` 和 `__dirname` 实际上不是 `global` 的属性，而是每个模块的局部变量。

### 4.2. 定时器相关

| 方法                      | 说明                         |
| ------------------------- | ---------------------------- |
| `global.setTimeout()`     | 延迟执行函数                 |
| `global.clearTimeout()`   | 清除延迟定时器               |
| `global.setInterval()`    | 周期性执行函数               |
| `global.clearInterval()`  | 清除周期定时器               |
| `global.setImmediate()`   | 在当前事件循环结束后立即执行 |
| `global.clearImmediate()` | 清除 immediate 定时器        |

### 4.3. 控制台和 Buffer

| 属性             | 说明                     |
| ---------------- | ------------------------ |
| `global.console` | 控制台对象，用于输出日志 |
| `global.Buffer`  | 用于处理二进制数据的类   |

### 4.4. 模块相关（非 global 属性）

```javascript
// ❌ 这些不是 global 的属性
console.log(global.exports) // undefined
console.log(global.require) // undefined
console.log(global.module) // undefined

// ✅ 它们是模块作用域的变量
console.log(typeof exports) // 'object'
console.log(typeof require) // 'function'
console.log(typeof module) // 'object'
```

## 5. 🤔 如何在 global 对象上添加全局变量？

可以直接在 `global` 对象上添加属性，使其在所有模块中可访问。

### 5.1. 添加方式

```javascript
// 方式一：直接赋值
global.myGlobalVar = 'Hello Global'

// 方式二：使用属性描述符
Object.defineProperty(global, 'APP_CONFIG', {
  value: { port: 3000 },
  writable: false,
  configurable: false,
})
```

### 5.2. 访问方式

```javascript
// 在任何模块中都可以直接访问
console.log(myGlobalVar) // 'Hello Global'
console.log(global.myGlobalVar) // 'Hello Global'
console.log(APP_CONFIG) // { port: 3000 }
```

⚠️ 警告：不推荐这样做，原因见后文。

## 6. 🤔 global 对象与浏览器中的 window 对象有什么区别？

### 6.1. 环境差异

| 特性      | Node.js (global)              | 浏览器 (window)              |
| --------- | ----------------------------- | ---------------------------- |
| 顶层对象  | `global`                      | `window`                     |
| this 指向 | 模块内 `this` 不指向 `global` | 全局 `this` 指向 `window`    |
| DOM API   | 无                            | 有（document、navigator 等） |
| BOM API   | 无                            | 有（location、history 等）   |
| 模块系统  | CommonJS/ES Module            | ES Module（较新）            |
| Buffer    | 有                            | 无（使用 ArrayBuffer）       |
| process   | 有                            | 无                           |

### 6.2. this 指向差异

::: code-group

```javascript [Node.js]
// 模块顶层的 this 不指向 global
console.log(this === global) // false
console.log(this === exports) // true

// 函数中的 this
function test() {
  console.log(this === global) // true（非严格模式）
}
test()
```

```javascript [浏览器]
// 全局 this 指向 window
console.log(this === window) // true

// 函数中的 this
function test() {
  console.log(this === window) // true（非严格模式）
}
test()
```

:::

### 6.3. 统一的 globalThis

为了解决跨环境的差异，ES2020 引入了 `globalThis`：

```javascript
// 在 Node.js 中
console.log(globalThis === global) // true

// 在浏览器中
console.log(globalThis === window) // true

// 跨平台代码
const root = globalThis
root.myVar = 'works everywhere'
```

## 7. 🤔 为什么不推荐在 global 上添加属性？

### 7.1. 主要问题

1. 污染全局命名空间

```javascript
// ❌ 不好的做法
global.config = { port: 3000 }
global.userList = []
global.isDebug = true

// 可能与其他模块冲突
// 难以追踪变量来源
```

2. 难以维护和测试

```javascript
// ❌ 依赖全局变量的代码难以测试
function getPort() {
  return global.config.port // 紧耦合
}

// ✅ 使用参数传递
function getPort(config) {
  return config.port // 松耦合
}
```

3. 破坏模块的独立性

```javascript
// ❌ 模块间通过全局变量通信
// moduleA.js
global.sharedData = { value: 100 }

// moduleB.js
console.log(global.sharedData.value) // 隐式依赖
```

### 7.2. 推荐的替代方案

1. 使用模块导出

::: code-group

```javascript [config.js]
// ✅ 通过模块导出
module.exports = {
  port: 3000,
  host: 'localhost',
  isDebug: true,
}
```

```javascript [app.js]
// ✅ 显式导入
const config = require('./config')
console.log(config.port)
```

:::

2. 使用单例模式

```javascript
// appContext.js
class AppContext {
  constructor() {
    if (AppContext.instance) {
      return AppContext.instance
    }
    this.data = {}
    AppContext.instance = this
  }

  set(key, value) {
    this.data[key] = value
  }

  get(key) {
    return this.data[key]
  }
}

module.exports = new AppContext()
```

3. 使用依赖注入

```javascript
// ✅ 依赖注入
class UserService {
  constructor(config) {
    this.config = config
  }

  getPort() {
    return this.config.port
  }
}

const config = { port: 3000 }
const userService = new UserService(config)
```

### 7.3. 少数合理的使用场景

```javascript
// 调试辅助工具（仅开发环境）
if (process.env.NODE_ENV === 'development') {
  global.debug = require('debug')
}

// 性能监控全局钩子
global.performanceMonitor = {
  start: (name) => console.time(name),
  end: (name) => console.timeEnd(name),
}
```

## 8. 💻 demos.1 - global 常用属性

::: code-group

<<< ./demos/1/1.cjs {js}

<<< ./demos/1/2.cjs {js}

<<< ./demos/1/3.cjs {js}

:::

## 9. 💻 demos.2 - 在 global 上添加全局变量

::: code-group

```javascript [moduleA.js]
// ⚠️ 不推荐：在 global 上添加全局变量
global.appConfig = {
  name: 'My App',
  version: '1.0.0',
  port: 3000,
}

global.userCount = 0

global.incrementUserCount = function () {
  global.userCount++
}

console.log('[moduleA] 已添加全局变量')
```

```javascript [moduleB.js]
// 在另一个模块中访问全局变量
require('./moduleA')

console.log('[moduleB] 访问全局变量：')
console.log('应用名称：', appConfig.name)
console.log('应用版本：', appConfig.version)
console.log('用户数量：', userCount)

incrementUserCount()
incrementUserCount()
console.log('用户数量（增加后）：', userCount)
```

```javascript [better-approach.js]
// ✅ 推荐：使用模块导出
// config.js
const config = {
  name: 'My App',
  version: '1.0.0',
  port: 3000,
}

module.exports = config

// 使用时
// const config = require('./config');
// console.log(config.name);
```

:::

## 10. 💻 demos.3 - globalThis 统一全局对象

::: code-group

```javascript [1-globalThis.js]
// globalThis 在不同环境中都指向全局对象
console.log('=== globalThis 测试 ===')

// Node.js 中
console.log('globalThis === global：', globalThis === global)

// 跨平台的全局变量设置
globalThis.myAppName = 'Universal App'

// 在 Node.js 和浏览器中都能访问
console.log('应用名称：', globalThis.myAppName)
console.log('直接访问：', myAppName)
```

```javascript [2-cross-platform.js]
// 编写跨平台代码
function getGlobalObject() {
  // ES2020 之前的兼容写法
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof global !== 'undefined') return global
  if (typeof window !== 'undefined') return window
  if (typeof self !== 'undefined') return self
  throw new Error('无法找到全局对象')
}

const root = getGlobalObject()
console.log('全局对象：', root)

// ES2020+ 直接使用 globalThis
console.log('使用 globalThis：', globalThis)
```

```javascript [3-polyfill.js]
// globalThis 的 polyfill（兼容旧版本）
if (typeof globalThis === 'undefined') {
  // 在旧版本 Node.js 中添加 globalThis
  if (typeof global !== 'undefined') {
    global.globalThis = global
  } else if (typeof window !== 'undefined') {
    window.globalThis = window
  } else if (typeof self !== 'undefined') {
    self.globalThis = self
  }
}

console.log('globalThis 已就绪')
console.log(globalThis)
```

:::

## 11. 🔗 引用

- [Node.js 官方文档 - Global Objects][1]
- [MDN - globalThis][2]
- [Node.js 官方文档 - Globals][3]

[1]: https://nodejs.org/api/globals.html
[2]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis
[3]: https://nodejs.org/api/globals.html#globals_global_objects
