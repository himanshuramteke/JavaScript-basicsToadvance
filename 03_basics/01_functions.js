
function sayMyname(){
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}
//sayMyname();

function addTwoNumbers (number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(3, 4)

function addTwoNumbers (number1, number2){
    let result = number1 + number2
    return result;
}
const result = addTwoNumbers(3, 4)

//console.log("result : ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
   return `${username} just logged in`
}

console.log(loginUserMessage("myself"))



function calculatorCartPrice(val1, val2, ...num1){
    return num1 
}

console.log(calculatorCartPrice(200, 300, 500, 2000));

const user = {
    username : "himanshu",
    price : 349,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username : "newName" ,
    price: 2344
})

const myNewArray = [200, 300, 400, 700]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 700]));