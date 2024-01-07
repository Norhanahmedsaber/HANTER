const sourceCode = 'if(cond1) {} else if(cond2) {} else {}'
console.log(require('abstract-syntax-tree').parse(sourceCode).body[0])


// examples
// const x = (a, b) => {
//     if(y) {
//         if(h) {

//         }else {
            
//         }
//     }
// };
