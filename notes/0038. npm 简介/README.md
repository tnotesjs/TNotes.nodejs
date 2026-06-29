# [0038. npm 简介](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0038.%20npm%20%E7%AE%80%E4%BB%8B)

<!-- region:toc -->

- [1. 本节内容](#1-本节内容)
- [2. 评价](#2-评价)
- [3. 什么是 npm？](#3-什么是-npm)
  - [3.1. 核心功能](#31-核心功能)
  - [3.2. 安装方式](#32-安装方式)
  - [3.3. 发展历程](#33-发展历程)
- [4. npm 包的数量有多少？](#4-npm-包的数量有多少)
  - [4.1. 包数量规模](#41-包数量规模)
  - [4.2. 与其他语言对比](#42-与其他语言对比)
  - [4.3. 包的类型](#43-包的类型)
- [5. npm 可以用来做什么？](#5-npm-可以用来做什么)
  - [5.1. 下载和使用第三方包](#51-下载和使用第三方包)
  - [5.2. 安装命令行工具](#52-安装命令行工具)
  - [5.3. 发布自己的包](#53-发布自己的包)
  - [5.4. 管理项目依赖](#54-管理项目依赖)
  - [5.5. 运行脚本命令](#55-运行脚本命令)
  - [5.6. 前端开发工具链](#56-前端开发工具链)
- [6. 如何验证 npm 是否安装成功？](#6-如何验证-npm-是否安装成功)
  - [6.1. 验证 npm 功能](#61-验证-npm-功能)
  - [6.2. 升级 npm 版本](#62-升级-npm-版本)
- [7. 引用](#7-引用)

<!-- endregion:toc -->

## 1. 本节内容

- npm 的定义和作用
- npm 包数量规模
- npm 的主要使用场景
- npm 版本验证方法

## 2. 评价

npm 是 Node.js 生态系统中最重要的组成部分，也是世界上最大的软件注册表。

- npm 在安装 Node.js 时会自动安装，无需单独配置
- 拥有超过 360 万个包，几乎涵盖了所有开发需求
- 不仅用于 Node.js 后端开发，也是前端开发的核心工具
- 2020 年被 GitHub 收购后，承诺永久免费使用

## 3. 什么是 npm？

npm 是 Node Package Manager 的缩写，是 Node.js 的标准软件包管理器。

### 3.1. 核心功能

npm 主要提供以下功能：

- 包管理：安装、更新、卸载第三方模块
- 依赖管理：自动处理包之间的依赖关系
- 版本控制：管理不同版本的包
- 脚本执行：运行项目中定义的脚本命令

### 3.2. 安装方式

npm 是 Node.js 自带的工具：

```bash
# 安装 Node.js 后，npm 会自动安装
# 无需额外操作
```

⚠️ 注意：npm 版本可能与 Node.js 版本不同步，可以单独升级 npm

### 3.3. 发展历程

- 2009 年：npm 诞生，与 Node.js 同年
- 2014 年：npm Inc. 公司成立
- 2020 年 3 月：被 GitHub（微软）收购
- 承诺：永久免费使用

## 4. npm 包的数量有多少？

npm 是世界上最大的软件包注册表。

### 4.1. 包数量规模

截至 2025 年 4 月，npm 仓库中有超过 360 万个软件包。

查看当前包数量的方法：

1. 访问 https://www.npmjs.com/
2. 登录账号后查看侧边栏 - 在 `By the numbers` 卡片中查看实时数据

![npm包数量统计](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-11-01-14-38-39.png)

注：截图时间 `25.11`

### 4.2. 与其他语言对比

| 语言       | 包管理平台    | 包数量（2023 年） |
| ---------- | ------------- | ----------------- |
| JavaScript | npm           | > 200 万          |
| Python     | PyPI          | > 40 万           |
| Java       | Maven Central | ~ 50 万           |
| PHP        | Packagist     | ~ 30 万           |
| Ruby       | RubyGems      | ~ 18 万           |

npm 的包数量远超其他语言的包管理平台，体现了 JavaScript 生态的活跃度。

### 4.3. 包的类型

npm 中的包主要分为以下几类：

- 工具库：提供特定功能的代码库（如 lodash、axios）
- 框架：完整的应用开发框架（如 express、vue）
- CLI 工具：命令行工具（如 webpack、eslint）
- 开发工具：辅助开发的工具（如 prettier、nodemon）

## 5. npm 可以用来做什么？

npm 的主要使用场景涵盖了包的获取、使用和发布。

### 5.1. 下载和使用第三方包

从 npm 仓库下载包到本地项目使用：

```bash
# 安装单个包
npm install express

# 安装多个包
npm install express body-parser cors

# 安装开发依赖
npm install --save-dev nodemon eslint
```

使用示例：

```javascript
// 引入已安装的包
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)
```

### 5.2. 安装命令行工具

下载并全局安装 CLI 工具：

```bash
# 全局安装命令行工具
npm install -g nodemon
npm install -g http-server
npm install -g typescript

# 使用已安装的命令行工具
nodemon app.js
http-server ./public
tsc --version
```

### 5.3. 发布自己的包

将自己编写的包上传到 npm 供他人使用：

```bash
# 1. 登录 npm 账号
npm login

# 2. 初始化包
npm init

# 3. 发布包
npm publish

# 4. 更新包版本
npm version patch  # 或 minor、major
npm publish
```

⚠️ 发布包前的注意事项：

- 确保包名未被占用
- 编写清晰的 README.md 文档
- 添加合适的许可证
- 测试包的功能完整性

### 5.4. 管理项目依赖

npm 可以管理项目的所有依赖：

```bash
# 安装 package.json 中的所有依赖
npm install

# 更新依赖到最新版本
npm update

# 查看过时的依赖
npm outdated

# 卸载不需要的依赖
npm uninstall lodash
```

### 5.5. 运行脚本命令

执行 `package.json` 中定义的脚本：

```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "jest",
    "build": "webpack"
  }
}
```

```bash
# 运行脚本
npm start
npm run dev
npm test
npm run build
```

### 5.6. 前端开发工具链

npm 现在已成为前端开发的核心工具：

- 构建工具：webpack、vite、rollup
- 框架：vue、react、angular
- UI 库：element-ui、ant-design
- 开发工具：babel、typescript、sass

虽然 npm 起初是为 Node.js 后端开发设计的，但现在前端开发同样离不开 npm。

## 6. 如何验证 npm 是否安装成功？

安装 Node.js 后，可以通过以下命令验证 npm：

```bash
# 查看 npm 版本
npm --version
# 或简写
npm -v

# 查看 Node.js 版本
node --version
# 或简写
node -v
```

输出示例：

```bash
# npm 版本
10.2.4

# Node.js 版本
v20.11.0
```

### 6.1. 验证 npm 功能

测试 npm 基本功能是否正常：

```bash
# 查看 npm 配置
npm config list

# 查看全局安装的包
npm list -g --depth=0

# 测试安装一个包
npm install lodash
```

如果以上命令都能正常执行，说明 npm 安装成功。

### 6.2. 升级 npm 版本

如果需要升级 npm 到最新版本：

```bash
# Windows
npm install -g npm

# macOS/Linux
sudo npm install -g npm
```

⚠️ 注意：npm 版本可以独立于 Node.js 版本进行升级

## 7. 引用

- [npm 官网][1]
- [npm 文档][2]
- [npm GitHub 仓库][3]
- [Node.js 官网][4]

[1]: https://www.npmjs.com/
[2]: https://docs.npmjs.com/
[3]: https://github.com/npm/cli
[4]: https://nodejs.org/
