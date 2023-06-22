// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
 
 
/*
NOTESS! 

Array.isArray(value)

*/
 
 
 
function isArray(value) {
  
  return Array.isArray(value); 

}




/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
 
 
/* NOTES!

The typeof operator returns a string indicating the type of the operand's value.
*/ 


//typeof operand //syntax 

// Objects
//typeof { a: 1 } === "object";


//Anyway, we can create a method to test if a variable is an object or not by creating a simple function.

/*var animals = ['tiger', 'lion', 'zebra'];
var cup = {color: 'black',    weight: '500gm' };

function isObject(obj) {   
  return typeof obj === 'object' && obj !== null && ! Array.isArray(obj)
 };

console.log(isObject(animals)) //returns false 
console.log(isObject(cup)) // returns true
*/ 

//PROBLEM!!!


// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** PROBLEM 1 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
  
  return Array.isArray(value); 

}




/** PROBLEM 2 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
 
function isObject(value) {
  return(typeof value === 'object' && value !== null && !Array.isArray(value) &&
      !(value instanceof Date)
    );
  }
  



/** PROBLEM 3
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
 
 
 
 //WRONG ANSWER1!!
 
 function isCollection(value) {
  
  return Array.isArray(value) || (typeof value === 'object');
}






/**PROBLEM 4 
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
 
 
 
 
function typeOf(value) {
  if (typeof value === 'string') {
    return 'string';
  } else if (Array.isArray(value)) {
    return 'array';
  } else if (typeof value === 'object') {
    if (value === null) {
      return 'null';
    } else if (value instanceof Date) {
      return 'date';
    } else {
      return 'object';
    }
  } else if (typeof value === 'undefined') {
    return 'undefined';
  } else if (typeof value === 'number') {
    return 'number';
  } else if (typeof value === 'boolean') {
    return 'boolean';
  } else if (typeof value === 'function') {
    return 'function';
  }
}



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}




/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
 
//PROBLEM!!!
function isCollection(value) {
    return Array.isArray(value) || (typeof value === 'object' && value !== null);
  }
  
  





/*
Array.isArray(value) checks if the value is an array by using the Array.isArray() method. If it returns true, then we know it's an array and we return true from the function


(typeof value === 'object' && value !== null) checks if the value is an object by comparing its type to 'object' using the typeof operator. Additionally, we ensure that the value is not null since typeof null returns 'object', and we want to exclude null values. If both conditions are met, then we know it's an object, and we return true from the function.

*/ 









/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
 
function typeOf(value) {
    if (typeof value === 'string') {
      return 'string';
    } else if (Array.isArray(value)) {
      return 'array';
    } else if (typeof value === 'object') {
      if (value === null) {
        return 'null';
      } else if (value instanceof Date) {
        return 'date';
      } else {
        return 'object';
      }
    } else if (typeof value === 'undefined') {
      return 'undefined';
    } else if (typeof value === 'number') {
      return 'number';
    } else if (typeof value === 'boolean') {
      return 'boolean';
    } else if (typeof value === 'function') {
      return 'function';
    }
  }
  



/*psuedocode 
function typeOf(value):
    type = typeof value

    if type is "object":
        if value is null:
            return "null"
        else if value is an array:
            return "array"
        else if value is an instance of Date:
            return "date"
        else:
            return "object"
    else:
        if type is "undefined":
            return "undefined"
        else if type is "number":
            return "number"
        else if type is "boolean":
            return "boolean"
        else if type is "function":
            return "function"
        else:
            return "string"


*/





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}