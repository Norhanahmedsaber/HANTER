function three(r) {
    r = 0
}
function two(r) {
    three(r)
}
function one(r) {
    r.name = r.name.concat(['norhan'])
}
let anas = {name: ['anas']}
one(anas)
console.log(anas)