////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  if(num1 > num2){
    return num2; 
  }else{
    return num1; 
  }
 }
////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  if(num % 2 == 0){
      return true;
  }else{
      return false; 
  }
  }

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(str, letter) {
  let count = 0; 
  for(var i = 0; i < str.length; i++){
    if(str.charAt(i) == letter){
      count += 1
    }
  }
  return count; 
}


 
////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(str) {
  let count = 0; 
  
  for(var i = 0; i < str.length; i++){
    if(str.charAt(i) == 'B'){
      count += 1
    }
  }
  return count; 
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
