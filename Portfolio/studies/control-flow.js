/**
 * Control Flow:
 * Control flow statements in JavaScript are used to control the flow of execution in a program. 
 They allow you to make decisions, 
 repeat code blocks, and create more dynamic and interactive programs. The main control flow statements in JavaScript are:
 * */



//if statement:
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


//else if statement:
let score = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}


//switch statement:
/*
The switch statement allows you to select one of many code blocks to be executed based on the value of an expression.
*/
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the workweek");
        break;
    case "Friday":
        console.log("End of the workweek");
        break;
    default:
        console.log("Regular workday");
}

//for else 
let age = 15;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}


