# nodejs

<!-- region:toc -->

- [nodejs](#nodejs)
  - [1. 学习资源](#1-学习资源)
  - [2. 认识 Node.js](#2-认识-nodejs)
  - [3. npm 包管理器](#3-npm-包管理器)
  - [4. 全局模块](#4-全局模块)
  - [5. 事件的监听与触发](#5-事件的监听与触发)
  - [6. util 工具模块](#6-util-工具模块)
  - [7. fs 文件系统模块](#7-fs-文件系统模块)
  - [8. path 路径处理模块](#8-path-路径处理模块)
  - [9. os 操作系统模块](#9-os-操作系统模块)
  - [10. 网络基础概念](#10-网络基础概念)
  - [11. 网络相关模块](#11-网络相关模块)
    - [11.1. net](#111-net)
    - [11.2. http](#112-http)
    - [11.3. https](#113-https)
    - [11.4. url](#114-url)
    - [11.5. querystring](#115-querystring)
  - [12. I/O 流操作 ⏰](#12-io-流操作-)
  - [13. Web 应用构建基础 ⏰](#13-web-应用构建基础-)
  - [14. 数据库基础知识 💪](#14-数据库基础知识-)
  - [15. 核心原理](#15-核心原理)
  - [16. ⏰ pending](#16--pending)
    - [16.1. process](#161-process)
    - [16.2. crypto](#162-crypto)
    - [16.3. 版本管理工具](#163-版本管理工具)
    - [16.4. koa](#164-koa)
    - [16.5. npm 相关](#165-npm-相关)
    - [16.6. nodejs 命令行操作](#166-nodejs-命令行操作)
    - [16.7. others](#167-others)

<!-- endregion:toc -->

## 1. 学习资源

- [x] [0030. 学习资源](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0030.%20%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90/README.md)
- [x] [0032. 《Node.js 从入门到精通》](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0032.%20%E3%80%8ANode.js%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E3%80%8B/README.md)
- [x] [0015. 《深入浅出 Node.js》](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0015.%20%E3%80%8A%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%20Node.js%E3%80%8B/README.md)
- [x] [0016. 《Node.js来一打C++扩展》](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0016.%20%E3%80%8ANode.js%E6%9D%A5%E4%B8%80%E6%89%93C%2B%2B%E6%89%A9%E5%B1%95%E3%80%8B/README.md)
- [x] [0017. 《Node与Express开发》](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0017.%20%E3%80%8ANode%E4%B8%8EExpress%E5%BC%80%E5%8F%91%E3%80%8B/README.md)
- [x] [0018. 《Node.js开发指南》](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0018.%20%E3%80%8ANode.js%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97%E3%80%8B/README.md)
- [x] [0019. 《了不起的Node js 将JavaScript进行到底》](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0019.%20%E3%80%8A%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84Node%20js%20%E5%B0%86JavaScript%E8%BF%9B%E8%A1%8C%E5%88%B0%E5%BA%95%E3%80%8B/README.md)
- [x] [0022. 《Node.js 入门教程》（免费掘金小册）](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0022.%20%E3%80%8ANode.js%20%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B%E3%80%8B%EF%BC%88%E5%85%8D%E8%B4%B9%E6%8E%98%E9%87%91%E5%B0%8F%E5%86%8C%EF%BC%89/README.md)
- [x] [0025. 菜鸟教程](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0025.%20%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B/README.md)
- [ ] [0026. nodejs 官方文档](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0026.%20nodejs%20%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3/README.md)

## 2. 认识 Node.js

- [x] [0031. 什么是 Node.js](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0031.%20%E4%BB%80%E4%B9%88%E6%98%AF%20Node.js/README.md)
- [x] [0033. Node.js 的工作原理概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0033.%20Node.js%20%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E6%A6%82%E8%BF%B0/README.md)
- [x] [0034. Node.js 的优缺点](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0034.%20Node.js%20%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9/README.md)
- [x] [0035. Node.js 能用来做什么](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0035.%20Node.js%20%E8%83%BD%E7%94%A8%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88/README.md)
- [x] [0036. 谁在使用 Node.js](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0036.%20%E8%B0%81%E5%9C%A8%E4%BD%BF%E7%94%A8%20Node.js/README.md)
- [x] [0037. 第一个 Node.js 服务器程序 - Hello World](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0037.%20%E7%AC%AC%E4%B8%80%E4%B8%AA%20Node.js%20%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%A8%8B%E5%BA%8F%20-%20Hello%20World/README.md)

## 3. npm 包管理器

- [x] [0086. npm 官网](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0086.%20npm%20%E5%AE%98%E7%BD%91/README.md)
- [x] [0088. Github - npm](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0088.%20Github%20-%20npm/README.md)
- [x] [0087. YouTube 上的 npm 频道](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0087.%20YouTube%20%E4%B8%8A%E7%9A%84%20npm%20%E9%A2%91%E9%81%93/README.md)
- [x] [0038. 认识 npm](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0038.%20%E8%AE%A4%E8%AF%86%20npm/README.md)
- [x] [0039. 常见的 npm 包及作用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md)
- [x] [0040. npm 版本](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0040.%20npm%20%E7%89%88%E6%9C%AC/README.md)
- [x] [0041. 常见的 npm 命令](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md)
- [x] [0042. 认识 package.json](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0042.%20%E8%AE%A4%E8%AF%86%20package.json/README.md)
- [x] [0043. 认识 package-lock.json](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0043.%20%E8%AE%A4%E8%AF%86%20package-lock.json/README.md)

## 4. 全局模块

- [x] [0044. __filename 和 __dirname](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0044.%20__filename%20%E5%92%8C%20__dirname/README.md)
- [x] [0045. console](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0045.%20console/README.md)
- [x] [0049. process](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0049.%20process/README.md)
- [x] [0046. 全局定时器：setTimeout、setInterval、setImmediate](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0046.%20%E5%85%A8%E5%B1%80%E5%AE%9A%E6%97%B6%E5%99%A8%EF%BC%9AsetTimeout%E3%80%81setInterval%E3%80%81setImmediate/README.md)
- [ ] [0047. exports 对象](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0047.%20exports%20%E5%AF%B9%E8%B1%A1/README.md)
- [ ] [0048. module 对象](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0048.%20module%20%E5%AF%B9%E8%B1%A1/README.md)

## 5. 事件的监听与触发

- [x] [0052. EventEmitter](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter/README.md)

## 6. util 工具模块

- [x] [0051. util](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0051.%20util/README.md)
- [x] [0054. 错误优先的回调风格](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0054.%20%E9%94%99%E8%AF%AF%E4%BC%98%E5%85%88%E7%9A%84%E5%9B%9E%E8%B0%83%E9%A3%8E%E6%A0%BC/README.md)

## 7. fs 文件系统模块

- [x] [0055. fs 文件系统模块概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0055.%20fs%20%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0/README.md)
- [x] [0056. 文件检查](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0056.%20%E6%96%87%E4%BB%B6%E6%A3%80%E6%9F%A5/README.md)
- [x] [0057. 文件读取](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0057.%20%E6%96%87%E4%BB%B6%E8%AF%BB%E5%8F%96/README.md)
- [x] [0058. 文件写入](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0058.%20%E6%96%87%E4%BB%B6%E5%86%99%E5%85%A5/README.md)
- [x] [0066. 文件截断](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0066.%20%E6%96%87%E4%BB%B6%E6%88%AA%E6%96%AD/README.md)
- [x] [0067. 文件删除](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0067.%20%E6%96%87%E4%BB%B6%E5%88%A0%E9%99%A4/README.md)
- [x] [0068. 文件复制](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0068.%20%E6%96%87%E4%BB%B6%E5%A4%8D%E5%88%B6/README.md)
- [x] [0069. 文件重命名](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0069.%20%E6%96%87%E4%BB%B6%E9%87%8D%E5%91%BD%E5%90%8D/README.md)
- [x] [0053. 创建目录](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0053.%20%E5%88%9B%E5%BB%BA%E7%9B%AE%E5%BD%95/README.md)
- [x] [0060. 删除目录](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0060.%20%E5%88%A0%E9%99%A4%E7%9B%AE%E5%BD%95/README.md)
- [x] [0064. 读取目录内容](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0064.%20%E8%AF%BB%E5%8F%96%E7%9B%AE%E5%BD%95%E5%86%85%E5%AE%B9/README.md)
- [x] [0065. 查看目录或文件信息](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0065.%20%E6%9F%A5%E7%9C%8B%E7%9B%AE%E5%BD%95%E6%88%96%E6%96%87%E4%BB%B6%E4%BF%A1%E6%81%AF/README.md)
- [x] [0071. 认识符号链接](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0071.%20%E8%AE%A4%E8%AF%86%E7%AC%A6%E5%8F%B7%E9%93%BE%E6%8E%A5/README.md)
- [x] [0072. 创建符号链接](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0072.%20%E5%88%9B%E5%BB%BA%E7%AC%A6%E5%8F%B7%E9%93%BE%E6%8E%A5/README.md)
- [x] [0070. 查看符号链接信息](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0070.%20%E6%9F%A5%E7%9C%8B%E7%AC%A6%E5%8F%B7%E9%93%BE%E6%8E%A5%E4%BF%A1%E6%81%AF/README.md)
- [x] [0059. 获取解析后的绝对路径](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0059.%20%E8%8E%B7%E5%8F%96%E8%A7%A3%E6%9E%90%E5%90%8E%E7%9A%84%E7%BB%9D%E5%AF%B9%E8%B7%AF%E5%BE%84/README.md)
- [x] [0061. fs.constants](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0061.%20fs.constants/README.md)
- [x] [0062. fs 中的 mode](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0062.%20fs%20%E4%B8%AD%E7%9A%84%20mode/README.md)

## 8. path 路径处理模块

- [x] [0078. path 模块概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0078.%20path%20%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0/README.md)

## 9. os 操作系统模块

- [x] [0073. os 操作系统模块概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0073.%20os%20%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0/README.md)
- [x] [0074. 管理进程的调度优先级](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0074.%20%E7%AE%A1%E7%90%86%E8%BF%9B%E7%A8%8B%E7%9A%84%E8%B0%83%E5%BA%A6%E4%BC%98%E5%85%88%E7%BA%A7/README.md)

## 10. 网络基础概念

- [x] [0084. 理解“请求”和“响应”](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0084.%20%E7%90%86%E8%A7%A3%E2%80%9C%E8%AF%B7%E6%B1%82%E2%80%9D%E5%92%8C%E2%80%9C%E5%93%8D%E5%BA%94%E2%80%9D/README.md)
- [x] [0085. 理解“客户端”和“服务端”](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0085.%20%E7%90%86%E8%A7%A3%E2%80%9C%E5%AE%A2%E6%88%B7%E7%AB%AF%E2%80%9D%E5%92%8C%E2%80%9C%E6%9C%8D%E5%8A%A1%E7%AB%AF%E2%80%9D/README.md)

## 11. 网络相关模块

### 11.1. net

- [ ] [0077. net 模块概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0077.%20net%20%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0/README.md)

### 11.2. http

- [x] [0080. http 模块概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0080.%20http%20%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0/README.md)
- [ ] [0081. 基于 http 模块实现一个简单的静态资源服务器](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0081.%20%E5%9F%BA%E4%BA%8E%20http%20%E6%A8%A1%E5%9D%97%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E6%9C%8D%E5%8A%A1%E5%99%A8/README.md)

### 11.3. https

- [x] [0028. 基于 nodejs 在本地快速启动一个 https 服务](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0028.%20%E5%9F%BA%E4%BA%8E%20nodejs%20%E5%9C%A8%E6%9C%AC%E5%9C%B0%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8%E4%B8%80%E4%B8%AA%20https%20%E6%9C%8D%E5%8A%A1/README.md)

### 11.4. url

- [x] [0082. url 模块概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0082.%20url%20%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0/README.md)

### 11.5. querystring

- [x] [0083. querystring 模块概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0083.%20querystring%20%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0/README.md)
- [ ] [0089. NPM vs. Yarn vs. PNPM](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0089.%20NPM%20vs.%20Yarn%20vs.%20PNPM/README.md)
- [ ] [0090. PNPM](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0090.%20PNPM/README.md)
- [ ] [0091. Yarn](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0091.%20Yarn/README.md)
- [ ] [0092. xxx](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0092.%20xxx/README.md)
- [ ] [0093. xxx](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0093.%20xxx/README.md)
- [ ] [0094. xxx](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0094.%20xxx/README.md)
- [ ] [0095. xxx](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0095.%20xxx/README.md)
- [ ] [0096. xxx](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0096.%20xxx/README.md)
- [ ] [0097. xxx](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0097.%20xxx/README.md)
- [ ] [0098. xxx](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0098.%20xxx/README.md)
- [ ] [0099. xxx](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0099.%20xxx/README.md)
- [ ] [0100. xxx](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0100.%20xxx/README.md)

## 12. I/O 流操作 ⏰

- [ ] [0075. I、O 流操作概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0075.%20I%E3%80%81O%20%E6%B5%81%E6%93%8D%E4%BD%9C%E6%A6%82%E8%BF%B0/README.md)

## 13. Web 应用构建基础 ⏰

## 14. 数据库基础知识 💪

- [ ] [0079. 表之间的关系](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0079.%20%E8%A1%A8%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md)

## 15. 核心原理

- [x] [0050. Node.js 生命周期](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0050.%20Node.js%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md)

## 16. ⏰ pending

### 16.1. process

- [ ] [0001. 使用 process 模块来区分不同的操作系统](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0001.%20%E4%BD%BF%E7%94%A8%20process%20%E6%A8%A1%E5%9D%97%E6%9D%A5%E5%8C%BA%E5%88%86%E4%B8%8D%E5%90%8C%E7%9A%84%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/README.md)
- [ ] [0020. 通过 process.argv 获取脚本的命令行参数](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0020.%20%E9%80%9A%E8%BF%87%20process.argv%20%E8%8E%B7%E5%8F%96%E8%84%9A%E6%9C%AC%E7%9A%84%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%82%E6%95%B0/README.md)

### 16.2. crypto

- [ ] [0002. crypto 模块中的 hash 工具方法 createHash](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0002.%20crypto%20%E6%A8%A1%E5%9D%97%E4%B8%AD%E7%9A%84%20hash%20%E5%B7%A5%E5%85%B7%E6%96%B9%E6%B3%95%20createHash/README.md)
- [ ] [0007. crypto 模块](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0007.%20crypto%20%E6%A8%A1%E5%9D%97/README.md)

### 16.3. 版本管理工具

- [x] [0029. nvm](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0029.%20nvm/README.md)

### 16.4. koa

- [ ] [0008. koa-send](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0008.%20koa-send/README.md)
- [ ] [0009. koa-static](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0009.%20koa-static/README.md)

### 16.5. npm 相关

- [ ] [0012. 使用 nrm 管理 npm 源](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0012.%20%E4%BD%BF%E7%94%A8%20nrm%20%E7%AE%A1%E7%90%86%20npm%20%E6%BA%90/README.md)
- [ ] [0014. 如何使用 nvm 管理 nodejs 版本](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0014.%20%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20nvm%20%E7%AE%A1%E7%90%86%20nodejs%20%E7%89%88%E6%9C%AC/README.md)
- [ ] [0010. npm 生命周期 prepublish](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0010.%20npm%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%20prepublish/README.md)
- [ ] [0011. npm 配置文件 .npmrc](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md)
- [ ] [0024. npm link 基本使用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0024.%20npm%20link%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md)
- [ ] [0023. npm 内置命令](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0023.%20npm%20%E5%86%85%E7%BD%AE%E5%91%BD%E4%BB%A4/README.md)

### 16.6. nodejs 命令行操作

- [ ] [0003. 使用 npm_lifecycle_script 获取当前运行的 nodejs 命令](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0003.%20%E4%BD%BF%E7%94%A8%20npm_lifecycle_script%20%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E8%BF%90%E8%A1%8C%E7%9A%84%20nodejs%20%E5%91%BD%E4%BB%A4/README.md)
- [ ] [0004. 学会使用 nodejs 运行 .js 文件](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0004.%20%E5%AD%A6%E4%BC%9A%E4%BD%BF%E7%94%A8%20nodejs%20%E8%BF%90%E8%A1%8C%20.js%20%E6%96%87%E4%BB%B6/README.md)
- [ ] [0013. 安装 nodejs](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0013.%20%E5%AE%89%E8%A3%85%20nodejs/README.md)
- [ ] [0021. minimist 基本使用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0021.%20minimist%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md)

### 16.7. others

- [ ] [0005. 获取 macos 下都安装了哪些应用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0005.%20%E8%8E%B7%E5%8F%96%20macos%20%E4%B8%8B%E9%83%BD%E5%AE%89%E8%A3%85%E4%BA%86%E5%93%AA%E4%BA%9B%E5%BA%94%E7%94%A8/README.md)
- [ ] [0006. 使用 screencapture 命令实现 macos 系统截图](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0006.%20%E4%BD%BF%E7%94%A8%20screencapture%20%E5%91%BD%E4%BB%A4%E5%AE%9E%E7%8E%B0%20macos%20%E7%B3%BB%E7%BB%9F%E6%88%AA%E5%9B%BE/README.md)
- [ ] [0027. 在 Windows 的 power shell 中执行 pnpm i 命令错误问题](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0027.%20%E5%9C%A8%20Windows%20%E7%9A%84%20power%20shell%20%E4%B8%AD%E6%89%A7%E8%A1%8C%20pnpm%20i%20%E5%91%BD%E4%BB%A4%E9%94%99%E8%AF%AF%E9%97%AE%E9%A2%98/README.md)
- [ ] [0063. Node.js 学习路线](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0063.%20Node.js%20%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF/README.md)
- [ ] [0076. exec vs. spawn](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0076.%20exec%20vs.%20spawn/README.md)
