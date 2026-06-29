# [0072. 创建符号链接](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0072.%20%E5%88%9B%E5%BB%BA%E7%AC%A6%E5%8F%B7%E9%93%BE%E6%8E%A5)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. demos.1 - 创建符号链接 `symlink`](#2-demos1---创建符号链接-symlink)

<!-- endregion:toc -->

## 1. 概述

- 在 Node.js 中，可以使用 `fs.symlink()` 或 `fs.symlinkSync()` 方法创建符号链接。
- **注意**：
  - 重复创建同一个符号链接会报错。

## 2. demos.1 - 创建符号链接 `symlink`

::: code-group

```js [1.cjs] {10}
const fs = require('fs')
const path = require('path')

// 定义目标文件和符号链接路径
const targetPath = path.join(__dirname, '1.txt') // 目标文件
const linkPath = path.join(__dirname, '1_link.txt') // 符号链接

try {
  // 创建符号链接
  fs.symlinkSync(targetPath, linkPath)

  console.log(`符号链接已成功创建: ${linkPath}`)
} catch (err) {
  console.error(`创建符号链接时出错: ${err.message}`)
}
```

```txt [1.txt]
test

备注：
当你尝试在 1_link.txt 中编辑内容
将文件保存之后
内容会自动同步到该符号链接对应的实际文件 1.txt 中
```

```txt [1_link.txt]
test

备注：
当你尝试在 1_link.txt 中编辑内容
将文件保存之后
内容会自动同步到该符号链接对应的实际文件 1.txt 中
```

:::

- ![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-04-19-21-31-00.png)
- 仔细观察会发现符号链接文件的右侧会有一个 `->` 标志，这表示它是一个符号链接，链接到其它文件。
