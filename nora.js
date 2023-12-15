const sourceCode = 'const x = (a, b) => {if(y) {}};'
const node = {
    type: 'ArrowFunctionExpression',
    params: [],
    body: { type: 'BlockStatement', body: [{
        type: 'BlockStatement',
        body: [
          {
            type: 'VariableDeclaration',
            kind: 'let',
            declarations: []
          }
        ]
      }]  },
    async: true,
    expression: true
}
console.log(require('abstract-syntax-tree').parse(sourceCode).body[0].declarations[0].init.body.body[0])
//console.log(require('abstract-syntax-tree').generate(node))
