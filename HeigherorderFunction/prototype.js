let a = {
    ename : "Vidwath",
    lang : "JavaScript",
    run : () => {
        console.log("a run");
        
    }
}
console.log(a);

let p ={
    run : ()=>{
        console.log("p run");
        
    }
}

p.__proto__ = {
    name:"Hari"
}

a.__proto__ = p
a.run();
console.log(a.name);
