// 模块作用域变量（不在 global 上）
console.log('=== 模块作用域变量 ===')
console.log('__filename：', __filename)
console.log('__dirname：', __dirname)

console.log('\n=== 检查是否在 global 上 ===')
console.log('global.__filename：', global.__filename) // undefined
console.log('global.__dirname：', global.__dirname) // undefined
console.log('global.exports：', global.exports) // undefined
console.log('global.require：', global.require) // undefined

console.log('\n=== 模块内的 this ===')
console.log('this === global：', this === global) // false
console.log('this === exports：', this === exports) // true
