// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
 
function printArrayValues(array) {

     for (let i = 0; i <= array.length; i++) {
       
       console.log(array[i]);
     }
}



/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */

function printArrayValuesInReverse(array) {

     for (let i = 0; i <= array.length - 1; i--) {
       console.log(array[i]);
     }
}




/** 
 * Given an input Object, return an Array containing the Object keys.
 */
 
/* NOTES!

-  Object.keys() : This will return an array with strings representing each property in the object.
*/ 


function getObjectKeys(object) {
  
 return Object.keys(object); 

}





/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
 
 
/* HOW TO LOOP THROUGH OBJECT!!

Using a for...in loop:
    for (const key in user) {
      console.log();
    }

Object.keys method: 
  Object.keys(obj)

Object.values method:
  Object.values(obj)

Object.entries method:
    Object.entries(obj)

*/
 
 
function printObjectKeys(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key);
    }
  }
}









/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(obj) {
  const values = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}










/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(obj[key]);
    }
  }
}









/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function countObjectPairs(obj) {
  let count = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}






/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
 
function printObjectValuesInReverse(object) {
  //Retrieve the keys of the object using Object.keys() method.
  //Reverse the array of keys using the reverse() method.
  var keys = Object.keys(object).reverse();
  
  //- Iterate over the reversed array of keys
  keys.forEach((key) => {
    
    //Access the corresponding values from the object using the current key
    var value = object[key];
    
    //print them using console.log().
    console.log(value);
  });
}



/* STEPS!!! 

- Retrieve the keys of the object using Object.keys() method.

- Reverse the array of keys using the reverse() method.

- Iterate over the reversed array of keys.

- Access the corresponding values from the object using the current key and print them using console.log().

*/ 






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
