/**
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  return Object.keys(object);
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(key);
    }
  }
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  return Object.values(object);
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(object[key]);
    }
  }
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  return Object.keys(object).length;
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  var keys = Object.keys(object);
  for (var i = keys.length - 1; i >= 0; i--) {
    console.log(object[keys[i]]);
  }
}
