# [0060. 删除目录](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0060.%20%E5%88%A0%E9%99%A4%E7%9B%AE%E5%BD%95)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. 对于新版的 `rm` 和旧版的 `rmDir`，应该如何选择？](#2-对于新版的-rm-和旧版的-rmdir应该如何选择)
- [3. demos.1 - 删除目录 `rmdir`](#3-demos1---删除目录-rmdir)
- [4. demos.2 - 递归删除目录 `rm`](#4-demos2---递归删除目录-rm)

<!-- endregion:toc -->

## 1. 概述

| 方法名        | 功能描述             |
| ------------- | -------------------- |
| `rmdir()`     | 异步删除空目录       |
| `rmdirSync()` | 同步删除空目录       |
| `rm()`        | 同步删除空文件或目录 |
| `rmSync()`    | 同步删除空文件或目录 |

- **参数配置**：

| 选项 | 描述 | 默认值 |
| --- | --- | --- |
| **recursive** | 如果为 `true`，则执行递归目录删除操作。在递归模式下，操作将在失败时重试。 | `false` |
| **retryDelay** | 重试之间等待的时间（以毫秒为单位）。如果 `recursive` 选项不为 `true`，则忽略此选项。 | `100` |
| **maxRetries** | 表示重试次数。如果遇到 `EBUSY`、`EMFILE`、`ENFILE`、`ENOTEMPTY` 或 `EPERM` 错误，Node.js 将在每次尝试时，以 `retryDelay` 毫秒的线性退避等待时间重试该操作。如果 `recursive` 选项不为 `true`，则忽略此选项。 | `0` |

## 2. 对于新版的 `rm` 和旧版的 `rmDir`，应该如何选择？

| 特性 | `fs.rmdir` | `fs.rm` |
| --- | --- | --- |
| **主要用途** | 删除空目录（支持递归删除非空目录）。 | 删除文件或目录（支持递归删除）。 |
| **递归删除支持** | 从 Node.js v12.10.0 开始支持 `{ recursive: true }`。 | 默认支持 `{ recursive: true }`。 |
| **忽略路径不存在** | 仅在 Node.js v16+ 支持 `{ force: true }`。 | 默认支持 `{ force: true }`。 |
| **是否推荐** | 不推荐用于新项目（逐步被 `fs.rm` 替代）。 | 推荐用于删除文件或目录的场景。 |
| **适用版本** | 所有 Node.js 版本。 | Node.js v14.14.0+。 |

- **优先使用 `fs.rm` 的场景**：
  - 如果你的项目运行在 Node.js v14.14.0 或更高版本上，推荐使用 `fs.rm()` 或 `fs.rmSync()`，因为它们是更现代的 API，并且功能更强大。
- **需要兼容旧版本的场景**：
  - 如果需要兼容较低版本的 Node.js（如 v12.x），可以继续使用 `fs.rmdir()`，并结合 `{ recursive: true }` 选项。
- **清理目录的最佳实践**：
  - 使用 `{ recursive: true, force: true }` 确保操作更加健壮，避免因路径不存在或权限问题导致的错误。
  - 加上这个配置就类似于 Unix 中的 `rm -rf` 命令效果。

## 3. demos.1 - 删除目录 `rmdir`

::: code-group

```bash [初始默认的目录结构]
tree
# .
# ├── 1
# │   └── 2
# ├── 1.cjs
# ├── 2.cjs
# └── 3.cjs
```

:::

::: code-group

```js [1.cjs] {9,13}
const fs = require('fs')
const path = require('path')

// 定义要删除的目录路径
const dirPath = path.join(__dirname, './test')

try {
  // 使用 mkdirSync 创建目录
  fs.mkdirSync(dirPath)
  console.log(`目录创建成功: ${dirPath}`)

  // 使用 rmdirSync 删除目录
  fs.rmdirSync(dirPath)
  console.log(`目录已成功删除: ${dirPath}`)
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log(`目录不存在: ${dirPath}`)
  } else if (err.code === 'ENOTEMPTY') {
    console.error(`目录非空，无法删除: ${dirPath}`)
  } else {
    console.error(`删除目录时出错: ${err.message}`)
  }
}

// 输出：
// 目录创建成功: /Users/huyouda/zm/notes/TNotes.nodejs/notes/0060. 目录操作/demos/3/test
// 目录已成功删除: /Users/huyouda/zm/notes/TNotes.nodejs/notes/0060. 目录操作/demos/3/test
```

```js [2.cjs] {8,12}
const fs = require('fs')
const path = require('path')

// 定义要删除的目录路径
const dirPath = path.join(__dirname, './123')

try {
  fs.rmdirSync(dirPath)
  console.log(`目录已成功删除: ${dirPath}`)
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log(`目录不存在: ${dirPath}`)
  } else if (err.code === 'ENOTEMPTY') {
    console.error(`目录非空，无法删除: ${dirPath}`)
  } else {
    console.error(`删除目录时出错: ${err.message}`)
  }
}

// 输出：
// 目录不存在: /Users/huyouda/zm/notes/TNotes.nodejs/notes/0060. 目录操作/demos/3/123

// 注意：
// 如果要删除的目录不存在，则会报错 ENOENT。
```

```js [3.cjs] {8,14}
const fs = require('fs')
const path = require('path')

// 定义要删除的目录路径
const dirPath = path.join(__dirname, './1')

try {
  fs.rmdirSync(dirPath)
  console.log(`目录已成功删除: ${dirPath}`)
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log(`目录不存在: ${dirPath}`)
  } else if (err.code === 'ENOTEMPTY') {
    console.error(`目录非空，无法删除: ${dirPath}`)
  } else {
    console.error(`删除目录时出错: ${err.message}`)
  }
}

// 输出：
// 目录非空，无法删除: /Users/huyouda/zm/notes/TNotes.nodejs/notes/0060. 目录操作/demos/3/1

// 注意：
// 如果一个目录中还有内容（比如其它文件或目录），那么这个目录默认是无法被删除的。
```

:::

- `1.cjs`，可以删除一个已存在的空目录。
- `2.cjs`，无法删除一个不存在的目录。
- `3.cjs`，无法删除一个非空目录。

## 4. demos.2 - 递归删除目录 `rm`

::: code-group

```js [1.cjs] {21}
const fs = require('fs')
const path = require('path')

// 定义要递归创建的目录路径
const dirPath = path.join(__dirname, 'a', 'b', 'c')

// 递归要删除的目录的路径
const rmDirPath = path.join(__dirname, 'a')

try {
  // 使用 mkdirSync 创建目录，并启用递归选项
  const result = fs.mkdirSync(dirPath, { recursive: true })

  if (result === undefined) {
    console.log(`目录已存在: ${dirPath}`)
  } else {
    console.log(`目录已成功创建: ${dirPath}`)
  }

  // 使用 rm 删除目录，并启用递归选项
  fs.rmSync(rmDirPath, { recursive: true })
  // fs.rmdirSync(rmDirPath, { recursive: true })
  console.log(`目录已成功删除: ${dirPath}`)
} catch (err) {
  console.error(`递归创建/删除目录时出错: ${err.message}`)
}

// 输出：
// 目录已成功创建: /Users/huyouda/zm/notes/TNotes.nodejs/notes/0060. 目录操作/demos/4/a/b/c
// 目录已成功删除: /Users/huyouda/zm/notes/TNotes.nodejs/notes/0060. 目录操作/demos/4/a/b/c

// 环境记录：
// $ node -v
// v23.11.0

// 如果使用 fs.rmdirSync(rmDirPath, { recursive: true }) 来递归删除 rmDirPath，可能会出现以下错误：
// In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead
```

```js [2.cjs] {9}
const fs = require('fs')
const path = require('path')

// 递归要删除的目录的路径
const rmDirPath = path.join(__dirname, '1')

try {
  // 使用 rm 删除目录，并启用递归选项
  fs.rmSync(rmDirPath, { recursive: true, force: true })
  console.log(`目录已成功删除: ${rmDirPath}`)
} catch (err) {
  console.error(`递归删除目录时出错: ${err.message}`)
}

// 程序执行前的目录结构：
// .
// ├── 1
// │   └── 2
// │       └── test.md
// ├── 1.cjs
// └── 2.cjs

// 程序执行后的目录结构：
// .
// ├── 1.cjs
// └── 2.cjs

// 官方描述：
// To get a behavior similar to the rm -rf Unix command,
// use fs.rmSync() with options { recursive: true, force: true }.

// 如果你想要获取到跟 Unix 中的 rm -rf 命令一样的行为，可以使用 fs.rmSync() 方法，并设置选项 { recursive: true, force: true }。
// 这将删除目录及其下的所有文件和子目录，并忽略任何可能存在的错误。

// 如果不加 force 的话，那么在递归删除目录的过程中，可能会出现一些错误，比如：ENOENT 要删除的目录不存在，等错误。

// 因此，在需要递归删除目录的时候，一般会同时配置 { recursive: true, force: true }
// 以免出现一些不必要的报错，让目录清理操作更加健壮，适用于更多场景。
```

:::
