# [0048. module 对象](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0048.%20module%20%E5%AF%B9%E8%B1%A1)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 什么是 module 对象？](#3--什么是-module-对象)
- [4. 🤔 module 对象有哪些重要属性？](#4--module-对象有哪些重要属性)
  - [4.1. 属性列表](#41-属性列表)
  - [4.2. module.id](#42-moduleid)
  - [4.3. module.path](#43-modulepath)
  - [4.4. module.exports](#44-moduleexports)
  - [4.5. module.filename](#45-modulefilename)
  - [4.6. module.loaded](#46-moduleloaded)
  - [4.7. module.parent](#47-moduleparent)
  - [4.8. module.children](#48-modulechildren)
  - [4.9. module.paths](#49-modulepaths)
- [5. 🤔 如何使用 module.exports 导出模块？](#5--如何使用-moduleexports-导出模块)
  - [5.1. 导出对象](#51-导出对象)
  - [5.2. 导出函数](#52-导出函数)
  - [5.3. 导出类](#53-导出类)
  - [5.4. 导出单个值](#54-导出单个值)
  - [5.5. 动态导出](#55-动态导出)
  - [5.6. 逐步构建导出对象](#56-逐步构建导出对象)
- [6. 🤔 module.require() 和 require() 有什么区别？](#6--modulerequire-和-require-有什么区别)
  - [6.1. 基本概念](#61-基本概念)
  - [6.2. 实际使用](#62-实际使用)
  - [6.3. 使用场景](#63-使用场景)
  - [6.4. 建议](#64-建议)
- [7. 💻 demos.1 - 打印 module 对象](#7--demos1---打印-module-对象)
- [8. 💻 demos.2 - 使用 module 对象实现模块化编程](#8--demos2---使用-module-对象实现模块化编程)
- [9. 🔗 引用](#9--引用)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- module 对象的定义和作用
- module 对象的重要属性
- module.exports 的使用方法
- module 对象在模块系统中的作用

## 2. 🫧 评价

module 对象是 CommonJS 模块系统的核心，代表当前模块本身。

- module.exports 是模块真正导出的内容，exports 只是它的引用
- 通过 module 对象可以获取模块的元信息，如路径、加载状态等
- 理解 module.exports 和 exports 的关系是掌握 CommonJS 模块系统的关键
- module 对象在每个模块中都是独立的，不同模块的 module 对象互不影响

## 3. 🤔 什么是 module 对象？

module 对象是 Node.js 在 CommonJS 模块系统中为每个模块提供的一个对象，用于表示当前模块本身。

```javascript
// 每个 Node.js 模块都有一个 module 对象
console.log(typeof module) // ✅ object

// module 对象是模块作用域的变量，不是全局变量
console.log(global.module) // ✅ undefined
```

模块包装器中的 module：

```javascript
// Node.js 在执行模块代码前会将其包装在一个函数中
;(function (exports, require, module, __filename, __dirname) {
  // 你的模块代码实际在这里执行
  // module 作为参数传入
})
```

module 对象的核心作用：

```javascript
// module.exports 是模块的导出接口
module.exports = {
  name: 'MyModule',
  version: '1.0.0',
}

// exports 只是 module.exports 的引用
console.log(exports === module.exports) // ✅ true
```

## 4. 🤔 module 对象有哪些重要属性？

### 4.1. 属性列表

| 属性       | 类型           | 说明                                   |
| ---------- | -------------- | -------------------------------------- |
| `id`       | string         | 模块的唯一标识符，通常是模块的完整路径 |
| `path`     | string         | 模块所在目录的路径                     |
| `exports`  | object         | 模块导出的内容                         |
| `filename` | string         | 模块的完整文件名（含路径）             |
| `loaded`   | boolean        | 模块是否已加载完成                     |
| `parent`   | object \| null | 第一个引入该模块的模块对象             |
| `children` | array          | 该模块引入的所有子模块                 |
| `paths`    | array          | 模块查找路径列表                       |

### 4.2. module.id

```javascript
// main.js
console.log(module.id) // ✅ '.' (入口文件的 id 是 '.')

// other.js
console.log(module.id) // ✅ 完整的文件路径
// 例如：'C:\\Users\\project\\other.js'
```

### 4.3. module.path

```javascript
// C:\Users\project\src\utils.js
console.log(module.path)
// ✅ C:\Users\project\src
```

### 4.4. module.exports

```javascript
// 初始值是空对象
console.log(module.exports) // ✅ {}

// 可以给它赋值任何内容
module.exports = {
  name: 'Utils',
  version: '1.0.0',
}

module.exports = function () {
  console.log('Hello')
}

module.exports = class MyClass {}
```

### 4.5. module.filename

```javascript
// C:\Users\project\src\utils.js
console.log(module.filename)
// ✅ C:\Users\project\src\utils.js

// 与 __filename 相同
console.log(module.filename === __filename) // ✅ true
```

### 4.6. module.loaded

```javascript
// 模块代码执行期间
console.log(module.loaded) // ✅ false

// 模块加载完成后
setTimeout(() => {
  console.log(module.loaded) // ✅ true
}, 0)
```

### 4.7. module.parent

```javascript
// main.js
const utils = require('./utils.js')

// utils.js
console.log(module.parent) // ✅ main.js 的 module 对象
console.log(module.parent.filename) // ✅ main.js 的路径

// 入口文件没有 parent
// main.js
console.log(module.parent) // ✅ null
```

### 4.8. module.children

```javascript
// main.js
const utils = require('./utils.js')
const helpers = require('./helpers.js')

console.log(module.children.length) // ✅ 2
console.log(module.children[0].filename) // ✅ utils.js 的路径
console.log(module.children[1].filename) // ✅ helpers.js 的路径
```

### 4.9. module.paths

```javascript
// C:\Users\project\src\utils.js
console.log(module.paths)
// ✅ [
//   'C:\\Users\\project\\src\\node_modules',
//   'C:\\Users\\project\\node_modules',
//   'C:\\Users\\node_modules',
//   'C:\\node_modules'
// ]
```

模块查找顺序：

```javascript
// 当执行 require('lodash') 时
// Node.js 会按照 module.paths 中的路径顺序查找
// 1. C:\Users\project\src\node_modules\lodash
// 2. C:\Users\project\node_modules\lodash
// 3. C:\Users\node_modules\lodash
// 4. C:\node_modules\lodash
```

## 5. 🤔 如何使用 module.exports 导出模块？

### 5.1. 导出对象

```javascript
// config.js
module.exports = {
  host: 'localhost',
  port: 3000,
  timeout: 5000,
}
```

```javascript
// main.js
const config = require('./config.js')
console.log(config.host) // ✅ localhost
console.log(config.port) // ✅ 3000
```

### 5.2. 导出函数

```javascript
// greet.js
module.exports = function (name) {
  return `Hello, ${name}!`
}
```

```javascript
// main.js
const greet = require('./greet.js')
console.log(greet('World')) // ✅ Hello, World!
```

### 5.3. 导出类

```javascript
// person.js
module.exports = class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  introduce() {
    return `I'm ${this.name}, ${this.age} years old.`
  }
}
```

```javascript
// main.js
const Person = require('./person.js')
const tom = new Person('Tom', 20)
console.log(tom.introduce()) // ✅ I'm Tom, 20 years old.
```

### 5.4. 导出单个值

```javascript
// version.js
module.exports = '1.0.0'

// status.js
module.exports = true

// numbers.js
module.exports = [1, 2, 3, 4, 5]
```

### 5.5. 动态导出

```javascript
// math.js
const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) {
  module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
  }
} else {
  module.exports = {
    add: (a, b) => {
      console.log(`Adding ${a} + ${b}`)
      return a + b
    },
    subtract: (a, b) => {
      console.log(`Subtracting ${a} - ${b}`)
      return a - b
    },
  }
}
```

### 5.6. 逐步构建导出对象

```javascript
// utils.js
// 方式一：先赋值为空对象，再添加属性
module.exports = {}

module.exports.format = function (str) {
  return str.trim()
}

module.exports.parse = function (str) {
  return JSON.parse(str)
}

// 方式二：直接给 module.exports 添加属性
module.exports.validate = function (data) {
  return data !== null && data !== undefined
}
```

## 6. 🤔 module.require() 和 require() 有什么区别？

### 6.1. 基本概念

```javascript
// require() 是全局函数
console.log(typeof require) // ✅ function

// module.require() 是 module 对象的方法
console.log(typeof module.require) // ✅ function

// 两者功能相同
console.log(require === module.require) // ✅ true
```

### 6.2. 实际使用

```javascript
// 以下两种写法完全等价
const fs = require('fs')
const fs = module.require('fs')

// 通常使用 require()，因为更简洁
const path = require('path')
const http = require('http')
```

### 6.3. 使用场景

```javascript
// 在某些特殊情况下，module.require() 更明确
function loadModule(moduleName) {
  // 使用 module.require() 表明这是当前模块在加载其他模块
  return module.require(moduleName)
}

// 但实际开发中，直接使用 require() 即可
function loadModule(moduleName) {
  return require(moduleName)
}
```

### 6.4. 建议

```javascript
// ✅ 推荐：使用 require()
const lodash = require('lodash')

// ⚠️ 不推荐：使用 module.require()（虽然功能相同）
const lodash = module.require('lodash')
```

## 7. 💻 demos.1 - 打印 module 对象

::: code-group

```js [1.cjs]
console.log('module:', module)

// module: {
//   id: '.',
//   path: 'c:\\notes\\TNotes.nodejs\\notes\\0048. module 对象\\demos\\1',
//   exports: {},
//   filename: 'c:\\notes\\TNotes.nodejs\\notes\\0048. module 对象\\demos\\1\\1.cjs',
//   loaded: false,
//   children: [],
//   paths: [
//     'c:\\notes\\TNotes.nodejs\\notes\\0048. module 对象\\demos\\1\\node_modules',
//     'c:\\notes\\TNotes.nodejs\\notes\\0048. module 对象\\demos\\node_modules',
//     'c:\\notes\\TNotes.nodejs\\notes\\0048. module 对象\\node_modules',
//     'c:\\notes\\TNotes.nodejs\\notes\\node_modules',
//     'c:\\notes\\TNotes.nodejs\\node_modules',
//     'c:\\notes\\node_modules',
//     'c:\\node_modules'
//   ]
// }
```

:::

## 8. 💻 demos.2 - 使用 module 对象实现模块化编程

::: code-group

```js [module.cjs]
function Hello() {
  let name
  this.setName = function (thyName) {
    name = thyName
  }
  this.sayHello = function () {
    console.log(name + '，你好')
  }
}
module.exports = Hello
```

```js [index.cjs]
const Hello = require('./module.cjs')
hello = new Hello()
hello.setName('2025')
hello.sayHello()

// 2025，你好
```

:::

## 9. 🔗 引用

- [Node.js 官方文档 - The module object][1]
- [Node.js 官方文档 - module.exports][2]
- [Node.js 官方文档 - The module wrapper][3]

[1]: https://nodejs.org/api/modules.html#the-module-object
[2]: https://nodejs.org/api/modules.html#moduleexports
[3]: https://nodejs.org/api/modules.html#the-module-wrapper
