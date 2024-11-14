//length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;//4
//toString()
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let S = fruits1.toString();//Banana,Orange,Apple,Mango
//at()/Array[]
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit2 = fruits2.at(2);//Apple
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let fruit3 = fruits3[2];//Apple
//join()->It behaves just like toString(), but in addition you can specify the separator
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let j = fruits4.join("*")//Banana * Orange * Apple * Mango
//pop()
fruits.pop();//Banana,Orange,Apple
//push()
fruits1.push("Kiwi");//Banana,Orange,Apple,Mango,Kiwi
//The shift() method removes the first array element and "shifts" all other elements to a lower index
fruits1.shift();//Orange,Apple,Mango,Kiwi
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.unshift("Lemon");//Lemon,Banana,Orange,Apple,Mango
//Using delete() leaves undefined holes in the array.Use pop() or shift() instead
delete fruits5[0];
console.log(fruits5[0]);//undefined
//concat()
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);//Cecilie,Lone,Emil,Tobias,Linus

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const arr4 = arr1.concat(arr2, arr3);

const arr11 = ["Emil", "Tobias", "Linus"];
const arr22 = arr1.concat("Peter");

//The copyWithin() method copies array elements to another position in an array
const fru = ["Banana", "Orange", "Apple", "Mango"];
fru.copyWithin(2, 0);//Banana,Orange,Banana,Orange->Copy to index 2, all elements from index 0

const frui = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
frui.copyWithin(2, 0, 2);//Banana,Orange,Banana,Orange,Kiwi->Copy to index 2, the elements from index 0 to 2
//flat()->The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();//1,2,3,4,5,6
//flatMap()->The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr1 = [1, 2, 3, 4, 5, 6];
const newArr1 = myArr1.flatMap(x => [x, x * 10]);//1,10,2,20,3,30,4,40,5,50,6,60
//splice()
const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
fruit1.splice(2, 0, "Lemon", "Kiwi"); //Banana,Orange,Lemon,Kiwi,Apple,Mango

const fruit22 = ["Banana", "Orange", "Apple", "Mango"];
fruit22.splice(2, 2, "Lemon", "Kiwi");

//toSpliced()
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);//Feb,Mar,Apr
//slice()->method does not remove any elements from the source array
const fr = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fr.slice(3);//Apple,Mango

// Initial Array
const arr = [5, 3, 8, 1, 4, 7, 2, 6];

// Searching in Arrays
// 1. indexOf - finds the first occurrence of an element and returns its index, or -1 if not found
const indexOfThree = arr.indexOf(3); // returns 1
console.log("Index of 3:", indexOfThree);

// 2. includes - checks if an element exists in the array, returns true or false
const includesFive = arr.includes(5); // returns true
console.log("Array includes 5:", includesFive);

// 3. find - returns the first element that matches the condition
const firstEven = arr.find(num => num % 2 === 0); // returns 8
console.log("First even number:", firstEven);

// 4. findIndex - returns the index of the first element that matches the condition
const firstEvenIndex = arr.findIndex(num => num % 2 === 0); // returns 2
console.log("Index of first even number:", firstEvenIndex);

// 5. filter - returns a new array with elements that match the condition
const evenNumbers = arr.filter(num => num % 2 === 0); // returns [8, 4, 2, 6]
console.log("Even numbers:", evenNumbers);

// Sorting Arrays
// 6. sort - sorts the array in ascending (default) or custom order
const sortedArray = [...arr].sort((a, b) => a - b); // returns [1, 2, 3, 4, 5, 6, 7, 8]
console.log("Sorted array:", sortedArray);

// 7. reverse - reverses the array (modifies the original array)
const reversedArray = [...arr].reverse(); // returns [6, 2, 7, 4, 1, 8, 3, 5]
console.log("Reversed array:", reversedArray);

// Iterating over Arrays
// 8. forEach - executes a provided function once for each array element
console.log("Using forEach:");
arr.forEach((num, index) => console.log(`Index ${index}: ${num}`));

// 9. map - creates a new array with the results of calling a provided function on every element
const squaredNumbers = arr.map(num => num ** 2); // returns [25, 9, 64, 1, 16, 49, 4, 36]
console.log("Squared numbers:", squaredNumbers);

// 10. reduce - applies a function against an accumulator and each element to reduce it to a single value
const sum = arr.reduce((acc, num) => acc + num, 0); // returns 36
console.log("Sum of all numbers:", sum);

// 11. some - checks if at least one element passes the test
const hasGreaterThanFive = arr.some(num => num > 5); // returns true
console.log("Has number greater than 5:", hasGreaterThanFive);

// 12. every - checks if all elements pass the test
const allPositive = arr.every(num => num > 0); // returns true
console.log("All numbers are positive:", allPositive);

// 13. flat - flattens an array up to a specified depth (for nested arrays)
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = nestedArray.flat(2); // returns [1, 2, 3, 4, 5, 6]
console.log("Flattened array:", flattenedArray);

// 14. reduceRight - similar to reduce, but iterates from right to left
const rightSum = arr.reduceRight((acc, num) => acc + num, 0); // returns 36
console.log("Sum using reduceRight:", rightSum);

