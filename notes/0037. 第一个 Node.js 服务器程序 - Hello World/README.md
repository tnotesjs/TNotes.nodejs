# [0037. 第一个 Node.js 服务器程序 - Hello World](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0037.%20%E7%AC%AC%E4%B8%80%E4%B8%AA%20Node.js%20%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%A8%8B%E5%BA%8F%20-%20Hello%20World)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. demos.1 - Hello World](#2-demos1---hello-world)
- [3. demos.2 - 如果要响应中文，需要设置编码方式为 UTF-8 来避免乱码的问题](#3-demos2---如果要响应中文需要设置编码方式为-utf-8-来避免乱码的问题)

<!-- endregion:toc -->

## 1. 概述

- 本节要使用 Node.js 的 http 模块来创建一个简单的 HTTP 服务器，并响应客户端的请求，最终在页面上渲染出 `Hello World!`。
- 最终效果如下：
  - ![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-04-11-15-49.png)
- 往简单了讲，这个效果只需要写简短的一行代码就能实现了。
  - `require('http').createServer((req, res) => res.end('Hello World!')).listen(3000, '127.0.0.1')`。
  - 随便找个位置新建一个 `1.cjs`，将这行代码复制进去，然后执行 `node 1.cjs` 启动服务，再访问 http://127.0.0.1:3000/ 查看最终效果即可。
  - 至于其中的实现原理，后边儿慢慢学吧！

## 2. demos.1 - Hello World

::: code-group

<<< ./demos/1/index.cjs {js} [index.cjs]

:::

- 最终效果：
  - 执行 `node index.cjs` 启动服务。
  - 打开浏览器输入地址 http://127.0.0.1:3000/ 访问服务。
    - ![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-04-11-15-49.png)
  - 控制台日志：
    - ![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-04-11-16-35.png)
- **🤔 问：为什么这里要命名为 `index.cjs` 呢，不能直接写 `index.js` 吗？**
  - 在 Node.js 中，如果项目的 `package.json` 文件中设置了 `"type": "module"`，则默认使用 ES Module 规范（即 `import` 和 `export`），而不是 CommonJS 规范（即 `require` 和 `module.exports`）。
  - 如果在 `"type": "module"` 的项目中使用 `require`，会报错：
    - `ReferenceError: require is not defined in ES module scope, you can use import instead`
    - ![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-04-11-07-56.png)
  - **解决方法**：
    - 将文件扩展名改为 `.cjs`，明确告诉 Node.js 使用 CommonJS 规范加载模块。
    - 或者，移除 `package.json` 中的 `"type": "module"` 配置，让项目默认使用 CommonJS 规范。

::: tip

如果项目需要同时支持 CommonJS 和 ES Module，可以将 CommonJS 文件命名为 `.cjs`，将 ES Module 文件命名为 `.mjs`，以避免冲突。

:::

## 3. demos.2 - 如果要响应中文，需要设置编码方式为 UTF-8 来避免乱码的问题

::: code-group

<<< ./demos/2/1.cjs {js} [1.cjs(修改前)]

<<< ./demos/2/2.cjs {6 js} [2.cjs(修改后)]

:::

- 核心代码：
  - `res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })`
  - 将编码方式写入到响应头中。
- 最终效果：
  - 修改前：
    - ![图 3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-04-11-19-19.png)
  - 修改后：
    - ![图 4](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-04-11-24-00.png)
  - 注：不要在意背景色，背景色仅仅是个人的主题配置，跟上述程序没有任何关系。
