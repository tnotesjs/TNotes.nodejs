import { dirname } from 'path'
import { fileURLToPath } from 'url'

console.log(typeof __filename) // undefined
console.log(typeof __dirname) // undefined

// 计算 __filename
const myFilename = fileURLToPath(import.meta.url)

// 计算 __dirname
const myDirname = dirname(myFilename)

console.log(myFilename) // C:\notes\TNotes.nodejs\notes\0044. __filename 和 __dirname\demos\2\1.mjs
console.log('myDirname:', myDirname) // C:\notes\TNotes.nodejs\notes\0044. __filename 和 __dirname\demos\2

console.log(import.meta.filename)
console.log(import.meta.dirname)

// import.meta.url 是获取当前模块位置的标准方法
// fileURLToPath(import.meta.url) 相当于 CommonJS 中的 __filename
// dirname(__filename) 相当于 CommonJS 中的 __dirname
