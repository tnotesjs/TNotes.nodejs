# [0075. I、O 流操作概述](https://github.com/tnotesjs/TNotes.nodejs/tree/main/notes/0075.%20I%E3%80%81O%20%E6%B5%81%E6%93%8D%E4%BD%9C%E6%A6%82%E8%BF%B0)

<!-- region:toc -->

- [1. 概述](#1-概述)
- [2. 可读流（Readable Stream）](#2-可读流readable-stream)
- [3. 可写流（Writable Stream）](#3-可写流writable-stream)
- [4. 双工流（Duplex Stream）](#4-双工流duplex-stream)
- [5. 转换流（Transform Stream）](#5-转换流transform-stream)

<!-- endregion:toc -->

## 1. 概述

- **流**：
  - 流指的是数据的流动。
  - 程序中的流是一个抽象概念，当程序需要从某个数据源读取数据时，就会开启一个数据流，数据源可以是文件、内存或者网络等，而当程序将数据写入某个数据源时，也会开启一个数据流，而数据源的目的地也可以是文件、内存或者网络等。
  - 以文件流为例，当需要读取一个文件时，如果使用 fs 模块的 `readFile()` 方法读取，程序会将该文件的内容视为一个整体，为其分配缓存区并一次性将内容读取到缓存区中，在这期间，Node.js 将不能执行任何其他处理，这就可能导致一个问题，即如果文件很大，会耗费较多的时间。
  - 流是 Node.js 中用于处理数据的一种高效机制，适用于 **处理大规模数据或持续的数据流**。
  - **流的核心思想**：
    - 流的核心思想是将数据分成小块进行处理，而不是一次性加载整个数据集，从而节省内存并提高性能。
    - 比如，使用文件流读取文件，可以将文件一部分一部分地读取，这样做可以保证效率，并且不会占用太大的内存。
  - **流的关键知识点**：
    - 理解流的模式、状态、事件以及常用操作是掌握流技术的关键。
- **流的基本类型**：
  - **可读流（Readable Stream）**：用于从数据源读取数据。
  - **可写流（Writable Stream）**：用于向目标写入数据。
  - **双工流（Duplex Stream）**：同时支持读取和写入操作，也称为可读可写流。
  - **转换流（Transform Stream）**：表示在读写过程中可以修改和变换数据的 `Duplex` 流。
  - 小结：可读流用于读取数据，可写流用于写入数据，双工流和转换流则提供了更复杂的交互能力。
- **Buffer**：
  - Buffer 翻译为中文是缓冲区，我们可以理解为：**一个 Buffer 就是开辟的一块内存区域，Buffer 的大小就是开辟的内存区域的大小**。
  - 在流中，Buffer 的大小取决于传入流构造函数的 highWaterMark 选项参数，该参数指定了字节总数或者对象总数，当可读缓冲区的总大小达到 highWaterMark 指定的阈值时，流会暂时停止从数据源读取数据，直到当前缓冲区的数据被释放；如果要获取缓冲区中存储的数据，需要使用 `writable.writableBuffer` 或 `readable.readableBuffer`。
  - Buffer 是 Node.js 中用于处理二进制数据的工具。
  - 流通常以 Buffer 的形式传递数据，因此理解 Buffer 对于流的操作至关重要。

## 2. 可读流（Readable Stream）

- **可读流的读取模式**：
  - **流动模式（Flowing Mode）**：数据自动流向事件监听器。
    - 流动模式指的是一旦开始读取文件，会按照 `highWaterMark` 的值按次读取，直到读取完为止。
    - 当流处于流动模式时，因为数据是持续变化的，所以需要使用监听事件来处理它。
  - **暂停模式（Paused Mode）**：需要手动调用 `read()` 方法读取数据。
    - 所有的可读流都是以暂停模式开始，当流处于暂停模式时，可以通过 `read()` 方法从流中按需读取数据。
- **模式切换**：
  - 流的暂停模式和流动模式是可以互相切换的。
  - **Paused -> Flowing**：通过添加 `data` 事件、使用 `resume()` 方法或者 `pipe()` 方法等都可以将可读流从暂停模式切换为流动模式。
  - **Flowing -> Paused**：使用 `paused()` 方法或者 `unpipe()` 方法可以将可读流从流动模式切换为暂停模式。
- **可读流的状态**：
  - **初始状态**：流已创建但尚未开始读取。
  - **流动状态**：数据正在流向事件监听器。
  - **暂停状态**：流已暂停，等待进一步操作。
  - **结束状态**：流已读取完毕，没有更多数据。
  - 备注：
    - 在实际使用可读流时，它一共有 3 种状态，即初始状态 `null`、流动状态 `true` 和非流动状态 `false`。
      - 上述提到的【暂停状态】和【结束状态】表示的是流的【非流动状态】。
    - 当流处于初始状态 `null` 时，由于没有数据使用者，所以流不会产生数据，这时如果监听 `data` 事件、调用 `pipe()` 方法或 `resume()` 方法，都会将当前状态切换为流动状态 `true`，这样可读流即可开始主动地产生数据并触发事件。
    - 如果调用 `pause()` 方法或者 `unpipe()` 方法，就会将可读流的状态切换为非流动状态 `false`，这将暂停流，但不会暂停数据生成。
      - 此时，如果再为 `data` 事件设置监听器，就不会再将状态切换为流动状态 `true` 了。
- 可读流可以通过多种方式创建，例如：
  - 使用 `fs.createReadStream(path[, options])` 创建文件流。
  - 使用 `net.Socket` 创建网络流。
  - 食用 stream 模块中的 Readable 类表示 `new stream.Readable()`。
- API `fs.createReadStream(path[, options])` 的详细说明：
  - path 表示读取文件的文件路径，可以是字符串、缓冲区或网址。
  - options 读取文件时的可选参数，常用配置如下：
    - `flags`：指定文件系统的权限，默认为 r。
    - `encoding`：编码方式，默认为 null。
    - `fd`：文件描述符，默认为 null。
    - `mode`：设置文件模式，默认为 0o666。
    - `autoClose`：文件出错或者结束时，是否自动关闭文件，默认为 true。
    - `emitClose`：流销毁时，是否发送 close 事件，默认为 true。
    - `start`：指定开始读取的位置。
    - `end`：指定结束读取的位置。
    - `highWaterMark`：可读取的阈值，一般设置在 16 ～ 100KB 范围内。
- **可读流的属性、方法及事件**：

| 属性 | 说明 |
| --- | --- |
| `destroyed` | 可读流是否已销毁，如果已经调用了 `readable.destroy()` 方法，则该属性值为 `true` |
| `readable` | 可读流是否被破坏、结束或者报错 |
| `readableEncoding` | 获取可读流的 `encoding` 属性 |
| `readableEnded` | 可读流是否已经没有数据，如果触发了 `end` 事件，则该属性值为 `true` |
| `readableFlowing` | 可读流的当前状态 |
| `readableHighWaterMark` | 构造可读流时传入的 `highWaterMark` 的值 |
| `readableLength` | 获取准备读取的队列中的字节数（或对象数） |

| 方法 | 说明 |
| --- | --- |
| `read([size])` | 从流中读取数据 |
| `setEncoding(encoding)` | 设置从流中读取的数据所使用的编码 |
| `pause()` | 暂停从可读流对象发出的 `data` 事件 |
| `ispaused()` | 获取可读流的当前操作状态 |
| `destroy()` | 销毁可读流 |
| `resume()` | 恢复从可读流对象发出的 `data` 事件 |
| `pipe(destination[, options])` | 把可读流的输出传输到一个由 `destination` 参数指定的 `Writable` 流对象 |
| `unpipe([destination])` | 分离附加的 `Writable` 流对象 |
| `filter(fn[, options])` | 筛选流 |
| `forEach(fn[, options])` | 迭代遍历流 |

| 事件 | 说明 |
| --- | --- |
| `close` | 当流或其数据源被关闭时，触发该事件 |
| `data` | 在流将数据块传送给使用者后触发 |
| `end` | 当流中没有数据可供使用时触发 |
| `error` | 当流由于底层内部故障而无法生成数据或尝试推送无效数据块时触发 |
| `pause` | 当调用 `stream.pause()` 且 `readableFlowing` 不为 `false` 时触发 |
| `readable` | 当有数据可从流中读取时触发 |
| `resume` | 当调用 `stream.resume()` 且 `readableFlowing` 不为 `true` 时触发 |

- **可读流的常见操作**：

```javascript
// 读取数据
const fs = require('fs')
const readable = fs.createReadStream('example.txt')

readable.on('data', (chunk) => {
  console.log(`Received chunk: ${chunk}`)
})

readable.on('end', () => {
  console.log('Stream ended')
})
```

```javascript
// 设置编码格式
const readable = fs.createReadStream(
  'example.txt',
  { encoding: 'utf8' }, // 如果希望将 Buffer 数据解析为字符串，可以设置编码格式。
)
```

```javascript
// 暂停与恢复流
readable.pause() // 暂停流
readable.resume() // 恢复流
```

```javascript
// 获取流的运行状态
console.log(readable.readable) // 是否可读
console.log(readable.paused) // 是否暂停
```

```javascript
// 销毁流
readable.destroy() // 销毁流
```

```javascript
// 绑定可写流至可读流
const writable = fs.createWriteStream('output.txt')
readable.pipe(writable) // 使用 pipe() 方法将可读流的数据传输到可写流
// 相当于将两个管道连接起来，实现数据的传输。
```

```javascript
// 解绑可写流
readable.unpipe(writable)
// 使用 unpipe() 方法解除绑定
// 相当于将连接切换。
```

## 3. 可写流（Writable Stream）

- 可写流可以通过多种方式创建，例如：
  - 使用 `fs.createWriteStream()` 创建文件流。
  - 使用 `net.Socket` 创建网络流。
  - 使用自定义流类继承 `stream.Writable`。
- 可写流的属性、方法及事件：
  - **属性**：
    - `writable`：表示流是否处于可写状态。
  - **方法**：
    - `write(data)`：向流中写入数据。
    - `end()`：结束流的写入。
    - `destroy()`：销毁流。
  - **事件**：
    - `drain`：当写入缓冲区为空时触发。
    - `finish`：当流结束写入时触发。
    - `error`：当发生错误时触发。
- **可写流的常见操作**：

```javascript
// 写入数据
const fs = require('fs')
const writable = fs.createWriteStream('output.txt')

writable.write('Hello, ')
writable.write('World!')
```

```javascript
// 设置编码方式
const writable = fs.createWriteStream(
  'output.txt',
  { encoding: 'utf8' }, // 如果写入的是字符串，可以指定编码格式为 utf8。
)
```

```javascript
// 关闭流
writable.end()
```

```javascript
// 销毁流
writable.destroy()
```

```javascript
// 将数据缓冲到内存
// 可以使用 Buffer 或其他缓存机制存储数据，然后再写入流。
const buffer = Buffer.from('Hello, World!')

// 输出缓冲后的数据
// 在写入流之前，可以先将数据存储到缓冲区，然后一次性写入。
writable.write(buffer)
```

## 4. 双工流（Duplex Stream）

- 双工流同时支持读取和写入操作，例如 `net.Socket` 就是一个典型的双工流。
- 它允许在同一个流上进行双向通信。
- **双工流的定义**：
  - 双工流是同时支持读取和写入操作的流，继承自 `stream.Duplex` 类。
  - 它结合了可读流和可写流的功能，允许在同一个流上进行双向通信。
- **双工流的特点**：
  - **独立性**：双工流的读取和写入操作是相互独立的。例如，从一个双工流中读取的数据可能与写入的数据无关。
  - **灵活性**：双工流可以用于实现复杂的数据处理逻辑，例如网络通信、数据转发等。
- **双工流的应用场景**：
  - **网络通信**：`net.Socket` 是一个典型的双工流，允许客户端和服务端之间进行双向数据传输。
  - **数据转发**：例如，从一个输入流读取数据并将其转发到另一个输出流。
  - **实时数据处理**：例如，在 WebSocket 中实现双向通信。
- **双工流的创建**：
  - 可以通过继承 `stream.Duplex` 类来创建自定义的双工流。

```javascript
const { Duplex } = require('stream')

class MyDuplexStream extends Duplex {
  constructor(options) {
    super(options)
    this.data = []
  }

  _read(size) {
    // 从内部缓冲区读取数据
    const chunk = this.data.shift()
    if (chunk !== undefined) {
      this.push(chunk) // 将数据推送到可读流
    } else {
      this.push(null) // 表示流结束
    }
  }

  _write(chunk, encoding, callback) {
    // 将数据写入内部缓冲区
    this.data.push(chunk)
    callback() // 写入完成后的回调
  }
}

const duplexStream = new MyDuplexStream()

// 写入数据
duplexStream.write('Hello')
duplexStream.write('World')

// 读取数据
duplexStream.on('data', (chunk) => {
  console.log(`Received: ${chunk.toString()}`)
})
```

- **双工流的常见操作**：
  - **写入数据**：使用 `write()` 方法向双工流写入数据。
  - **读取数据**：监听 `data` 事件或调用 `read()` 方法读取数据。
  - **结束流**：使用 `end()` 方法结束写入操作。
  - **销毁流**：使用 `destroy()` 方法手动销毁流。
- **注意事项**：
  - 双工流的读取和写入操作是独立的，因此需要分别实现 `_read()` 和 `_write()` 方法。
  - 在自定义双工流时，确保正确处理缓冲区和流的状态，以避免内存泄漏或数据丢失。

## 5. 转换流（Transform Stream）

- 转换流是一种特殊的双工流，可以在读取和写入过程中对数据进行转换。
- 例如，`zlib.createGzip()` 返回的就是一个转换流，用于压缩数据。
- **转换流的定义**：
  - 转换流是一种特殊的双工流，继承自 `stream.Transform` 类。
  - 它在读取和写入过程中对数据进行转换，适用于需要对数据进行加工或处理的场景。
- **转换流的特点**：
  - **数据转换**：转换流的核心功能是对数据进行加工或转换，例如压缩、解压、加密、解密等。
  - **链式操作**：转换流可以与其他流（如可读流、可写流）组合使用，形成数据处理管道。
- **转换流的应用场景**：
  - **数据压缩与解压**：例如，使用 `zlib.createGzip()` 创建一个压缩流，或者使用 `zlib.createGunzip()` 创建一个解压缩流。
  - **数据加密与解密**：例如，使用 `crypto.createCipher()` 和 `crypto.createDecipher()` 实现数据加密和解密。
  - **数据格式转换**：例如，将 JSON 数据转换为字符串，或将二进制数据转换为 Base64 编码。
- **转换流的创建**：
  - 可以通过继承 `stream.Transform` 类来创建自定义的转换流。

```javascript
const { Transform } = require('stream')

class UppercaseTransform extends Transform {
  constructor(options) {
    super(options)
  }

  _transform(chunk, encoding, callback) {
    // 将数据转换为大写
    const uppercased = chunk.toString().toUpperCase()
    this.push(uppercased) // 将转换后的数据推送到可读流
    callback() // 转换完成后的回调
  }
}

const transformStream = new UppercaseTransform()

// 写入数据
transformStream.write('hello')
transformStream.write('world')

// 结束写入
transformStream.end()

// 读取数据
transformStream.on('data', (chunk) => {
  console.log(`Transformed: ${chunk.toString()}`) // 输出 "HELLO" 和 "WORLD"
})
```

- **转换流的常见操作**：
  - **写入数据**：使用 `write()` 方法向转换流写入数据。
  - **读取数据**：监听 `data` 事件或调用 `read()` 方法读取转换后的数据。
  - **结束流**：使用 `end()` 方法结束写入操作。
  - **销毁流**：使用 `destroy()` 方法手动销毁流。
- **内置的转换流**：Node.js 提供了一些常用的转换流，可以直接使用：

```javascript
// 压缩与解压
const zlib = require('zlib')
const fs = require('fs')

// 压缩文件
const gzip = zlib.createGzip()
const input = fs.createReadStream('input.txt')
const output = fs.createWriteStream('output.txt.gz')

input.pipe(gzip).pipe(output)
```

```javascript
// 加密与解密
const crypto = require('crypto')
const fs = require('fs')

// 加密文件
const cipher = crypto.createCipher('aes-256-cbc', 'secret-key')
const input = fs.createReadStream('input.txt')
const output = fs.createWriteStream('encrypted.txt')

input.pipe(cipher).pipe(output)
```

- **注意事项**：
  - 转换流的核心方法是 `_transform()`，它负责对数据进行加工或转换。
  - 如果需要在流结束时执行额外的操作，可以实现 `_flush()` 方法。
  - 在自定义转换流时，确保正确处理数据块和编码，以避免数据损坏或丢失。
