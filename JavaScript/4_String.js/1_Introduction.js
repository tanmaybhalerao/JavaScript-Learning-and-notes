//Escape characters
//finding a string in a string
//Searching for a string in a string 
//Extracting the parts of the string 
//replacing the string content
//Other useful methods

//===================================================================================
console.log("=================String in javascript=========");

//String is anything written inside single or double quotes in js
//'' or "" 
//single characters inside quotes are also considered as string in js 
//as js doesnt hava character as datatype



//string can be created as primitives, from string literals or as objects

let s1="tanmay";
let s2='akash';

//from string constructor 
let s3=new String("vedant");//output is [String: 'vedant'] 
//Generally string constructor is not used to create the string   
console.log(s3);
console.log(`${s1}  ${s2}   ${s3}`);


//Finding the length of the string 
//length is the property so no () 
console.log( "============Length property=========");
console.log(s1.length);


//Escape character in js
// In some cases we need to use character such as quotes as backslash in op 
// to do that we use escape characters
console.log("====================Escape characters");
let sentence1=" The only king \"Ashoka\"  \\\\";
console.log(sentence1);


//Indexing start from 0.