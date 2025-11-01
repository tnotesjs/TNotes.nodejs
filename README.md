# nodejs

<!-- region:toc -->

- [nodejs](#nodejs)
  - [1. 学习资源](#1-学习资源)
  - [2. 快速开始](#2-快速开始)
  - [3. 包管理器](#3-包管理器)
  - [4. 全局模块](#4-全局模块)
  - [5. 事件的监听与触发](#5-事件的监听与触发)
  - [6. util 工具模块](#6-util-工具模块)
  - [7. 文件系统模块](#7-文件系统模块)
  - [8. 路径处理模块](#8-路径处理模块)
  - [9. 操作系统模块](#9-操作系统模块)
  - [10. 网络模块](#10-网络模块)
  - [11. I/O 流模块](#11-io-流模块)
  - [12. 核心原理](#12-核心原理)
  - [13. 最佳实践](#13-最佳实践)
  - [14. 进程管理](#14-进程管理)
  - [15. 异步编程](#15-异步编程)
  - [16. 加密与安全](#16-加密与安全)
  - [17. 性能优化](#17-性能优化)
  - [18. 测试与调试](#18-测试与调试)
  - [19. 数据库操作](#19-数据库操作)
  - [20. Web 框架](#20-web-框架)
  - [21. 实时通信](#21-实时通信)
  - [22. 微服务架构](#22-微服务架构)
  - [23. DevOps 与部署](#23-devops-与部署)
  - [24. TypeScript 集成](#24-typescript-集成)
  - [25. ⏰ 其它](#25--其它)

<!-- endregion:toc -->

## 1. 学习资源

- [x] [0030. 学习资源](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0030.%20%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90/README.md)
- [ ] [0001. nodejs 官方文档](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0001.%20nodejs%20%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3/README.md)
- [x] [0032. 《Node.js 从入门到精通》](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0032.%20%E3%80%8ANode.js%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E3%80%8B/README.md)
- [x] [0015. 《深入浅出 Node.js》](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0015.%20%E3%80%8A%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%20Node.js%E3%80%8B/README.md)
- [x] [0016. 《Node.js 来一打 C++ 扩展》](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0016.%20%E3%80%8ANode.js%20%E6%9D%A5%E4%B8%80%E6%89%93%20C%2B%2B%20%E6%89%A9%E5%B1%95%E3%80%8B/README.md)
- [x] [0017. 《Node 与 Express 开发》](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0017.%20%E3%80%8ANode%20%E4%B8%8E%20Express%20%E5%BC%80%E5%8F%91%E3%80%8B/README.md)
- [x] [0018. 《Node.js 开发指南》](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0018.%20%E3%80%8ANode.js%20%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97%E3%80%8B/README.md)
- [x] [0019. 《了不起的 Node js 将 JavaScript 进行到底》](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0019.%20%E3%80%8A%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84%20Node%20js%20%E5%B0%86%20JavaScript%20%E8%BF%9B%E8%A1%8C%E5%88%B0%E5%BA%95%E3%80%8B/README.md)
- [x] [0022. 《Node.js 入门教程》（免费掘金小册）](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0022.%20%E3%80%8ANode.js%20%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B%E3%80%8B%EF%BC%88%E5%85%8D%E8%B4%B9%E6%8E%98%E9%87%91%E5%B0%8F%E5%86%8C%EF%BC%89/README.md)
- [x] [0025. 菜鸟教程](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0025.%20%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B/README.md)
- [ ] [0093. Node.js 设计模式](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0093.%20Node.js%20%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/README.md)
- [ ] [0094. Node.js 最佳实践指南](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0094.%20Node.js%20%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%E6%8C%87%E5%8D%97/README.md)

## 2. 快速开始

- [x] [0031. 什么是 Node.js](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0031.%20%E4%BB%80%E4%B9%88%E6%98%AF%20Node.js/README.md)
- [x] [0033. Node.js 的工作原理概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0033.%20Node.js%20%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E6%A6%82%E8%BF%B0/README.md)
- [x] [0034. Node.js 的优缺点](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0034.%20Node.js%20%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9/README.md)
- [x] [0035. Node.js 能用来做什么](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0035.%20Node.js%20%E8%83%BD%E7%94%A8%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88/README.md)
- [x] [0036. 谁在使用 Node.js](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0036.%20%E8%B0%81%E5%9C%A8%E4%BD%BF%E7%94%A8%20Node.js/README.md)
- [x] [0037. 第一个 Node.js 服务器程序 - Hello World](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0037.%20%E7%AC%AC%E4%B8%80%E4%B8%AA%20Node.js%20%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%A8%8B%E5%BA%8F%20-%20Hello%20World/README.md)
- [ ] [0013. 安装 nodejs](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0013.%20%E5%AE%89%E8%A3%85%20nodejs/README.md)
- [x] [0029. nvm](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0029.%20nvm/README.md)
- [ ] [0014. 如何使用 nvm 管理 nodejs 版本](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0014.%20%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20nvm%20%E7%AE%A1%E7%90%86%20nodejs%20%E7%89%88%E6%9C%AC/README.md)
- [ ] [0095. Node.js 版本管理（nvm或n）](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0095.%20Node.js%20%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86%EF%BC%88nvm%E6%88%96n%EF%BC%89/README.md)
- [ ] [0096. Node.js 与 JavaScript 运行时对比](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0096.%20Node.js%20%E4%B8%8E%20JavaScript%20%E8%BF%90%E8%A1%8C%E6%97%B6%E5%AF%B9%E6%AF%94/README.md)
- [ ] [0097. Node.js REPL 环境使用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0097.%20Node.js%20REPL%20%E7%8E%AF%E5%A2%83%E4%BD%BF%E7%94%A8/README.md)
- [ ] [0004. 学会使用 nodejs 运行 .js 文件](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0004.%20%E5%AD%A6%E4%BC%9A%E4%BD%BF%E7%94%A8%20nodejs%20%E8%BF%90%E8%A1%8C%20.js%20%E6%96%87%E4%BB%B6/README.md)
- [ ] [0063. Node.js 学习路线](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0063.%20Node.js%20%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF/README.md)

## 3. 包管理器

- [x] [0086. npm 官网](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0086.%20npm%20%E5%AE%98%E7%BD%91/README.md)
- [x] [0088. github 上的 npm 组织](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0088.%20github%20%E4%B8%8A%E7%9A%84%20npm%20%E7%BB%84%E7%BB%87/README.md)
- [x] [0087. YouTube 上的 npm 频道](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0087.%20YouTube%20%E4%B8%8A%E7%9A%84%20npm%20%E9%A2%91%E9%81%93/README.md)
- [x] [0038. npm 简介](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0038.%20npm%20%E7%AE%80%E4%BB%8B/README.md)
- [x] [0039. 常见的 npm 包及作用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0039.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%8C%85%E5%8F%8A%E4%BD%9C%E7%94%A8/README.md)
- [x] [0040. npm 版本](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0040.%20npm%20%E7%89%88%E6%9C%AC/README.md)
- [x] [0041. 常见的 npm 命令](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0041.%20%E5%B8%B8%E8%A7%81%E7%9A%84%20npm%20%E5%91%BD%E4%BB%A4/README.md)
- [ ] [0023. npm 内置命令](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0023.%20npm%20%E5%86%85%E7%BD%AE%E5%91%BD%E4%BB%A4/README.md)
- [x] [0042. 认识 package.json](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0042.%20%E8%AE%A4%E8%AF%86%20package.json/README.md)
- [x] [0043. 认识 package-lock.json](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0043.%20%E8%AE%A4%E8%AF%86%20package-lock.json/README.md)
- [ ] [0089. npm vs. yarn vs. pnpm](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0089.%20npm%20vs.%20yarn%20vs.%20pnpm/README.md)
- [ ] [0090. pnpm](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0090.%20pnpm/README.md)
- [ ] [0091. yarn](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0091.%20yarn/README.md)
- [ ] [0098. npm scripts 高级用法](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0098.%20npm%20scripts%20%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95/README.md)
- [ ] [0099. 发布自己的 npm 包](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0099.%20%E5%8F%91%E5%B8%83%E8%87%AA%E5%B7%B1%E7%9A%84%20npm%20%E5%8C%85/README.md)
- [ ] [0100. npm 私有仓库搭建](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0100.%20npm%20%E7%A7%81%E6%9C%89%E4%BB%93%E5%BA%93%E6%90%AD%E5%BB%BA/README.md)
- [ ] [0101. 依赖版本管理策略](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0101.%20%E4%BE%9D%E8%B5%96%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86%E7%AD%96%E7%95%A5/README.md)
- [ ] [0102. monorepo 管理（lerna或rush）](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0102.%20monorepo%20%E7%AE%A1%E7%90%86%EF%BC%88lerna%E6%88%96rush%EF%BC%89/README.md)
- [ ] [0010. npm 生命周期 prepublish](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0010.%20npm%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%20prepublish/README.md)
- [ ] [0011. npm 配置文件 .npmrc](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0011.%20npm%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20.npmrc/README.md)
- [ ] [0024. npm link 基本使用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0024.%20npm%20link%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md)
- [ ] [0012. 使用 nrm 管理 npm 源](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0012.%20%E4%BD%BF%E7%94%A8%20nrm%20%E7%AE%A1%E7%90%86%20npm%20%E6%BA%90/README.md)
- [ ] [0003. 使用 npm_lifecycle_script 获取当前运行的 nodejs 命令](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0003.%20%E4%BD%BF%E7%94%A8%20npm_lifecycle_script%20%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E8%BF%90%E8%A1%8C%E7%9A%84%20nodejs%20%E5%91%BD%E4%BB%A4/README.md)

## 4. 全局模块

- [x] [0044. filename 和 dirname](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0044.%20filename%20%E5%92%8C%20dirname/README.md)
- [x] [0045. console](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0045.%20console/README.md)
- [x] [0049. process](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0049.%20process/README.md)
- [x] [0046. 全局定时器：setTimeout、setInterval、setImmediate](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0046.%20%E5%85%A8%E5%B1%80%E5%AE%9A%E6%97%B6%E5%99%A8%EF%BC%9AsetTimeout%E3%80%81setInterval%E3%80%81setImmediate/README.md)
- [ ] [0047. exports 对象](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0047.%20exports%20%E5%AF%B9%E8%B1%A1/README.md)
- [ ] [0048. module 对象](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0048.%20module%20%E5%AF%B9%E8%B1%A1/README.md)
- [ ] [0103. global 对象详解](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0103.%20global%20%E5%AF%B9%E8%B1%A1%E8%AF%A6%E8%A7%A3/README.md)
- [ ] [0104. Buffer 全局对象](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0104.%20Buffer%20%E5%85%A8%E5%B1%80%E5%AF%B9%E8%B1%A1/README.md)
- [ ] [0105. queueMicrotask 微任务](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0105.%20queueMicrotask%20%E5%BE%AE%E4%BB%BB%E5%8A%A1/README.md)

## 5. 事件的监听与触发

- [x] [0052. EventEmitter](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0052.%20EventEmitter/README.md)
- [ ] [0106. EventEmitter 内存泄漏检测](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0106.%20EventEmitter%20%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F%E6%A3%80%E6%B5%8B/README.md)
- [ ] [0107. 自定义事件系统设计](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0107.%20%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/README.md)
- [ ] [0108. 事件循环与异步编程](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0108.%20%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E4%B8%8E%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B/README.md)

## 6. util 工具模块

- [x] [0051. util](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0051.%20util/README.md)
- [x] [0054. 错误优先的回调风格](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0054.%20%E9%94%99%E8%AF%AF%E4%BC%98%E5%85%88%E7%9A%84%E5%9B%9E%E8%B0%83%E9%A3%8E%E6%A0%BC/README.md)
- [ ] [0109. util.promisify 详解](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0109.%20util.promisify%20%E8%AF%A6%E8%A7%A3/README.md)
- [ ] [0110. util.inspect 对象检查](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0110.%20util.inspect%20%E5%AF%B9%E8%B1%A1%E6%A3%80%E6%9F%A5/README.md)
- [ ] [0111. util.types 类型检查](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0111.%20util.types%20%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5/README.md)
- [ ] [0112. util.deprecate 废弃警告](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0112.%20util.deprecate%20%E5%BA%9F%E5%BC%83%E8%AD%A6%E5%91%8A/README.md)

## 7. 文件系统模块

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
- [ ] [0113. fs.promises API](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0113.%20fs.promises%20API/README.md)
- [ ] [0114. 文件监听 fs.watch 和 fs.watchFile](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0114.%20%E6%96%87%E4%BB%B6%E7%9B%91%E5%90%AC%20fs.watch%20%E5%92%8C%20fs.watchFile/README.md)
- [ ] [0115. 文件流操作](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0115.%20%E6%96%87%E4%BB%B6%E6%B5%81%E6%93%8D%E4%BD%9C/README.md)

## 8. 路径处理模块

- [x] [0078. path 模块概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0078.%20path%20%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0/README.md)
- [ ] [0116. path.join vs path.resolve](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0116.%20path.join%20vs%20path.resolve/README.md)
- [ ] [0117. 跨平台路径处理](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0117.%20%E8%B7%A8%E5%B9%B3%E5%8F%B0%E8%B7%AF%E5%BE%84%E5%A4%84%E7%90%86/README.md)

## 9. 操作系统模块

- [x] [0073. os 操作系统模块概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0073.%20os%20%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0/README.md)
- [x] [0074. 管理进程的调度优先级](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0074.%20%E7%AE%A1%E7%90%86%E8%BF%9B%E7%A8%8B%E7%9A%84%E8%B0%83%E5%BA%A6%E4%BC%98%E5%85%88%E7%BA%A7/README.md)
- [ ] [0118. 获取系统信息](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0118.%20%E8%8E%B7%E5%8F%96%E7%B3%BB%E7%BB%9F%E4%BF%A1%E6%81%AF/README.md)
- [ ] [0119. 网络接口信息](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0119.%20%E7%BD%91%E7%BB%9C%E6%8E%A5%E5%8F%A3%E4%BF%A1%E6%81%AF/README.md)

## 10. 网络模块

- [x] [0084. 理解“请求”和“响应”](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0084.%20%E7%90%86%E8%A7%A3%E2%80%9C%E8%AF%B7%E6%B1%82%E2%80%9D%E5%92%8C%E2%80%9C%E5%93%8D%E5%BA%94%E2%80%9D/README.md)
- [x] [0085. 理解“客户端”和“服务端”](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0085.%20%E7%90%86%E8%A7%A3%E2%80%9C%E5%AE%A2%E6%88%B7%E7%AB%AF%E2%80%9D%E5%92%8C%E2%80%9C%E6%9C%8D%E5%8A%A1%E7%AB%AF%E2%80%9D/README.md)
- [ ] [0077. net 模块概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0077.%20net%20%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0/README.md)
- [x] [0080. http 模块概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0080.%20http%20%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0/README.md)
- [ ] [0081. 基于 http 模块实现一个简单的静态资源服务器](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0081.%20%E5%9F%BA%E4%BA%8E%20http%20%E6%A8%A1%E5%9D%97%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E6%9C%8D%E5%8A%A1%E5%99%A8/README.md)
- [x] [0028. 基于 nodejs 在本地快速启动一个 https 服务](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0028.%20%E5%9F%BA%E4%BA%8E%20nodejs%20%E5%9C%A8%E6%9C%AC%E5%9C%B0%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8%E4%B8%80%E4%B8%AA%20https%20%E6%9C%8D%E5%8A%A1/README.md)
- [x] [0082. url 模块概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0082.%20url%20%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0/README.md)
- [x] [0083. querystring 模块概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0083.%20querystring%20%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0/README.md)
- [ ] [0120. http2 模块使用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0120.%20http2%20%E6%A8%A1%E5%9D%97%E4%BD%BF%E7%94%A8/README.md)
- [ ] [0121. WebSocket 实现](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0121.%20WebSocket%20%E5%AE%9E%E7%8E%B0/README.md)
- [ ] [0122. TCP 和 UDP 编程](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0122.%20TCP%20%E5%92%8C%20UDP%20%E7%BC%96%E7%A8%8B/README.md)
- [ ] [0123. DNS 模块使用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0123.%20DNS%20%E6%A8%A1%E5%9D%97%E4%BD%BF%E7%94%A8/README.md)

## 11. I/O 流模块

- [ ] [0075. I、O 流操作概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0075.%20I%E3%80%81O%20%E6%B5%81%E6%93%8D%E4%BD%9C%E6%A6%82%E8%BF%B0/README.md)
- [ ] [0124. 可读流（Readable Stream）](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0124.%20%E5%8F%AF%E8%AF%BB%E6%B5%81%EF%BC%88Readable%20Stream%EF%BC%89/README.md)
- [ ] [0125. 可写流（Writable Stream）](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0125.%20%E5%8F%AF%E5%86%99%E6%B5%81%EF%BC%88Writable%20Stream%EF%BC%89/README.md)
- [ ] [0126. 双工流（Duplex Stream）](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0126.%20%E5%8F%8C%E5%B7%A5%E6%B5%81%EF%BC%88Duplex%20Stream%EF%BC%89/README.md)
- [ ] [0127. 转换流（Transform Stream）](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0127.%20%E8%BD%AC%E6%8D%A2%E6%B5%81%EF%BC%88Transform%20Stream%EF%BC%89/README.md)
- [ ] [0128. 流的背压处理](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0128.%20%E6%B5%81%E7%9A%84%E8%83%8C%E5%8E%8B%E5%A4%84%E7%90%86/README.md)
- [ ] [0129. pipeline 和 stream.promises](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0129.%20pipeline%20%E5%92%8C%20stream.promises/README.md)

## 12. 核心原理

- [x] [0050. Node.js 生命周期](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0050.%20Node.js%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md)
- [ ] [0130. V8 引擎与 JavaScript 执行](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0130.%20V8%20%E5%BC%95%E6%93%8E%E4%B8%8E%20JavaScript%20%E6%89%A7%E8%A1%8C/README.md)
- [ ] [0131. libuv 与异步 IO](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0131.%20libuv%20%E4%B8%8E%E5%BC%82%E6%AD%A5%20IO/README.md)
- [ ] [0132. 事件循环详解](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0132.%20%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E8%AF%A6%E8%A7%A3/README.md)
- [ ] [0133. 进程与线程模型](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0133.%20%E8%BF%9B%E7%A8%8B%E4%B8%8E%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%9E%8B/README.md)
- [ ] [0134. C++ 插件开发基础](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0134.%20C%2B%2B%20%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91%E5%9F%BA%E7%A1%80/README.md)
- [ ] [0135. N-API 使用指南](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0135.%20N-API%20%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/README.md)

## 13. 最佳实践

- [x] [0092. nodebestpractices 项目](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0092.%20nodebestpractices%20%E9%A1%B9%E7%9B%AE/README.md)
- [ ] [0136. 项目结构组织](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0136.%20%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84%E7%BB%84%E7%BB%87/README.md)
- [ ] [0137. 环境变量管理](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0137.%20%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E7%AE%A1%E7%90%86/README.md)
- [ ] [0138. 日志管理策略](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0138.%20%E6%97%A5%E5%BF%97%E7%AE%A1%E7%90%86%E7%AD%96%E7%95%A5/README.md)
- [ ] [0139. 配置文件管理](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0139.%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86/README.md)

## 14. 进程管理

- [ ] [0140. child_process 模块详解](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0140.%20child_process%20%E6%A8%A1%E5%9D%97%E8%AF%A6%E8%A7%A3/README.md)
- [ ] [0076. exec vs. spawn](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0076.%20exec%20vs.%20spawn/README.md)
- [ ] [0141. cluster 集群模块](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0141.%20cluster%20%E9%9B%86%E7%BE%A4%E6%A8%A1%E5%9D%97/README.md)
- [ ] [0142. worker_threads 工作线程](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0142.%20worker_threads%20%E5%B7%A5%E4%BD%9C%E7%BA%BF%E7%A8%8B/README.md)
- [ ] [0143. 进程间通信（IPC）](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0143.%20%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1%EF%BC%88IPC%EF%BC%89/README.md)
- [ ] [0144. PM2 进程管理器](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0144.%20PM2%20%E8%BF%9B%E7%A8%8B%E7%AE%A1%E7%90%86%E5%99%A8/README.md)

## 15. 异步编程

- [ ] [0145. 回调函数模式](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0145.%20%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E6%A8%A1%E5%BC%8F/README.md)
- [ ] [0146. Promise 使用详解](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0146.%20Promise%20%E4%BD%BF%E7%94%A8%E8%AF%A6%E8%A7%A3/README.md)
- [ ] [0147. async 和 await 最佳实践](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0147.%20async%20%E5%92%8C%20await%20%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/README.md)
- [ ] [0148. 异步迭代器](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0148.%20%E5%BC%82%E6%AD%A5%E8%BF%AD%E4%BB%A3%E5%99%A8/README.md)
- [ ] [0149. 异步错误处理](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0149.%20%E5%BC%82%E6%AD%A5%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/README.md)

## 16. 加密与安全

- [ ] [0002. crypto 模块中的 hash 工具方法 createHash](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0002.%20crypto%20%E6%A8%A1%E5%9D%97%E4%B8%AD%E7%9A%84%20hash%20%E5%B7%A5%E5%85%B7%E6%96%B9%E6%B3%95%20createHash/README.md)
- [ ] [0007. crypto 模块](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0007.%20crypto%20%E6%A8%A1%E5%9D%97/README.md)
- [ ] [0150. crypto 加密模块](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0150.%20crypto%20%E5%8A%A0%E5%AF%86%E6%A8%A1%E5%9D%97/README.md)
- [ ] [0151. 哈希算法使用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0151.%20%E5%93%88%E5%B8%8C%E7%AE%97%E6%B3%95%E4%BD%BF%E7%94%A8/README.md)
- [ ] [0152. 对称加密与解密](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0152.%20%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86%E4%B8%8E%E8%A7%A3%E5%AF%86/README.md)
- [ ] [0153. 非对称加密](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0153.%20%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86/README.md)
- [ ] [0154. 数字签名与验证](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0154.%20%E6%95%B0%E5%AD%97%E7%AD%BE%E5%90%8D%E4%B8%8E%E9%AA%8C%E8%AF%81/README.md)
- [ ] [0155. TLS 和 SSL 配置](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0155.%20TLS%20%E5%92%8C%20SSL%20%E9%85%8D%E7%BD%AE/README.md)
- [ ] [0156. 安全最佳实践](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0156.%20%E5%AE%89%E5%85%A8%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/README.md)

## 17. 性能优化

- [ ] [0157. 性能分析工具](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0157.%20%E6%80%A7%E8%83%BD%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/README.md)
- [ ] [0158. 内存管理与优化](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0158.%20%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%E4%B8%8E%E4%BC%98%E5%8C%96/README.md)
- [ ] [0159. CPU 分析与优化](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0159.%20CPU%20%E5%88%86%E6%9E%90%E4%B8%8E%E4%BC%98%E5%8C%96/README.md)
- [ ] [0160. 垃圾回收机制](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0160.%20%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6/README.md)
- [ ] [0161. 内存泄漏排查](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0161.%20%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F%E6%8E%92%E6%9F%A5/README.md)
- [ ] [0162. 性能监控方案](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0162.%20%E6%80%A7%E8%83%BD%E7%9B%91%E6%8E%A7%E6%96%B9%E6%A1%88/README.md)

## 18. 测试与调试

- [ ] [0163. 单元测试框架（Jest 和 Mocha）](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0163.%20%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E6%A1%86%E6%9E%B6%EF%BC%88Jest%20%E5%92%8C%20Mocha%EF%BC%89/README.md)
- [ ] [0164. 集成测试策略](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0164.%20%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95%E7%AD%96%E7%95%A5/README.md)
- [ ] [0165. 代码覆盖率](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0165.%20%E4%BB%A3%E7%A0%81%E8%A6%86%E7%9B%96%E7%8E%87/README.md)
- [ ] [0166. 调试技巧与工具](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0166.%20%E8%B0%83%E8%AF%95%E6%8A%80%E5%B7%A7%E4%B8%8E%E5%B7%A5%E5%85%B7/README.md)
- [ ] [0167. Chrome DevTools 调试](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0167.%20Chrome%20DevTools%20%E8%B0%83%E8%AF%95/README.md)
- [ ] [0168. 断言模块 assert](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0168.%20%E6%96%AD%E8%A8%80%E6%A8%A1%E5%9D%97%20assert/README.md)

## 19. 数据库操作

- [ ] [0169. MongoDB 与 Mongoose](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0169.%20MongoDB%20%E4%B8%8E%20Mongoose/README.md)
- [ ] [0170. MySQL 连接与操作](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0170.%20MySQL%20%E8%BF%9E%E6%8E%A5%E4%B8%8E%E6%93%8D%E4%BD%9C/README.md)
- [ ] [0171. PostgreSQL 使用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0171.%20PostgreSQL%20%E4%BD%BF%E7%94%A8/README.md)
- [ ] [0172. Redis 缓存方案](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0172.%20Redis%20%E7%BC%93%E5%AD%98%E6%96%B9%E6%A1%88/README.md)
- [ ] [0173. 数据库连接池](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0173.%20%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0/README.md)
- [ ] [0174. ORM 和 ODM 框架对比](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0174.%20ORM%20%E5%92%8C%20ODM%20%E6%A1%86%E6%9E%B6%E5%AF%B9%E6%AF%94/README.md)

## 20. Web 框架

- [ ] [0175. Express.js 深入](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0175.%20Express.js%20%E6%B7%B1%E5%85%A5/README.md)
- [ ] [0176. Koa.js 原理与实践](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0176.%20Koa.js%20%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5/README.md)
- [ ] [0008. koa-send](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0008.%20koa-send/README.md)
- [ ] [0009. koa-static](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0009.%20koa-static/README.md)
- [ ] [0177. Fastify 高性能框架](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0177.%20Fastify%20%E9%AB%98%E6%80%A7%E8%83%BD%E6%A1%86%E6%9E%B6/README.md)
- [ ] [0178. NestJS 企业级框架](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0178.%20NestJS%20%E4%BC%81%E4%B8%9A%E7%BA%A7%E6%A1%86%E6%9E%B6/README.md)
- [ ] [0179. 中间件原理与开发](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0179.%20%E4%B8%AD%E9%97%B4%E4%BB%B6%E5%8E%9F%E7%90%86%E4%B8%8E%E5%BC%80%E5%8F%91/README.md)
- [ ] [0180. RESTful API 设计](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0180.%20RESTful%20API%20%E8%AE%BE%E8%AE%A1/README.md)
- [ ] [0181. GraphQL 服务搭建](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0181.%20GraphQL%20%E6%9C%8D%E5%8A%A1%E6%90%AD%E5%BB%BA/README.md)

## 21. 实时通信

- [ ] [0182. Socket.IO 实时通信](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0182.%20Socket.IO%20%E5%AE%9E%E6%97%B6%E9%80%9A%E4%BF%A1/README.md)
- [ ] [0183. Server-Sent Events](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0183.%20Server-Sent%20Events/README.md)
- [ ] [0184. WebRTC 集成](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0184.%20WebRTC%20%E9%9B%86%E6%88%90/README.md)
- [ ] [0185. 消息队列（RabbitMQ 和 Kafka）](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0185.%20%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%EF%BC%88RabbitMQ%20%E5%92%8C%20Kafka%EF%BC%89/README.md)

## 22. 微服务架构

- [ ] [0186. 微服务设计原则](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0186.%20%E5%BE%AE%E6%9C%8D%E5%8A%A1%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99/README.md)
- [ ] [0187. 服务发现与注册](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0187.%20%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0%E4%B8%8E%E6%B3%A8%E5%86%8C/README.md)
- [ ] [0188. API 网关实现](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0188.%20API%20%E7%BD%91%E5%85%B3%E5%AE%9E%E7%8E%B0/README.md)
- [ ] [0189. gRPC 在 Node.js 中的应用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0189.%20gRPC%20%E5%9C%A8%20Node.js%20%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8/README.md)
- [ ] [0190. 分布式追踪](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0190.%20%E5%88%86%E5%B8%83%E5%BC%8F%E8%BF%BD%E8%B8%AA/README.md)

## 23. DevOps 与部署

- [ ] [0191. Docker 容器化](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0191.%20Docker%20%E5%AE%B9%E5%99%A8%E5%8C%96/README.md)
- [ ] [0192. CI 和 CD 流程搭建](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0192.%20CI%20%E5%92%8C%20CD%20%E6%B5%81%E7%A8%8B%E6%90%AD%E5%BB%BA/README.md)
- [ ] [0193. Kubernetes 部署](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0193.%20Kubernetes%20%E9%83%A8%E7%BD%B2/README.md)
- [ ] [0194. 服务器部署策略](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0194.%20%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%83%A8%E7%BD%B2%E7%AD%96%E7%95%A5/README.md)
- [ ] [0195. 负载均衡配置](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0195.%20%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E9%85%8D%E7%BD%AE/README.md)
- [ ] [0196. 日志收集与分析](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0196.%20%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E4%B8%8E%E5%88%86%E6%9E%90/README.md)

## 24. TypeScript 集成

- [ ] [0197. TypeScript 配置](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0197.%20TypeScript%20%E9%85%8D%E7%BD%AE/README.md)
- [ ] [0198. 类型定义文件](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0198.%20%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89%E6%96%87%E4%BB%B6/README.md)
- [ ] [0199. 装饰器使用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0199.%20%E8%A3%85%E9%A5%B0%E5%99%A8%E4%BD%BF%E7%94%A8/README.md)
- [ ] [0200. ts-node 开发环境](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0200.%20ts-node%20%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/README.md)

## 25. ⏰ 其它

- [ ] [0021. minimist 基本使用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0021.%20minimist%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md)
- [ ] [0005. 获取 macos 下都安装了哪些应用](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0005.%20%E8%8E%B7%E5%8F%96%20macos%20%E4%B8%8B%E9%83%BD%E5%AE%89%E8%A3%85%E4%BA%86%E5%93%AA%E4%BA%9B%E5%BA%94%E7%94%A8/README.md)
- [ ] [0006. 使用 screencapture 命令实现 macos 系统截图](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0006.%20%E4%BD%BF%E7%94%A8%20screencapture%20%E5%91%BD%E4%BB%A4%E5%AE%9E%E7%8E%B0%20macos%20%E7%B3%BB%E7%BB%9F%E6%88%AA%E5%9B%BE/README.md)
- [ ] [0027. 在 Windows 的 power shell 中执行 pnpm i 命令错误问题](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0027.%20%E5%9C%A8%20Windows%20%E7%9A%84%20power%20shell%20%E4%B8%AD%E6%89%A7%E8%A1%8C%20pnpm%20i%20%E5%91%BD%E4%BB%A4%E9%94%99%E8%AF%AF%E9%97%AE%E9%A2%98/README.md)
