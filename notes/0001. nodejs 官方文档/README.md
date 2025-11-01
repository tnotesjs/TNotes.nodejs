# [0001. nodejs 官方文档](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0001.%20nodejs%20%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 nodejs 官方文档包含哪些主要内容？](#3--nodejs-官方文档包含哪些主要内容)
  - [3.1. 头部菜单导航](#31-头部菜单导航)
    - [3.1.1. 左侧区域](#311-左侧区域)
    - [3.1.2. 右侧区域](#312-右侧区域)
  - [3.2. 首页代码示例区](#32-首页代码示例区)
- [4. 🤔 Learn（学习模块）都有哪些内容？](#4--learn学习模块都有哪些内容)
  - [4.1. Getting Started（快速上手）](#41-getting-started快速上手)
  - [4.2. Command Line（命令行）](#42-command-line命令行)
  - [4.3. HTTP](#43-http)
  - [4.4. Manipulating Files（文件操作）](#44-manipulating-files文件操作)
  - [4.5. Asynchronous Work（异步工作）](#45-asynchronous-work异步工作)
  - [4.6. TypeScript](#46-typescript)
  - [4.7. Modules（模块）](#47-modules模块)
  - [4.8. Diagnostics（诊断）](#48-diagnostics诊断)
  - [4.9. Test Runner（测试运行程序）](#49-test-runner测试运行程序)
- [5. 🤔 如何快速查找需要的 API 文档？](#5--如何快速查找需要的-api-文档)
  - [5.1. 方法一：使用侧边栏导航](#51-方法一使用侧边栏导航)
  - [5.2. 方法二：使用浏览器搜索](#52-方法二使用浏览器搜索)
  - [5.3. 方法三：使用 Google 搜索](#53-方法三使用-google-搜索)
  - [5.4. 方法四：版本特定 URL](#54-方法四版本特定-url)
- [6. 🤔 官方文档的版本如何选择？](#6--官方文档的版本如何选择)
  - [6.1. 版本分类](#61-版本分类)
  - [6.2. 查看版本信息](#62-查看版本信息)
  - [6.3. 选择建议](#63-选择建议)
- [7. 🤔 如何理解官方文档中的稳定性指标？](#7--如何理解官方文档中的稳定性指标)
  - [7.1. 稳定性级别](#71-稳定性级别)
  - [7.2. 实际示例](#72-实际示例)
  - [7.3. 查看稳定性标记](#73-查看稳定性标记)
  - [7.4. 开发建议](#74-开发建议)
- [8. 🔗 引用](#8--引用)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- nodejs 官方文档的主要内容和结构
- API 文档的快速查询方法
- 文档版本的选择建议
- 稳定性指标的含义

## 2. 🫧 评价

nodejs 官方文档是学习 Node.js 最权威、最准确的资料来源。

- 遇到技术疑问时，优先查阅官方文档而不是依赖二手资料
- 掌握官方文档的结构和查询方法，能大幅提升开发效率
- 关注 API 的稳定性指标，避免使用即将废弃的特性
- 建议优先阅读英文版文档，中文版更新可能存在延迟

## 3. 🤔 nodejs 官方文档包含哪些主要内容？

![nodejs 官网首页](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-11-01-13-19-43.png)

官方文档主要分为以下几个部分：

### 3.1. 头部菜单导航

#### 3.1.1. 左侧区域

- Learn（学习）：包含入门教程和学习资源
- About（关于）：Node.js 的简介、特性和技术架构
- Docs（文档）：核心文档入口，包含 API 参考和指南
- Download（下载）：各平台的安装包下载
- Blog（博客）：Node.js 官方博客和新闻
- Docs（文档）：核心文档入口，包含 API 参考和指南
- Contribute（贡献）：如何参与 Node.js 社区和代码贡献
- Certification（认证）：Node.js 认证项目

#### 3.1.2. 右侧区域

- Search（搜索框）：用于快速搜索文档
  - 已集成 AI 功能，有问题也可以直接在这里提问！
- Theme Switch（主题切换）：亮色/暗色模式切换
- Language Switch（语言切换）：英文/简体中文/... 等其它语言
- GitHub（GitHub 仓库） 链接

### 3.2. 首页代码示例区

官方首页提供了多个实用代码示例：

- Create an HTTP Server（创建 HTTP 服务器）
- Write Tests（编写测试）
- Read and Hash a File（读取和哈希文件）
- Streams Pipeline（流管道）
- Work with Threads（线程操作）

这些示例展示了 Node.js 的核心能力和常见使用场景。

## 4. 🤔 Learn（学习模块）都有哪些内容？

Learn 模块是官方文档中最适合入门学习的部分，内容涵盖了从基础到进阶的各个主题。

### 4.1. Getting Started（快速上手）

包含 Node.js 入门必备知识和基础概念。

| 英文标题 | 中文标题 | 备注 |
| --- | --- | --- |
| Introduction to Node.js | Node.js 介绍 | 了解 Node.js 是什么 |
| How much JavaScript do you need to know to use Node.js? | 使用 Node.js 需要了解多少 JavaScript？ | 前置知识要求 |
| Differences between Node.js and the Browser | Node.js 与浏览器的区别 | 运行环境差异 |
| The V8 JavaScript Engine | JavaScript V8 引擎 | Node.js 的核心引擎 |
| An introduction to the npm package manager | Npm 包管理器简介 | 包管理基础 |
| ECMAScript 2015 (ES6) and beyond | ECMAScript 2015 (ES6) 与未来 | 现代 JavaScript 语法 |
| Debugging Node.js | 调试 Node.js | 调试技巧和工具 |
| Fetching data with Node.js | 使用 Node.js 获取数据 | 网络请求相关 |
| WebSocket client with Node.js | 使用 Node.js 的 WebSocket 客户端 | 实时通信 |
| Node.js, the difference between development and production | Node.js 在开发与生产环境中的区别 | 环境配置差异 |
| Profiling Node.js Applications | 分析 Node.js 应用程序 | 性能优化 |
| Node.js with WebAssembly | 使用 WebAssembly 的 Node.js | 高性能计算 |
| Security Best Practices | 安全最佳实践 | 安全防护建议 |
| Introduction to Userland Migrations | Introduction to Userland Migrations | 版本升级指南 |

### 4.2. Command Line（命令行）

涵盖命令行操作和脚本执行相关内容。

| 英文标题 | 中文标题 | 备注 |
| --- | --- | --- |
| Run Node.js scripts from the command line | 从命令行运行 Node.js 脚本 | 脚本执行 |
| How to use the Node.js REPL | 如何使用 Node.js REPL | 交互式编程环境 |
| Output to the command line using Node.js | 使用 Node.js 向命令行输出 | 控制台输出 |
| Accept input from the command line in Node.js | 在 Node.js 中接受命令行输入 | 用户交互 |
| How to read environment variables from Node.js | 如何从 Node.js 中读取环境变量 | 环境配置 |

### 4.3. HTTP

专注于 HTTP 协议和网络通信。

| 英文标题 | 中文标题 | 备注 |
| --- | --- | --- |
| Anatomy of an HTTP Transaction | Anatomy of an HTTP Transaction | HTTP 请求响应流程 |

### 4.4. Manipulating Files（文件操作）

详细讲解文件系统操作的各个方面。

| 英文标题 | 中文标题 | 备注 |
| --- | --- | --- |
| Node.js file stats | Node.js 中的文件状态 | 文件元数据 |
| Node.js File Paths | Node.js 中的文件路径 | 路径处理 |
| Reading files with Node.js | 使用 Node.js 读取文件 | 文件读取 |
| Writing files with Node.js | 使用 Node.js 写入文件 | 文件写入 |
| Working with file descriptors in Node.js | 在 Node.js 中使用文件描述符 | 底层文件操作 |
| Working with folders in Node.js | 在 Node.js 中处理文件夹 | 目录操作 |
| How to work with Different Filesystems | 如何使用不同的文件系统 | 跨平台文件系统 |

### 4.5. Asynchronous Work（异步工作）

深入讲解 Node.js 的异步编程模型。

| 英文标题 | 中文标题 | 备注 |
| --- | --- | --- |
| JavaScript Asynchronous Programming and Callbacks | JavaScript 中的异步编程与回调 | 回调函数 |
| Asynchronous flow control | 异步流控制 | 异步执行顺序 |
| Discover Promises in Node.js | Discover Promises in Node.js | Promise 使用 |
| Discover JavaScript Timers | 了解 JavaScript 定时器 | 定时任务 |
| Overview of Blocking vs Non-Blocking | 概述：阻塞与非阻塞 | 执行模式对比 |
| The Node.js Event Loop | Node.js 事件循环 | 异步执行机制 |
| The Node.js Event Emitter | Node.js 事件发射器 | 事件驱动模型 |
| Understanding process.nextTick() | 掌握 process.nextTick() | 微任务队列 |
| Understanding setImmediate() | 掌握 setImmediate() | 宏任务队列 |
| Don't Block the Event Loop | 请勿阻塞事件循环 | 性能优化建议 |

### 4.6. TypeScript

介绍如何在 Node.js 中使用 TypeScript。

| 英文标题 | 中文标题 | 备注 |
| --- | --- | --- |
| Introduction to TypeScript | TypeScript 简介 | TypeScript 基础 |
| Running TypeScript Natively | 以原生方式运行 TypeScript | 直接执行 TS 代码 |
| Running TypeScript code using transpilation | 使用转译技术运行 TypeScript 代码 | 编译后执行 |
| Running TypeScript with a runner | 使用运行程序运行 TypeScript | 使用工具执行 |
| Publishing a TypeScript package | 发布一个 TypeScript 包 | 包发布流程 |

### 4.7. Modules（模块）

涵盖模块系统和包管理相关内容。

| 英文标题 | 中文标题 | 备注 |
| --- | --- | --- |
| How to use streams | 如何使用流 | 流式处理 |
| Backpressuring in Streams | 流处理中的反压机制 | 流量控制 |
| Publishing a package | 发布包 | npm 包发布 |
| How to publish a Node-API package | 如何发布一个 Node-API 包 | 原生模块发布 |
| ABI Stability | ABI 稳定性 | 二进制接口兼容性 |

### 4.8. Diagnostics（诊断）

帮助开发者诊断和解决各类问题。

| 英文标题         | 中文标题 | 备注           |
| ---------------- | -------- | -------------- |
| User Journey     | 用户旅程 | 问题排查流程   |
| Memory           | 内存     | 内存问题诊断   |
| Live Debugging   | 实时调试 | 在线调试技术   |
| Poor Performance | 性能分析 | 性能问题排查   |
| Flame Graphs     | 火焰图   | 性能可视化分析 |

### 4.9. Test Runner（测试运行程序）

介绍 Node.js 内置的测试工具。

| 英文标题 | 中文标题 | 备注 |
| --- | --- | --- |
| Discovering Node.js's test runner | 了解 Node.js 测试运行程序 | 内置测试工具 |
| Using Node.js's test runner | 使用 Node.js 测试运行程序 | 编写和运行测试 |
| Mocking in tests | 在测试中进行模拟 | Mock 技术 |
| Collecting code coverage in Node.js | 在 Node.js 中收集代码覆盖率 | 测试覆盖率统计 |

## 5. 🤔 如何快速查找需要的 API 文档？

### 5.1. 方法一：使用侧边栏导航

1. 进入 [API 文档页面][3]
2. 左侧导航栏按字母顺序列出所有模块
3. 点击对应模块名称跳转

```javascript
// 例如：查找 fs.readFile 的用法
// 1. 点击左侧 "File system" 或 "fs"
// 2. 页面内搜索 "readFile"
// 3. 查看方法签名和示例代码
```

### 5.2. 方法二：使用浏览器搜索

在文档页面使用 `Ctrl + F`（Windows）或 `Cmd + F`（Mac）：

```javascript
// 搜索关键词示例：
// - "fs.readFile"
// - "EventEmitter"
// - "process.env"
```

### 5.3. 方法三：使用 Google 搜索

```text
nodejs fs readFile
nodejs EventEmitter
nodejs process.argv
```

### 5.4. 方法四：版本特定 URL

直接访问特定版本的 API 文档：

```text
https://nodejs.org/docs/latest-v20.x/api/fs.html
https://nodejs.org/docs/latest-v18.x/api/fs.html
```

## 6. 🤔 官方文档的版本如何选择？

### 6.1. 版本分类

| 版本类型    | 说明         | 推荐场景               |
| ----------- | ------------ | ---------------------- |
| Current     | 最新功能版本 | 学习新特性、实验性项目 |
| LTS         | 长期支持版本 | 生产环境、企业项目     |
| Maintenance | 维护模式     | 遗留项目               |

### 6.2. 查看版本信息

```bash
# 查看本地 Node.js 版本
node --version
# 或
node -v
```

### 6.3. 选择建议

生产环境：

```javascript
// ✅ 使用 LTS 版本对应的文档
// 例如：Node.js 18.x LTS
// 文档地址：https://nodejs.org/docs/latest-v18.x/api/
```

学习阶段：

```javascript
// ✅ 可以使用 Current 版本文档
// 文档地址：https://nodejs.org/api/
```

注意事项：

```javascript
// ⚠️ 不同版本的 API 可能存在差异
// 示例：fs.promises 在 Node.js 10+ 才稳定
const fs = require('fs').promises // Node.js 10+

// ⚠️ 某些旧版本的特性可能已废弃
// 查看文档时注意 Stability 标记
```

## 7. 🤔 如何理解官方文档中的稳定性指标？

每个 API 都有稳定性级别标记，位于文档顶部：

### 7.1. 稳定性级别

| 级别 | 标识         | 说明   | 建议                   |
| ---- | ------------ | ------ | ---------------------- |
| 0    | Deprecated   | 已废弃 | 不要使用，寻找替代方案 |
| 1    | Experimental | 实验性 | 谨慎使用，可能变更     |
| 2    | Stable       | 稳定   | 可以安全使用           |
| 3    | Legacy       | 遗留   | 保持兼容但不推荐       |

### 7.2. 实际示例

```javascript
// ❌ Stability: 0 - Deprecated
// domain 模块已废弃
const domain = require('domain') // 不要使用

// ⚠️ Stability: 1 - Experimental
// Worker Threads 在早期版本是实验性的
const { Worker } = require('worker_threads') // 注意版本兼容性

// ✅ Stability: 2 - Stable
// fs 模块是稳定的
const fs = require('fs') // 可以放心使用
```

### 7.3. 查看稳定性标记

1. 打开任意 API 文档页面
2. 查看页面顶部的彩色标签
3. 阅读稳定性说明

```javascript
// 稳定性标记示例
/*
Stability: 2 - Stable

The fs module enables interacting with the file system
in a way modeled on standard POSIX functions.
*/
```

### 7.4. 开发建议

```javascript
// ✅ 生产环境只使用 Stable API
const fs = require('fs')
const path = require('path')

// ⚠️ 避免使用 Deprecated API
// 错误示例：
const domain = require('domain') // ❌ 已废弃

// ✅ 正确做法：使用其他错误处理方式
try {
  // 业务代码
} catch (error) {
  console.error(error)
}

// ⚠️ Experimental API 需要评估风险
// 如果使用，需要：
// 1. 充分测试
// 2. 准备好迁移方案
// 3. 关注版本更新
```

## 8. 🔗 引用

- [Node.js 官网][1]
- [Node.js 官网（简体中文）][2]
- [Node.js API 文档][3]
- [Node.js Guides][4]
- [Node.js 发布计划][5]

[1]: https://nodejs.org/en
[2]: https://nodejs.org/zh-cn
[3]: https://nodejs.org/api/
[4]: https://nodejs.org/en/docs/guides/
[5]: https://github.com/nodejs/release#release-schedule
