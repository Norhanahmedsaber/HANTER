export const errorMessages = {
    [0]: 'Unexpected token',
    [28]: "Unexpected token: '%0'",
    [1]: 'Octal escape sequences are not allowed in strict mode',
    [2]: 'Octal escape sequences are not allowed in template strings',
    [3]: 'Unexpected token `#`',
    [4]: 'Illegal Unicode escape sequence',
    [5]: 'Invalid code point %0',
    [6]: 'Invalid hexadecimal escape sequence',
    [8]: 'Octal literals are not allowed in strict mode',
    [7]: 'Decimal integer literals with a leading zero are forbidden in strict mode',
    [9]: 'Expected number in radix %0',
    [146]: 'Invalid left-hand side assignment to a destructible right-hand side',
    [10]: 'Non-number found after exponent indicator',
    [11]: 'Invalid BigIntLiteral',
    [12]: 'No identifiers allowed directly after numeric literal',
    [13]: 'Escapes \\8 or \\9 are not syntactically valid escapes',
    [14]: 'Unterminated string literal',
    [15]: 'Unterminated template literal',
    [16]: 'Multiline comment was not closed properly',
    [17]: 'The identifier contained dynamic unicode escape that was not closed',
    [18]: "Illegal character '%0'",
    [19]: 'Missing hexadecimal digits',
    [20]: 'Invalid implicit octal',
    [21]: 'Invalid line break in string literal',
    [22]: 'Only unicode escapes are legal in identifier names',
    [23]: "Expected '%0'",
    [24]: 'Invalid left-hand side in assignment',
    [25]: 'Invalid left-hand side in async arrow',
    [26]: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass',
    [27]: 'Member access on super must be in a method',
    [29]: 'Await expression not allowed in formal parameter',
    [30]: 'Yield expression not allowed in formal parameter',
    [93]: "Unexpected token: 'escaped keyword'",
    [31]: 'Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses',
    [120]: 'Async functions can only be declared at the top level or inside a block',
    [32]: 'Unterminated regular expression',
    [33]: 'Unexpected regular expression flag',
    [34]: "Duplicate regular expression flag '%0'",
    [35]: '%0 functions must have exactly %1 argument%2',
    [36]: 'Setter function argument must not be a rest parameter',
    [37]: '%0 declaration must have a name in this context',
    [38]: 'Function name may not contain any reserved words or be eval or arguments in strict mode',
    [39]: 'The rest operator is missing an argument',
    [40]: 'A getter cannot be a generator',
    [41]: 'A setter cannot be a generator',
    [42]: 'A computed property name must be followed by a colon or paren',
    [131]: 'Object literal keys that are strings or numbers must be a method or have a colon',
    [44]: 'Found `* async x(){}` but this should be `async * x(){}`',
    [43]: 'Getters and setters can not be generators',
    [45]: "'%0' can not be generator method",
    [46]: "No line break is allowed after '=>'",
    [47]: 'The left-hand side of the arrow can only be destructed through assignment',
    [48]: 'The binding declaration is not destructible',
    [49]: 'Async arrow can not be followed by new expression',
    [50]: "Classes may not have a static property named 'prototype'",
    [51]: 'Class constructor may not be a %0',
    [52]: 'Duplicate constructor method in class',
    [53]: 'Invalid increment/decrement operand',
    [54]: 'Invalid use of `new` keyword on an increment/decrement expression',
    [55]: '`=>` is an invalid assignment target',
    [56]: 'Rest element may not have a trailing comma',
    [57]: 'Missing initializer in %0 declaration',
    [58]: "'for-%0' loop head declarations can not have an initializer",
    [59]: 'Invalid left-hand side in for-%0 loop: Must have a single binding',
    [60]: 'Invalid shorthand property initializer',
    [61]: 'Property name __proto__ appears more than once in object literal',
    [62]: 'Let is disallowed as a lexically bound name',
    [63]: "Invalid use of '%0' inside new expression",
    [64]: "Illegal 'use strict' directive in function with non-simple parameter list",
    [65]: 'Identifier "let" disallowed as left-hand side expression in strict mode',
    [66]: 'Illegal continue statement',
    [67]: 'Illegal break statement',
    [68]: 'Cannot have `let[...]` as a var name in strict mode',
    [69]: 'Invalid destructuring assignment target',
    [70]: 'Rest parameter may not have a default initializer',
    [71]: 'The rest argument must the be last parameter',
    [72]: 'Invalid rest argument',
    [74]: 'In strict mode code, functions can only be declared at top level or inside a block',
    [75]: 'In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement',
    [76]: 'Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement',
    [77]: "Class declaration can't appear in single-statement context",
    [78]: 'Invalid left-hand side in for-%0',
    [79]: 'Invalid assignment in for-%0',
    [80]: 'for await (... of ...) is only valid in async functions and async generators',
    [81]: 'The first token after the template expression should be a continuation of the template',
    [83]: '`let` declaration not allowed here and `let` cannot be a regular var name in strict mode',
    [82]: '`let \n [` is a restricted production at the start of a statement',
    [84]: 'Catch clause requires exactly one parameter, not more (and no trailing comma)',
    [85]: 'Catch clause parameter does not support default values',
    [86]: 'Missing catch or finally after try',
    [87]: 'More than one default clause in switch statement',
    [88]: 'Illegal newline after throw',
    [89]: 'Strict mode code may not include a with statement',
    [90]: 'Illegal return statement',
    [91]: 'The left hand side of the for-header binding declaration is not destructible',
    [92]: 'new.target only allowed within functions',
    [94]: "'#' not followed by identifier",
    [100]: 'Invalid keyword',
    [99]: "Can not use 'let' as a class name",
    [98]: "'A lexical declaration can't define a 'let' binding",
    [97]: 'Can not use `let` as variable name in strict mode',
    [95]: "'%0' may not be used as an identifier in this context",
    [96]: 'Await is only valid in async functions',
    [101]: 'The %0 keyword can only be used with the module goal',
    [102]: 'Unicode codepoint must not be greater than 0x10FFFF',
    [103]: '%0 source must be string',
    [104]: 'Only a identifier can be used to indicate alias',
    [105]: "Only '*' or '{...}' can be imported after default",
    [106]: 'Trailing decorator may be followed by method',
    [107]: "Decorators can't be used with a constructor",
    [109]: 'HTML comments are only allowed with web compatibility (Annex B)',
    [110]: "The identifier 'let' must not be in expression position in strict mode",
    [111]: 'Cannot assign to `eval` and `arguments` in strict mode',
    [112]: "The left-hand side of a for-of loop may not start with 'let'",
    [113]: 'Block body arrows can not be immediately invoked without a group',
    [114]: 'Block body arrows can not be immediately accessed without a group',
    [115]: 'Unexpected strict mode reserved word',
    [116]: 'Unexpected eval or arguments in strict mode',
    [117]: 'Decorators must not be followed by a semicolon',
    [118]: 'Calling delete on expression not allowed in strict mode',
    [119]: 'Pattern can not have a tail',
    [121]: 'Can not have a `yield` expression on the left side of a ternary',
    [122]: 'An arrow function can not have a postfix update operator',
    [123]: 'Invalid object literal key character after generator star',
    [124]: 'Private fields can not be deleted',
    [126]: 'Classes may not have a field called constructor',
    [125]: 'Classes may not have a private element named constructor',
    [127]: 'A class field initializer may not contain arguments',
    [128]: 'Generators can only be declared at the top level or inside a block',
    [129]: 'Async methods are a restricted production and cannot have a newline following it',
    [130]: 'Unexpected character after object literal property name',
    [132]: 'Invalid key token',
    [133]: "Label '%0' has already been declared",
    [134]: 'continue statement must be nested within an iteration statement',
    [135]: "Undefined label '%0'",
    [136]: 'Trailing comma is disallowed inside import(...) arguments',
    [137]: 'import() requires exactly one argument',
    [138]: 'Cannot use new with import(...)',
    [139]: '... is not allowed in import()',
    [140]: "Expected '=>'",
    [141]: "Duplicate binding '%0'",
    [142]: "Cannot export a duplicate name '%0'",
    [145]: 'Duplicate %0 for-binding',
    [143]: "Exported binding '%0' needs to refer to a top-level declared variable",
    [144]: 'Unexpected private field',
    [148]: 'Numeric separators are not allowed at the end of numeric literals',
    [147]: 'Only one underscore is allowed as numeric separator',
    [149]: 'JSX value should be either an expression or a quoted JSX text',
    [150]: 'Expected corresponding JSX closing tag for %0',
    [151]: 'Adjacent JSX elements must be wrapped in an enclosing tag',
    [152]: "JSX attributes must only be assigned a non-empty 'expression'",
    [153]: "'%0' has already been declared",
    [154]: "'%0' shadowed a catch clause binding",
    [155]: 'Dot property must be an identifier',
    [156]: 'Encountered invalid input after spread/rest argument',
    [157]: 'Catch without try',
    [158]: 'Finally without try',
    [159]: 'Expected corresponding closing tag for JSX fragment',
    [160]: 'Coalescing and logical operators used together in the same expression must be disambiguated with parentheses',
    [161]: 'Invalid tagged template on optional chain',
    [162]: 'Invalid optional chain from super property',
    [163]: 'Invalid optional chain from new expression',
    [164]: 'Cannot use "import.meta" outside a module',
    [165]: 'Leading decorators must be attached to a class declaration'
};
export class ParseError extends SyntaxError {
    constructor(startindex, line, column, type, ...params) {
        const message = '[' + line + ':' + column + ']: ' + errorMessages[type].replace(/%(\d+)/g, (_, i) => params[i]);
        super(`${message}`);
        this.index = startindex;
        this.line = line;
        this.column = column;
        this.description = message;
        this.loc = {
            line,
            column
        };
    }
}
export function report(parser, type, ...params) {
    throw new ParseError(parser.index, parser.line, parser.column, type, ...params);
}
export function reportScopeError(scope) {
    throw new ParseError(scope.index, scope.line, scope.column, scope.type, scope.params);
}
export function reportMessageAt(index, line, column, type, ...params) {
    throw new ParseError(index, line, column, type, ...params);
}
export function reportScannerError(index, line, column, type) {
    throw new ParseError(index, line, column, type);
}
//# sourceMappingURL=errors.mjs.map