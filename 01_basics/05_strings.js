const name = "himanshu"

const repoCount = 50;

//console.log(name + repoCount + "value");


//console.log(`my name is ${"himanshu"} and my repo count is ${30}`);

const gameName = new String("himanshuHR")

//console.log(gameName[0]);

//console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));

// console.log(gameName.indexOf("H"));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherstring = gameName.slice(-8,4)
console.log(anotherstring);

const newStringOne = "     himanshu       ";
console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://himanshu.com/himanshu%20ramteke";

console.log(url.replace('%20','-'));

console.log(url.includes('%20'));

console.log(gameName.split('-'));