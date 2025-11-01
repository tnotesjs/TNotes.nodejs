// 查看 global 对象的一些基本属性
console.log('=== Node.js 版本信息 ===')
console.log('Node 版本：', process.version)

console.log('\n=== 定时器函数 ===')
console.log('setTimeout 是否存在：', typeof setTimeout === 'function')
console.log('setInterval 是否存在：', typeof setInterval === 'function')
console.log('setImmediate 是否存在：', typeof setImmediate === 'function')

console.log('\n=== 全局对象 ===')
console.log('console 是否存在：', typeof console === 'object')
console.log('Buffer 是否存在：', typeof Buffer === 'function')
console.log('process 是否存在：', typeof process === 'object')

console.log('\n=== 检查是否在 global 上 ===')
console.log('global.console === console：', global.console === console)
console.log('global.Buffer === Buffer：', global.Buffer === Buffer)
console.log('global.process === process：', global.process === process)
