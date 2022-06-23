console.log("data types in js");
//There are 6 primitive data types in javascript
// undefined
// Boolean
// Number
// String
// BigInt
// Symbol
//typeof() operator is used to find the data type of variable

var a1;
console.log("value of a1 here is "+a1+" --> "+typeof(a1));

a1="tanmay";
console.log("value of a1 here is "+a1+" --> "+typeof(a1));

a1=234567;
console.log("value of a1 here is "+a1+" --> "+typeof(a1));

a1=true;
console.log("value of a1 here is "+a1+" --> "+typeof(a1));


console.log("---------------------------------DataTypes Practise-----------------------------------");
//datatypes practise
console.log(10+"20");
console.log("10"+"20");
console.log("10"-5)//bug in javascript result 5
console.log("10"*5)//bug in javascript result 50
console.log("10"/5)//bug in javascript result 2
console.log("java"+"script");//javascript
console.log(" "+" ");//
console.log(" "+0);// 0
console.log("jaya"-"bachan");//Nan--not a number error 
console.log(true+false)//1 --beacuse in js true=1 and false =0 so 1+0=1
console.log(true+true)//1 --beacuse in js true=1 so 1+1=2
console.log(false-true)//-1
console.log(true==true)//true and vice versa is false
// 1.Interview Question
//Difference between null and  void
console.log("==============>++++++++++++++++++ NUll and VOID <===================");
var iAmUseless;
console.log(iAmUseless);
console.log(typeof(iAmUseless));
console.log("========================================");
var iAmUseless2=null;

console.log((iAmUseless2));
console.log(typeof(iAmUseless2));//output is object 

//interview question 2 What is NAN--Not A Number
//NaN is a property of global object
//In other words,its a variable in global scope
//inintal value of NaN is not a number
console.log("==============NAN AND FUNCTION================");
var myPhoneNumber=0987654321;
var myName="tanmay";
console.log(myName);
console.log(myPhoneNumber);
console.log(isNaN(myName)); //True
console.log(isNaN(myPhoneNumber)); //False
console.log("====================");



