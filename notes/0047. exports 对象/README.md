# [0047. exports 对象](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0047.%20exports%20%E5%AF%B9%E8%B1%A1)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 什么是 exports 对象？](#3--什么是-exports-对象)
- [4. 🤔 exports 和 module.exports 有什么区别？](#4--exports-和-moduleexports-有什么区别)
  - [4.1. 关系说明](#41-关系说明)
  - [4.2. 关键区别](#42-关键区别)
  - [4.3. 直接赋值的区别](#43-直接赋值的区别)
  - [4.4. 混用的陷阱](#44-混用的陷阱)
- [5. 🤔 如何使用 exports 导出模块内容？](#5--如何使用-exports-导出模块内容)
  - [5.1. 导出多个属性和方法](#51-导出多个属性和方法)
  - [5.2. 导出对象](#52-导出对象)
  - [5.3. 简化写法](#53-简化写法)
- [6. 🤔 什么情况下不能使用 exports？](#6--什么情况下不能使用-exports)
  - [6.1. 场景一：导出单个函数](#61-场景一导出单个函数)
  - [6.2. 场景二：导出类](#62-场景二导出类)
  - [6.3. 场景三：导出单个值](#63-场景三导出单个值)
  - [6.4. 场景四：完全替换导出对象](#64-场景四完全替换导出对象)
  - [6.5. 记忆口诀](#65-记忆口诀)
- [7. 💻 demos.1 - 使用 exports 对象实现模块化编程](#7--demos1---使用-exports-对象实现模块化编程)
- [8. 🔗 引用](#8--引用)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- exports 对象的定义和作用
- exports 与 module.exports 的区别
- exports 的使用方法和注意事项

## 2. 🫧 评价

exports 是 CommonJS 模块系统中用于导出模块内容的便捷方式。

- exports 本质上是 module.exports 的引用，理解两者关系是关键
- 只能通过给 exports 添加属性来导出，不能直接赋值
- 需要导出单个值（如类、函数）时，必须使用 module.exports
- 在 ESM 模块中应使用 export 语法，exports 仅用于 CommonJS

## 3. 🤔 什么是 exports 对象？

exports 是 Node.js 在 CommonJS 模块系统中提供的一个全局对象，用于导出模块中的变量、函数、对象等内容。

```javascript
// exports 实际上是 module.exports 的引用
console.log(exports === module.exports) // ✅ true

// Node.js 模块包装器的简化版本
;(function (exports, require, module, __filename, __dirname) {
  // 模块代码实际上在这里执行
  // exports 是作为参数传入的
})
```

exports 的本质：

```javascript
// Node.js 内部的实现逻辑（简化版）
const module = {
  exports: {},
}
const exports = module.exports // exports 是 module.exports 的引用

// 最终导出的是 module.exports
return module.exports
```

## 4. 🤔 exports 和 module.exports 有什么区别？

### 4.1. 关系说明

```javascript
// 初始状态：exports 和 module.exports 指向同一个对象
console.log(exports === module.exports) // ✅ true

// 给 exports 添加属性
exports.name = 'Node.js'
exports.version = '20.0.0'

// module.exports 也会同步更新
console.log(module.exports) // ✅ { name: 'Node.js', version: '20.0.0' }
```

### 4.2. 关键区别

| 特性       | exports               | module.exports       |
| ---------- | --------------------- | -------------------- |
| 本质       | module.exports 的引用 | 真正被导出的对象     |
| 添加属性   | ✅ 支持               | ✅ 支持              |
| 直接赋值   | ❌ 无效               | ✅ 有效              |
| 导出优先级 | 低                    | 高                   |
| 使用场景   | 导出多个属性/方法     | 导出单个值或完全替换 |

### 4.3. 直接赋值的区别

```javascript
// ❌ 错误：直接给 exports 赋值会断开与 module.exports 的引用
exports = function () {
  console.log('Hello')
}
// 此时 exports 指向了新对象，但 module.exports 仍是原来的空对象
// 最终导出的是 module.exports，所以这个赋值无效

// ✅ 正确：使用 module.exports 直接赋值
module.exports = function () {
  console.log('Hello')
}
```

### 4.4. 混用的陷阱

```javascript
// ⚠️ 混用时的问题
exports.method1 = function () {}
exports.method2 = function () {}

// 这行代码会使上面的 exports 赋值失效
module.exports = {
  method3: function () {},
}

// 最终导出的只有 method3
```

## 5. 🤔 如何使用 exports 导出模块内容？

### 5.1. 导出多个属性和方法

```javascript
// math.js
exports.PI = 3.14159

exports.add = function (a, b) {
  return a + b
}

exports.subtract = function (a, b) {
  return a - b
}

exports.multiply = function (a, b) {
  return a * b
}
```

```javascript
// main.js
const math = require('./math.js')

console.log(math.PI) // ✅ 3.14159
console.log(math.add(2, 3)) // ✅ 5
console.log(math.subtract(5, 2)) // ✅ 3
console.log(math.multiply(3, 4)) // ✅ 12
```

### 5.2. 导出对象

```javascript
// config.js
exports.database = {
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
}

exports.server = {
  host: '0.0.0.0',
  port: 8080,
}
```

```javascript
// main.js
const config = require('./config.js')

console.log(config.database.host) // ✅ localhost
console.log(config.server.port) // ✅ 8080
```

### 5.3. 简化写法

```javascript
// utils.js
// 可以一次性添加多个属性
Object.assign(exports, {
  format: function (str) {
    return str.trim()
  },
  parse: function (str) {
    return JSON.parse(str)
  },
  stringify: function (obj) {
    return JSON.stringify(obj)
  },
})
```

## 6. 🤔 什么情况下不能使用 exports？

### 6.1. 场景一：导出单个函数

```javascript
// ❌ 错误：直接赋值给 exports 无效
exports = function () {
  console.log('Hello')
}

// ✅ 正确：使用 module.exports
module.exports = function () {
  console.log('Hello')
}
```

```javascript
// 使用
const sayHello = require('./hello.js')
sayHello() // ✅ Hello
```

### 6.2. 场景二：导出类

```javascript
// ❌ 错误
exports = class Person {
  constructor(name) {
    this.name = name
  }
}

// ✅ 正确
module.exports = class Person {
  constructor(name) {
    this.name = name
  }
}
```

```javascript
// 使用
const Person = require('./person.js')
const tom = new Person('Tom') // ✅ 正常工作
```

### 6.3. 场景三：导出单个值

```javascript
// ❌ 错误
exports = 'Hello World'
exports = 123
exports = [1, 2, 3]

// ✅ 正确
module.exports = 'Hello World'
module.exports = 123
module.exports = [1, 2, 3]
```

### 6.4. 场景四：完全替换导出对象

```javascript
// ❌ 错误：想要完全替换导出对象时不能用 exports
exports = {
  name: 'Node.js',
  version: '20.0.0',
  platform: 'server',
}

// ✅ 正确：使用 module.exports
module.exports = {
  name: 'Node.js',
  version: '20.0.0',
  platform: 'server',
}
```

### 6.5. 记忆口诀

```javascript
// ✅ 导出多个属性 → 用 exports
exports.prop1 = value1
exports.prop2 = value2

// ✅ 导出单个值 → 用 module.exports
module.exports = value
```

## 7. 💻 demos.1 - 使用 exports 对象实现模块化编程

::: code-group

```js [module.cjs]
// 求绝对值的方法 abs
exports.abs = function (number) {
  if (0 < number) {
    return number
  } else {
    return -number
  }
}
// 求圆面积的方法 circleArea
exports.circleArea = function (radius) {
  return radius * radius * Math.PI
}
```

```js [index.cjs]
// 加载 module.cjs 模块文件
const module = require('./module.cjs')
// 使用模块方法
console.log('abs(-273) = %d', module.abs(-273))
console.log('circleArea(3) = %d', module.circleArea(3))

// 上面代码中，通过使用 require() 导入了创建的 module.js 模块文件。运行 main.js 文件，结果如下：
// abs(-273) = 273
// circleArea(3) = 28.274333882308138
```

:::

## 8. 🔗 引用

- [Node.js 官方文档 - module.exports][1]
- [Node.js 官方文档 - exports][2]
- [Node.js 官方文档 - The module wrapper][3]

[1]: https://nodejs.org/api/modules.html#moduleexports
[2]: https://nodejs.org/api/modules.html#exports
[3]: https://nodejs.org/api/modules.html#the-module-wrapper
