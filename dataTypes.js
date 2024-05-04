"use strict"; // treat all javascript code as a newer version of js 

//alert("hello") 
// we are using node js this is posible in browser 

console.log("hello 1"); console.log("hello 2"); // use semi colon for this dont do this because code readiablity is bad

/*
let name = "Chandan" // string
let age = 30 //number

isLoggedIn = true //boolien

*/

// null stand alone value / empty value

// undefined = value not defined

// symbol = unique 


// object
console.log(undefined); // type will be undefined 
console.log(null); // type will be object


// primitive datatypes 
// 7 types : string , number, boolien, null, undefined, symbol, BigInt (larger numbers) 

// non primitive or referance type
// Array, Objects, functions

const id = Symbol("22");
const anotherId = Symbol("22")

console.log(id === anotherId); // output will be false because symbol is used for unique identification
