//Synchronous function
console.log("Start");
console.log("Doing something...");
console.log("End");


//Asynchronous function
console.log("Start");
setTimeout(() => {
    console.log("Delayed Task");
}, 1000);
console.log("End");
//Asynchronous Techniques
//1.callback
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((message) => console.log(message));
//2.promises
fetch("https://api.example.com")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
