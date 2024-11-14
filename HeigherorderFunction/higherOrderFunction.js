function higherOrderFunction(callback) {
    // Perform some operations
    // Call the callback function
    callback();
}
function callbackFunction() {
    console.log("Callback function is executed.");
}
// Passing the callback function to the higher-order function
higherOrderFunction(callbackFunction);

function greet(name) {
    return `Hi!! ${name} `;
}

function greet_name(greeting, message, name) {
    console.log(`${greeting(name)} ${message}`);
}
greet_name(greet, 'Welcome To JavaScript', 'guys');

function multiplier(factor) {
    return function (x) {
        return x * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); 
console.log(triple(5)); 


//An IIFE(Immediately Invoked Function Expression) is typically defined by wrapping a function in parentheses and adding another set of parentheses immediately after to invoke it
(function() {
    // Code inside here runs immediately and is encapsulated
    const privateVar = "I'm private";
    console.log(privateVar);
  })();
