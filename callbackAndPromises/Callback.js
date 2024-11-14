//simplw callback example
function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
//output: Hello, Alice
//Goodbye!

//Callbacks in Asynchronous Code
console.log("Start");

setTimeout(() => {
    console.log("This message is delayed.");
}, 2000);

console.log("End");
//output: Start
// End
// This message is delayed.

//Callback hell
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 1000);
}

function processData(callback) {
    setTimeout(() => {
        console.log("Data processed");
        callback();
    }, 1000);
}

function displayData() {
    setTimeout(() => {
        console.log("Data displayed");
    }, 1000);
}

fetchData(() => {
    processData(() => {
        displayData();
    });
});
//Output: Data fetched
// Data processed
// Data displayed
