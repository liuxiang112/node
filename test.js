// 
let liuxiang = { name: 'liuxiang', daughter: { name: 'liu'}}
let obj = Object.assign({}, liuxiang)
console.log(liuxiang)
console.log(obj)
obj.daughter.name = 'wang'
console.log(liuxiang)
console.log(obj)