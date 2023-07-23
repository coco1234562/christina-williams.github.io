/**
 * Control Flow:
 * Control flow allows you to make decisions in your code using `if`, `else if`, and `else` statements.
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
