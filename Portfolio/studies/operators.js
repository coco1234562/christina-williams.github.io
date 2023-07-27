/*Operators:
Operators perform operations on variables and values in JavaScript.
*/

//Assignment Operators
let x = 10;

// Addition assignment
x += 5; // Equivalent to: x = x + 5; // x is now 15

// Subtraction assignment
x -= 3; // Equivalent to: x = x - 3; // x is now 12

// Multiplication assignment
x *= 2; // Equivalent to: x = x * 2; // x is now 24

// Division assignment
x /= 4; // Equivalent to: x = x / 4; // x is now 6

// Modulus assignment
x %= 5; // Equivalent to: x = x % 5; // x is now 1


//Arithmetic operators (+, -, *, /):
let x = 10;
let y = 5;
let sum = x + y; // Result: 15

let a = 10;
let b = 5;

// Addition
let sum = a + b; // 15

// Subtraction
let difference = a - b; // 5

// Multiplication
let product = a * b; // 50

// Division
let quotient = a / b; // 2

// Modulus (Remainder after division)
let remainder = a % b; // 0


//Comparison operators (==, !=, >, <, >=, <=):
let a = 10;
let b = 5;
let isEqual = a === b; // Result: false

let num1 = 10;
let num2 = 5;

// Equal to
let isEqual = num1 === num2; // false

// Not equal to
let isNotEqual = num1 !== num2; // true

// Greater than
let isGreater = num1 > num2; // true

// Less than
let isLess = num1 < num2; // false

// Greater than or equal to
let isGreaterOrEqual = num1 >= num2; // true

// Less than or equal to
let isLessOrEqual = num1 <= num2; // false



//Logical operators (&&, ||, !):
let isRainy = true;
let hasUmbrella = true;
let takeUmbrella = isRainy && hasUmbrella; // Result: true

let p = true;
let q = false;

// Logical AND
let resultAnd = p && q; // false

// Logical OR
let resultOr = p || q; // true

// Logical NOT (Unary Operator)
let resultNotP = !p; // false
let resultNotQ = !q; // true


//Unary Operators 
let x = 5;

// Unary plus (Converts its operand to a number)
let y = +x; // y is 5

// Unary minus (Negates its operand)
let z = -x; // z is -5


let age = 18;

// Ternary Operator
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult); // "Adult"

