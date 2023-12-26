// export interface ArrowFunctionExpression extends _Node {
//     type: 'ArrowFunctionExpression';
//     params: Parameter[];
//     body: Expression | BlockStatement;
//     async: boolean;
//     expression: boolean; lw mafee4 blockstatement wala fe return 
//  }


const sourceCode = 'const x = async()=>{return false};'
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
console.log(require('abstract-syntax-tree').parse(sourceCode).body[0].declarations[0].init)
console.log(require('abstract-syntax-tree').generate(node))

// examples
// ArrowFunctionExpression -> Params (ObjectPattern)
// ({}) => {

// };

// ArrowFunctionExpression -> Params (AssignmentPattern -> ObjectPattern)
// ({}) => {

// };