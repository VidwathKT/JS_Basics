let a=10
//Symbol
 let id = Symbol('101')
 console.log(id)
 let id2= Symbol('101')
 console.log(id === id2)
 console.log(id == id2)
//  console.log(id = id2)
 console.log(id === id2)

 // number
 let empID=101
 let salary=5.6
 //boolean
 let status = true
 let compare = empID == salary
 console.log(compare)

 //String
 let name = 'vidwath'
 let palce = "Hassan"

 //BigInt
 let num = 25651678435165468135178n

 //null
 let no = null

 //undefined
 let sum;

 //Object
 const employee = {
    name : "Vidwath",
    empId: 10154,
    age: 22
 }

//Array
const ar =[1,5,2,8]

//Fuction
function hello(){
    console.log("Hello Everyone")
}

//Date
const today = new Date(`07/11/2024`)

//Map And Set
const map = new Map();
map.set("name", "Alice");

const set = new Set([1, 2, 3, 3],[4,5,6,7]);
