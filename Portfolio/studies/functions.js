/**
 * Functions:
 * Functions are blocks of reusable code that can be called with arguments and return values.
 * 
 * */ 


//Function with parameters and a return value:
function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(5, 10); // Result: 15



//Function without parameters:
function greet() {
    console.log("Hello!");
}
greet(); // Output: "Hello!"


// Arrow function (ES6 syntax):
const multiply = (a, b) => a * b;
let product = multiply(3, 4); // Result: 12

/*
1. The two phases to using functions are: 
   a) Function declaration: In this phase, we define the function with its name, parameters, and the code that it will execute when called.
   b) Function invocation or execution: In this phase, we call or execute the function, passing any required arguments, and the code inside the function's body is executed.

2. The difference between a function's parameters and arguments passed to a function:
   - Parameters: Parameters are placeholders or variables defined in the function's declaration that represent the values that the function expects to receive when it is called. They act as local variables within the function's scope.
   - Arguments: Arguments are the actual values passed to the function when it is called. These values are assigned to the corresponding parameters in the function's declaration.
*/

//3. The syntax for a NAMED function:
   function functionName(parameter1, parameter2) {
       // Function code goes here
   }


//4. How to assign a function to a variable:
   const myFunction = function(parameter1, parameter2) {
       // Function code goes here
   };

/*
5. Specifying inputs and outputs in functions:
   - Inputs: Inputs or arguments are specified when calling the function. For example, if a function has parameters `x` and `y`, you would call it with `myFunction(10, 20)`, where `10` and `20` are the inputs passed to the function.
   - Outputs: Functions can return a single value using the `return` statement. For example:
*/
     function addNumbers(a, b) {
         return a + b;
     }

/*
Scope:
   Functions can access and modify variables in their parent or global scopes. However, variables declared within a function are not accessible outside the function's scope, which means the inverse is not true. Variables defined outside the function are accessible within the function (unless there are variables with the same name defined inside the function, which would create a new local scope).
  
  Closures:
   Closures occur when a function "remembers" its lexical scope even when the function is executed outside that scope. This means that if a function returns another function or if an inner function is referenced and held in memory somewhere, it retains access to the variables and data in its outer function's scope. The outer function's scope becomes a part of the closure, allowing the inner function to access and use those variables even after the outer function has finished executing. This behavior enables data to persist within closures even if the original function has completed its execution.
  
   */

