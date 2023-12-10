const sourceCode = 'let anas = ()=>{}'

console.log(require('abstract-syntax-tree').parse(sourceCode).body[0].declarations[0])

