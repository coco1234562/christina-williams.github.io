/*Loops:
Loops are used to repeatedly execute a block of code until a condition is met.
*/ 



/*for loop:
The for loop is used to execute a block of code repeatedly based on a specified condition. It consists of three statements:

Start statement: Initializes the loop control variable.
Stop statement: Specifies the condition that, when evaluated to false, will terminate the loop.
Update statement: Modifies the loop control variable after each iteration.
*/
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//backwards
const numbers = [1, 2, 3, 4, 5];

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

/*while loop:
The while loop is used to execute a block of code repeatedly as long as a specified condition is true. 
It will keep looping as long as the condition remains true and will stop when the condition becomes false.
*/


let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}


//do-while loop:
let num = 1;
do {
    console.log(num); // Output: 1
    num++;
} while (num <= 0);


/*
The for-in loop is used to iterate over the enumerable properties of an object. 
It is not recommended for iterating over arrays, as it may not guarantee the order of iteration, and may also include inherited properties. 
It's better suited for objects.
*/


const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
