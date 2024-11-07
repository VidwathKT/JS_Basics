console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// let and const Declarations
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15;

//Hoisting with Functions
greet(); // Output: "Hello!"

function greet() {
    console.log("Hello!");
}

//Function Expressions (Using var, let, or const)

// Function expression with var
console.log(myFunc); // Output: undefined
var myFunc = function() {
    console.log("Hello from myFunc");
};

// Function expression with let
console.log(myFunc2); // ReferenceError
let myFunc2 = function() {
    console.log("Hello from myFunc2");
};
