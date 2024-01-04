"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _expression = _interopRequireDefault(require("./definitions/expression"));
var _leftHandSideExpression = _interopRequireDefault(require("./definitions/leftHandSideExpression"));
var _primaryExpression = _interopRequireDefault(require("./definitions/primaryExpression"));
var _literalExpression = _interopRequireDefault(require("./definitions/literalExpression"));
var _statement = _interopRequireDefault(require("./definitions/statement"));
var _restElement = _interopRequireDefault(require("./definitions/restElement"));
var _spreadArgument = _interopRequireDefault(require("./definitions/spreadArgument"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function matchVariableDeclaration(targetednNode, node) {
  // Kind Checking
  if (node.kind !== targetednNode.kind) {
    return false;
  }

  // Declarations Checking
  if (targetednNode.declarations.length > node.declarations.length) {
    return false;
  }
  var _iterator = _createForOfIteratorHelper(targetednNode.declarations),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var targetedVariableDeclarator = _step.value;
      var variableDeclaratorFound = false;
      var _iterator2 = _createForOfIteratorHelper(node.declarations),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var nodeVariableDeclarator = _step2.value;
          variableDeclaratorFound = matchVariableDeclarator(targetedVariableDeclarator, nodeVariableDeclarator);
          break;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (!variableDeclaratorFound) {
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
}
function matchVariableDeclarator(targetednNode, node) {
  // id Type Checking
  if (targetednNode.id.type !== node.id.type) {
    return false;
  }
  // id Checking
  switch (targetednNode.id.type) {
    case 'Identifier':
      if (!matchIdentifier(targetednNode.id, node.id)) {
        return false;
      }
      break;
    // TODO Binding Patterns
  }
  // init Type Checking
  if (targetednNode.init && !node.init) {
    return false;
  }
  if (targetednNode.init && node.init) {
    if (targetednNode.init.type !== node.init.type) {
      return false;
    }
    if (!matchExpression(targetednNode.init, node.init)) {
      return false;
    }
  }
  return true;
}
function matchIdentifier(targetednNode, node) {
  return targetednNode.name === node.name;
}
function matchArrowFunctionExpression(targetednNode, node) {
  if (targetednNode.expression !== node.expression) {
    return false;
  }
  if (targetednNode.async !== node.async) {
    return false;
  }
  if (targetednNode.params.length > node.params.length) {
    return false;
  }
  // Params
  for (var index in targetednNode.params) {
    if (!matchParameter(targetednNode.params[index], node.params[index])) {
      return false;
    }
  }
  // Body
  if (targetednNode.body.type !== node.body.type) {
    return false;
  }
  if (targetednNode.body.type === 'BlockStatement') {
    if (!matchBlockStatement(targetednNode.body, node.body)) {
      return false;
    }
  } else {
    if (!matchExpression(targetednNode.body, node.body)) {
      return false;
    }
  }
  return true;
}
function matchBlockStatement(targetedNode, node) {
  if (targetedNode.body.length > node.body.length) {
    return false;
  }
  if (targetedNode.body.length !== 0) {
    var currentTargetedStatement = 0; // i
    var currentNodeStatement = 0; // c
    while (currentTargetedStatement < targetedNode.body.length && currentNodeStatement < node.body.length) {
      if (matchStatement(targetedNode.body[currentTargetedStatement], node.body[currentNodeStatement])) {
        currentTargetedStatement++;
      }
      currentNodeStatement++;
    }
    if (currentTargetedStatement < targetedNode.body.length) {
      return false;
    }
  } else {
    if (node.body.length > 0) {
      return false;
    }
  }
  return true;
}
function matchBreakStatement(targetednNode, node) {
  return true;
}
function matchContinueStatement(targetednNode, node) {
  return true;
}
function matchDebuggerStatement(targetednNode, node) {
  return true;
}
function matchEmptyStatement(targetednNode, node) {
  return true;
}
function matchExpressionStatement(targetednNode, node) {
  return true;
}
function matchIfStatement(targetednNode, node) {
  // test
  if (!matchExpression(targetednNode.test, node.test)) {
    return false;
  }
  // consquent
  if (!matchStatement(targetednNode.consequent, node.consequent)) {
    return false;
  }
  // alternate
  if (targetednNode.alternate && !node.alternate) {
    return false;
  }
  if (targetednNode.alternate && node.alternate) {
    if (!matchStatement(targetednNode.alternate, node.alternate)) {
      return false;
    }
  }
  return true;
}
function matchImportDeclaration(targetednNode, node) {
  return true;
}
function matchLabeledStatement(targetednNode, node) {
  return true;
}
function matchReturnStatement(targetednNode, node) {
  return true;
}
function matchSwitchStatement(targetednNode, node) {
  return true;
}
function matchThrowStatement(targetednNode, node) {
  return true;
}
function matchTryStatement(targetednNode, node) {
  return true;
}
function matchWithStatement(targetednNode, node) {
  return true;
}
function matchExportDefaultDeclaration(targetednNode, node) {
  return true;
}
function matchExportAllDeclaration(targetednNode, node) {
  return true;
}
function matchExportNamedDeclaration(targetednNode, node) {
  return true;
}
function matchFunctionDeclaration(targetednNode, node) {
  return true;
}
function matchDoWhileStatement(targetednNode, node) {
  return true;
}
function matchForInStatement(targetednNode, node) {
  return true;
}
function matchForOfStatement(targetednNode, node) {
  return true;
}
function matchForStatement(targetednNode, node) {
  return true;
}
function matchWhileStatement(targetednNode, node) {
  return true;
}
function matchStatement(targetednNode, node) {
  if (targetednNode.type !== node.type) {
    return false;
  }
  switch (_statement["default"][targetednNode.type]) {
    case 'BlockStatement':
      if (!matchBlockStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'IfStatement':
      if (!matchIfStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'BreakStatement':
      if (!matchBreakStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'ContinueStatement':
      if (!matchContinueStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'DebuggerStatement':
      if (!matchDebuggerStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'EmptyStatement':
      if (!matchEmptyStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'ExpressionStatement':
      if (!matchExpressionStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'ImportDeclaration':
      if (!matchImportDeclaration(targetednNode, node)) {
        return false;
      }
      break;
    case 'LabeledStatement':
      if (!matchLabeledStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'ReturnStatement':
      if (!matchReturnStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'SwitchStatement':
      if (!matchSwitchStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'ThrowStatement':
      if (!matchThrowStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'TryStatement':
      if (!matchTryStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'VariableDeclaration':
      if (!matchVariableDeclaration(targetednNode, node)) {
        return false;
      }
      break;
    case 'WithStatement':
      if (!matchWithStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'ClassDeclaration':
      if (!matchClassDeclaration(targetednNode, node)) {
        return false;
      }
      break;
    case 'ClassExpression':
      if (!matchClassExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'ExportDefaultDeclaration':
      if (!matchExportDefaultDeclaration(targetednNode, node)) {
        return false;
      }
      break;
    case 'ExportAllDeclaration':
      if (!matchExportAllDeclaration(targetednNode, node)) {
        return false;
      }
      break;
    case 'ExportNamedDeclaration':
      if (!matchExportNamedDeclaration(targetednNode, node)) {
        return false;
      }
      break;
    case 'FunctionDeclaration':
      if (!matchFunctionDeclaration(targetednNode, node)) {
        return false;
      }
      break;
    case 'DoWhileStatement':
      if (!matchDoWhileStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'ForInStatement':
      if (!matchForInStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'ForOfStatement':
      if (!matchForOfStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'ForStatement':
      if (!matchForStatement(targetednNode, node)) {
        return false;
      }
      break;
    case 'WhileStatement':
      if (!matchWhileStatement(targetednNode, node)) {
        return false;
      }
      break;
  }
  return true;
}
function matchArguments(targetednNode, node) {
  if (targetednNode.length > node.length) {
    return false;
  }
  for (var index in targetednNode) {
    if (!matchExpression(targetednNode[index], node[index])) {
      return false;
    }
  }
  return true;
}
function matchParameter(targetednNode, node) {
  if (targetednNode.type !== node.type) {
    return false;
  }
  switch (targetednNode.type) {
    case 'Identifier':
      if (!matchIdentifier(targetednNode, node)) {
        return false;
      }
      break;
    case 'AssignmentPattern':
      if (!matchAssignmentPattern(targetednNode, node)) {
        return false;
      }
      break;
    case 'RestElement':
      if (!matchRestElement(targetednNode, node)) {
        return false;
      }
      break;
    case 'ArrayPattern':
      if (!matchObjectPattern(targetednNode, node)) {
        return false;
      }
      break;
    case 'ObjectPattern':
      if (!matchArrayPattern(targetednNode, node)) {
        return false;
      }
      break;
  }
  return true;
}
function matchAssignmentPattern(targetednNode, node) {
  if (targetednNode.right && !node.right) {
    return false;
  }
  if (targetednNode.right) {
    if (targetednNode.right.type !== node.right.type) {
      return false;
    }
    if (!matchExpression(targetednNode, node)) {
      return false;
    }
  }
  if (targetednNode.left.type !== node.left.type) {
    return false;
  }
  switch (targetednNode.left.type) {
    case 'Identifier':
      if (!matchIdentifier(targetednNode, node)) {
        return false;
      }
      break;
    case 'ArrayPattern':
      if (!matchArrayPattern(targetednNode, node)) {
        return false;
      }
      break;
    case 'ObjectPattern':
      if (!matchObjectPattern(targetednNode, node)) {
        return false;
      }
      break;
  }
  return true;
}
function matchAssignmentExpression(targetednNode, node) {
  // operator
  if (targetednNode.operator !== node.operator) {
    return false;
  }
  // left
  if (!matchExpression(targetednNode.left, node.left)) {
    return false;
  }
  // right
  if (!matchExpression(targetednNode.right, node.right)) {
    return false;
  }
  return true;
}
function matchBinaryExpression(targetednNode, node) {
  // operator
  if (targetednNode.operator !== node.operator) {
    return false;
  }
  // left
  if (!matchExpression(targetednNode.left, node.left)) {
    return false;
  }
  // right
  if (!matchExpression(targetednNode.right, node.right)) {
    return false;
  }
  return true;
}
function matchConditionalExpression(targetednNode, node) {
  // test
  if (!matchExpression(targetednNode.test, node.test)) {
    return false;
  }
  // consequent
  if (!matchExpression(targetednNode.consequent, node.consequent)) {
    return false;
  }
  // alternate
  if (!matchExpression(targetednNode.alternate, node.alternate)) {
    return false;
  }
  return true;
}
function matchLogicalExpression(targetednNode, node) {
  // operator
  if (targetednNode.operator !== node.operator) {
    return false;
  }
  // left
  if (!matchExpression(targetednNode.left, node.left)) {
    return false;
  }
  // right
  if (!matchExpression(targetednNode.right, node.right)) {
    return false;
  }
  return true;
}
function matchNewExpression(targtedNode, node) {
  // callee
  if (!matchLeftHandSideExpression(targtedNode.callee, node.callee)) {
    return false;
  }
  // arguments
  if (!matchArguments(targtedNode.arguments, node.arguments)) {
    return false;
  }
  return true;
}
function matchRestElement(targtedNode, node) {
  // argument
  if (targtedNode.argument.type !== node.argument.type) {
    return false;
  }
  switch (_restElement["default"][targtedNode]) {
    case 'Identifier':
      if (!matchIdentifier(targtedNode.argument, node.argument)) {
        return false;
      }
      break;
    case 'PropertyName':
      if (!matchPropertyName(targtedNode.argument, node.argument)) {
        return false;
      }
      break;
    case 'BindingPattern':
      if (!matchBindingPattern(targtedNode.argument, node.argument)) {
        return false;
      }
      break;
  }
  // value (OPTIONAL)
  // Value isn't applicable in JS we can't decalre params after a rest element

  return true;
}
function matchBindingPattern(targetednNode, node) {
  return true;
}
function matchPropertyName(targetednNode, node) {
  switch (targetednNode.type) {
    case 'Identifier':
      if (!matchIdentifier(targetednNode, node)) {
        return false;
      }
      break;
    case 'Literal':
      if (!matchLiteral(targetednNode, node)) {
        return false;
      }
      break;
  }
  return true;
}
function matchSequenceExpression(targetednNode, node) {
  return true;
}
function matchAwaitExpression(targetednNode, node) {
  // moseeba our meriyah doesnt read await as reserved word
  if (!matchExpression(targetednNode.argument, node.argument)) {
    return false;
  }
  return true;
}
function matchLeftHandSideExpression(targetednNode, node) {
  switch (_leftHandSideExpression["default"][targetednNode.type]) {
    case 'CallExpression':
      if (!matchCallExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'ChainExpression':
      // skipped
      if (!matchChainExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'ImportExpression':
      // skipped
      if (!matchImportExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'ClassExpression':
      // skipped
      if (!matchClassExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'ClassDeclaration':
      // skipped
      if (!matchClassDeclaration(targetednNode, node)) {
        return false;
      }
      break;
    case 'FunctionExpression':
      if (!matchFunctionExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'LiteralExpression':
      // NotNode
      if (!matchLiteralExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'MemberExpression':
      if (!matchMemberExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'PrimaryExpression':
      // NotNode
      if (!matchPrimaryExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'TaggedTemplateExpression':
      if (!matchTaggedTemplateExpression(targetednNode, node)) {
        return false;
      }
      break;
  }
  return true;
}
function matchCallExpression(targetednNode, node) {
  // callee
  if (targetednNode.callee.type !== node.callee.type) {
    return false;
  }
  if (targetednNode.type === 'Super') {
    if (!matchSuper(targetednNode, node)) {
      return false;
    }
  } else {
    if (!matchExpression(targetednNode.callee, node.callee)) {
      return false;
    }
  }

  // arguments
  if (targetednNode.arguments.length > node.arguments.length) {
    return false;
  }
  for (var index in targetednNode.arguments) {
    if (targetednNode.arguments[index].type !== node.arguments[index].type) {
      return false;
    }
    if (targetednNode.arguments[index].type == 'SpreadElement') {
      if (!matchSpreadElement(targetednNode.arguments[index], node.arguments[index])) {
        return false;
      }
    } else {
      if (!matchExpression(targetednNode.arguments[index], node.arguments[index])) {
        return false;
      }
    }
  }
  return true;
}
function matchSpreadElement(targetednNode, node) {
  if (!matchSpreadArgument(targetednNode.argument, node.argument)) {
    return false;
  }
  return true;
}
function matchSpreadArgument(targetednNode, node) {
  if (targetednNode.type !== node.type) {
    return false;
  }
  switch (_spreadArgument["default"][targetednNode.type]) {
    case 'Identifier':
      if (!matchIdentifier(targetednNode, node)) {
        return false;
      }
      break;
    case 'SpreadElement':
      if (!matchSpreadElement(targetednNode, node)) {
        return false;
      }
      break;
    case 'BindingPattern':
      if (!matchBindingPattern(targetednNode, node)) {
        return false;
      }
      break;
    case 'Expression':
      if (!matchExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'PropertyName':
      if (!matchPropertyName(targetednNode, node)) {
        return false;
      }
      break;
  }
}
function matchChainExpression(targetednNode, node) {
  return true;
}
function matchImportExpression(targetednNode, node) {
  return true;
}
function matchClassExpression(targetednNode, node) {
  return true;
}
function matchClassDeclaration(targetednNode, node) {
  return true;
}
function matchFunctionExpression(targetednNode, node) {
  if (targetednNode.generator !== node.generator) {
    return false;
  }
  if (targetednNode.async !== node.async) {
    return false;
  }
  if (targetednNode.params.length > node.params.length) {
    return false;
  }
  for (var index in targetednNode.params) {
    if (!matchParameter(targetednNode.params[index], node.params[index])) {
      return false;
    }
  }
  if (targetednNode.body) {
    if (!matchBlockStatement(targetednNode.body, node.body)) {
      return false;
    }
  }
  return true;
}
function matchLiteralExpression(targetednNode, node) {
  if (targetednNode.type !== node.type) {
    return false;
  }
  switch (_literalExpression["default"][targetednNode.type]) {
    case 'Literal':
      if (!matchLiteral(targetednNode, node)) {
        return false;
      }
      break;
    case 'TemplateLiteral':
      if (!matchTemplateLiteral(targetednNode, node)) {
        return false;
      }
      break;
  }
  return true;
}
function matchMemberExpression(targetednNode, node) {
  return true;
}
function matchPrimaryExpression(targetednNode, node) {
  switch (_primaryExpression["default"][targetednNode.type]) {
    case 'ArrayExpression':
      if (!matchArrayExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'ArrayPattern':
      if (!matchArrayPattern(targetednNode, node)) {
        return false;
      }
      break;
    case 'ClassExpression':
      if (!matchClassExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'FunctionExpression':
      if (!matchFunctionExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'Identifier':
      if (!matchIdentifier(targetednNode, node)) {
        return false;
      }
      break;
    case 'Import':
      if (!matchImport(targetednNode, node)) {
        return false;
      }
    case 'JSXElement':
      if (!matchJSXElement(targetednNode, node)) {
        return false;
      }
      break;
    case 'JSXFragment':
      if (!matchJSXFragment(targetednNode, node)) {
        return false;
      }
      break;
    case 'JSXOpeningElement':
      if (!matchJSXOpeningElement(targetednNode, node)) {
        return false;
      }
      break;
    case 'Literal':
      if (!matchLiteral(targetednNode, node)) {
        return false;
      }
      break;
    case 'MetaProperty':
      if (!matchMetaProperty(targetednNode, node)) {
        return false;
      }
      break;
    case 'ObjectExpression':
      if (!matchObjectExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'ObjectPattern':
      if (!matchObjectPattern(targetednNode, node)) {
        return false;
      }
      break;
    case 'Super':
      if (!matchSuper(targetednNode, node)) {
        return false;
      }
      break;
    case 'TemplateLiteral':
      if (!matchTemplateLiteral(targetednNode, node)) {
        return false;
      }
      break;
    case 'ThisExpression':
      if (!matchThisExpression(targetednNode, node)) {
        return false;
      }
      break;
  }
  return true;
}
function matchArrayExpression(targetednNode, node) {
  return true;
}
function matchArrayPattern(targetednNode, node) {
  return true;
}
function matchImport(targetednNode, node) {
  return true;
}
function matchJSXElement(targetednNode, node) {
  return true;
}
function matchJSXFragment(targetednNode, node) {
  return true;
}
function matchJSXOpeningElement(targetednNode, node) {
  return true;
}
function matchLiteral(targetednNode, node) {
  if (targetednNode.value !== node.value) {
    return false;
  }
  return true;
}
function matchMetaProperty(targetednNode, node) {
  return true;
}
function matchObjectExpression(targetednNode, node) {
  return true;
}
function matchObjectPattern(targetednNode, node) {
  return true;
}
function matchSuper(targetednNode, node) {
  return true;
}
function matchTemplateElement(targetedNode, node) {
  if (targetedNode.tail !== node.tail) {
    return false;
  }
  if (targetedNode.value.raw !== node.value.raw) {
    return false;
  }
  if (targetedNode.value.cooked !== node.value.cooked) {
    return false;
  }
  return true;
}
function matchTemplateLiteral(targetedNode, node) {
  // quasis
  for (var index in targetedNode.quasis) {
    if (!matchTemplateElement(targetedNode.quasis[index], node.quasis[index])) {
      return false;
    }
  }
  // expressions
  for (var _index in targetedNode.expressions) {
    if (!matchExpression(targetedNode.expressions[_index], node.expressions[_index])) {
      return false;
    }
  }
  return true;
}
function matchThisExpression(targetednNode, node) {
  return true;
}
function matchTaggedTemplateExpression(targetednNode, node) {
  return true;
}
function matchUnaryExpression(targetednNode, node) {
  return true;
}
function matchUpdateExpression(targetednNode, node) {
  return true;
}
function matchYieldExpression(targetednNode, node) {
  return true;
}
function matchExpression(targetednNode, node) {
  if (targetednNode.type !== node.type) {
    return false;
  }
  switch (_expression["default"][targetednNode.type]) {
    case 'ArrowFunctionExpression':
      if (!matchArrowFunctionExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'AssignmentExpression':
      if (!matchAssignmentExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'BinaryExpression':
      if (!matchBinaryExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'ConditionalExpression':
      if (!matchConditionalExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'LogicalExpression':
      if (!matchLogicalExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'NewExpression':
      if (!matchNewExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'RestElement':
      if (!matchRestElement(targetednNode, node)) {
        return false;
      }
      break;
    case 'SequenceExpression':
      // skipped
      if (!matchSequenceExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'AwaitExpression':
      if (!matchAwaitExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'LeftHandSideExpression':
      // NotNode
      if (!matchLeftHandSideExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'UnaryExpression':
      if (!matchUnaryExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'UpdateExpression':
      if (!matchUpdateExpression(targetednNode, node)) {
        return false;
      }
      break;
    case 'YieldExpression':
      if (!matchYieldExpression(targetednNode, node)) {
        return false;
      }
      break;
  }
  return true;
}
var matchTypes = {
  VariableDeclaration: matchVariableDeclaration,
  VariableDeclarator: matchVariableDeclarator,
  Identifier: matchIdentifier,
  ArrowFunctionExpression: matchArrowFunctionExpression
};
var _default = exports["default"] = matchTypes;