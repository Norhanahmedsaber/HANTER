export default function evaluate(logicObject) {
    // Base case: if the type is 'pattern', return the value directly
    if (logicObject.type === 'pattern') {
        return logicObject.value;
    }

    // Recursive case: evaluate each element in the 'value' array
    const evaluatedValues = logicObject.value.map(evaluate);

    // Apply the logic gate operation
    if (logicObject.type === 'AND') {
        return evaluatedValues.every(Boolean);
    } else if (logicObject.type === 'OR') {
        return evaluatedValues.some(Boolean);
    } else {
        throw new Error(`Unknown logic gate type: ${logicObject.type}`);
    }
}

// // Example usage
// const x= {
//     type: 'AND',
//     value: [
//         { type: 'OR', value: [
//             { type: 'pattern', value: false },
//             { type: 'AND', value: [
//                 { type: 'pattern', value: true },
//                 { type: 'OR', value: [
//                     { type: 'pattern', value: false },
//                     { type: 'pattern', value: true }
//                 ]}
//             ]}
//         ]},
//         { type: 'OR', value: [
//             { type: 'pattern', value: false },
//             { type: 'AND', value: [
//                 { type: 'pattern', value: true },
//                 { type: 'pattern', value: false }
//             ]}
//         ]},
//         { type: 'AND', value: [
//             { type: 'pattern', value: true },
//             { type: 'pattern', value: true },
//             { type: 'OR', value: [
//                 { type: 'pattern', value: false },
//                 { type: 'pattern', value: true }
//             ]}
//         ]}
//     ]
// };

// const result = evaluate(x);
// console.log('Result:', result); 








