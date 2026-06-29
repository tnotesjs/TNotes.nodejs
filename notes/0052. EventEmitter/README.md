# [0052. EventEmitter](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. EventEmitter](#2-eventemitter)
- [3. demos.1 - `on`、`addListener`、`emit` 绑定事件和触发事件](#3-demos1---onaddlisteneremit-绑定事件和触发事件)
- [4. demos.2 - 多次 `emit` 触发多次事件](#4-demos2---多次-emit-触发多次事件)
- [5. demos.3 - 触发事件的时候可携带参数](#5-demos3---触发事件的时候可携带参数)
- [6. demos.4 - `once` 绑定的事件只会触发一次](#6-demos4---once-绑定的事件只会触发一次)
- [7. demos.5 - `off`、`removeListener` 解绑](#7-demos5---offremovelistener-解绑)
- [8. demos.6 - 多次 `on` 可绑定多个事件](#8-demos6---多次-on-可绑定多个事件)
- [9. demos.7 - `listenerCount` 获取监听器数量](#9-demos7---listenercount-获取监听器数量)
- [10. demos.8 - `removeAllListeners` 移除所有的监听器](#10-demos8---removealllisteners-移除所有的监听器)
- [11. demos.9 - `emit` 是同步的](#11-demos9---emit-是同步的)
- [12. demos.10 - `emit` 一个不存在的事件](#12-demos10---emit-一个不存在的事件)
- [13. demos.11 - 特殊的 `error` 事件](#13-demos11---特殊的-error-事件)
- [14. demos.12 - `setMaxListeners(limit)` 设置可以监听的最大回调函数数量](#14-demos12---setmaxlistenerslimit-设置可以监听的最大回调函数数量)
- [15. 引用](#15-引用)

<!-- endregion:toc -->

## 1. 概述

- 掌握 EventEmitter 模块的基本使用
- 认识事件驱动架构

## 2. EventEmitter

- **事件 `events`**
  - Node.js 是一个事件驱动的运行时环境，所有的任务都可以视为事件处理。
  - `events` 模块是 Node.js 中用于实现事件驱动的核心模块，而 `EventEmitter` 类则是该模块的核心。
  - **事件驱动**：
    - `EventEmitter` 是 Node.js 的核心模块之一，它提供了实现 **事件驱动架构** 的基本工具。在 Node.js 和基于 Node.js 的应用程序（例如 Electron）中，事件驱动架构是一个核心的设计理念。
  - **模块间解耦**：
    - 通过事件，不同的模块可以相互通信，而不需要直接引用对方。
  - **实现观察者模式**：
    - EventEmitter 提供了一种实现观察者模式的机制，观察者模式是一种设计模式，它定义了对象间的一种一对多的关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。
  - **非阻塞 I/O**：
    - 通过使用事件驱动的编程模型，我们可以非阻塞地处理 I/O，这可以让我们的应用程序在等待 I/O（如网络请求或文件读取）完成时做其他事情，从而提高应用程序的性能。
- **EventEmitter**
  - **定义**：`EventEmitter` 是 Node.js 中用于处理事件的核心类，允许对象订阅和触发自定义事件。
  - **作用**：它是 Node.js 事件驱动架构的基础，广泛应用于异步编程中。
  - **使用场景**：
    - 处理用户交互（如点击、键盘输入等）。
    - 自定义事件的发布与订阅。
    - 实现观察者模式。
  - **使用**：要使用 `EventEmitter`，首先需要引入 `events` 模块并创建实例：

```javascript
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
// 它提供了丰富的事件处理方法，所有可以添加监听事件的对象都继承自 EventEmitter。
```

- **个人评价**：
  - `EventEmitter` 在实际工作中使用相对较少，快速将 demos 给过一遍即可。
  - 重点在于认识“事件驱动架构”是一种什么样的编程体验，这对于我们学习那些基于 NodeJS 实现的框架而言，帮助是很大的。
    - 比如，Electron 就是基于 NodeJS 来实现的，在 Electron 中，用于实现 IPC 通信的模块 `ipcMain`、`ipcRenderer` 都是基于 `EventEmitter` 实现的，了解 `EventEmitter` 的一些常用 API，有助于我们快速上手 `ipcMain`、`ipcRenderer`。
  - 下面是 `EventEmitter` 模块相对常见一些的 API：

| 方法 | 描述 |
| --- | --- |
| `emitter.on(eventName, listener)` | 为指定事件注册一个监听器，监听器会在每次触发事件时执行。 |
| `emitter.emit(eventName[, ...args])` | 触发指定事件，并传递可选参数给监听器。 |
| `emitter.once(eventName, listener)` | 为指定事件注册一个单次监听器，监听器最多只会触发一次，触发后自动移除。 |
| `emitter.removeListener(eventName, listener)` | 移除指定事件的某个监听器。 |
| `emitter.removeAllListeners([eventName])` | 移除所有事件的所有监听器，如果指定了 `eventName`，则仅移除该事件的所有监听器。 |

## 3. demos.1 - `on`、`addListener`、`emit` 绑定事件和触发事件

::: code-group

<<< ./demos/1/1.cjs {js} [1.cjs]

:::

## 4. demos.2 - 多次 `emit` 触发多次事件

::: code-group

<<< ./demos/2/1.cjs {js} [1.cjs]

:::

## 5. demos.3 - 触发事件的时候可携带参数

::: code-group

<<< ./demos/3/1.cjs {js} [1.cjs]

:::

## 6. demos.4 - `once` 绑定的事件只会触发一次

::: code-group

<<< ./demos/4/1.cjs {js} [1.cjs]

:::

## 7. demos.5 - `off`、`removeListener` 解绑

::: code-group

<<< ./demos/5/1.cjs {js} [1.cjs]

:::

## 8. demos.6 - 多次 `on` 可绑定多个事件

::: code-group

<<< ./demos/6/1.cjs {js} [1.cjs]

<<< ./demos/6/2.cjs {js} [2.cjs]

<<< ./demos/6/3.cjs {js} [3.cjs]

:::

## 9. demos.7 - `listenerCount` 获取监听器数量

::: code-group

<<< ./demos/7/1.cjs {js} [1.cjs]

:::

## 10. demos.8 - `removeAllListeners` 移除所有的监听器

::: code-group

<<< ./demos/8/1.cjs {16,21 js} [1.cjs]

<<< ./demos/8/2.cjs {18 js} [2.cjs]

:::

## 11. demos.9 - `emit` 是同步的

::: code-group

<<< ./demos/9/1.cjs {js} [1.cjs]

:::

## 12. demos.10 - `emit` 一个不存在的事件

::: code-group

<<< ./demos/10/1.cjs {js} [1.cjs]

:::

## 13. demos.11 - 特殊的 `error` 事件

::: code-group

<<< ./demos/11/1.cjs {js} [1.cjs]

<<< ./demos/11/2.cjs {js} [2.cjs]

<<< ./demos/11/3.cjs {js} [3.cjs]

<<< ./demos/11/4.cjs {js} [4.cjs]

<<< ./demos/11/4.txt [4.txt]

:::

- **所有的 EventEmitter 实例默认都会注册一个 error 事件监听器**。
- 这意味着如果在 EventEmitter 实例中没有显式地注册 error 事件监听器，当触发了一个错误事件且没有对其进行处理时，Node.js 将会打印错误堆栈信息，并可能导致程序退出。
- 为了避免程序崩溃，我们可以使用 `try-catch` 包裹一下 `eIns.emit('error')`。这样可以保证即使出现错误，程序也能够继续执行，并采取适当的措施来处理错误情况。
- **如果不想使用 try-catch，同时又要避免程序崩溃，建议在使用 EventEmitter 的时候，始终为 error 事件注册一个监听器，以便能够捕获和处理错误。**
- 在 Node.js 中，很多模块的错误处理都是监听 `error` 事件的原因就在于它们都是继承自 `EventEmitter` 的，因此，当错误发生的时候，如果你想要定义相关的错误处理逻辑，也应该监听 `error` 事件才对。

## 14. demos.12 - `setMaxListeners(limit)` 设置可以监听的最大回调函数数量

::: code-group

<<< ./demos/12/1.cjs {js} [1.cjs]

<<< ./demos/12/2.cjs {js} [2.cjs]

<<< ./demos/12/3.cjs {js} [3.cjs]

:::

## 15. 引用

- https://www.runoob.com/nodejs/nodejs-event.html
  - 菜鸟教程 - Node.js EventEmitter
- https://nodejs.org/dist/latest-v18.x/docs/api/events.html#class-eventemitter
  - Node.js 官方文档 - EventEmitter
