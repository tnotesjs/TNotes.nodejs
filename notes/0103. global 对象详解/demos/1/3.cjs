// 列出 global 对象的所有属性
console.log('=== global 对象的所有属性 ===')
const properties = Object.getOwnPropertyNames(global)
console.log('属性数量：', properties.length)
console.log('\n前 20 个属性：')
properties.slice(0, 20).forEach((prop, index) => {
  console.log(`${index + 1}. ${prop}`)
})
