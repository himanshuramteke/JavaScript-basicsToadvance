// Primitive DataTypes

//7 types: Strings,Boolean,Number,null,undefined,Symbol,BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');

const anotherId = Symbol('123')
 
//console.log(id === anotherId);



//Non-Primitive 

//3 types : Arrays , Objects , Functions

const heros = ["shaktiman","nagraj","doga"];

let myObj = {
    name : "himanshu",
    age : 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(myObj);


//********************************Memory************************************ */

//Stack (Non-primitive) Heap(Primitive)

let myYoutubename = "hiteshchoudhary"

let anothername = myYoutubename

anothername = "chaiaurcode"

//console.log(myYoutubename);
//console.log(anothername);

let userOne = {
    email: "himanshu@google.com",
    phone : 1223233
}

let userTwo = userOne

userOne.email = "himanshu@microsoft.com"

console.log(userOne.email);
console.log(userTwo.email);