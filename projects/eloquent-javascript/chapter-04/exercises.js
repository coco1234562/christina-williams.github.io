////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  let array = [];
  if (start !== end && ((step > 0 && start <= end) || (step < 0 && start >= end))) {
    for (let i = start; (step > 0 ? i <= end : i >= end); i += step) {
      array.push(i);
    }
  }
  return array;
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function sum(array){  
  var total = 0; // need to create a variable outside the loop scope
  for(var i in array){  
     total = total+array[i];  
  }
  return total;
}  


////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

function reverseArrayInPlace(array) {
  let start = 0;
  let end = array.length - 1;
  
  while (start < end) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    
    start++;
    end--;
  }
}






function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  while (list !== null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, n) {
  if (list === null) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
}




////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(value1, value2) {
  // If the values are strictly equal, return true
  if (value1 === value2) {
    return true;
  }

  // If either value is null or not an object, or their types are different, return false
  if (value1 === null || typeof value1 !== 'object' ||
      value2 === null || typeof value2 !== 'object') {
    return false;
  }

  // Get the keys of both objects
  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);

  // If the number of keys is different, return false
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Recursively compare the properties of the objects
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
      return false;
    }
  }

  // If all properties are deeply equal, return true
  return true;
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
