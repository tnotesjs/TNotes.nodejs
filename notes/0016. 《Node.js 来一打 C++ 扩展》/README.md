# [0016. 《Node.js 来一打 C++ 扩展》](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0016.%20%E3%80%8ANode.js%20%E6%9D%A5%E4%B8%80%E6%89%93%20C%2B%2B%20%E6%89%A9%E5%B1%95%E3%80%8B)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 豆瓣评分是多少？](#3--豆瓣评分是多少)
- [4. 🤔 本书作者是？](#4--本书作者是)
  - [4.1. 掘进小册](#41-掘进小册)
- [5. 🤔 书中都介绍了哪些内容？](#5--书中都介绍了哪些内容)
  - [5.1. 内容简介](#51-内容简介)
  - [5.2. 目录大纲](#52-目录大纲)
- [6. 🔗 引用](#6--引用)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- 《Node.js 来一打 C++扩展》简介

## 2. 🫧 评价

还没读过

## 3. 🤔 豆瓣评分是多少？

- ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-11-01-11-15-31.png)
- 截图时间：`24.10`

## 4. 🤔 本书作者是？

死月是 Node.js 核心贡献者（Node.js Core Collaborator）之一，CNode 社区版主之一，杭州 Node Party 组织者之一，曾任大搜车无线架构组 Node.js 团队负责人；浙江大学工程硕士，退役 OI、ACM 选手。

### 4.1. 掘进小册

印象中在掘金上看到过“死月”这个名字，搜了搜，果然也找到了一本 Node.js 小册：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-11-01-11-06-37.png)

应该是同一个人！

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-11-01-11-09-06.png)

## 5. 🤔 书中都介绍了哪些内容？

### 5.1. 内容简介

Node.js 作为近几年新兴的一种编程运行时，托 V8 引擎的福，在作为后端服务时有比较高的运行效率，在很多场景下对于我们的日常开发足够用了。不过，它还为开发者开了一个使用 C++ 开发 Node.js 原生扩展的口子，让开发者进行项目开发时有了更多的选择。

《Node.js：来一打 C++ 扩展》以 Chrome V8 的知识作为基础，配合 GYP 的一些内容，将教会大家如何使用 Node.js 提供的一些 API 来编写其 C++ 的原生扩展。此外，在后续的进阶章节中，还会介绍原生抽象 NAN 以及与异步相关的 libuv 知识，最后辅以几个实例来加深理解。不过，在学习本书内容之前，希望读者已经具备了初步的 Node.js 以及 C++ 基础。

阅读《Node.js：来一打 C++ 扩展》，相当于同时学习 Chrome V8 开发、libuv 开发以及 Node.js 的原生 C++ 扩展开发知识，非常值得！

### 5.2. 目录大纲

```txt
前言
1 Node.js的C++扩展前驱知识储备
1.1 Node.js的模块机制
1.2 Node.js的包机制
1.3 Node.js依赖简介
1.4 C++扩展开发的准备工作
2 C++模块原理简析
2.1 为什么要写C++模块
2.2 什么是C++扩展
3 Chrome V8基础
3.1 Node.js与Chrome V8
3.2 基本概念
3.3 句柄（Handle）
3.4 句柄作用域
3.5 上下文（Context）
3.6 模板（Template）
3.7 常用数据类型
3.8 异常机制
4 C++扩展实战初探
4.1 binding.gyp
4.2 牛刀小试
4.3 循序渐进
5 Node.js原生抽象——NAN
5.1 Node.js原生模块开发方式的变迁
5.2 基础开发
5.3 JavaScript函数
5.4 常用帮助类与函数
5.5 NAN中的异步机制
6 异步之旅——libuv
6.1 基础概念
6.2 libuv的跨线程编程基础
6.3 跨线程通信
7 实战——文件监视器
7.1 准备工作
7.2 核心设计
7.3 编写JavaScript类
7.4 进一步完善
8 实战——现有包剖析
8.1 字符串哈希模块——Bling Hashes
8.2 类Proxy包——Auto Object
9 N-API——下一代Node.js C++扩展开发方式
9.1 浅尝辄止
9.2 基本数据类型与错误处理
9.3 对象与函数
```

## 6. 🔗 引用

- [豆瓣 - 《Node.js 来一打 C++扩展》][1]
- [掘进小册链接][2]

[1]: https://book.douban.com/subject/30247892/
[2]: https://s.juejin.cn/ds/G8-Oi8DFPL8/
