// export interface LogicalExpression extends _Node {
//     type: 'LogicalExpression';
//     operator: string;
//     left: Expression;
//     right: Expression;
//   }

const sourceCode = 'anas && nora'
console.log(require('abstract-syntax-tree').parse(sourceCode).body[0])
