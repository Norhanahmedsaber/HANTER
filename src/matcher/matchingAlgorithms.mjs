function matchVariableDeclaration(targetednNode, node) {

    // Kind Checking
    if(node.kind !== targetednNode.kind) {
        return false
    }

    // Declarations Checking
    if(targetednNode.declarations.length > node.declarations.length) {
        return false
    }
    for(let targetedVariableDeclarator of targetednNode.declarations) {
        let variableDeclaratorFound = false
        for(let nodeVariableDeclarator of node.declarations) {
            variableDeclaratorFound = matchVariableDeclarator(targetedVariableDeclarator,nodeVariableDeclarator)
        }
        if(!variableDeclaratorFound){
            return false
        }
    }
    return true
}
function matchVariableDeclarator(targetednNode, node) {
    if(targetednNode.id.type !== node.id.type) {
        return false
    }
    switch(targetednNode.id.type) {
        case 'ExpressionStatement'
    }
    return true
}
const matchTypes = {
    VariableDeclaration: matchVariableDeclaration,
    VariableDeclarator: matchVariableDeclarator
}
export default matchTypes