//1.Named Function
function sayHello() {
    console.log("Hello!");
}
sayHello(); // Calling the function

//2.Anonymous Function
const greet1 = function() {
    console.log("Hello, anonymous!");
};
greet(); // Invoked via the variable holding the function

//3.Arrow Fuction
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
//4.Function Expression
const greet2 = function(name) {
    console.log("Hello, " + name + "!");
  };
  
  greet("Bob");

//5.generator Function
function* generatorFunc() {
    yield 1;
    yield 2;
    yield 3;
}

const iterator = generatorFunc();
console.log(iterator.next().value); // Output: 1
