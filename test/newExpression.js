// export interface NewExpression extends _Node {
//     type: 'NewExpression';
//     callee: LeftHandSideExpression;
//     arguments: Expression[];
//   }
// const anas = new nora(1,2,(x,y)=>{})
const sourceCode = 'const anas = new nora(1,2)'
console.log(require('abstract-syntax-tree').parse(sourceCode).body[0].declarations[0].init)
