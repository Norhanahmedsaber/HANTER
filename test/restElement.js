// export interface RestElement extends _Node {
//     type: 'RestElement';
//     argument: BindingPattern | Identifier | MetaVariable | Expression | PropertyName;
//     value?: AssignmentPattern; // Not applicable in JS no params should be decalred after a rest element
//   }


const sourceCode = 'const x = (...x) => {}'
const node = {
  type: 'VariableDeclaration',
  kind: 'const',
  declarations: [ { type: 'VariableDeclarator', 
  id: { type: 'Identifier', name: 'x' }, 
  init: {
    type: 'ArrowFunctionExpression',
    params: [ { type: 'RestElement', argument: { type: 'Identifier', name: 'x' } }, value = {
      type: 'AssignmentPattern',
      left: { type: 'Identifier', name: 'y' },
      right: { type: 'Identifier', name: 'z' },
    } ],    
    body: { type: 'BlockStatement', body: [] },
    async: false,
    expression: false
  } } ]
}
console.log(require('abstract-syntax-tree').parse(sourceCode).body[0].declarations[0].init.params)
// console.log(require('abstract-syntax-tree').generate(node))



  