let p1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("value1")},11000);
});

let p2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        //resolve("value2")},2000);
       reject(new Error("Error"))} , 2000);
});

let p3 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("value3")},3000);
});
// let all_promise = Promise.all([p1,p2,p3]);
// let allSeteled_promise = Promise.allSettled([p1,p2,p3]);
// let race_promise = Promise.race([p1,p2,p3]);
let any_promise = Promise.any([p1,p2,p3]);
// let resolve_promise = Promise.resolve([p1,p2,p3]);
// let reject_promise = Promise.reject([p1,p2,p3]);

any_promise.then((value) => {
    console.log(value );
    
});
