const sourceCode = 'ANAS :{const x = 4}'
console.log(require('abstract-syntax-tree').parse(sourceCode).body[0])
