# [0069. 文件重命名](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0069.%20%E6%96%87%E4%BB%B6%E9%87%8D%E5%91%BD%E5%90%8D)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. demos.1 - 重命名文件 - `rename`](#2-demos1---重命名文件---rename)
- [3. demos.2 - 照片儿批量重命名 - `rename`](#3-demos2---照片儿批量重命名---rename)

<!-- endregion:toc -->

## 1. 概述

- 可以使用 `fs.rename()` 或其同步版本 `fs.renameSync()` 实现重命名文件或移动文件到另一个位置。

## 2. demos.1 - 重命名文件 - `rename`

::: code-group

```js [1.cjs] {10}
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '1.txt')
const filePath2 = path.join(__dirname, '2.txt')

fs.writeFileSync(filePath, 'Hello Node.js!')
console.log('文件已被创建！')

fs.renameSync(filePath, filePath2)
console.log('文件名已同步更改')
```

:::

## 3. demos.2 - 照片儿批量重命名 - `rename`

- 场景描述：
  - 你有一个存放照片儿的文件夹，你想要对这些照片儿批量重命名。
- 重命名的规则：
  - 按照图片的创建时间排序，第一个文件重命名为 1.png，第二个文件重命名为 2.png，以此类推。

::: code-group

```js [1.cjs]
const fs = require('fs')
const path = require('path')

// 定义目标目录路径
const dirPath = path.join(__dirname, 'we-imgs')

try {
  // 读取目录中的所有文件
  const files = fs.readdirSync(dirPath)

  // 过滤出图片文件（假设图片文件扩展名为 .png, .jpg, .jpeg, .gif）
  const imageFiles = files.filter((file) => /\.(png|jpe?g|gif)$/i.test(file))

  if (imageFiles.length === 0) {
    console.log('目录中没有图片文件')
    return
  }

  // 获取文件的状态信息（包括时间戳）
  const fileDetails = imageFiles.map((file) => {
    const filePath = path.join(dirPath, file)
    const stats = fs.statSync(filePath)
    return {
      name: file,
      path: filePath,
      time: stats.birthtime || stats.mtime, // 使用创建时间（birthtime），如果不可用则使用修改时间（mtime）
    }
  })

  // 按时间戳升序排序
  fileDetails.sort((a, b) => a.time - b.time)

  // 重命名文件
  fileDetails.forEach((fileDetail, index) => {
    const newFileName = `${index + 1}.png`
    const newFilePath = path.join(dirPath, newFileName)

    // 重命名文件
    fs.renameSync(fileDetail.path, newFilePath)
    console.log(`已将文件 ${fileDetail.name} 重命名为 ${newFileName}`)
  })
} catch (err) {
  console.error(`操作失败: ${err.message}`)
}

// 输出：
// 已将文件 week-009.jpg 重命名为 1.png
// 已将文件 week-008.png 重命名为 2.png
// 已将文件 week-007.png 重命名为 3.png
```

:::
