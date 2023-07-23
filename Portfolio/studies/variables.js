

/* Variables ************************

Whats is a variable? A variable is a label that references a value like a number or string. Before using a variable, you need to declare it.

Variables are case sensitive. That means 'christina' and 'Christina' are different variables. Variable names can only contain letters, numbers, underscores, or dollar signs and cannot contain spaces. Also, variable names must begin with a letter, an underscore (_), or a dollar sign ($). Variable names cannot use reserved words.
********************************************************/


/***************** var ********************************
Variables declared with 'var' have a function-level scope or a global scope if delcared outside of any function. They are hoisted (var declaration is moved to the top of its scope during compilation phase). They can be redeclared and resassigned. Oldest way. 
**********************************************/


// Using `var`:
var age = 25;



/**************** How to assign a variable **************
*
* Once you have declared a variable, you can assign it using a equal sign (=) and a value.
*********************************************************/


var name = 'christina'; 




/******************* let *********************
'let' allows you to declare block-scoped variables (ONLY accessible within the nearest enclosing block aka curly braces). It is NOT hoisted. Prevents redeclaration of the same variable. 
**************************************/

let name = "John";
name = "Alice";



function example() {
  let x = 10;
  if (true) {
    let x = 20; // This is a new x variable, independent of the outer one
    console.log(x); // 20
  }
  console.log(x); // 10
}



/******************* const *******************
'const'has block scope. It is used to declare variables meant to be constant(values can NOT be reassigned). 'const' variables most be insitialized when declared.

***********************************************/
const PI = 3.14;




/******************* Hoisting of a variable *************

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution

So var variables are hoisted to the top of their scope and initialized with a value of undefined
******************************************/

var greeter;
console.log(greeter); // greeter is undefined
greeter = "say hello"