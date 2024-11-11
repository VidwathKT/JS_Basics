function outerFunction() {
    const outerVar = "I'm outside!";
    
    function innerFunction() {
      console.log(outerVar); // Accesses `outerVar` even after `outerFunction` completes
    }
    
    return innerFunction;
  }
  
  const closureFunc = outerFunction();
  closureFunc(); // Logs: "I'm outside!"
 //innerFunction closes over outerVar, keeping it accessible even after outerFunction 
 //has finished executing. This is a key aspect of closures in JavaScript. 
 function createGreeting(name) {
    // Inner function remembers `name` even after `createGreeting` finishes
    return function() {
      console.log(`Hello, ${name}!`);
    };
  }
  
  const greetJohn = createGreeting("John");
  greetJohn(); // Output: "Hello, John!"
  
  const greetJane = createGreeting("Jane");
  greetJane(); // Output: "Hello, Jane!"
  
 function counter(){
    let count = 0;//count is in the outer scope
    return function(){
        count++
        return count
    }
 }
 const counts = counter()
 console.log(counts())
 console.log(counts())
 console.log(counts())
 
 