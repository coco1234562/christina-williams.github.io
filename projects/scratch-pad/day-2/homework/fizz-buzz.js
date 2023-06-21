// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz(number) {
    //prints the numbers from 1 to 100
    
    for(var i = 100; i >= number; i++){
      ////multiples of both print “FizzBuzz”
      if (number % 3 === 0 && number % 5 === 0){
        return "FizzBuzz"; 
        //multiples of five print “Buzz”
      }else if (number % 5 === 0){
        return 'Buzz'; 
        ////multiples of three print “Fizz
      }else if (number % 3 === 0){
        return 'Fizz'; 
      }
      
     }
    
    }





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}