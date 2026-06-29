# [0083. querystring 模块概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0083.%20querystring%20%E6%A8%A1%E5%9D%97%E6%A6%82%E8%BF%B0)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. demos.1 - `querystring` 基本使用 - `parse`、`stringify`](#2-demos1---querystring-基本使用---parsestringify)
- [3. 引用](#3-引用)

<!-- endregion:toc -->

## 1. 概述

- **`querystring` 模块**：
  - `querystring` 模块用于实现 URL 查询字符串与参数对象之间的互相转换。
- **主要方法**：
  - `querystring.parse()`：将 URL 查询字符串转换为参数对象。
  - `querystring.stringify()`：将参数对象转换为 URL 查询字符串。

## 2. demos.1 - `querystring` 基本使用 - `parse`、`stringify`

::: code-group

```js [1.cjs - parse、stringify] {13,17}
const querystring = require('querystring')

// 定义一个 URL 字符串
const urlString =
  'https://example.com:8080/path/to/resource?name=John&age=30#section1'

const parsedUrl = new URL(urlString)

console.log(parsedUrl.search) // 输出：?name=John&age=30
console.log(parsedUrl.searchParams) // 输出：URLSearchParams { 'name' => 'John', 'age' => '30' }

const query = parsedUrl.search.slice(1)
const parsedQuery = querystring.parse(query)

console.log(query) // 输出：name=John&age=30
console.log(parsedQuery) // 输出：[Object: null prototype] { name: 'John', age: '30' }
console.log(querystring.stringify(parsedQuery)) // 输出：name=John&age=30
```

:::

## 3. 引用

- https://nodejs.org/docs/v22.15.0/api/querystring.html
