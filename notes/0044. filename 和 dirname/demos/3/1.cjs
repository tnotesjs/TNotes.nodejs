console.log(global.__filename) // undefined
console.log(global.__dirname) // undefined

// __dirname 和 __filename 并不是真正意义上的全局变量。

// __dirname 和 __filename 不是全局对象的属性，它们不能通过 global 对象访问。
// global.__dirname 和 global.__filename 都是 undefined

// __dirname 和 __filename 是在每个模块编译过程中被注入的模块级局部变量
// 它们的作用域仅限于当前模块，而不是全局作用域
