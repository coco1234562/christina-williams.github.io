/******************* Data Types ****************

numbers, string, boolean, array, Object, Function, undefined, null, NaN, Infinity, -Infinity

JS is a dynamically typed language (variables can hold values of any type and data type can change). JS has several built-in data types. They are orgainzed into two groups: primitive types and composite types 
**************************************************/

/*
In JavaScript, data types can be categorized into two main categories: simple (primitive) data types and complex (reference) data types.

Simple (Primitive) Data Types:
Simple data types in JavaScript are immutable, meaning their values cannot be changed after they are created. When you assign a simple data type to a variable or pass it as an argument to a function, a copy of its value is made.

The simple data types in JavaScript are:

Number: Represents numeric values, like integers and floating-point numbers.
String: Represents sequences of characters, enclosed in single or double quotes.
Boolean: Represents true or false values.
Null: Represents an intentional absence of any value.
Undefined: Represents a variable that has been declared but not assigned a value.
Symbol (ES6): Represents a unique and immutable value, often used as an identifier for object properties.
*/



let age = 30; // Number
let name = "John"; // String
let isStudent = true; // Boolean
let job = null; // Null
let score; // Undefined
let id = Symbol("uniqueID"); // Symbol


//Number:
let num = 42;


//String:
let message = "Hello, World!";


//Boolean:
let isStudent = true;



/*
Complex (Reference) Data Types:
Complex data types in JavaScript are mutable, meaning their values can be changed after they are created. 
When you assign a complex data type to a variable or pass it as an argument to a function, a reference to its location in 
memory is made, rather than creating a copy of its value.

The complex data types in JavaScript are:

Object: Represents a collection of key-value pairs (properties and methods).
Array: Represents an ordered list of elements, accessible by index.
Function: Represents a reusable block of code that can be invoked with arguments.
Date: Represents a specific date and time.
RegExp: Represents a regular expression, used for pattern matching.
*/


let person = { name: "Alice", age: 25 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
function greet() { console.log("Hello!"); } // Function
let today = new Date(); // Date
let pattern = /hello/g; // RegExp




/*
Copy by Value vs. Copy by Reference:

When dealing with variables and data types, it's essential to understand how copying works in JavaScript:

Copy by Value: Simple data types are copied by value. 
When you assign a simple data type to a variable or pass it as an argument to a function, a new copy of the value is created.

Copy by Reference: Complex data types are copied by reference. 
When you assign a complex data type to a variable or pass it as an argument to a function, a reference to the original data is created, 
and both the original and the new variable point to the same location in memory.
*/

// Copy by Value (Simple Data Type)
let num1 = 10;
let num2 = num1; // num2 gets the value of num1

num2 = 20;
console.log(num1); // Output: 10 (num1 remains unchanged)
console.log(num2); // Output: 20

// Copy by Reference (Complex Data Type)
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 gets a reference to arr1

arr2.push(4);
console.log(arr1); // Output: [1, 2, 3, 4] (both arr1 and arr2 point to the same array)
console.log(arr2); // Output: [1, 2, 3, 4]






