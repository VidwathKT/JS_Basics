//lenth()
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;//o/p:26
//charAt()
let text1 = "HELLO WORLD";
let char = text1.charAt(0);//H
//charCodeAt()
let text2 = "HELLO WORLD";
let char2 = text2.charCodeAt(0);//72
//at()
const name = "W3Schools";
let letter = name.at(2);//S
//string[]
const name1 = "W3Schools";
let letter1 = name1[2];//S
//slice()
let text3 = "Apple, Banana, Kiwi";
let part = tex3t.slice(7, 13);//Banana
//substr() is similar to slice()
let text4 = "Apple, Banana, Kiwi";
let part4 = text4.slice(-12);//Banana, Kiwi
//toUpperCase()
let text5 = "Hello World!";
let text6 = text5.toUpperCase();//HELLO WORLD
//toLowerCase()
let text7 = "Hello World!";      
let text8 = text7.toLowerCase();//hello world
//concat()
let text11 = "Hello";
let text22 = "World";
let text33 = text11.concat(" ", text22);//Hello World!
//trim()
let tex = "      Hello World!      ";
let text9 = tex.trim();//removes whitespace from both sides of a string
//trimStart()
let te = "     Hello World!     ";
let t = te.trimStart();//removes whitespace only from the start of a string
//trimEnd()->removes whitespace only from the end of a string
//padStart()
let pad = "5";
let padded = pad.padStart(4,"0");//0005->Pad a string with "0" until it reaches the length 4
//padEnd()
let l = "5";
let padded1 = l.padEnd(4,"0");//5000->It pads the string with another string (multiple times) until it reaches a given length
//repeat()
let r = "Hello world!";
let result = r.repeat(4);//Hello world!Hello world!Hello world!Hello world
//repeat() returns a new string with a number of copies of a string

//replace()
let rp = "Please visit Microsoft!";
let newText = rp.replace("Microsoft", "W3Schools");
//Please visit W3Schools!->Replace "Microsoft" with "W3Schools"
//replaceAll()
let text10 = "I love cats. Cats are very easy to love. Cats are very popular."
text10 = text10.replaceAll("Cats","Dogs");
text10 = text10.replaceAll("cats","dogs");
console.log(text10);//I love dogs. Dogs are very easy to love. Dogs are very popular.
//split()
let split = "a,b,c,d,e,f";
const myArray = split.split(",");//splits and stores in array
console.log(myArray[0])//a
