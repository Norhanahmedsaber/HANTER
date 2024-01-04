const sourceCode = 'const x=`nora ${anas}${anas} hesham ${g} ffff`'
const node = {
  type: 'VariableDeclaration',
  kind: 'const',
  declarations: [ { type: 'VariableDeclarator', 
  id: { type: 'Identifier', name: 'x' }, 
  init: {
    type: 'TemplateLiteral',
    expressions: [ { type: 'Identifier', name: 'anas' } ],       
    quasis: [
      {
        type: 'TemplateElement',
        value: { cooked: 'heelo ', raw: 'heelo ' },
        tail: false
      },
      {
        type: 'TemplateElement',
        value: { cooked: 'nora ', raw: 'nora ' },
        tail: false
      },
      {
        type: 'TemplateElement',
        value: { cooked: 'nora ', raw: 'ahmed ' },
        tail: false
      },
    ]
  }} ]
}
 console.log(require('abstract-syntax-tree').parse(sourceCode).body[0].declarations[0].init)
// console.log(require('abstract-syntax-tree').generate(node))

