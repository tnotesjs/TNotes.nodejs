# [0065. 查看目录或文件信息](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0065.%20%E6%9F%A5%E7%9C%8B%E7%9B%AE%E5%BD%95%E6%88%96%E6%96%87%E4%BB%B6%E4%BF%A1%E6%81%AF)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. `fs.Stats` 对象成员](#2-fsstats-对象成员)
- [3. demos.1 - 查看目录或文件信息 `stat`](#3-demos1---查看目录或文件信息-stat)
- [4. demos.2 - 检查是文件还是目录](#4-demos2---检查是文件还是目录)

<!-- endregion:toc -->

## 1. 概述

- **异步方法**：`fs.stat(path, callback)`。
- **同步方法**：`fs.statSync(path)`。
- **返回值**：返回一个 `fs.Stats` 对象，包含文件或目录的详细信息。
  - `isFile()`：判断是否为文件。
  - `isDirectory()`：判断是否为目录。
  - `size`：文件的大小（以字节为单位）。
  - `mtime`：最后修改时间。
  - `ctime`：创建时间或元数据更改时间。
  - `birthtime`：文件的创建时间（仅在某些操作系统上支持）。
  - ……
- **跨平台兼容性**：
  - 文件的创建时间（`birthtime`）在某些操作系统（如 Windows）上支持，但在 Linux 上可能不可用。
- **符号链接**：
  - 如果路径是一个符号链接，`fs.stat()` 会解析符号链接并返回目标文件或目录的状态信息。
  - 如果需要直接获取符号链接本身的信息，可以使用 `fs.lstat()` 或 `fs.lstatSync()`。
- **ENOENT 错误**：
  - 如果传入的路径不存在，则会报错 `ENOENT`。

## 2. `fs.Stats` 对象成员

| 成员属性      | 说明                                                     |
| ------------- | -------------------------------------------------------- |
| `atime`       | 表示上次访问文件或目录的时间戳                           |
| `atimeMs`     | 表示最后一次访问文件或目录时的时间戳（以毫秒为单位）     |
| `birthtime`   | 表示文件或目录创建时的时间戳                             |
| `birthtimeMs` | 表示创建文件或目录时的时间戳（以毫秒为单位）             |
| `blksize`     | 表示文件或目录中 I/O 操作的块大小（以字节为单位）        |
| `blocks`      | 表示分配给文件或目录的块数                               |
| `ctime`       | 表示上次更改文件或目录状态时的时间戳                     |
| `ctimeMS`     | 表示最后一次更改文件或目录状态时的时间戳（以毫秒为单位） |
| `dev`         | 表示文件或目录所在的设备 ID                              |
| `gid`         | 表示文件或目录所属组的数字标识                           |
| `ino`         | 表示文件或目录的索引编号                                 |
| `mode`        | 表示文件或目录的权限                                     |
| `mtime`       | 表示上次修改文件或目录时的时间戳                         |
| `mtimeMs`     | 表示最后一次修改文件或目录时的时间戳（以毫秒为单位）     |
| `nlink`       | 表示文件或目录的硬链接数量                               |
| `rdev`        | 表示字符设备文件或块设备文件所在的设备 ID                |
| `size`        | 表示文件或目录的大小（即文件中的字节数）                 |
| `uid`         | 表示文件或目录的所有者的用户 ID                          |

| 成员方法              | 说明                     |
| --------------------- | ------------------------ |
| `isBlockDevice()`     | 判断是否是块设备         |
| `isCharacterDevice()` | 判断是否是字符设备       |
| `isDirectory()`       | 判断是否是目录（文件夹） |
| `isFIFO()`            | 判断是否是 FIFO 存储器   |
| `isFile()`            | 判断是否是文件           |
| `isSocket()`          | 判断是否是 socket 协议   |

## 3. demos.1 - 查看目录或文件信息 `stat`

::: code-group

```js [1.cjs] {7}
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '1.txt')

try {
  const stats = fs.statSync(filePath)
  // 输出文件或目录的状态信息
  console.log(`路径: ${filePath}`)
  console.log(`是否为文件: ${stats.isFile()}`)
  console.log(`是否为目录: ${stats.isDirectory()}`)
  console.log(`文件大小: ${stats.size} 字节`)
  console.log(`文件创建时间: ${stats.birthtime}`)
  console.log(`最后修改时间: ${stats.mtime}`)
} catch (err) {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error(`路径不存在: ${filePath}`)
    } else {
      console.error(`获取状态时出错: ${err.message}`)
    }
    return
  }
}

// 输出：
// 路径: /Users/huyouda/zm/notes/TNotes.nodejs/notes/0065. 查看目录或文件信息/demos/1/1.txt
// 是否为文件: true
// 是否为目录: false
// 文件大小: 5 字节
// 文件创建时间: Sat Apr 19 2025 19:10:36 GMT+0800 (China Standard Time)
// 最后修改时间: Sat Apr 19 2025 19:10:38 GMT+0800 (China Standard Time)

// fs.statSync 的返回值是一个 fs.Stats 对象。
// fs.Stats 对象提供了很多属性和方法，用于获取文件或目录的信息。
```

```js [1.txt]
test
```

:::

## 4. demos.2 - 检查是文件还是目录

::: code-group

```js [1.cjs] {11}
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '1.txt')

checkIsFileOrDirectory(filePath)
// 这是一个文件，大小为 5 字节。

function checkIsFileOrDirectory(filePath) {
  try {
    const stats = fs.statSync(filePath)

    if (stats.isFile()) {
      console.log(`这是一个文件，大小为 ${stats.size} 字节。`)
    } else if (stats.isDirectory()) {
      console.log(`这是一个目录，最后修改时间为 ${stats.mtime}。`)
    }
  } catch (err) {
    switch (err.code) {
      case 'ENOENT':
        console.error(`路径不存在: ${filePath}`)
        break
      case 'EACCES':
        console.error(`权限不足，无法访问路径: ${filePath}`)
        break
      default:
        console.error(`发生未知错误: ${err.message}`)
    }
  }
}
```

```js [1.txt]
test
```

:::
