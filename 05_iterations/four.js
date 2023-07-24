const myObject = {
    js : 'javascript',
    cpp : 'C++',
    java : 'Java',
    swift : 'Swift'
}

for (const key in myObject) {
   //console.log(`${key} shortcut of ${myObject[key]}`); 
}

const programming = ['js', 'java', 'cpp', 'py']

for (const key in programming) {
   console.log(programming[key]);
}