// export interface ConditionalExpression extends _Node {
//     type: 'ConditionalExpression';
//     test: Expression;
//     consequent: Expression;
//     alternate: Expression;
//   }

const sourceCode = 'anas?nora:ahmed'
console.log(require('abstract-syntax-tree').parse(sourceCode).body[0])
