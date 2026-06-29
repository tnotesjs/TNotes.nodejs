# [0067. 文件删除](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0067.%20%E6%96%87%E4%BB%B6%E5%88%A0%E9%99%A4)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. demos.1 - 删除文件 - `unlink()`](#2-demos1---删除文件---unlink)

<!-- endregion:toc -->

## 1. 概述

- 要删除一个文件，可以使用 `fs.unlink()` 或其同步版本 `fs.unlinkSync()`。

## 2. demos.1 - 删除文件 - `unlink()`

::: code-group

```js [1.cjs] {16}
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '1.txt')

try {
  // 创建文件
  fs.writeFileSync(filePath, 'Hello Node.js!')
  console.log('文件已被创建！')

  // 读取文件内容
  const data = fs.readFileSync(filePath, 'utf8')
  console.log(`文件内容：${data}`)

  // 删除文件
  fs.unlinkSync(filePath)
  console.log('文件已被删除！')

  // 再次尝试读取文件（此时文件已经被删除了，读取一个不存在的文件会报错。）
  fs.readFileSync(filePath)
} catch (error) {
  console.log(`错误码：【${error.code}】`)
  if (error.code === 'ENOENT') {
    console.error('文件不存在！')
  } else {
    console.error(error)
  }
}

// 输出：
// 文件已被创建！
// 文件内容：Hello Node.js!
// 文件已被删除！
// 错误码：【ENOENT】
// 文件不存在！

// 备注：
// ENOENT
// 表示 Error No Entry
// 表示 错误了，没找到入口。
// No such file or directory
// 文件或者路径不存在
```

:::
