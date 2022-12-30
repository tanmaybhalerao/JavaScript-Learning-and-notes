// Hoisting in javasript


// Hoisting is mechanism in javascript where interpreter moves the declaration of the function ,variablas and classes to the top of the scope,before to execution of the code.

//We can avoid the hoisting by using let and const keyword.
//let and const are block scope element .

console.log(myname);//here we are getting o/p as undefined 
//interpreter moves all variables at the top so interpreter doesnt give any error
var myname="jai";
console.log(myname);//jai


// =======================
//lets try let and const


// console.log(myname2);

//here we are getting the error as "Cannot access 'myname2' before initialization  "

let myname2="jai";

console.log(myname2);//jai








