const sourceCode = 'const x= ()=>{  var i = 0;do {i += 1;result += i + "";}while (i > 0 );}'
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
console.log(require('abstract-syntax-tree').parse(sourceCode).body[0].declarations[0].init.body)
// console.log(require('abstract-syntax-tree').generate(node))

