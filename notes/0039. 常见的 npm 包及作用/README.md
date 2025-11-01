# [0039. 常见的 npm 包及作用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 前端开发常用的 npm 包有哪些？](#3--前端开发常用的-npm-包有哪些)
  - [3.1. 前端框架](#31-前端框架)
  - [3.2. 样式框架](#32-样式框架)
  - [3.3. 静态站点生成器](#33-静态站点生成器)
- [4. 🤔 后端开发常用的 npm 包有哪些？](#4--后端开发常用的-npm-包有哪些)
  - [4.1. 后端框架](#41-后端框架)
  - [4.2. 数据库工具](#42-数据库工具)
  - [4.3. API 与通信工具](#43-api-与通信工具)
  - [4.4. 身份验证与安全](#44-身份验证与安全)
- [5. 🤔 全栈开发常用的 npm 包有哪些？](#5--全栈开发常用的-npm-包有哪些)
  - [5.1. 配置管理](#51-配置管理)
  - [5.2. 模板引擎](#52-模板引擎)
  - [5.3. 文件处理](#53-文件处理)
- [6. 🤔 工具类常用的 npm 包有哪些？](#6--工具类常用的-npm-包有哪些)
  - [6.1. 日期时间处理](#61-日期时间处理)
  - [6.2. 数据验证](#62-数据验证)
  - [6.3. 实用工具](#63-实用工具)
  - [6.4. 测试工具](#64-测试工具)
  - [6.5. 构建工具](#65-构建工具)
  - [6.6. CLI 工具](#66-cli-工具)
- [7. 🔗 引用](#7--引用)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- 前端框架与 UI 库
- 后端框架与 API 工具
- 数据库操作工具
- 常用工具类库
- 测试与构建工具

## 2. 🫧 评价

npm 包数量庞大，几乎涵盖了所有常见的开发场景。

- 本笔记仅介绍部分常用包，它们在各自领域具有代表性
- 遇到具体问题时，建议查阅最新资料，选择更适合的解决方案
- 软件生态更新迭代迅速，保持对新技术的关注很重要
- 应根据项目需求、社区活跃度和性能表现来选择合适的包
- 避免盲目依赖过时的方案，定期检查和更新项目依赖

## 3. 🤔 前端开发常用的 npm 包有哪些？

### 3.1. 前端框架

现代前端开发的基础框架：

| 包名 | 描述 | 适用场景 |
| --- | --- | --- |
| React | 使用虚拟 DOM 管理组件，只刷新变化部分 | 大型单页应用、组件化开发 |
| Vue | 集成多框架优点，更快更轻松的开发体验 | 中小型项目、渐进式应用 |
| Angular | Google 维护的企业级框架 | 大型企业应用、复杂业务场景 |
| Svelte | 无虚拟 DOM，编译时优化，性能更高 | 性能要求高的应用 |
| Preact | React 的轻量级替代品，体积小 | 性能敏感场景、移动端 |
| Alpine.js | 极简框架，通过 HTML 属性实现交互 | 小型项目、渐进增强 |

```javascript
// React 示例
import React from 'react'

function App() {
  return <div>Hello React</div>
}

// Vue 示例
import { createApp } from 'vue'

const app = createApp({
  data() {
    return { message: 'Hello Vue' }
  },
})
```

### 3.2. 样式框架

快速构建美观界面的 CSS 工具：

| 包名         | 描述                         | 特点                 |
| ------------ | ---------------------------- | -------------------- |
| Bootstrap    | 响应式、移动优先的 CSS 框架  | 组件丰富、文档完善   |
| Tailwind CSS | 原子化 CSS，通过类名控制样式 | 灵活度高、自定义性强 |
| UnoCSS       | 原子化 CSS 引擎，按需生成    | 性能优秀、配置灵活   |
| Bulma        | 基于 Flexbox 的现代 CSS 框架 | 简洁易用、响应式友好 |

```html
<!-- Tailwind CSS 示例 -->
<div class="flex items-center justify-center h-screen bg-gray-100">
  <p class="text-2xl font-bold text-blue-600">Hello Tailwind</p>
</div>

<!-- Bootstrap 示例 -->
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <button class="btn btn-primary">点击按钮</button>
    </div>
  </div>
</div>
```

### 3.3. 静态站点生成器

用于构建高性能静态网站：

| 包名      | 描述                             | 适用场景           |
| --------- | -------------------------------- | ------------------ |
| Next.js   | 支持 SSR 和静态生成的 React 框架 | 全栈应用、SEO 优化 |
| Gatsby    | 基于 React 的静态站点生成器      | 博客、文档站点     |
| Nuxt.js   | 基于 Vue 的全栈框架              | Vue 全栈应用       |
| VitePress | 基于 Vite 的静态站点生成器       | 技术文档、博客     |

## 4. 🤔 后端开发常用的 npm 包有哪些？

### 4.1. 后端框架

构建服务器端应用的核心框架：

| 包名    | 描述                         | 特点                   |
| ------- | ---------------------------- | ---------------------- |
| Express | 快速、极简的 Web 框架        | 生态丰富、易上手       |
| Koa     | Express 团队打造的下一代框架 | 代码简洁、异步友好     |
| Fastify | 高性能 Web 框架              | 速度快、低开销         |
| Hapi    | 企业级应用框架               | 功能完整、稳定可靠     |
| Nest.js | 基于 TypeScript 的框架       | 架构清晰、适合大型项目 |

```javascript
// Express 示例
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Express')
})

app.listen(3000)

// Koa 示例
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'Hello Koa'
})

app.listen(3000)
```

### 4.2. 数据库工具

简化数据库操作的 ORM 和查询构建器：

| 包名      | 描述                       | 支持数据库                 |
| --------- | -------------------------- | -------------------------- |
| Mongoose  | MongoDB 对象建模工具       | MongoDB                    |
| Sequelize | 基于 Promise 的 ORM        | PostgreSQL、MySQL、SQLite  |
| TypeORM   | TypeScript ORM，支持装饰器 | 多种 SQL 数据库            |
| Prisma    | 新一代 ORM，类型安全       | PostgreSQL、MySQL、MongoDB |
| Knex      | SQL 查询构建器             | 多种 SQL 数据库            |

```javascript
// Mongoose 示例
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
})

const User = mongoose.model('User', userSchema)

// Sequelize 示例
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
})
```

### 4.3. API 与通信工具

| 包名      | 描述                         | 适用场景               |
| --------- | ---------------------------- | ---------------------- |
| Axios     | 基于 Promise 的 HTTP 客户端  | API 请求、数据获取     |
| GraphQL   | API 查询语言，灵活的数据交互 | 复杂数据查询、减少请求 |
| Socket.io | 实时双向通信库               | 聊天应用、实时推送     |
| ws        | 轻量级 WebSocket 实现        | 高性能实时通信         |

```javascript
// Axios 示例
const axios = require('axios')

async function fetchData() {
  const response = await axios.get('https://api.example.com/data')
  console.log(response.data)
}

// Socket.io 示例
const io = require('socket.io')(3000)

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    console.log('收到消息：', data)
  })
})
```

### 4.4. 身份验证与安全

| 包名         | 描述            | 用途           |
| ------------ | --------------- | -------------- |
| bcrypt       | 密码散列处理库  | 用户密码加密   |
| jsonwebtoken | JWT 生成和验证  | 身份验证、授权 |
| passport     | 身份验证中间件  | 多种登录策略   |
| helmet       | HTTP 安全头设置 | 应用安全防护   |

```javascript
// bcrypt 示例
const bcrypt = require('bcrypt')

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  return hash
}

// jsonwebtoken 示例
const jwt = require('jsonwebtoken')

const token = jwt.sign({ userId: 123 }, 'secret-key', { expiresIn: '1h' })
```

## 5. 🤔 全栈开发常用的 npm 包有哪些？

### 5.1. 配置管理

| 包名      | 描述                       | 特点             |
| --------- | -------------------------- | ---------------- |
| dotenv    | 从 `.env` 文件加载环境变量 | 零依赖、简单易用 |
| config    | 灵活的配置文件管理         | 支持多环境配置   |
| cross-env | 跨平台设置环境变量         | 解决平台差异     |

```javascript
// dotenv 示例
require('dotenv').config()

console.log(process.env.DATABASE_URL)
console.log(process.env.API_KEY)

// config 示例
const config = require('config')

const dbConfig = config.get('database')
console.log(dbConfig.host)
```

### 5.2. 模板引擎

| 包名       | 描述                       | 语法特点             |
| ---------- | -------------------------- | -------------------- |
| EJS        | 简单的 JavaScript 模板引擎 | 支持 JavaScript 语法 |
| Pug        | 简洁的模板语法             | 缩进式语法           |
| Handlebars | Mustache 的扩展版本        | 逻辑简单、易读       |

```javascript
// EJS 示例
const ejs = require('ejs')

const html = ejs.render('<h1><%= title %></h1>', {
  title: 'Hello EJS',
})

// Pug 示例
const pug = require('pug')

const html = pug.render('h1= title', {
  title: 'Hello Pug',
})
```

### 5.3. 文件处理

| 包名     | 描述                     | 用途           |
| -------- | ------------------------ | -------------- |
| multer   | 处理 multipart/form-data | 文件上传       |
| sharp    | 高性能图像处理           | 图片裁剪、压缩 |
| fs-extra | 扩展的文件系统操作       | 文件复制、移动 |

```javascript
// multer 示例
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file)
  res.send('文件上传成功')
})

// sharp 示例
const sharp = require('sharp')

await sharp('input.jpg').resize(300, 200).toFile('output.jpg')
```

## 6. 🤔 工具类常用的 npm 包有哪些？

### 6.1. 日期时间处理

| 包名     | 描述             | 特点                      |
| -------- | ---------------- | ------------------------- |
| dayjs    | 轻量级日期库     | 体积小、API 友好          |
| date-fns | 模块化日期工具库 | 函数式、Tree-shaking 友好 |
| moment   | 经典日期库       | 功能全面（已停止更新）    |

```javascript
// dayjs 示例
const dayjs = require('dayjs')

console.log(dayjs().format('YYYY-MM-DD'))
console.log(dayjs().add(1, 'day').format('YYYY-MM-DD'))

// date-fns 示例
const { format, addDays } = require('date-fns')

console.log(format(new Date(), 'yyyy-MM-dd'))
console.log(format(addDays(new Date(), 1), 'yyyy-MM-dd'))
```

### 6.2. 数据验证

| 包名      | 描述             | 适用场景           |
| --------- | ---------------- | ------------------ |
| validator | 字符串验证和清理 | 表单验证、输入检查 |
| joi       | 强大的数据验证库 | API 参数验证       |
| yup       | 对象模式验证     | 表单验证、数据校验 |

```javascript
// validator 示例
const validator = require('validator')

console.log(validator.isEmail('test@example.com')) // true
console.log(validator.isURL('https://example.com')) // true

// joi 示例
const Joi = require('joi')

const schema = Joi.object({
  username: Joi.string().min(3).required(),
  age: Joi.number().min(18),
})

const result = schema.validate({ username: 'john', age: 25 })
```

### 6.3. 实用工具

| 包名   | 描述                     | 常用功能       |
| ------ | ------------------------ | -------------- |
| lodash | 强大的 JavaScript 工具库 | 数组、对象操作 |
| uuid   | 生成唯一标识符           | ID 生成        |
| nanoid | 轻量级唯一 ID 生成器     | 短 ID 生成     |
| chalk  | 终端字符串样式           | CLI 美化输出   |

```javascript
// lodash 示例
const _ = require('lodash')

const arr = [1, 2, 3, 4, 5]
console.log(_.chunk(arr, 2)) // [[1,2], [3,4], [5]]
console.log(_.debounce(() => console.log('搜索'), 300))

// uuid 示例
const { v4: uuidv4 } = require('uuid')

console.log(uuidv4()) // '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// chalk 示例
const chalk = require('chalk')

console.log(chalk.blue('蓝色文字'))
console.log(chalk.red.bold('红色加粗'))
```

### 6.4. 测试工具

| 包名      | 描述               | 特点             |
| --------- | ------------------ | ---------------- |
| Jest      | 功能强大的测试框架 | 零配置、快照测试 |
| Mocha     | 灵活的测试框架     | 支持多种断言库   |
| Chai      | BDD/TDD 断言库     | 语义化断言       |
| Supertest | HTTP 断言库        | API 测试         |

```javascript
// Jest 示例
test('加法测试', () => {
  expect(1 + 2).toBe(3)
})

// Mocha + Chai 示例
const { expect } = require('chai')

describe('数组测试', () => {
  it('应该包含指定元素', () => {
    expect([1, 2, 3]).to.include(2)
  })
})
```

### 6.5. 构建工具

| 包名    | 描述                   | 用途                 |
| ------- | ---------------------- | -------------------- |
| webpack | 模块打包工具           | 前端资源打包         |
| vite    | 新一代前端构建工具     | 快速开发、即时热更新 |
| rollup  | ES 模块打包器          | 库打包               |
| esbuild | 极速 JavaScript 打包器 | 快速构建             |

### 6.6. CLI 工具

| 包名      | 描述               | 用途         |
| --------- | ------------------ | ------------ |
| commander | 命令行工具开发框架 | CLI 参数解析 |
| inquirer  | 交互式命令行界面   | 用户输入收集 |
| ora       | 优雅的终端加载动画 | 进度提示     |

```javascript
// commander 示例
const { program } = require('commander')

program
  .option('-d, --debug', '启用调试模式')
  .option('-p, --port <number>', '指定端口号')

program.parse()

// inquirer 示例
const inquirer = require('inquirer')

const answers = await inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: '请输入您的姓名：',
  },
])
```

## 7. 🔗 引用

- [npm 官网][1]
- [React 官方文档][2]
- [Vue 官方文档][3]
- [Express 官方文档][4]
- [Node.js 最佳实践][5]

[1]: https://www.npmjs.com/
[2]: https://react.dev/
[3]: https://vuejs.org/
[4]: https://expressjs.com/
[5]: https://github.com/goldbergyoni/nodebestpractices
