/*Loops:
Loops are used to repeatedly execute a block of code until a condition is met.
*/ 



//for loop:
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}


//while loop:
let count = 1;
while (count <= 5) {
    console.log(count); // Output: 1, 2, 3, 4, 5
    count++;
}


//do-while loop:
let num = 1;
do {
    console.log(num); // Output: 1
    num++;
} while (num <= 0);
