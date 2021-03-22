// Spread Operator in JavaScript

// Objects
const person1 = {name: 'John Doe', age: 20, hobbies: ['cooking', 'reading']};
const person2 = {...person1};   // spreading values of person1 into person2 BUT IT IS A SHALLOW COPY

console.log(person1);   // {name: "John Doe", age: 20, hobbies:(2) ["cooking", "reading"]}                      
console.log(person2);   // {name: "John Doe", age: 20, hobbies:(2) ["cooking", "reading"]}
console.log(person1 === person2)    // false | person2 is a fresh object and a SHALLOW CLONE of person1
console.log(person1.hobbies === person2.hobbies)    // true | person2 and person1 share the same reference of array in memory 

// hence changing first level primitives of person2 won't affect person1
person2.name = 'Jane Doe'; 
person2.age = 19;
// but changing value of "hobbies" in person2 does affect person1 
person2.hobbies.push('dancing');
console.log(person2);   // {name: "Jane Doe", age: 19, hobbies:(3) ["cooking", "reading", "dancing"]}
console.log(person1);   // {name: "John Doe", age: 20, hobbies:(3) ["cooking", "reading", "dancing"]}
