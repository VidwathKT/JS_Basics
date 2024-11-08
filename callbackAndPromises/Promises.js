// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
});
//Consuming Promises
// To handle the results of a promise, we use:

// .then(): Executes when the promise is fulfilled.
// .catch(): Executes when the promise is rejected.
// .finally(): Executes regardless of whether the promise is fulfilled or rejected
myPromise
    .then(result => {
        console.log(result); // Output: "Operation was successful!"
    })
    .catch(error => {
        console.log(error); // If rejected, Output: "Operation failed."
    })
    .finally(() => {
        console.log("Promise processing is complete.");
    });

//Example of an Asynchronous Operation with Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "Alice" };
            if (data) {
                resolve(data);
            } else {
                reject("Data not found");
            }
        }, 2000);
    });
}

fetchData()
    .then(data => console.log("Data received:", data))
    .catch(error => console.log("Error:", error));

    //Output: (Data will be printed after 2 seconds)
    // Data received: { id: 1, name: "Alice" }

//Promise Chaining
fetchData()
    .then(data => {
        console.log("First fetch:", data);
        return data.id;
    })
    .then(id => {
        console.log("Second fetch with ID:", id);
        return { message: "Chained operation complete!" };
    })
    .then(result => console.log(result))
    .catch(error => console.log("Error:", error));
//Output: First fetch: { id: 1, name: "Alice" }
// Second fetch with ID: 1
// { message: "Chained operation complete!" }

    
