
const sourceCode = 'function nas(anas){}'
const node = {
  type: 'ExpressionStatement',
  expression: {
    type: 'CallExpression',
    callee: {
      type: 'MemberExpression',
      object: { type: 'Identifier', name: 'console' },
      computed: true,
      property: { type: 'Identifier', name: 'log' }
    },
    arguments: [{ type: 'Identifier', name: 'anas' }]
  }
}
console.log(require('abstract-syntax-tree').parse(sourceCode).body[0])

// console.log(require('abstract-syntax-tree').generate(node))
