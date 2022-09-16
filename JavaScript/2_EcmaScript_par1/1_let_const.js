//EcmaScript is also known as modern javascript 
//major update are realesed in 2016 known as ES6


//Difference between let ,const and var 
//this is the famous interview question of most the companies
//const is used to declare the constant value .
//the value which never going to be changed is called as constant

const pi = 3.14;
console.log("The pi value is :" + pi);//we can't change the value of of pi it gives error
// /pi = 123;//it gives Type error:Assignment to constant variable.

//difference between var and let 
//let and const are block level element and var is function level
//In simple words existance of the let and const is within { } braces only

// example1=====================================
console.log("==================differecne between let and var===============\n");

{

    var myName = "Tanmay";
    let myName2 = "Somay";
    console.log(myName + " these is var variable inside the block ");
    console.log(myName2 + " these is let variable inside the block ");

}

console.log(myName + " these is var variable inside the function");
// console.log(myName2+" these is let variable inside the function"); 
//Above line gives error as `ReferenceError: myName2 is not defined`


// =================================Template literals=====================
// we can say that template literals are the alternative of string concatenation
//we can simply use string template instead of concatenation
// we use `` 
//${ --}  for variables.

console.log("================String literals ==============\n");
//example1 :string literals
//tables
{
    let num = 12;
    let num2 = 11;

    for (let i = 1; i <= 10; i++) {
        // console.log(num + " * " + i + " =" + (i * num));//this is concatination technique
        //Below line is example of string template
        console.log(`${num2} * ${ i} = ${num2*i}`);
    }
}